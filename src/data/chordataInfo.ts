import type { 
  ChordateSynapomorphy, 
  GroupOverview, 
  HabitatInfo, 
  DangerCategory, 
  TimelineEvent, 
  FAQItem, 
  ScientificSource 
} from '../types';

export const chordateSynapomorphies: ChordateSynapomorphy[] = [
  {
    id: 'notocorda',
    name: 'Notocorda (Chorda dorsalis)',
    latinName: 'Chorda dorsalis',
    description: 'Bastão semirrígido, flexível e hidrostático que se estende longitudinalmente ao longo do eixo dorsal do animal. É composto por células vacuolizadas ricas em fluido envolvidas por uma bainha fibrosa e elástica de colágeno.',
    embryoFate: 'Nos vertebrados, surge no embrião a partir do mesoderma axial (cordamesoderma) e atua como o principal indutor do tubo neural adjacente.',
    adultPresence: 'Nos cefalocordados e ágnatos fósseis, persiste intacta por toda a vida como eixo esquelético. Nos vertebrados adultos com mandíbula, é gradualmente substituída pela coluna vertebral óssea ou cartilaginosa, permanecendo apenas como resquício no núcleo pulposo dos discos intervertebrais.',
    importance: 'Permite ondulações laterais eficientes da musculatura axial sem encurtar o comprimento corporal, propiciando a locomoção natatória primordial.'
  },
  {
    id: 'tubo-nervoso',
    name: 'Tubo Nervoso Dorsal e Oco',
    latinName: 'Neurocoele / Tubus neuralis',
    description: 'Cordão nervoso oco cilíndrico localizado estritamente na região dorsal do corpo, posicionado acima (dorsalmente) da notocorda. Origina-se por neurulação através da invaginação do ectoderma embrionário dorsal.',
    embryoFate: 'A placa ectodérmica espessa-se, dobra-se nas pregas neurais e funde-se na linha média dorsal para formar o tubo neural oco com um neurocele central preenchido por fluido.',
    adultPresence: 'Nos vertebrados, a porção anterior do tubo expande-se extraordinariamente para formar o encéfalo tripartido (prosencéfalo, mesencéfalo e rombencéfalo), enquanto a porção posterior origina a medula espinhal tubular.',
    importance: 'Diferencia os cordados de todos os invertebrados protostômios (como anelídeos e artrópodes), cujo cordão nervoso é maciço, pareado e ventral.'
  },
  {
    id: 'fendas-faringianas',
    name: 'Fendas ou Bolsas Faringianas',
    latinName: 'Fissurae pharyngeae',
    description: 'Série de aberturas ou evaginações pareadas que perfuram as paredes laterais da faringe, conectando o lúmen faríngeo ao meio aquático externo ou à câmara peribranquial.',
    embryoFate: 'Desenvolvem-se precocemente a partir do contato íntimo entre invaginações ectodérmicas externas e bolsas endodérmicas da faringe.',
    adultPresence: 'Nos protocordados (anfioxos e tunicados), formam uma vasta cesta faringiana ciliada para alimentação por filtração. Nos peixes e larvas de anfíbios, sustentam os arcos branquiais para respiração aquática. Nos tetrápodes terrestres adultos (répteis, aves e mamíferos), nunca se abrem para o exterior; suas bolsas originam a tuba auditiva, a cavidade da orelha média, as glândulas paratireoides e o timo.',
    importance: 'Surgiram primariamente como um aparato filtrador de partículas alimentares microscópicas e secundariamente foram cooptadas para a troca gasosa respiratória.'
  },
  {
    id: 'endostilo',
    name: 'Endóstilo / Glândula Tireoide',
    latinName: 'Endostylus / Glandula thyroidea',
    description: 'Sulco glandular ciliado longitudinal situado no assoalho da cavidade faríngica ventral. Suas células especializadas secretam muco glicoproteico que aprisiona partículas e concentram ativamente iodo do ambiente.',
    embryoFate: 'Surge como uma depressão endodérmica na parede do assoalho faríngeo anterior durante a morfogênese embrionária.',
    adultPresence: 'Encontrado sob a forma de endóstilo funcional no anfioxo, nas larvas de lampreia (amocetes) e nos tunicados. Nos vertebrados adultos, invagina e transforma-se na glândula tireoide, produtora dos hormônios metabólicos iodados tiroxina (T4) e tri-iodotironina (T3).',
    importance: 'Clássico exemplo de homologia evolutiva na biologia: uma estrutura outrora dedicada à alimentação e aglutinação de muco converteu-se em uma glândula endócrina mestre da regulação energética.'
  },
  {
    id: 'cauda-pos-anal',
    name: 'Cauda Pós-anal Muscular',
    latinName: 'Cauda post-analis',
    description: 'Extensão muscular do corpo que se projeta posteriormente além da abertura anal. É reforçada pela notocorda (ou coluna vertebral) e organizada em blocos musculares metaméricos (miômeros).',
    embryoFate: 'Desenvolve-se no polo caudal embrionário a partir de proliferações da zona de progressão caudal.',
    adultPresence: 'Mantida na maioria das espécies aquáticas e terrestres como órgão propulsor natatório, órgão de equilíbrio, leme ou membro preênsil. Em humanos, símios e anuros adultos, sofre regressão embrionária por apoptose, permanecendo apenas o osso cóccix vestigial.',
    importance: 'Garante propulsão hidrodinâmica em meio líquido sem interferir no tubo digestivo, cuja terminação anal permanece separada e anterior.'
  }
];

export const generalAnatomyOverview = {
  symmetry: 'Simetria Bilateral',
  embryonicOrigin: 'Triblásticos (com ectoderma, mesoderma e endoderma bem formados) e Deuterostômios (o blastóporo embrionário origina o ânus; a boca é formada secundariamente).',
  bodyCavity: 'Celomados verdadeiros (o celoma se desenvolve por enterocelia nos protocordados basais ou esquizocelia nos vertebrados).',
  metamerism: 'Metameria evidente na musculatura axial dorsal (miómeros em ziguezague), na segmentação dos nervos espinhais e nas vértebras e costelas.',
  circulatorySystem: 'Sistema circulatório fechado (com exceção dos tunicados). Nos vertebrados, há um coração propulsor ventral com bombas musculares, artérias condutoras, rede de capilares e veias.',
  digestiveTract: 'Tubo digestório completo com boca anterior e ânus posterior (ou cloaca compartilhada com os sistemas excretor e reprodutor), associado a grandes glândulas anexas (fígado e pâncreas).'
};

export const groupOverviews: GroupOverview[] = [
  {
    name: 'Cefalocordados',
    category: 'Protocordados',
    scientificClade: 'Cephalochordata',
    representativeSpecies: 'Anfioxo (Branchiostoma lanceolatum)',
    photoUrl: '/images/species/anfioxo.webp',
    anatomy: 'Corpo pisciforme sem crânio, sem vértebras e sem encéfalo diferenciado. Notocorda persiste por toda a vida até a ponta da cabeça. Miótomos em forma de "V".',
    integument: 'Epiderme simples monoestratificada e transparente recoberta por cutícula fina.',
    respiration: 'Cutânea por difusão através da superfície corporal e faringe ciliada.',
    diet: 'Filtração passiva de fitoplâncton e partículas orgânicas marinhas através do velo e dos cirros orais.',
    reproduction: 'Sexos separados (dióicos), fecundação externa na água; larva planctônica que nada livremente.',
    thermoregulation: 'Ectotérmico',
    habitats: ['Fundos marinhos arenosos em águas costeiras rasas'],
    ecologicalImportance: 'Consumo de produtores primários e reciclagem trófica no sedimento bentônico marinho.',
    evolutionaryNotes: 'Grupo irmão basal de todos os outros cordados vivos (tunicados + vertebrados).'
  },
  {
    name: 'Tunicados',
    category: 'Protocordados',
    scientificClade: 'Tunicata (Urochordata)',
    representativeSpecies: 'Ascídia-comum (Ciona intestinalis), Salpas e Apendiculárias',
    photoUrl: '/images/species/ascidia.webp',
    anatomy: 'Larva móvel parecida com girino possui notocorda e tubo nervoso na cauda. Adulto (na maioria séssil) perde notocorda e cauda na metamorfose retrógrada e é envolvido por uma túnica celulósica.',
    integument: 'Túnica espessa protetora de tunicina (quimicamente análoga à celulose vegetal).',
    respiration: 'Branquial/faringiana através de estigmas na ampla cesta faringiana.',
    diet: 'Filtração ativa contínua via sifões inalante e exalante.',
    reproduction: 'Geralmente hermafroditas (monoicos) com capacidade de brotamento assexuado colonial ou reprodução sexuada com larva natatória.',
    thermoregulation: 'Ectotérmico',
    habitats: ['Costões rochosos', 'Recifes de corais', 'Mar aberto pelágico (salpas)'],
    ecologicalImportance: 'Filtração massiva de microrganismos oceânicos e bioincrustação biogênica.',
    evolutionaryNotes: 'Evidências moleculares modernas estabeleceram os tunicados como os parentes evolutivos mais próximos dos vertebrados (clado Olfactores).'
  },
  {
    name: 'Peixes Ágnatos',
    category: 'Vertebrados',
    scientificClade: 'Cyclostomata (Myxini + Petromyzontida)',
    representativeSpecies: 'Lampreias (Petromyzon) e Peixes-bruxa (Myxine)',
    photoUrl: '/images/species/lampreia-marinha.webp',
    anatomy: 'Vertebrados primitivos sem mandíbulas verdadeiras e sem nadadeiras pares. Esqueleto fibroso e cartilaginoso. Boca circular em ventosa com dentes córneos queratinosos.',
    integument: 'Pele nua e lisa, desprovida de escamas, abundante em glândulas produtoras de muco espesso.',
    respiration: 'Bolsas branquiais circulares (5 a 16 pares) que bombeiam água por contração muscular.',
    diet: 'Ectoparasitismo hematófago (lampreias) e necrofagia de animais marinhos mortos no fundo (peixes-bruxa).',
    reproduction: 'Dióicos; desova em rios com fecundação externa e metamorfose da larva amocete (lampreias).',
    thermoregulation: 'Ectotérmico',
    habitats: ['Oceanos profundos', 'Rios de água doce e bacias marinhas temperadas'],
    ecologicalImportance: 'Reciclagem de nutrientes de carcaças no leito oceânico e controle trófico.',
    evolutionaryNotes: 'Representam o estágio evolutivo anterior à grande inovação das mandíbulas articuladas.'
  },
  {
    name: 'Peixes Cartilaginosos',
    category: 'Vertebrados',
    scientificClade: 'Chondrichthyes (Elasmobranchii + Holocephali)',
    representativeSpecies: 'Tubarão-branco, Raias e Quimeras',
    photoUrl: '/images/species/tubarao-branco.webp',
    anatomy: 'Esqueleto inteiramente cartilaginoso mineralizado sem ossificação verdadeira. Mandíbulas articuladas potentes. Fendas branquiais expostas sem opérculo (exceto quimeras). Fígado volumoso e oleoso para flutuabilidade (sem bexiga natatória).',
    integument: 'Revestido por escamas placóides (dentículos dérmicos) com esmalte e dentina.',
    respiration: 'Branquial contínua por fluxo de água induzido por natação (ventilação ram) ou espiráculo.',
    diet: 'Predadores carnívoros ativos ou filtradores de plâncton (tubarão-baleia e raia-manta).',
    reproduction: 'Fecundação interna obrigatória mediada por clásperes pélvicos nos machos; ovíparos, vivíparos ou ovovivíparos.',
    thermoregulation: 'Ectotérmico (com gigantotermia endotérmica regional em tubarões lamnídeos)',
    habitats: ['Oceanos globais de águas rasas até profundezas abissais', 'Poucas espécies fluviais (raias de água doce)'],
    ecologicalImportance: 'Predadores de topo reguladores que evitam explosões demográficas de outros animais marinhos.',
    evolutionaryNotes: 'Linhagem extremamente bem-sucedida preservada há mais de 400 milhões de anos.'
  },
  {
    name: 'Peixes Ósseos',
    category: 'Vertebrados',
    scientificClade: 'Osteichthyes (Actinopterygii + Sarcopterygii)',
    representativeSpecies: 'Pirarucu, Peixe-palhaço, Atum, Salmão e Peixes pulmonados',
    photoUrl: '/images/species/peixe-palhaco.webp',
    anatomy: 'Esqueleto primariamente ósseo com ossificação endocondral. Opérculo protetor ósseo sobre as brânquias. Bexiga natatória preenchida por gás para controle de flutuação hidrostática neutra.',
    integument: 'Escamas dérmicas delgadas (ciclóides, ctenóides ou ganoides) cobertas por epiderme viva e muco protetor.',
    respiration: 'Branquial opercular; respiração aérea acessória ou pulmonar em dipnoicos e pirarucus.',
    diet: 'Imensa diversidade: carnívoros, herbívoros, detritívoros, frugívoros e planctívoros.',
    reproduction: 'Principalmente ovíparos com fecundação externa, alguns com fertilização interna e cuidado parental elaborado.',
    thermoregulation: 'Ectotérmico (com endotermia regional em atuns e espadartes)',
    habitats: ['Mares, rios, lagos, estuários, poças temporárias e abismos oceânicos'],
    ecologicalImportance: 'Maior grupo de vertebrados do planeta (+33.000 espécies descritas); base das cadeias tróficas aquáticas.',
    evolutionaryNotes: 'O clado Sarcopterygii (peixes de nadadeiras lobadas) deu origem histórica aos primeiros tetrápodes terrestres.'
  },
  {
    name: 'Anfíbios',
    category: 'Vertebrados',
    scientificClade: 'Amphibia (Anura, Urodela, Gymnophiona)',
    representativeSpecies: 'Sapos, Rãs, Pererecas, Salamandras e Cecílias (cobras-cegas)',
    photoUrl: '/images/species/sapo-cururu.webp',
    anatomy: 'Tetrápodes com quatro membros locomotores (ausentes em cecílias). Crânio articulado com duas côndilos occipitais. Coração tricavitário (dois átrios e um ventrículo).',
    integument: 'Pele fina, úmida e ricamente vascularizada, sem escamas; repleta de glândulas mucosas e serosas venenosas.',
    respiration: 'Cutânea intensa, pulmonar saculiforme rudimentar e bucofaringiana; branquial na fase larval aquática.',
    diet: 'Predadores carnívoros em sua maioria quando adultos (insetos, artrópodes e anelídeos); girinos são frequentemente herbívoros ou filtradores.',
    reproduction: 'Geralmente dependentes da água: ovos sem casca impermeável protegidos por cápsula gelatinosa; metamorfose de girino aquático para adulto terrestre.',
    thermoregulation: 'Ectotérmico',
    habitats: ['Florestas tropicais úmidas', 'Margens de rios e lagoas', 'Áreas subterrâneas e cavernas'],
    ecologicalImportance: 'Controle de populações de insetos pragas e bioindicadores sensíveis da poluição e mudanças climáticas.',
    evolutionaryNotes: 'Primeiros vertebrados a conquistar o ambiente terrestre no Devoniano Superior, mantendo elo reprodutivo com a água.'
  },
  {
    name: 'Répteis',
    category: 'Vertebrados',
    scientificClade: 'Sauropsida (Squamata, Testudines, Crocodylia)',
    representativeSpecies: 'Tartaruga-verde, Jiboia, Jacaré-do-pantanal, Teiú e Camaleão',
    photoUrl: '/images/species/tartaruga-verde.webp',
    anatomy: 'Amniotas: surgimento do ovo amniótico com casca calcária/coriácea e membranas extraembrionárias (ânion, córion, alantoide e saco vitelínico). Coração com três cavidades (septo ventricular parcial) ou quatro cavidades nos crocodilianos.',
    integument: 'Pele seca e intensamente queratinizada revestida por escamas epidérmicas ou placas ósseas (osteodermas), impedindo perda de água por dessecação.',
    respiration: 'Pulmonar eficiente por expansão da caixa torácica; sem dependência da respiração cutânea.',
    diet: 'Carnívoros predadores, herbívoros (iguanas e tartarugas marinhas) e onívoros.',
    reproduction: 'Fecundação interna obrigatória (com hemipênis em escamados ou pênis em quelônios/crocodilianos); majoritariamente ovíparos terrestres, com viviparidade em várias serpentes.',
    thermoregulation: 'Ectotérmico (dependem de insolação comportamental e termorregulação com o ambiente)',
    habitats: ['Desertos áridos', 'Florestas tropicais', 'Savanas', 'Oceanos e rios'],
    ecologicalImportance: 'Predadores reguladores de roedores e insetos; equilíbrio trófico em múltiplos ecossistemas.',
    evolutionaryNotes: 'Classificação moderna: "répteis" tradicionais são parafiléticos a menos que incluam as aves, que evoluíram dentro da linhagem dos arcossauros.'
  },
  {
    name: 'Aves',
    category: 'Vertebrados',
    scientificClade: 'Aves / Dinosauria Aviana',
    representativeSpecies: 'Arara-azul-grande, Tucano-toco, Pinguim-imperador e Harpia',
    photoUrl: '/images/species/arara-azul-grande.webp',
    anatomy: 'Membros anteriores modificados em asas para voo batido ou natação. Ossos pneumáticos preenchidos por ar e esterno com quilha para fixação dos músculos peitorais. Coração tetracavitário completo.',
    integument: 'Epiderme coberta por penas de queratina (isolamento térmico e aerodinâmica) e escamas epidérmicas remanescentes nos pés.',
    respiration: 'Sistema respiratório mais eficiente do reino animal: pulmões parabronquiais conectados a sacos aéreos com fluxo de ar contínuo e unidirecional.',
    diet: 'Ampla especialização: frugívoros, carnívoros rapineiros, insetívoros, piscívoros e nectarívoros.',
    reproduction: 'Ovíparos exclusivos com ovos calcificados rígidos; fecundação interna e cuidado parental avançado com incubação.',
    thermoregulation: 'Endotérmico (mantêm temperatura interna estável entre 39°C e 42°C por taxa metabólica alta)',
    habitats: ['Todos os continentes e oceanos do globo, desde as florestas tropicais até os polos congelados'],
    ecologicalImportance: 'Polinização biológica, dispersão massiva de sementes nativas e controle de pragas agrícolas.',
    evolutionaryNotes: 'São dinossauros terópodes manirraptores emplumados vivos, intimamente aparentados aos extintos Velociraptor e Tyrannosaurus.'
  },
  {
    name: 'Mamíferos',
    category: 'Vertebrados',
    scientificClade: 'Mammalia (Monotremata, Marsupialia, Eutheria/Placentalia)',
    representativeSpecies: 'Onça-pintada, Capivara, Baleia-azul, Morcego-vampiro e Ser humano',
    photoUrl: '/images/species/onca-pintada.webp',
    anatomy: 'Presença de glândulas mamárias produtoras de leite, presença de pelos queratinosos, três ossículos na orelha média (martelo, bigorna e estribo) e músculo diafragma muscular para ventilação torácica.',
    integument: 'Pele estratificada rica em glândulas sudoríparas, sebáceas e mamárias; pelagem protetora e camada subdérmica de tecido adiposo (hipoderme).',
    respiration: 'Pulmonar alveolar com ramificações bronquiais e movimentação ativa do diafragma.',
    diet: 'Especialistas e generalistas: herbívoros ruminantes, carnívoros, onívoros, frugívoros e hematófagos.',
    reproduction: 'Fecundação interna; viviparidade com placenta nutritiva complexa (na imensa maioria placentária), marsupiais com desenvolvimento em bolsa e raros monotremados ovíparos (ornitorrinco).',
    thermoregulation: 'Endotérmico e homeotérmico (geração contínua de calor metabólico)',
    habitats: ['Terrestres, subterrâneos, arborícolas, aquáticos marinhos/fluviais e aéreos (morcegos)'],
    ecologicalImportance: 'Engenheiros de ecossistemas, grandes pastadores, dispersores de sementes e predadores ápice.',
    evolutionaryNotes: 'Derivaram dos répteis sinápsidos (terapsídeos) no Triássico e diversificaram-se explosivamente após a extinção do Cretáceo-Paleogeno há 66 milhões de anos.'
  }
];

export const phylogeneticNodes = [
  {
    id: 'ancestral-deuterostomio',
    name: 'Ancestral Deuterostômio',
    age: '~560 Ma (Ediacarano)',
    synapomorphy: 'Blastóporo origina o ânus; clivagem radial e indeterminada',
    descendants: ['Equinodermos (estrelas, ouriços)', 'Hemicordados', 'Filo Chordata'],
    note: 'Demonstra que os cordados compartilham um ancestral comum mais próximo com ouriços e estrelas-do-mar do que com insetos ou moluscos!'
  },
  {
    id: 'chordata-raiz',
    name: 'Origem do Filo Chordata',
    age: '~535 Ma (Cambriano Inferior)',
    synapomorphy: 'Notocorda, Tubo nervoso dorsal e oco, Fendas faringianas, Endóstilo, Cauda pós-anal',
    descendants: ['Cefalocordados (Anfioxos)', 'Clado Olfactores (Tunicados + Vertebrados)'],
    note: 'Fósseis fundamentais como Pikaia gracilens e Yunnanozoon registram essa anatomia inaugural.'
  },
  {
    id: 'olfactores',
    name: 'Clado Olfactores',
    age: '~530 Ma',
    synapomorphy: 'Estruturas sensoriais cefálicas emparelhadas e sistema olfativo anterior',
    descendants: ['Tunicata (Ascídias, Salpas)', 'Vertebrata (Craniata)'],
    note: 'A filogenia molecular refutou a visão antiga de que o anfioxo era o parente mais próximo dos vertebrados: os tunicados são o grupo irmão real dos vertebrados!'
  },
  {
    id: 'vertebrata-craniata',
    name: 'Subfilo Vertebrata / Craniata',
    age: '~518 Ma',
    synapomorphy: 'Crânio cartilaginoso/ósseo, cristas neurais embrionárias, encéfalo tripartido, esqueleto axial reforçado',
    descendants: ['Cyclostomata (Lampreias e Feiticeiras)', 'Gnathostomata (Vertebrados com mandíbulas)'],
    note: 'As cristas neurais constituem um quarto folheto germinativo funcional, permitindo a formação da cabeça e sentidos complexos.'
  },
  {
    id: 'gnathostomata',
    name: 'Infratipo Gnathostomata (Mandibulados)',
    age: '~440 Ma (Siluriano)',
    synapomorphy: 'Mandíbulas articuladas derivadas do 1º arco faringiano, nadadeiras pares (peitorais e pélvicas), dentes mineralizados',
    descendants: ['Chondrichthyes (Cartilaginosos)', 'Osteichthyes (Peixes Ósseos e linhagem dos Tetrápodes)'],
    note: 'A mandíbula permitiu que vertebrados deixassem de ser meros filtradores de fundo para se tornarem predadores ativos ferozes.'
  },
  {
    id: 'osteichthyes-sarcopterygii',
    name: 'Clado Sarcopterygii (Nadadeiras Lobadas)',
    age: '~410 Ma (Devoniano)',
    synapomorphy: 'Nadadeiras com suporte esquelético ósseo axial monobasal (homólogo ao úmero/fêmur), esmalte dentário verdadeiro',
    descendants: ['Actinistia (Celacantos)', 'Dipnoi (Peixes pulmonados)', 'Tetrapoda (Vertebrados terrestres de 4 membros)'],
    note: 'Você e todos os animais terrestres são tecnicamente sarcopterígeos modificados!'
  },
  {
    id: 'tetrapoda',
    name: 'Superclasse Tetrapoda',
    age: '~375 Ma (Devoniano Superior)',
    synapomorphy: 'Quatro membros articulados com dígitos (dedos), cintura escapular separada do crânio (pescoço móvel)',
    descendants: ['Amphibia (Anuros, Urodelos, Gimnofionos)', 'Amniota (Vertebrados com ovo terrestre)'],
    note: 'O fóssil de transição Tiktaalik roseae evidencia a passagem entre nadadeira e punho com dedos.'
  },
  {
    id: 'amniota',
    name: 'Clado Amniota',
    age: '~318 Ma (Carbonífero)',
    synapomorphy: 'Ovo amniótico com quatro anexos embrionários (ânion, córion, alantoide, vitelo), pele queratinizada impermeável',
    descendants: ['Synapsida (Linhagem dos Mamíferos)', 'Sauropsida / Diapsida (Répteis e Aves)'],
    note: 'A emancipação completa da água: a piscina embrionária foi empacotada dentro da casca do ovo!'
  },
  {
    id: 'sauropsida-aves',
    name: 'Arcossauros e Dinossauros Aviários (Aves)',
    age: '~150 Ma (Jurássico)',
    synapomorphy: 'Penas assimétricas, asas aerodinâmicas, endotermia, ossos pneumáticos, quilha no esterno',
    descendants: ['Aves modernas (Neornithes)'],
    note: 'As aves não apenas "evoluíram dos répteis": na sistemática filogenética moderna, as aves SÃO dinossauros arcossauros répteis vivos!'
  }
];

export const habitatsData: HabitatInfo[] = [
  {
    id: 'oceanos',
    name: 'Oceanos e Mares Pelágicos',
    description: 'Cobrem mais de 70% da superfície terrestre, estendendo-se desde as zonas epipelágicas banhadas por luz solar até os abismos abissais com pressões colossais.',
    environmentalChallenges: ['Pressão hidrostática extrema', 'Osmorregulação em água salgada', 'Escassez de luz abaixo de 200m', 'Flutuabilidade neutra'],
    chordateAdaptations: [
      'Gordura subdérmica espessa (blubber) e pulmões elásticos em cetáceos',
      'Glândulas de sal para eliminação de excesso iônico em aves marinhas e tartarugas',
      'Ampolas eletro-receptoras de Lorenzini e escamas hidrodinâmicas em tubarões',
      'Fotóforos de bioluminescência para atração e camuflagem em peixes abissais'
    ],
    examples: ['Baleia-azul', 'Tubarão-branco', 'Tartaruga-verde', 'Anfioxo'],
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'rios-lagos',
    name: 'Rios, Lagos e Águas Continentais',
    description: 'Ecossistemas fluviais de água doce altamente dinâmicos, sujeitos a cheias e secas sazonais e correntes d’água intensas.',
    environmentalChallenges: ['Entrada maciça de água por osmose', 'Variação rápida de oxigênio dissolvido', 'Turbidez e correnteza'],
    chordateAdaptations: [
      'Rins com glomérulos grandes para excreção massiva de água diluída',
      'Respiração aérea acessória obrigatória (bexiga vascularizada no pirarucu e pulmões em dipnoicos)',
      'Eletropercepção e barbilhões sensoriais para navegação em águas barrentas'
    ],
    examples: ['Pirarucu', 'Peixe-boi da Amazônia', 'Lontra', 'Poraquê (peixe-elétrico)'],
    nativeVsIntroducedAlert: 'A introdução de espécies exóticas como Tilápia, Carpa e Tucunaré em bacias fora de sua distribuição original provoca a predação de espécies nativas e competição voraz.',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-77ef2d0cf96c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'florestas-tropicais',
    name: 'Florestas Tropicais (Amazônia e Mata Atlântica)',
    description: 'Biomas de extrema complexidade vertical com copas densas, alta umidade contínua e a maior biodiversidade animal do planeta Terra.',
    environmentalChallenges: ['Disputa acirrada por nichos ecológicos', 'Competição visual sob dossel fechado', 'Predadores furtivos'],
    chordateAdaptations: [
      'Cauda preênsil desenvolvida independentemente em primatas, tamanduás, preguiças e serpentes',
      'Vocalizações potentes de longo alcance (araras, bugios e anfíbios) para comunicação através da folhagem',
      'Pele permeável em anfíbios favorecida pela umidade relativa perene'
    ],
    examples: ['Onça-pintada', 'Arara-azul', 'Jiboia', 'Surucucu-pico-de-jaca', 'Axolote (lacustre)'],
    imageUrl: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'cerrado',
    name: 'Cerrado e Savanas',
    description: 'Savana mais biodiversa do mundo, com estações secas prolongadas, solos com alumínio e regime natural de fogo sazonal.',
    environmentalChallenges: ['Escassez de água superficial por até 6 meses', 'Incêndios periódicos', 'Ampla amplitude térmica diária'],
    chordateAdaptations: [
      'Hábitos fossoriais e escavação de tocas subterrâneas térmicas (tatu-canastra e roedores)',
      'Pernas longas e visão aguçada para locomoção rápida em campos abertos (lobo-guará, ema e seriema)',
      'Bicos eficientes para quebrar castanhas de palmeiras resistentes ao fogo'
    ],
    examples: ['Lobo-guará', 'Tamanduá-bandeira', 'Tucano-toco', 'Ema'],
    imageUrl: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'caatinga',
    name: 'Caatinga (Semiárido Brasileiro)',
    description: 'Único bioma exclusivamente brasileiro, caracterizado por vegetação caducifólia xerófila e clima semiárido quente com chuvas escassas e irregulares.',
    environmentalChallenges: ['Altíssima evapotranspiração', 'Secas severas plurianuais', 'Escassez de alimento verde'],
    chordateAdaptations: [
      'Estivação: anfíbios como o sapo-cururu e anuros fossoriais se enterram e reduzem drasticamente o metabolismo esperando a chuva',
      'Excreção de ácido úrico altamente concentrado em répteis e aves sem perda de água',
      'Pelagem clara e hábitos estritamente crepusculares e noturnos'
    ],
    examples: ['Ararinha-azul', 'Mocó (roedor rupestre)', 'Cascavel', 'Tatu-bola-da-caatinga'],
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'pantanal',
    name: 'Pantanal Mato-Grossense',
    description: 'A maior planície inundável contínua do globo, alternando ciclos espetaculares de vazante e cheia que transformam a paisagem.',
    environmentalChallenges: ['Inundações periódicas maciças', 'Concentração de presas em baías na seca'],
    chordateAdaptations: [
      'Membranas interdigitais e caudas achatadas propulsoras para vida anfíbia (capivara, ariranha e jacaré)',
      'Migrações sincronizadas de aves pernaltas e psitacídeos em busca de peixes e sementes nas lagoas rasas',
      'Capacidade de alimentar-se de carcaças ou peixes em poças efêmeras'
    ],
    examples: ['Jacaré-do-pantanal', 'Capivara', 'Tuiuiú', 'Onça-pintada', 'Arara-azul-grande'],
    imageUrl: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'regioes-polares',
    name: 'Regiões Polares e Criosfera',
    description: 'Ambientes glaciais extremos do Ártico e da Antártica, com temperaturas que atingem -60°C e calotas de gelo permanentes.',
    environmentalChallenges: ['Frio congelante contínuo', 'Ventos catabáticos velozes', 'Noite polar contínua durante meses'],
    chordateAdaptations: [
      'Proteínas anticongelantes no plasma de peixes nototênicos para evitar cristalização do sangue',
      'Quatro camadas de penas hidrofóbicas densas e gordura profunda em pinguins',
      'Comportamento cooperativo de agrupamento térmico ("huddling") para reter calor coletivo'
    ],
    examples: ['Pinguim-imperador', 'Urso-polar', 'Foca-de-weddell', 'Baleia-da-groenlândia'],
    imageUrl: 'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'urbanos',
    name: 'Ambientes Urbanos e Antropizados',
    description: 'Cidades, bairros periféricos e parques metropolitanos moldados intensamente pelas atividades e construções humanas.',
    environmentalChallenges: ['Tráfego de veículos e atropelamentos', 'Poluição luminosa e sonora', 'Presença de animais domésticos predadores (gatos e cães)'],
    chordateAdaptations: [
      'Comportamento sinantrópico oportunista com aproveitamento de lixo orgânico',
      'Nidificação em telhados, pontes e forros de prédios (pombos, andorinhas e morcegos urbanos)',
      'Plasticidade comportamental e tolerância à aproximação humana (capivaras em marginais de rios e parques)'
    ],
    examples: ['Capivara', 'Morcego-vampiro', 'Sapo-cururu', 'Pombo-doméstico', 'Gambá-de-orelha-preta'],
    nativeVsIntroducedAlert: 'Espécies domésticas invasoras, especialmente gatos domésticos soltos (Felis catus), causam anualmente a predação e morte de bilhões de aves silvestres, pequenos répteis e anfíbios em todo o mundo.',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=80'
  }
];

export const dangerData: DangerCategory[] = [
  {
    title: 'Serpentes Peçonhentas vs Não-Peçonhentas',
    subtitle: 'Acidentes Ofídicos no Brasil: Espécies de Interesse Médico',
    dangerType: 'Peçonhento',
    riskReality: 'No Brasil ocorrem cerca de 30.000 acidentes ofídicos anuais, sendo a maioria (mais de 85%) provocada por jararacas (Bothrops), seguidas por cascavéis (Crotalus), surucucus (Lachesis) e corais-verdadeiras (Micrurus). Jiboias, caninanas e sucuris NÃO são peçonhentas e não inoculam toxinas.',
    prevention: [
      'Usar botas de cano alto ou perneiras de couro ao caminhar em trilhas, matas ou áreas agrícolas (evita até 80% das picadas).',
      'Nunca enfiar as mãos em buracos no chão, ocos de árvores, pilhas de lenha ou sob folhas sem auxílio de um graveto longo.',
      'Manter os arredores de residências limpos de entulhos e controlar roedores, que são o principal atrativo alimentar das serpentes.'
    ],
    firstAid: [
      'Ligue imediatamente 192 (SAMU) ou transporte a vítima urgentemente para o hospital mais próximo com soroterapia.',
      'Lave o local da picada apenas com água e sabão neutro.',
      'Mantenha a vítima calma e hidratada, com o membro atingido elevado.',
      'NUNCA faça torniquete ou garrote (aumenta brutalmente o risco de amputação e necrose).',
      'NUNCA corte, perfure, queime ou chupe o local da ferida.',
      'NÃO aplique fumo, querosene, café ou ervas na ferida.'
    ],
    officialContact: 'Disque-Intoxicação (ANVISA): 0800 722 6001 | SAMU: 192 | Bombeiros: 193 | Instituto Butantan: (11) 2627-9300',
    speciesExamples: ['Jararaca (Bothrops jararaca)', 'Cascavel (Crotalus durissus)', 'Surucucu-pico-de-jaca (Lachesis muta)', 'Coral-verdadeira (Micrurus corallinus)']
  },
  {
    title: 'Anfíbios com Secreções Cutâneas Tóxicas',
    subtitle: 'Venenos Passivos: Defesa Química sem Inoculação Ativa',
    dangerType: 'Tóxico',
    riskReality: 'Anfíbios como sapos-cururus e rãs dendrobatídeas são venenosos (tóxicos), e NÃO peçonhentos. Eles não possuem dentes ocos, ferrões ou espinhos para injetar o veneno. A toxina permanece guardada nas glândulas da pele e só atua se o predador morder, mastigar ou ingerir o animal, ou se houver contato com mucosas e olhos.',
    prevention: [
      'Não permitir que cães ou gatos persigam ou abocanhem sapos em quintais e jardins à noite.',
      'Não manusear anfíbios coloridos silvestres com as mãos desprotegidas.',
      'Após qualquer contato com sapos, lavar as mãos antes de tocar nos olhos, nariz ou boca.',
      'Combater mitos sensacionalistas: sapos NÃO "esguicham veneno nos olhos" de ninguém à distância.'
    ],
    firstAid: [
      'Se um cão morder um sapo: lave a boca do pet imediatamente com jato suave de água corrente para frente (não engolir a espuma tóxica) e leve urgente ao médico veterinário.',
      'Se houver contato humano com mucosas: lave abundantemente com soro fisiológico ou água limpa por 15 minutos.'
    ],
    officialContact: 'Hospital Veterinário de Urgência local e Centros de Informações Toxicológicas (CIATox).',
    speciesExamples: ['Sapo-cururu (Rhinella marina)', 'Rã-dardo-dourada (Phyllobates terribilis)']
  },
  {
    title: 'Grandes Predadores e Defesa Territorial',
    subtitle: 'Onças, Jacarés e Tubarões: Coexistência e Respeito aos Limites Naturais',
    dangerType: 'Ataque Defensivo',
    riskReality: 'Ataques de grandes predadores cordados a seres humanos são extremamente raros no Brasil e no mundo. A vasta maioria decorre de acidentes provocados por aproximação indevida, encurralamento do animal, defesa de filhotes recém-nascidos ou desova, ou confusão visual no caso de tubarões em praias turvas.',
    prevention: [
      'Em praias com histórico de incidentes com tubarões (ex: costa de Recife), respeitar rigorosamente as bandeiras e não entrar na água em maré alta, águas turvas, após chuvas ou ao entardecer.',
      'Nunca nadar próximo a saídas de esgoto ou áreas de descarte de peixes.',
      'Em áreas pantaneiras ou amazônicas com jacarés e onças, não alimentar animais silvestres ("cevas"), pois isso remove o medo natural que sentem dos humanos.',
      'Não acampar na margem imediata da água nem deixar animais domésticos soltos em áreas de mata virgem.'
    ],
    firstAid: [
      'Em caso de lesão por mordedura: retirar imediatamente a vítima do ambiente aquático ou isolado.',
      'Conter hemorragia com compressão firme e direta com tecido limpo ou torniquete pré-hospitalar em membros.',
      'Acionar socorro médico 192 urgente; iniciar prevenção contra tétano e antibióticos específicos para flora bucal silvestre.'
    ],
    officialContact: 'Corpo de Bombeiros Militar: 193 | SAMU: 192 | Polícia Militar Ambiental local.',
    speciesExamples: ['Onça-pintada (Panthera onca)', 'Jacaré-açu (Melanosuchus niger)', 'Tubarão-branco (Carcharodon carcharias)']
  },
  {
    title: 'Mamíferos e Aves como Vetores de Doenças (Zoonoses)',
    subtitle: 'Raiva, Febre Maculosa e Vigilância Epidemiológica',
    dangerType: 'Zoonoses',
    riskReality: 'Determinados mamíferos podem atuar como reservatórios de agentes infecciosos graves. Morcegos (insetívoros, frugívoros ou hematófagos) podem albergar o vírus da Raiva; capivaras podem hospedar o carrapato-estrela transmissor da Febre Maculosa; aves silvestres e domésticas podem carregar cepas virais de Influenza Aviária.',
    prevention: [
      'NUNCA tocar em morcegos encontrados caídos no chão ou empoleirados em locais ensolarados durante o dia (comportamento atípico é sinal de adoecimento por raiva).',
      'Evitar contato físico ou sentar em gramados públicos frequentados por grupos de capivaras sem verificação prévia de carrapatos.',
      'Não manusear aves silvestres doentes ou mortas encontradas em praias ou lagoas.',
      'Manter cães e gatos vacinados anualmente contra a raiva.'
    ],
    firstAid: [
      'Em caso de mordedura ou arranhão por morcego, cão, gato ou animal silvestre desconhecido: lavar exaustivamente com água corrente e sabão por 15 minutos.',
      'Procurar IMEDIATAMENTE uma Unidade Básica de Saúde (UBS) ou UPA para avaliação de profilaxia pós-exposição da Raiva (vacina e soro antirrábico humano).',
      'Caso encontre carrapatos no corpo após visita a áreas com capivaras: retirar com pinça tracionando perpendicularmente sem esmagar; se houver febre súbita, dor de cabeça e dores musculares em até 15 dias, avisar o médico sobre a exposição.'
    ],
    officialContact: 'Centro de Controle de Zoonoses (CCZ) de seu município | Disque Saúde: 136 | SAMU: 192',
    speciesExamples: ['Morcego-vampiro-comum (Desmodus rotundus)', 'Capivara (Hydrochoerus hydrochaeris)']
  }
];

export const evolutionTimeline: TimelineEvent[] = [
  {
    period: 'Cambriano Inferior',
    mya: '535 - 518 Ma',
    milestone: 'A Explosão Cambriana e a Gênese dos Cordados',
    description: 'Surgem no registro fóssil os primeiros organismos com as sinapomorfias definitivas dos cordados. Espécies como Pikaia gracilens (Folhelho de Burgess, Canadá) e Haikouichthys ercaicunensis (Xisto de Maotianshan, China) já exibem notocorda, miótomos em "V" e protótipos de olhos e brânquias.',
    keyFossilsOrClades: 'Pikaia, Haikouichthys, Myllokunmingia',
    scientificConfidence: 'Evidência Fóssil Comprovada'
  },
  {
    period: 'Ordoviciano ao Siluriano',
    mya: '485 - 420 Ma',
    milestone: 'A Revolução da Mandíbula e Peixes Couraçados',
    description: 'Os vertebrados deixam a alimentação puramente filtradora. A modificação dos arcos viscerais da faringe dá origem às primeiras mandíbulas articuladas nos Placodermos (peixes couraçados com placas ósseas dérmicas), transformando os cordados em predadores dominantes dos mares.',
    keyFossilsOrClades: 'Ostracodermos (sem mandíbula), Placodermos (Dunkleosteus), Primeiros Acantódios',
    scientificConfidence: 'Evidência Fóssil Comprovada'
  },
  {
    period: 'Devoniano Superior',
    mya: '385 - 365 Ma',
    milestone: 'A Transição Água-Terra e Origem dos Tetrápodes',
    description: 'Peixes sarcopterígeos de nadadeiras carnosas começam a rastejar em pântanos rasos anóxicos. Desenvolvem pescoço articulado independente da cintura escapular, ossos de membros com um osso longo articulado a dois ossos (estilo úmero-rádio-ulna) e pulmões funcionais para respirar ar atmosférico.',
    keyFossilsOrClades: 'Eusthenopteron, Tiktaalik roseae, Acanthostega, Ichthyostega',
    scientificConfidence: 'Evidência Fóssil Comprovada'
  },
  {
    period: 'Carbonífero',
    mya: '350 - 300 Ma',
    milestone: 'O Ovo Amniótico e a Radiação dos Amniotas',
    description: 'A invenção do ovo com casca resistente e quatro membranas anexas liberta a reprodução da necessidade de lagoas e poças d’água. Ocorre a cisão fundamental entre duas grandes linhagens de vertebrados terrestres: Synapsida (ancestrais dos mamíferos) e Sauropsida (ancestrais de répteis e aves).',
    keyFossilsOrClades: 'Hylonomus, Dimetrodon (sinápsido fóssil)',
    scientificConfidence: 'Evidência Fóssil Comprovada'
  },
  {
    period: 'Jurássico ao Cretáceo',
    mya: '200 - 66 Ma',
    milestone: 'Domínio dos Dinossauros e Origem das Aves e Primeiros Mamíferos',
    description: 'Enquanto os grandes dinossauros dominavam a terra firme, terópodes coelurossauros desenvolveram penas para isolamento térmico e exibição, evoluindo subsequentemente para o voo batido. Simultaneamente, mamíferos noturnos diminutos aprimoram a endotermia, pelos e lactação sob a sombra dos répteis.',
    keyFossilsOrClades: 'Archaeopteryx lithographica, Confuciusornis, Morganucodon',
    scientificConfidence: 'Evidência Fóssil Comprovada'
  },
  {
    period: 'Cenozoico ao Presente',
    mya: '66 Ma - Atual',
    milestone: 'Radiação dos Mamíferos Modernos e Aves Modernas',
    description: 'Após o impacto do asteroide Chicxulub no fim do Cretáceo e o colapso dos dinossauros não-avianos, mamíferos e aves sobrevivem e diversificam-se velozmente, colonizando a terra, o céu e regressando aos oceanos (como baleias e golfinhos). Ocorre a evolução dos primatas e o surgimento do Homo sapiens.',
    keyFossilsOrClades: 'Pakicetus (ancestral das baleias), Neornithes, Primatas e Hominídeos',
    scientificConfidence: 'Consenso com Hipóteses Ativas'
  }
];

export const conservationData = {
  ecosystemServices: [
    {
      title: 'Polinização Biológica',
      description: 'Centenas de espécies de aves (como beija-flores e cambacicas) e mamíferos voadores (morcegos glossofagíneos) polinizam flores silvestres e espécies agrícolas essenciais (manga, maracujá, cactos e agave).',
      icon: 'Flower'
    },
    {
      title: 'Dispersão de Sementes',
      description: 'Aves frugívoras (tucanos, araras, jacutingas) e mamíferos (antas, primatas, morcegos) ingerem frutos e dispersam sementes a quilômetros de distância com fezes fertilizadas, permitindo a regeneração contínua de matas tropicais.',
      icon: 'Sprout'
    },
    {
      title: 'Controle de Pragas e Vetores',
      description: 'Sapos, rãs, lagartos, aves insetívoras e morcegos consomem diariamente toneladas de mosquitos transmissores de dengue, malária e febre amarela, além de besouros e lagartas agrícolas nocivas.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Engenharia e Ciclagem de Nutrientes',
      description: 'Baleias fertilizam oceanos trazendo ferro do fundo até a superfície fotossintética ("whale pump"); jacarés escavam tanques que preservam a vida aquática na seca do Pantanal.',
      icon: 'Waves'
    }
  ],
  majorThreats: [
    {
      title: 'Destruição e Fragmentação de Habitats',
      detail: 'O desmatamento na Amazônia, no Cerrado e na Mata Atlântica para expansão agropecuária e monoculturas isola populações em fragmentos florestais sem fluxo gênico.'
    },
    {
      title: 'Mudanças Climáticas Globais',
      detail: 'O aumento das temperaturas altera o sexo biológico de filhotes de tartarugas marinhas e crocodilianos (determinado pela temperatura do ninho), acidifica oceanos e extirpa anfíbios sensíveis.'
    },
    {
      title: 'Caça Ilegal e Tráfico de Fauna Silvestre',
      detail: 'Milhões de aves canoras (como curiós e coleiros), psitacídeos e répteis são retirados cruelmente dos biomas brasileiros todos os anos para o comércio clandestino de animais de estimação.'
    },
    {
      title: 'Espécies Exóticas Invasoras',
      detail: 'A introdução de javaporcos, tilápias em bacias do sudeste, mexilhões-dourados e sapos-cururus na Austrália devasta a fauna nativa que não possui adaptações para competir ou se defender.'
    },
    {
      title: 'Poluição e Plástico nos Oceanos',
      detail: 'Tartarugas marinhas confundem sacolas plásticas com águas-vivas e morrem por asfixia gástrica; redes de pesca fantasmas afogam cetáceos e tubarões continuadamente.'
    }
  ],
  conservationProjects: [
    {
      name: 'Projeto TAMAR',
      scope: 'Conservação de Tartarugas Marinhas no Brasil',
      url: 'https://www.tamar.org.br',
      achievement: 'Mais de 40 anos de proteção costeira; salvou e devolveu ao mar mais de 45 milhões de filhotes de tartarugas no litoral brasileiro.'
    },
    {
      name: 'Instituto Arara Azul',
      scope: 'Pantanal Mato-Grossense',
      url: 'https://www.institutoararaazul.org.br',
      achievement: 'Instalação de ninhos artificiais e monitoramento de ninhos naturais, quadruplicando a população selvagem da arara-azul-grande.'
    },
    {
      name: 'Projeto Baleia Jubarte',
      scope: 'Banco dos Abrolhos e Litoral do Brasil',
      url: 'https://www.baleiajubarte.org.br',
      achievement: 'A população de baleias jubarte na costa brasileira saltou de cerca de 1.000 para mais de 30.000 indivíduos com a proibição da caça comercial.'
    },
    {
      name: 'ICMBio / Centros Nacionais Especializados',
      scope: 'CENAP, RAN, CEMAVE e CEPENE',
      url: 'https://www.icmbio.gov.br',
      achievement: 'Elaboração e execução dos Planos de Ação Nacional (PAN) para Conservação de Espécies Ameaçadas de Extinção da fauna brasileira.'
    }
  ]
};

export const faqList: FAQItem[] = [
  {
    id: 'o-que-sao-cordados',
    question: 'O que são cordados?',
    category: 'Geral',
    answer: 'Os cordados são animais pertencentes ao filo Chordata, um grupo diversificado do reino animal que inclui desde criaturas marinhas simples (como anfioxos e ascídias) até todos os vertebrados conhecidos: peixes, anfíbios, répteis, aves e mamíferos. Todos compartilham simetria bilateral, desenvolvimento embrionário deuterostômio e um plano corporal dorsal característico.'
  },
  {
    id: 'quais-caracteristicas-fundamentais',
    question: 'Quais são as características fundamentais dos cordados?',
    category: 'Anatomia',
    answer: 'Todos os cordados apresentam, em pelo menos uma fase do seu ciclo de vida (geralmente no embrião ou larva), cinco características diagnósticas exclusivas (sinapomorfias): 1) Notocorda (bastão dorsal de sustentação); 2) Tubo nervoso dorsal e oco; 3) Fendas ou bolsas faringianas; 4) Endóstilo ou glândula tireoide homóloga; e 5) Cauda pós-anal muscular.'
  },
  {
    id: 'diferenca-cordados-vertebrados',
    question: 'Qual é a diferença entre cordados e vertebrados?',
    category: 'Classificação',
    answer: 'Todo vertebrado é um cordado, mas nem todo cordado é um vertebrado! O filo Chordata se divide em três subfilos: Cephalochordata (anfioxos), Tunicata (ascídias) e Vertebrata (animais com crânio e coluna vertebral). Anfioxos e ascídias são cordados invertebrados (protocordados), pois possuem notocorda, mas nunca desenvolvem vértebras nem crânio ósseo.'
  },
  {
    id: 'quais-principais-grupos',
    question: 'Quais são os principais grupos de cordados?',
    category: 'Classificação',
    answer: 'O filo Chordata compreende os Cefalocordados (anfioxo), os Tunicados (ascídias e salpas) e os Vertebrados. Dentro dos vertebrados, encontram-se tradicionalmente os peixes ágnatos (lampreias), os peixes cartilaginosos (tubarões e raias), os peixes ósseos (pirarucus e atuns), os anfíbios (sapos e salamandras), os répteis (tartarugas, lagartos e crocodilianos), as aves e os mamíferos.'
  },
  {
    id: 'o-que-sao-protocordados',
    question: 'O que são protocordados?',
    category: 'Grupos',
    answer: 'Protocordados (ou cordados invertebrados) é uma designação tradicional que reúne os dois subfilos que não possuem crânio nem coluna vertebral: Cephalochordata e Tunicata (Urochordata). São organismos estritamente marinhos, em geral filtradores, fundamentais para a ciência evolutiva porque mostram como era a anatomia dos cordados primitivos antes do surgimento dos ossos e mandíbulas.'
  },
  {
    id: 'o-que-e-notocorda',
    question: 'O que é uma notocorda?',
    category: 'Anatomia',
    answer: 'A notocorda (chorda dorsalis) é um bastão semirrígido, flexível e cartilaginoso que atua como o eixo de sustentação primordial dos cordados. Nos embriões dos vertebrados ela comanda a formação do sistema nervoso; nos adultos da maioria dos vertebrados com mandíbula, ela é substituída pela coluna vertebral, restando apenas no centro dos discos intervertebrais (núcleo pulposo).'
  },
  {
    id: 'todo-cordado-tem-coluna',
    question: 'Todo cordado tem coluna vertebral?',
    category: 'Anatomia',
    answer: 'Não! Anfioxos e ascídias não possuem coluna vertebral em nenhuma fase de sua vida. Além disso, mesmo entre os vertebrados primitivos, as feiticeiras (Myxini) possuem crânio rudimentar mas carecem de vértebras completas. A presença universal obrigatória no filo é da notocorda, e não da coluna vertebral.'
  },
  {
    id: 'importancia-ecologica',
    question: 'Qual é a importância dos cordados para o meio ambiente?',
    category: 'Ecologia',
    answer: 'Os cordados desempenham papéis ecológicos insubstituíveis nos ecossistemas globais: atuam como polinizadores (aves e morcegos), dispersores primários de sementes (mamíferos e aves), predadores de topo que equilibram cadeias tróficas (onças, tubarões e falcões), controladores de pragas e vetores de doenças (anfíbios comendo mosquitos) e recicladores de nutrientes oceânicos (baleias e peixes).'
  },
  {
    id: 'cordados-comuns-brasil',
    question: 'Quais são os cordados mais comuns no Brasil?',
    category: 'Biodiversidade',
    answer: 'O Brasil é o país com a maior biodiversidade do planeta. Entre os cordados mais emblemáticos e frequentes em nossos biomas estão a onça-pintada, a capivara, o tamanduá-bandeira, o lobo-guará, o mico-leão-dourado, a arara-azul, o tucano-toco, o bem-te-vi, o jacaré-do-pantanal, a jiboia, o sapo-cururu e peixes icônicos como o pirarucu, o dourado e o tucunaré.'
  },
  {
    id: 'quais-podem-ser-perigosos',
    question: 'Quais cordados podem ser perigosos para os seres humanos?',
    category: 'Segurança',
    answer: 'A maioria dos cordados foge da presença humana e é inofensiva. Os riscos reais decorrem de animais que se defendem ao serem pisados ou encurralados: serpentes peçonhentas (jararacas, cascavéis e surucucus), grandes predadores provocados (onças, jacarés grandes ou tubarões em praias perigosas) ou transmissão de doenças (como morcegos com vírus da raiva ou capivaras com carrapatos transmissores de febre maculosa). Respeitar a distância e o habitat previne praticamente todos os acidentes.'
  },
  {
    id: 'principais-ameacas-extincao',
    question: 'Quais são as principais ameaças aos cordados?',
    category: 'Conservação',
    answer: 'As maiores ameaças à sobrevivência dos cordados decorrem de ações humanas: desmatamento e fragmentação de florestas, incêndios florestais criminosos, mudanças climáticas, poluição das águas por mercúrio e esgoto, plástico nos oceanos, caça predatória, pesca predatória com redes de arrasto e o tráfico ilegal de animais silvestres.'
  },
  {
    id: 'classificacao-cientifica-atual',
    question: 'Como os cordados são classificados cientificamente?',
    category: 'Classificação',
    answer: 'A classificação biológica moderna é filogenética (cladística), baseada no parentesco evolutivo e DNA, e não apenas na semelhança visual externa. Sob essa ótica: 1) Tunicados e vertebrados formam o clado Olfactores; 2) "Peixes" é um agrupamento parafilético (não forma um grupo monofilético único sem incluir os animais terrestres); e 3) As aves são formalmente dinossauros arcossauros pertencentes à linhagem dos répteis.'
  }
];

export const scientificSourcesList: ScientificSource[] = [
  {
    title: 'IUCN Red List of Threatened Species',
    institution: 'União Internacional para a Conservação da Natureza (IUCN)',
    url: 'https://www.iucnredlist.org',
    purpose: 'Avaliação de Risco de Extinção e Conservação Global',
    description: 'A autoridade mundial sobre o estado de conservação global da biodiversidade vegetal e animal, com dados sobre ameaças, tamanhos populacionais e medidas de proteção.'
  },
  {
    title: 'Animal Diversity Web (ADW)',
    institution: 'Universidade de Michigan (Museum of Zoology)',
    url: 'https://animaldiversity.org',
    purpose: 'Banco de Dados Zoológico Educativo e Acadêmico',
    description: 'Enciclopédia de história natural online, cobrindo anatomia, hábitos alimentares, reprodução, distribuição geográfica e comportamento de milhares de espécies de cordados.'
  },
  {
    title: 'GBIF — Global Biodiversity Information Facility',
    institution: 'GBIF Secretariat (Rede Científica Internacional)',
    url: 'https://www.gbif.org',
    purpose: 'Mapeamento de Ocorrência e Registros Geográficos',
    description: 'Plataforma internacional de dados abertos financiada por governos mundiais, fornecendo registros de ocorrência georreferenciados para pesquisas científicas.'
  },
  {
    title: 'Catalogue of Life (CoL)',
    institution: 'Consórcio de Biodiversidade Global',
    url: 'https://www.catalogueoflife.org',
    purpose: 'Revisão Taxonômica e Nomenclatura Científica Válida',
    description: 'O índice mais abrangente e confiável de espécies conhecidas do planeta, validando sinônimos e nomes científicos válidos de acordo com os códigos zoológicos.'
  },
  {
    title: 'WoRMS — World Register of Marine Species',
    institution: 'Flanders Marine Institute (VLIZ)',
    url: 'https://www.marinespecies.org',
    purpose: 'Taxonomia Especializada de Organismos Marinhos',
    description: 'Referência primordial para identificação de espécies marinhas do filo Chordata, incluindo cetáceos, peixes abissais, tunicados e cefalocordados.'
  },
  {
    title: 'Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio)',
    institution: 'Ministério do Meio Ambiente e Mudança do Clima (Brasil)',
    url: 'https://www.icmbio.gov.br',
    purpose: 'Livro Vermelho da Fauna Brasileira Ameaçada de Extinção',
    description: 'Órgão ambiental federal brasileiro responsável pela avaliação do estado de conservação das espécies da fauna nativa do Brasil e gestão de unidades de conservação.'
  },
  {
    title: 'Encyclopaedia Britannica — Chordate Biology',
    institution: 'Britannica Academic',
    url: 'https://www.britannica.com/animal/chordate',
    purpose: 'Referência Enciclopédica e Síntese Didática Introdutória',
    description: 'Revisão e introdução científica consagrada às características gerais, morfologia e ecologia comparada dos cordados.'
  },
  {
    title: 'Instituto Butantan',
    institution: 'Governo do Estado de São Paulo',
    url: 'https://butantan.gov.br',
    purpose: 'Herpetologia Médica, Toxinas e Produção de Soros',
    description: 'Centro de excelência mundial no estudo de animais peçonhentos, desenvolvimento de soros hiperimunes e divulgação científica sobre serpentes e anfíbios.'
  }
];
