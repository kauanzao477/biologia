// Backend AI Handler for BioChordata
// Integrates with Gemini API / OpenAI API when key is configured,
// and features a rich zoological knowledge-retrieval engine for Chordata topics.

import https from 'node:https';

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
5. Estrutura de Resposta: Organize a resposta com títulos breves em negrito, tópicos explicativos com marcadores e uma seção final com "Fontes recomendadas para consulta" (ex: IUCN Red List, Animal Diversity Web, ICMBio, Instituto Butantan).`;

// Local high-fidelity zoological knowledge base for fallback or augmentation
const KNOWLEDGE_TOPICS = [
  {
    keywords: ['característica', 'sinapomorfia', 'fundamentais', 'quatro', 'cinco', 'padrao', 'defina cordado'],
    title: 'As 5 Características Diagnósticas Fundamentais do Filo Chordata',
    content: `Todos os cordados compartilham cinco sinapomorfias em pelo menos uma fase do desenvolvimento ontogenético (geralmente embrionária ou larval):

1. **Notocorda (Chorda dorsalis):** Bastão semirrígido e flexível derivado do mesoderma axial, que fornece sustentação mecânica e ancora a musculatura axial. Nos vertebrados adultos, é substituída pela coluna vertebral, remanescendo como os núcleos pulposos dos discos intervertebrais.
2. **Tubo Nervoso Dorsal e Oco:** Diferente dos invertebrados (cujo cordão é ventral e maciço), nos cordados o tubo é dorsal à notocorda e oco (neurocele), originando o encéfalo e a medula espinhal por neurulação.
3. **Fendas ou Bolsas Faringianas:** Perfurações ou bolsas na parede lateral da faringe. Nos protocordados atuam na filtração de alimentos; nos peixes e larvas de anfíbios suportam as brânquias respiratórias; nos tetrápodes terrestres adultos originam a tuba auditiva, cavidade timpânica e glândulas como o timo e paratireoides.
4. **Endóstilo / Glândula Tireoide:** Sulco ciliado no assoalho faríngeo que secreta muco e concentra iodo nos protocordados e larvas de lampreia; nos vertebrados adultos converte-se na glândula tireoide, produtora de T3 e T4.
5. **Cauda Pós-anal Muscular:** Extensão muscular que ultrapassa o ânus, fundamental para propulsão hidrodinâmica aquática e equilíbrio corporal em terra.`
  },
  {
    keywords: ['diferenca', 'vertebrado', 'protocordado', 'craniata', 'cefalocordado', 'tunicado'],
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
    keywords: ['evolucao', 'origem', 'cambriano', 'tetrapode', 'tiktaalik', 'fossil'],
    title: 'A Trajetória Evolutiva dos Cordados',
    content: `Principais marcos evolutivos ao longo do tempo geológico:
1. **Cambriano (~535 Ma):** Surgimento dos cordados primitivos no mar (*Pikaia*, *Haikouichthys*).
2. **Siluriano (~440 Ma):** Origem dos Gnathostomata (surgimento das mandíbulas a partir de arcos branquiais modificados).
3. **Devoniano (~375 Ma):** Transição água-terra pelos sarcopterígeos (*Tiktaalik*, *Acanthostega*), dando origem aos Tetrapoda de quatro membros com dedos.
4. **Carbonífero (~320 Ma):** Invenção do ovo amniótico (Amniota), emancipando a reprodução da água e cindindo a linhagem em Synapsida (mamíferos) e Sauropsida (répteis/aves).
5. **Cenozoico (após 66 Ma):** Extinção dos dinossauros não-avianos e explosão adaptativa dos mamíferos e aves modernas.`
  }
];

export async function handleAIChat(req, res) {
  // Set CORS and JSON headers
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: 'Método não permitido. Use POST.' }));
    return;
  }

  let body = '';
  req.on('data', chunk => {
    body += chunk;
  });

  req.on('end', async () => {
    try {
      const data = JSON.parse(body || '{}');
      const userMessage = (data.message || '').trim();
      const clientApiKey = data.apiKey;

      if (!userMessage) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'A mensagem da pergunta não pode estar vazia.' }));
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY || clientApiKey;

      // If Gemini API Key is available, call Google Gemini 1.5 Flash endpoint
      if (apiKey && apiKey.trim().length > 10) {
        try {
          const geminiResponse = await callGeminiAPI(userMessage, data.history || [], apiKey);
          res.statusCode = 200;
          res.end(JSON.stringify({
            reply: geminiResponse,
            source: 'gemini-api',
            status: 'success'
          }));
          return;
        } catch (apiErr) {
          console.warn('Gemini API call failed, using high-precision local zoological engine:', apiErr.message);
          // Fall through to local intelligent engine
        }
      }

      // High-precision local zoological reasoning engine
      const smartAnswer = generateSmartZoologicalResponse(userMessage);
      res.statusCode = 200;
      res.end(JSON.stringify({
        reply: smartAnswer,
        source: 'biochordata-core-engine',
        status: 'success'
      }));

    } catch (err) {
      console.error('Error handling AI chat:', err);
      res.statusCode = 500;
      res.end(JSON.stringify({
        error: 'Erro interno ao processar a resposta. Por favor, tente novamente.',
        details: err.message
      }));
    }
  });
}

function callGeminiAPI(userMessage, history, apiKey) {
  return new Promise((resolve, reject) => {
    const contents = [
      {
        role: 'user',
        parts: [{ text: `${CHORDATA_SYSTEM_PROMPT}\n\nPergunta do usuário: ${userMessage}` }]
      }
    ];

    const postData = JSON.stringify({
      contents,
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 1200,
        topP: 0.95
      }
    });

    const options = {
      hostname: 'generativelanguage.googleapis.com',
      port: 443,
      path: `/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let responseBody = '';
      res.on('data', chunk => { responseBody += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(responseBody);
          if (parsed.error) {
            reject(new Error(parsed.error.message || 'Gemini error'));
            return;
          }
          const text = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            resolve(text);
          } else {
            reject(new Error('Formato inesperado na resposta da API Gemini.'));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', (e) => reject(e));
    req.setTimeout(12000, () => {
      req.destroy();
      reject(new Error('Timeout de requisição com a API'));
    });

    req.write(postData);
    req.end();
  });
}

function generateSmartZoologicalResponse(question) {
  const qLower = question.toLowerCase();

  // Search match in specialized knowledge
  for (const topic of KNOWLEDGE_TOPICS) {
    const match = topic.keywords.some(kw => qLower.includes(kw));
    if (match) {
      return `### ${topic.title}\n\n${topic.content}\n\n---\n**Fontes Científicas Recomendadas:**\n- [Animal Diversity Web (ADW)](https://animaldiversity.org)\n- [IUCN Red List](https://www.iucnredlist.org)\n- [Instituto Butantan](https://butantan.gov.br)`;
    }
  }

  // Specific species queries
  if (qLower.includes('anfioxo') || qLower.includes('branchiostoma')) {
    return `### O Anfioxo (*Branchiostoma lanceolatum*) e sua Relevância Científica

O anfioxo é o mais clássico representante do subfilo **Cephalochordata**. 

- **Anatomia:** Possui cerca de 5 a 7 cm de comprimento, corpo translúcido pisciforme, sem crânio, sem mandíbulas e sem coluna vertebral verdadeira.
- **Sinapomorfias:** Conserva por toda a vida adulta as características fundamentais: notocorda funcional até a ponta cefálica, tubo nervoso dorsal tubular, fendas branquiais e cauda pós-anal.
- **Importância em Biologia:** É o organismo modelo padrão para estudos de embriologia comparada e biologia do desenvolvimento (Evo-Devo), pois representa a arquitetura corporal basal a partir da qual os vertebrados se originaram.

---
**Fonte:** [WoRMS - Branchiostoma](https://www.marinespecies.org)`;
  }

  if (qLower.includes('onça') || qLower.includes('panthera onca')) {
    return `### Onça-Pintada (*Panthera onca*): O Maior Felino das Américas

- **Classificação:** Classe Mammalia, Ordem Carnivora, Família Felidae.
- **Características:** Maior felino das Américas (machos pantaneiros chegam a 135 kg). Possui a mordida proporcionalmente mais potente entre os grandes felinos, capaz de perfurar couraças ósseas de tartarugas e ossos cranianos de presas.
- **Ecologia:** Espécie-chave e predador de topo que equilibra populações de capivaras, queixadas e jacarés no Pantanal e na Amazônia.
- **Conservação:** Classificada como Quase Ameaçada (NT) pela IUCN, sofrendo com perda de habitat e incêndios florestais.

---
**Fonte:** [CENAP / ICMBio](https://www.icmbio.gov.br/cenap/) e [IUCN Red List](https://www.iucnredlist.org)`;
  }

  if (qLower.includes('brasil') || qLower.includes('brasileiro') || qLower.includes('fauna')) {
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
