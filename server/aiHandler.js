// Backend AI Handler for BioChordata
// Uses the official Google Generative AI SDK (@google/generative-ai) when a
// key is configured. Falls back to a rich zoological knowledge-retrieval
// engine for Chordata topics when the API is unavailable or out of quota.

import { GoogleGenerativeAI } from '@google/generative-ai';

const DEFAULT_GEMINI_MODEL = 'gemini-3.8-flash';
const FALLBACK_GEMINI_MODEL = 'gemini-3.5-flash-lite';
const LEGACY_GEMINI_MODEL = /^(gemini-(?:1\.|2\.(?:0|5))|gemini-flash-latest$)/i;

function resolveGeminiModel() {
  const configured = (process.env.GEMINI_MODEL || '').trim();

  if (!configured) return DEFAULT_GEMINI_MODEL;

  if (LEGACY_GEMINI_MODEL.test(configured)) {
    console.warn(
      `Modelo Gemini obsoleto configurado ("${configured}"). Usando "${DEFAULT_GEMINI_MODEL}".`
    );
    return DEFAULT_GEMINI_MODEL;
  }

  return configured;
}
const MAX_BODY_BYTES = 64 * 1024;
const MAX_MESSAGE_LENGTH = 4000;
const MAX_HISTORY_MESSAGES = 10;

const CHORDATA_SYSTEM_PROMPT = `Você é o "BioChordata — Assistente dos Cordados", um assistente de inteligência artificial especializado em Zoologia, Biologia Comparada e Evolução do Filo Chordata.

SUAS DIRETRIZES FUNDAMENTAIS:
1. Idioma: Responda SEMPRE em português do Brasil, com linguagem didática, clara, elegante e cientificamente rigorosa.
2. Escopo Temático: Especialista absoluto no filo Chordata (Cefalocordados, Tunicados, Peixes Ágnatos, Condríctes, Osteíctes, Anfíbios, Répteis, Aves e Mamíferos), suas 5 características fundamentais (notocorda, tubo nervoso dorsal, fendas faringianas, endóstilo/tireoide, cauda pós-anal), filogenia, ecologia, conservação e acidentes com animais peçonhentos/tóxicos no Brasil.
3. Precisão Científica: Nunca invente espécies, nomes científicos ou dados taxonômicos. Se a ciência tiver incertezas (ex: datas exatas do relógio molecular fóssil), declare abertamente como hipótese ativa.
4. Concepções Equivocadas: Corrija com polidez e clareza conceitos comuns desatualizados:
   - "Peixes" é um grupo parafilético na cladística moderna.
   - As aves pertencem filogeneticamente à linhagem dos répteis arcossauros (são dinossauros terópodes aviários sobreviventes).
   - O anfioxo e a ascídia são cordados, mas NÃO são vertebrados (são protocordados).
   - Nem todo animal venenoso é peçonhento (peçonhentos inoculam ativamente; venenosos causam intoxicação passiva por ingestão/contato).
5. Estrutura de Resposta: Organize a resposta com títulos breves em negrito, tópicos explicativos com marcadores e uma seção final com "Fontes recomendadas para consulta" (ex: IUCN Red List, Animal Diversity Web, ICMBio, Instituto Butantan).
6. Formatação: Use Markdown simples (negrito, listas e links). Não use HTML.`;

// Local high-fidelity zoological knowledge base for fallback or augmentation
const KNOWLEDGE_TOPICS = [
  {
    keywords: ['caracteristica', 'sinapomorfia', 'fundamentais', 'quatro', 'cinco', 'padrao', 'defina cordado', 'o que e um cordado'],
    title: 'As 5 Características Diagnósticas Fundamentais do Filo Chordata',
    content: `Todos os cordados compartilham cinco sinapomorfias em pelo menos uma fase do desenvolvimento ontogenético (geralmente embrionária ou larval):

1. **Notocorda (Chorda dorsalis):** Bastão semirrígido e flexível derivado do mesoderma axial, que fornece sustentação mecânica e ancora a musculatura axial. Nos vertebrados adultos, é substituída pela coluna vertebral, remanescendo como os núcleos pulposos dos discos intervertebrais.
2. **Tubo Nervoso Dorsal e Oco:** Diferente dos invertebrados (cujo cordão é ventral e maciço), nos cordados o tubo é dorsal à notocorda e oco (neurocele), originando o encéfalo e a medula espinhal por neurulação.
3. **Fendas ou Bolsas Faringianas:** Perfurações ou bolsas na parede lateral da faringe. Nos protocordados atuam na filtração de alimentos; nos peixes e larvas de anfíbios suportam as brânquias respiratórias; nos tetrápodes terrestres adultos originam a tuba auditiva, cavidade timpânica e glândulas como o timo e paratireoides.
4. **Endóstilo / Glândula Tireoide:** Sulco ciliado no assoalho faríngeo que secreta muco e concentra iodo nos protocordados e larvas de lampreia; nos vertebrados adultos converte-se na glândula tireoide, produtora de T3 e T4.
5. **Cauda Pós-anal Muscular:** Extensão muscular que ultrapassa o ânus, fundamental para propulsão hidrodinâmica aquática e equilíbrio corporal em terra.`
  },
  {
    keywords: ['notocorda', 'chorda', 'coluna vertebral', 'sustentacao'],
    title: 'Notocorda: A Estrutura Embrionária Que Define os Cordados',
    content: `A **notocorda** é um bastão flexível de células vacuolizadas envoltas por uma bainha de colágeno, localizado dorsalmente ao tubo digestório e ventralmente ao tubo nervoso.

- **Origem embrionária:** Deriva do mesoderma axial (processo notocordal) e induz a formação do tubo neural e dos somitos.
- **Função:** Sustentação hidrostática e ancoragem da musculatura axial durante a locomoção.
- **Nos protocordados:** Permanece funcional por toda a vida (anfioxo) ou apenas na fase larval (ascídias).
- **Nos vertebrados:** É gradualmente substituída pela coluna vertebral; nos adultos restam apenas remanescentes, como o núcleo pulposo dos discos intervertebrais.
- **Importância evolutiva:** Sua presença é uma sinapomorfia (caráter derivado compartilhado) do filo Chordata.`
  },
  {
    keywords: ['vertebrado', 'protocordado', 'craniata', 'cefalocordado', 'tunicado', 'urocordado', 'cordado e vertebrado', 'coluna vertebral', 'todo cordado', 'tem coluna vertebral', 'possui coluna vertebral'],
    title: 'Diferença entre Cordados e Vertebrados',
    content: `**Todo vertebrado é um cordado, mas nem todo cordado é um vertebrado!**

O Filo Chordata é subdividido em três grandes subfilos:
- **Subfilo Cephalochordata (Cefalocordados):** Como o anfioxo (*Branchiostoma*), retém a notocorda ao longo de todo o corpo e por toda a vida, mas NÃO possui crânio, coluna vertebral ou encéfalo complexo.
- **Subfilo Tunicata / Urochordata (Tunicados):** Como as ascídias e salpas. A larva livre-natante possui notocorda e cauda; na metamorfose retrógrada para a forma séssil adulta, perde a cauda e a notocorda, mantendo a cesta faringiana sob uma túnica celulósica.
- **Subfilo Vertebrata / Craniata (Vertebrados):** Possuem crânio protegendo o encéfalo, cristas neurais embrionárias e esqueleto axial articulado (coluna vertebral cartilaginosa ou óssea substituindo a notocorda).`
  },
  {
    keywords: ['peixe', 'parafiletico', 'peixes', 'categoria'],
    title: 'Por que o termo "Peixes" não é um grupo monofilético único?',
    content: `Na sistemática filogenética e cladística moderna:
- O termo popular **"Peixes" é parafilético**, pois reúne vertebrados aquáticos de linhagens muito distintas: os ágnatos sem mandíbula (lampreias), os condríctes de esqueleto cartilaginoso (tubarões e raias) e os osteíctes (peixes ósseos).
- Além disso, os peixes de nadadeiras lobadas (**Sarcopterygii**, como o celacanto e peixes pulmonados) são filogeneticamente mais aparentados aos tetrápodes terrestres (anfíbios, répteis, aves e mamíferos) do que aos peixes comuns de nadadeiras raiadas (**Actinopterygii**).
- Portanto, para que "peixes" formasse um grupo natural completo (monofilético), você, um cachorro e uma águia teriam que ser chamados formalmente de peixes!`
  },
  {
    keywords: ['ave', 'aves', 'reptil', 'repteis', 'dinossauro', 'arcossauro'],
    title: 'Aves pertencem à linhagem dos répteis?',
    content: `**Sim! Na biologia evolutiva moderna, as aves são dinossauros terópodes arcossauros vivos.**

- Tradicionalmente, Lineu separava répteis e aves em classes distintas. Porém, as análises de anatomia comparada, embriologia e fósseis como o *Archaeopteryx* provaram que as aves compartilham um ancestral comum exclusivo com os dinossauros carnívoros (Theropoda).
- As aves estão mais intimamente aparentadas aos crocodilianos (grupo Archosauria) do que os crocodilos estão aparentados aos lagartos e serpentes.
- Por isso, no clado monofilético **Sauropsida**, as aves são répteis modificados que desenvolveram penas assimétricas, ossos pneumáticos, quilha esternal e endotermia para o voo.`
  },
  {
    keywords: ['anfibio', 'anfibios', 'reptil', 'repteis', 'diferenca entre anfibios', 'pele', 'ovo amniotico'],
    title: 'Anfíbios vs. Répteis: Principais Diferenças',
    content: `Apesar de ambos incluírem tetrápodes, anfíbios e répteis diferem em pontos fundamentais:

- **Pele:** Anfíbios têm pele úmida, permeável e rica em glândulas mucosas; répteis têm pele seca, queratinizada e com escamas.
- **Respiração:** Anfíbios respiram pela pele e pelos pulmões (e por brânquias nas larvas); répteis respiram predominantemente pelos pulmões.
- **Ovos:** Ovos de anfíbios não têm casca e dependem da água; ovos de répteis são amnióticos, com casca ou membranas protetoras.
- **Reprodução:** Anfíbios geralmente apresentam metamorfose e fase larval aquática; répteis têm desenvolvimento direto, sem fase larval aquática.
- **Termorregulação:** Ambos são ectotérmicos (exceto as aves, que são endotérmicas).
- **Excreção:** Anfíbios excretam amônia (larvas) e ureia (adultos); répteis excretam ácido úrico, economizando água.

- **Anfíbios** (sapos, rãs, pererecas, salamandras e cecílias) dependem de ambientes úmidos e são bioindicadores de qualidade ambiental.
- **Répteis** (lagartos, serpentes, tartarugas, crocodilianos) conquistaram plenamente o ambiente terrestre graças ao ovo amniótico e à pele impermeável.`
  },
  {
    keywords: ['venenoso', 'peconhento', 'perigo', 'acidente', 'cobra', 'serpente', 'butantan', 'samu'],
    title: 'Cordados Perigosos: Animais Peçonhentos vs Venenosos e Primeiros Socorros',
    content: `**Diferença Crucial:**
- **Peçonhentos:** Possuem aparato especializado (presas inoculadoras, ferrões, dentes canalizados) para injetar ativamente a toxina no organismo da presa ou agressor. Ex: Jararacas, Cascavéis e Surucucus.
- **Venenosos (Tóxicos):** Não possuem inoculador ativo; a toxina é armazenada na pele ou tecidos para defesa passiva, agindo apenas se o animal for ingerido, mordido ou esfregado em mucosas. Ex: Sapo-cururu (*Rhinella marina*) e Rãs-dardo (*Phyllobates*).

**Orientações Oficiais de Primeiros Socorros (Instituto Butantan e Ministério da Saúde):**
- Ligue imediatamente para o **SAMU (192)** ou transporte a vítima com urgência ao hospital de referência.
- Mantenha a vítima em repouso e hidratação oral.
- Lave o local da picada apenas com água e sabão.
- **NUNCA:** Faça torniquetes/garrotes, não corte, não chupe o veneno e não aplique substâncias caseiras (borra de café, álcool ou folhas).`
  },
  {
    keywords: ['ameacada', 'ameacadas', 'extincao', 'extinto', 'conservacao', 'iucn', 'risco', 'vulneravel'],
    title: 'Conservação de Cordados Ameaçados de Extinção',
    content: `Muitos cordados enfrentam risco de extinção devido à perda de habitat, poluição, caça ilegal e mudanças climáticas.

- **Categorias da IUCN:** Extinta (EX), Extinta na Natureza (EW), Em Perigo Crítico (CR), Em Perigo (EN), Vulnerável (VU), Quase Ameaçada (NT) e Pouco Preocupante (LC).
- **Exemplos brasileiros:** mico-leão-dourado (*Leontopithecus rosalia*), arara-azul-de-lear (*Anodorhynchus leari*), boto-cor-de-rosa (*Inia geoffrensis*), tartaruga-de-pente (*Eretmochelys imbricata*) e tubarão-lixa (*Ginglymostoma cirratum*).
- **Principais ameaças:** desmatamento, fragmentação de habitats, tráfico de animais silvestres, sobrepesca, poluição plástica e aquecimento global.
- **Ações de conservação:** criação de unidades de conservação, programas de reprodução em cativeiro, corredores ecológicos, fiscalização e educação ambiental.
- **Importância ecológica:** cada espécie ocupa um papel nas teias tróficas; a perda de predadores de topo desestabiliza ecossistemas inteiros.`
  },
  {
    keywords: ['evolucao', 'evoluir', 'evoluiram', 'origem', 'cambriano', 'tetrapode', 'tiktaalik', 'fossil', 'arvore da vida'],
    title: 'A Trajetória Evolutiva dos Cordados',
    content: `Principais marcos evolutivos ao longo do tempo geológico:
1. **Cambriano (~535 Ma):** Surgimento dos cordados primitivos no mar (*Pikaia*, *Haikouichthys*).
2. **Siluriano (~440 Ma):** Origem dos Gnathostomata (surgimento das mandíbulas a partir de arcos branquiais modificados).
3. **Devoniano (~375 Ma):** Transição água-terra pelos sarcopterígeos (*Tiktaalik*, *Acanthostega*), dando origem aos Tetrapoda de quatro membros com dedos.
4. **Carbonífero (~320 Ma):** Invenção do ovo amniótico (Amniota), emancipando a reprodução da água e cindindo a linhagem em Synapsida (mamíferos) e Sauropsida (répteis/aves).
5. **Cenozoico (após 66 Ma):** Extinção dos dinossauros não-avianos e explosão adaptativa dos mamíferos e aves modernas.`
  }
];

/** Remove acentos e normaliza o texto para busca por palavras-chave. */
function normalizeText(value) {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Matches a whole word or phrase instead of a raw substring.
 * Also accepts common Portuguese plural forms, so "característica" matches
 * "características" while "chorda" still does not match "chordata".
 */
function keywordMatches(normalizedText, keyword) {
  const base = normalizeText(keyword).trim();
  if (!base) return false;

  const forms = new Set([base, `${base}s`, `${base}es`]);

  if (base.endsWith('il') || base.endsWith('el')) {
    forms.add(`${base.slice(0, -2)}eis`);
  } else if (base.endsWith('ol')) {
    forms.add(`${base.slice(0, -2)}ois`);
  } else if (base.endsWith('ul')) {
    forms.add(`${base.slice(0, -2)}uis`);
  } else if (base.endsWith('l')) {
    forms.add(`${base.slice(0, -1)}is`);
  } else if (base.endsWith('m')) {
    forms.add(`${base.slice(0, -1)}ns`);
  } else if (base.endsWith('ao')) {
    forms.add(`${base.slice(0, -2)}oes`);
  }

  return [...forms].some((form) => {
    const pattern = new RegExp(
      `(^|[^a-z0-9])${escapeRegExp(form)}($|[^a-z0-9])`
    );
    return pattern.test(normalizedText);
  });
}

const CHORDATA_VS_CORDADOS_ANSWER = `### Chordata e "cordados": qual é a diferença?

**Nenhuma: são a mesma coisa.** "Chordata" é o nome científico (latim) do filo, e "cordados" é o nome popular em português para os animais desse filo.

- **Chordata** é o táxon formal (Filo Chordata), usado na classificação biológica.
- **Cordados** é o termo em português; não é um grupo diferente nem uma categoria inferior.
- O filo reúne os **protocordados** (cefalocordados e tunicados) e os **vertebrados** (peixes, anfíbios, répteis, aves e mamíferos).
- O nome deriva da **notocorda**, estrutura embrionária presente em todos os cordados em alguma fase da vida.
- Portanto, dizer "Chordata" ou "cordados" é equivalente: o primeiro é mais técnico e o segundo, mais didático.

> Não confunda o filo **Chordata** (o grupo de animais) com a **notocorda** (uma estrutura anatômica presente nesses animais).`;

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(payload));
}

function sanitizeHistory(history) {
  if (!Array.isArray(history)) return [];

  return history
    .filter((entry) => entry && typeof entry.content === 'string')
    .slice(-MAX_HISTORY_MESSAGES)
    .map((entry) => ({
      role: entry.role === 'assistant' || entry.role === 'model' ? 'model' : 'user',
      content: entry.content.trim().slice(0, MAX_MESSAGE_LENGTH)
    }))
    .filter((entry) => entry.content.length > 0);
}

export async function handleAIChat(req, res) {
  // Set CORS and JSON headers
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST, OPTIONS');
    sendJson(res, 405, { error: 'Método não permitido. Use POST.' });
    return;
  }

  let body = '';
  let bodyTooLarge = false;

  req.on('data', (chunk) => {
    if (bodyTooLarge) return;
    body += chunk;
    if (Buffer.byteLength(body) > MAX_BODY_BYTES) {
      bodyTooLarge = true;
      sendJson(res, 413, { error: 'Requisição muito grande.' });
      req.destroy();
    }
  });

  req.on('error', (err) => {
    console.error('Erro ao ler a requisição:', err.message);
  });

  req.on('end', async () => {
    if (bodyTooLarge) return;

    try {
      const data = JSON.parse(body || '{}');
      const userMessage = typeof data.message === 'string' ? data.message.trim() : '';
      const clientApiKey = typeof data.apiKey === 'string' ? data.apiKey.trim() : '';

      if (!userMessage) {
        sendJson(res, 400, { error: 'A mensagem da pergunta não pode estar vazia.' });
        return;
      }

      if (userMessage.length > MAX_MESSAGE_LENGTH) {
        sendJson(res, 413, { error: `A mensagem excede o limite de ${MAX_MESSAGE_LENGTH} caracteres.` });
        return;
      }

      const history = sanitizeHistory(data.history);
      const apiKey = (process.env.GEMINI_API_KEY || clientApiKey).trim();

      // If a Gemini API key is available, call the Google Gemini endpoint
      if (apiKey.length > 10) {
        try {
          const geminiResponse = await callGeminiAPI(userMessage, history, apiKey);
          sendJson(res, 200, {
            reply: geminiResponse,
            source: 'gemini-api',
            status: 'success'
          });
          return;
        } catch (apiErr) {
          console.warn('Gemini API call failed, using high-precision local zoological engine:', apiErr.message);
          // Fall through to local intelligent engine
        }
      }

      // High-precision local zoological reasoning engine
      const smartAnswer = generateSmartZoologicalResponse(userMessage);
      sendJson(res, 200, {
        reply: smartAnswer,
        source: 'biochordata-core-engine',
        status: 'success'
      });

    } catch (err) {
      console.error('Error handling AI chat:', err);
      sendJson(res, 500, {
        error: 'Erro interno ao processar a resposta. Por favor, tente novamente.'
      });
    }
  });
}

function createGeminiModel(apiKey, modelName) {
  const genAI = new GoogleGenerativeAI(apiKey);

  return genAI.getGenerativeModel({
    model: modelName,
    systemInstruction: CHORDATA_SYSTEM_PROMPT,
    generationConfig: {
      temperature: 0.3,
      maxOutputTokens: 1200,
      topP: 0.95
    }
  });
}

function isFallbackEligibleError(err) {
  const status = err?.status ?? err?.statusCode;

  return (
    [429, 500, 502, 503, 504].includes(status) ||
    err?.apiStatus === 'RESOURCE_EXHAUSTED' ||
    /429|500|502|503|504|quota|rate limit|resource_exhausted|high demand|service unavailable|overloaded/i.test(err?.message || '')
  );
}

async function generateWithGeminiModel(modelName, contents, apiKey) {
  const model = createGeminiModel(apiKey, modelName);
  const result = await model.generateContent({ contents });
  const text = result.response.text().trim();

  if (!text) {
    throw new Error('Formato inesperado na resposta da API Gemini.');
  }

  return text;
}

async function callGeminiAPI(userMessage, history, apiKey) {
  const contents = [
    ...history.map((entry) => ({
      role: entry.role,
      parts: [{ text: entry.content }]
    })),
    {
      role: 'user',
      parts: [{ text: userMessage }]
    }
  ];

  const configuredModel = resolveGeminiModel();

  try {
    return await generateWithGeminiModel(configuredModel, contents, apiKey);
  } catch (err) {
    if (!isFallbackEligibleError(err) || configuredModel === FALLBACK_GEMINI_MODEL) {
      throw err;
    }

    const status = err?.status ?? err?.statusCode ?? 'sem status';
    console.warn(
      `Gemini "${configuredModel}" indisponível (HTTP ${status}). Tentando fallback "${FALLBACK_GEMINI_MODEL}".`
    );

    return generateWithGeminiModel(FALLBACK_GEMINI_MODEL, contents, apiKey);
  }
}

function generateSmartZoologicalResponse(question) {
  const qLower = normalizeText(question);

  // "Chordata" and "cordados" are the same group. Handle this identity
  // question before keyword scoring so "chordata" never falls into the
  // notochord topic (it used to match the substring "chorda").
  const asksDefinition = /(diferenca|relacao|mesma coisa|igual|significa|o que (e|sao)|qual (e|a) diferenca)/.test(qLower);
  const mentionsChordata = keywordMatches(qLower, 'chordata');
  const mentionsCordados = keywordMatches(qLower, 'cordados') || keywordMatches(qLower, 'cordado');

  if ((mentionsChordata && mentionsCordados) || (mentionsChordata && asksDefinition)) {
    return `${CHORDATA_VS_CORDADOS_ANSWER}\n\n---\n**Fontes Científicas Recomendadas:**\n- [Animal Diversity Web (ADW)](https://animaldiversity.org)\n- [Catalogue of Life](https://www.catalogueoflife.org)\n- [WoRMS](https://www.marinespecies.org)`;
  }

  // Pick the topic with the most keyword matches instead of the first hit,
  // otherwise broad words (e.g. "répteis") can hijack a more specific question.
  let bestTopic = null;
  let bestScore = 0;

  for (const topic of KNOWLEDGE_TOPICS) {
    const score = topic.keywords.reduce(
      (total, kw) => (keywordMatches(qLower, kw) ? total + 1 : total),
      0
    );
    if (score > bestScore) {
      bestScore = score;
      bestTopic = topic;
    }
  }

  if (bestTopic) {
    return `### ${bestTopic.title}\n\n${bestTopic.content}\n\n---\n**Fontes Científicas Recomendadas:**\n- [Animal Diversity Web (ADW)](https://animaldiversity.org)\n- [IUCN Red List](https://www.iucnredlist.org)\n- [Instituto Butantan](https://butantan.gov.br)`;
  }

  // Specific species queries
  if (keywordMatches(qLower, 'anfioxo') || keywordMatches(qLower, 'branchiostoma')) {
    return `### O Anfioxo (*Branchiostoma lanceolatum*) e sua Relevância Científica

O anfioxo é o mais clássico representante do subfilo **Cephalochordata**.

- **Anatomia:** Possui cerca de 5 a 7 cm de comprimento, corpo translúcido pisciforme, sem crânio, sem mandíbulas e sem coluna vertebral verdadeira.
- **Sinapomorfias:** Conserva por toda a vida adulta as cinco características fundamentais: notocorda funcional até a ponta cefálica, tubo nervoso dorsal tubular, fendas branquiais, endóstilo e cauda pós-anal.
- **Importância em Biologia:** É o organismo modelo padrão para estudos de embriologia comparada e biologia do desenvolvimento (Evo-Devo), pois representa a arquitetura corporal basal a partir da qual os vertebrados se originaram.

---
**Fonte:** [WoRMS - Branchiostoma](https://www.marinespecies.org)`;
  }

  if (keywordMatches(qLower, 'onca') || keywordMatches(qLower, 'panthera onca') || keywordMatches(qLower, 'onca-pintada')) {
    return `### Onça-Pintada (*Panthera onca*): O Maior Felino das Américas

- **Classificação:** Classe Mammalia, Ordem Carnivora, Família Felidae.
- **Características:** Maior felino das Américas (machos pantaneiros chegam a 135 kg). Possui a mordida proporcionalmente mais potente entre os grandes felinos, capaz de perfurar couraças ósseas de tartarugas e ossos cranianos de presas.
- **Ecologia:** Espécie-chave e predador de topo que equilibra populações de capivaras, queixadas e jacarés no Pantanal e na Amazônia.
- **Conservação:** Classificada como Quase Ameaçada (NT) pela IUCN, sofrendo com perda de habitat e incêndios florestais.

---
**Fonte:** [CENAP / ICMBio](https://www.icmbio.gov.br/cenap/) e [IUCN Red List](https://www.iucnredlist.org)`;
  }

  if (keywordMatches(qLower, 'brasil') || keywordMatches(qLower, 'brasileiro') || keywordMatches(qLower, 'brasileira') || keywordMatches(qLower, 'fauna')) {
    return `### Cordados e a Megabiodiversidade da Fauna Brasileira

O Brasil abriga a maior riqueza biológica de cordados do mundo:
- **Peixes:** Mais de 3.000 espécies fluviais nativas na bacia amazônica e pantaneira (como o Pirarucu, Poraquê, Dourado e Pacu).
- **Anfíbios:** Líder global com mais de 1.100 espécies descritas (sapos-cururus, pererecas-de-vidro e rãs coloridas).
- **Répteis:** Mais de 800 espécies, incluindo o jacaré-do-pantanal, tartarugas marinhas e grandes serpentes constritoras (jiboia e sucuri).
- **Aves:** Mais de 1.970 espécies (araras-azuis, tucanos, harpias e beija-flores).
- **Mamíferos:** Mais de 700 espécies com representantes carismáticos como o mico-leão-dourado, lobo-guará e boto-cor-de-rosa.

---
**Fonte Oficial:** [Livro Vermelho da Fauna Brasileira - ICMBio](https://www.icmbio.gov.br)`;
  }

  // General educational zoological synthesized answer
  return `### Análise Zoológica — BioChordata

Com relação à sua pergunta (*"${question}"*):

No estudo do filo **Chordata**, a compreensão biológica fundamenta-se nas relações evolutivas e nas adaptações morfológicas e ecológicas que permitiram aos animais colonizar desde as fossas abissais até os picos montanhosos e o espaço aéreo.

**Pontos-Chave para Compreensão:**
1. **Linhagem e Parentesco:** Todos os membros compartilham simetria bilateral, celoma verdadeiro e desenvolvimento embrionário deuterostômio.
2. **Adaptações Fisiológicas:** Desde a ectotermia com respiração branquial dos peixes até a endotermia avançada e circulação dupla completa de aves e mamíferos.
3. **Equilíbrio Ecológico:** Cada grupo ocupa posições essenciais nas teias tróficas: produtividade bentônica, polinização, dispersão de sementes e regulação populacional por grandes predadores.

*Dica: Você também pode explorar os cards detalhados na seção **Catálogo de Espécies** e testar as conexões evolutivas na nossa **Árvore Filogenética Interativa**!*

---
**Fontes Consultadas:**
- [Animal Diversity Web (ADW)](https://animaldiversity.org)
- [Catalogue of Life](https://www.catalogueoflife.org)
- [IUCN Red List of Threatened Species](https://www.iucnredlist.org)`;
}
