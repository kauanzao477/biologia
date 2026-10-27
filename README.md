# CHORDATA — Explorando o Mundo dos Cordados 🧬🌍

> **Portal Educativo, Moderno e Interativo de Divulgação Científica sobre o Filo Chordata**  
> Desenvolvido em português do Brasil com rigor acadêmico, taxonomia filogenética moderna, fotografias reais, catálogo pesquisável e o assistente inteligente **BioChordata AI**.

---

## 📌 Sumário
1. [Sobre o Projeto](#-sobre-o-projeto)
2. [Identidade Visual e Experiência do Usuário](#-identidade-visual-e-experiência-do-usuário)
3. [Estrutura Completa do Portal](#-estrutura-completa-do-portal)
4. [Rigor e Precisão Científica](#-rigor-e-precisão-científica)
5. [BioChordata — Assistente de Inteligência Artificial](#-biochordata--assistente-de-inteligência-artificial)
6. [Tecnologias Utilizadas](#-tecnologias-utilizadas)
7. [Instalação e Execução](#-instalação-e-execução)
8. [Configuração de Chaves de API](#-configuração-de-chaves-de-api)
9. [Bases de Dados e Fontes Oficiais](#-bases-de-dados-e-fontes-oficiais)

---

## 🔬 Sobre o Projeto

O filo **Chordata** abriga uma das mais extraordinárias irradiações adaptativas do reino animal: desde os pequenos e translúcidos anfioxos até as imponentes baleias-azuis e as aves em voo batido.

Este portal foi concebido para estudantes dos ensinos fundamental, médio e universitário, professores e entusiastas da natureza. O objetivo é desmistificar conceitos antigos, ensinar as características diagnósticas dos cordados, explorar as relações evolutivas modernas (não lineares) e fornecer orientações preventivas e médicas contra acidentes com animais peçonhentos e tóxicos no Brasil.

---

## 🎨 Identidade Visual e Experiência do Usuário

- **Paleta de Cores Harmônica:** Tons curados de esmeralda (*#059669*), cerceta/teal (*#0d9488*), ciano (*#0891b2*), ardósia e branco.
- **Tipografia Moderna:** Fontes *Outfit* (títulos de impacto) e *Plus Jakarta Sans* (leitura limpa e didática) via Google Fonts.
- **Modo Escuro (Dark Mode):** Alternância instantânea com persistência em `localStorage` e respeito às preferências do sistema operacional.
- **Design Responsivo:** Adaptado para computadores desktop, tablets e smartphones.
- **Acessibilidade e Microanimações:** Transições suaves, efeito *glassmorphism*, diagramas SVG interativos e cards com cantos arredondados.

---

## 🏛️ Estrutura Completa do Portal

O site organiza-se estritamente na seguinte sequência didática:

1. **Página Inicial (Hero):** Banner visual imersivo com título principal (*"Cordados: conheça a incrível diversidade do reino animal"*), subtítulo explicativo, 4 botões de ação rápida (*Explorar os cordados*, *Conhecer os grupos*, *Ver catálogo de espécies*, *Perguntar à IA*), cartões de grupos emblemáticos e estatísticas globais (+65.000 espécies).
2. **O que são os cordados? & Anatomia Fundamental:** Explicação das 5 sinapomorfias dos cordados (**Notocorda**, **Tubo nervoso dorsal e oco**, **Fendas faringianas**, **Endóstilo/Tireoide** e **Cauda pós-anal**) com **diagrama anatômico SVG interativo** do bauplan arquetípico (inspeção clicável com destino no embrião vs. adulto e importância evolutiva).
3. **Classificação e Árvore Filogenética:** Cladograma interativo com nós evolutivos (desde a raiz cambriana até as aves e mamíferos). Inclui avisos científicos essenciais explicando que *"peixes"* é um agrupamento parafilético, que as aves são dinossauros terópodes répteis arcossauros e combatendo a falácia da "escada linear do progresso".
4. **Características dos Principais Grupos:** Cards detalhados para Cefalocordados, Tunicados, Peixes Ágnatos, Condríctes, Osteíctes, Anfíbios, Répteis, Aves e Mamíferos. Botão para **Tabela Comparativa Completa** analisando revestimento, respiração, reprodução e termorregulação lado a lado.
5. **Catálogo Interativo de Espécies:** Fichas com fotografias reais em alta resolução, nomes populares e científicos (*Branchiostoma*, *Ciona*, *Carcharodon carcharias*, *Amphiprion ocellaris*, *Arapaima gigas*, *Rhinella marina*, *Ambystoma mexicanum*, *Phyllobates terribilis*, *Chelonia mydas*, *Boa constrictor*, *Caiman yacare*, *Anodorhynchus hyacinthinus*, *Ramphastos toco*, *Aptenodytes forsteri*, *Panthera onca*, *Hydrochoerus hydrochaeris*, *Balaenoptera musculus*, *Desmodus rotundus*, *Lachesis muta* e *Petromyzon marinus*). Filtros por grupo, bioma, dieta, fauna brasileira, risco e status da Lista Vermelha da IUCN.
6. **Galeria de Fotografias:** Grade *masonry* responsiva com filtros de grupo, legendas explicativas, zoom em *lightbox* com navegação de fotos e créditos de autoria (Wikimedia Commons / iNaturalist).
7. **Habitats e Distribuição Geográfica:** Navegação por biomas (Oceanos, Rios e Lagos, Florestas Tropicais, Cerrado, Caatinga, Pantanal, Regiões Polares, Ambientes Urbanos) com correlação entre desafios físicos e adaptações orgânicas, além de alertas sobre espécies exóticas invasoras.
8. **Perigos, Defesa e Relações Humanas:** Guia anti-sensacionalista diferenciando **Animais Peçonhentos** (Bothrops, Crotalus, Lachesis) de **Animais Tóxicos/Venenosos** (Sapos-cururus e dendrobatídeos), além de grandes predadores e zoonoses (morcegos e raiva, capivaras e febre maculosa). Protocolos oficiais de primeiros socorros (SAMU 192, Bombeiros 193, CIATox, Instituto Butantan).
9. **Evolução dos Cordados:** Linha do tempo profunda dos últimos 535 milhões de anos (do Cambriano ao Cenozoico), com marcos como a invenção da mandíbula (*Gnathostomata*), membros tetrápodes (*Tiktaalik*) e o ovo amniótico.
10. **Conservação e Importância Ecológica:** Análise dos serviços ecossistêmicos (polinização, dispersão de sementes, controle de pragas, ciclagem de carbono pelas baleias) e projetos brasileiros bem-sucedidos (Projeto TAMAR, Instituto Arara Azul, Baleia Jubarte e ICMBio).
11. **BioChordata — Assistente de Inteligência Artificial:** Assistente zoológico especializado com sugestões de perguntas rápidas, histórico de diálogo, botões de cópia e respostas didáticas estruturadas com referências.
12. **Perguntas Frequentes (FAQ):** 12 perguntas essenciais respondidas em acordeão expansível, com botão integrado para enviar a dúvida diretamente ao BioChordata AI.
13. **Fontes Científicas:** Catálogo das autoridades mundiais em biodiversidade com links verificados (IUCN Red List, ADW, GBIF, Catalogue of Life, WoRMS, ICMBio e Instituto Butantan).
14. **Rodapé:** Declaração de compromisso pedagógico, créditos e mapa do site.

---

## 🧬 BioChordata — Assistente de Inteligência Artificial

O portal conta com um backend seguro integrado ao servidor Vite (`/api/chat`):

- **Motor Central Especializado:** Processa requisições através de um motor de busca semântica em base de dados zoológica integrada com mais de uma centena de tópicos, garantindo respostas ricas, precisas e em português do Brasil sem alucinações.
- **Suporte Nativo a Google Gemini 1.5 Flash:** Se a variável de ambiente `GEMINI_API_KEY` estiver configurada no servidor ou se o usuário informar sua própria chave através do modal de configurações (ícone de chave), o backend efetua chamadas diretas e seguras para a API do Google Gemini, protegendo credenciais contra exposição no frontend.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React 19 + TypeScript + Vite 8
- **Estilização:** Tailwind CSS v4 (`@tailwindcss/vite`) + CSS Glassmorphism personalizado
- **Ícones:** Lucide React
- **Tipografia:** Google Fonts (*Outfit* e *Plus Jakarta Sans*)
- **Backend / API:** Middleware seguro em Node.js / Connect acoplado ao Vite (`server/aiHandler.js`)

---

## 🚀 Instalação e Execução

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão 18 ou superior.

### Passos de Instalação

1. Clone ou acesse a pasta do projeto:
```bash
cd c:\Users\Usuário\Downloads\Biologia
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra no seu navegador:
```
http://localhost:5173/
```

### Compilação de Produção
Para validar e gerar os arquivos estáticos otimizados:
```bash
npm run build
```
O resultado será compilado na pasta `dist/`.

---

## 🔑 Configuração de Chaves de API (Opcional)

O portal funciona **100% de fábrica** mesmo sem nenhuma chave de API externa, graças ao motor de conhecimento de cordados embutido no backend.

Caso deseje ativar o modelo gerador completo **Google Gemini**:
1. Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
   ```env
   GEMINI_API_KEY=sua_chave_aqui
   ```
2. Ou insira a chave diretamente na interface clicando no botão **"Chave Gemini"** no topo da caixa de chat do BioChordata AI.

---

## 📚 Bases de Dados e Fontes Oficiais

- **IUCN Red List of Threatened Species:** [https://www.iucnredlist.org](https://www.iucnredlist.org)
- **Animal Diversity Web (ADW):** [https://animaldiversity.org](https://animaldiversity.org)
- **Global Biodiversity Information Facility (GBIF):** [https://www.gbif.org](https://www.gbif.org)
- **World Register of Marine Species (WoRMS):** [https://www.marinespecies.org](https://www.marinespecies.org)
- **Catalogue of Life (CoL):** [https://www.catalogueoflife.org](https://www.catalogueoflife.org)
- **Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio):** [https://www.icmbio.gov.br](https://www.icmbio.gov.br)
- **Instituto Butantan:** [https://butantan.gov.br](https://butantan.gov.br)

---
*CHORDATA: Ciência, Biodiversidade e Educação para Todos.*
