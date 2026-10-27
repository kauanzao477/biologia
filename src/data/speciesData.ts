import type { Species } from '../types';

export const speciesList: Species[] = [
  // --- PROTOCHORDATA: CEFALOCORDADOS ---
  {
    id: 'anfioxo',
    commonName: 'Anfioxo',
    scientificName: 'Branchiostoma lanceolatum',
    group: 'Cefalocordados',
    subphylum: 'Cephalochordata',
    classOrClade: 'Leptocardii',
    habitat: 'Fundos arenosos costeiros de mares temperados e tropicais',
    geographicDistribution: 'Oceano Atlântico, Mar Mediterrâneo e Mar do Norte',
    diet: 'Microfágico filtrador (fitoplâncton e diatomáceas)',
    keyCharacteristics: [
      'Retém todas as quatro características clássicas dos cordados na fase adulta',
      'Corpo translúcido, pisciforme e lateralmente comprimido (5 a 7 cm)',
      'Ausência de crânio, encéfalo diferenciado ou vértebras verdadeiras',
      'Miótomos em formato de "V" visíveis ao longo do tronco'
    ],
    conservationStatus: 'LC',
    riskLevel: 'Inofensivo',
    riskDescription: 'Animal diminuto e bentônico, totalmente inofensivo aos humanos.',
    imageUrl: '/images/species/anfioxo.webp',
    imageAuthor: 'Wikimedia Commons / Hans Hillewaert (CC BY-SA 4.0)',
    imageLicense: 'Creative Commons Attribution-Share Alike 4.0',
    curiosities: [
      'A notocorda estende-se até a extremidade anterior da cabeça, auxiliando na escavação da areia (origem do nome Cephalochordata).',
      'Possui mais de 100 fendas faringianas ciliadas usadas na filtração de partículas orgânicas da água do mar.',
      'É um dos modelos mais importantes em embriologia comparada e biologia evolutiva do desenvolvimento (Evo-Devo).'
    ],
    ecologicalRole: 'Consumidor primário bentônico e presa para peixes costeiros; bioindicador da qualidade de sedimentos arenosos.',
    sourceReferences: [
      { name: 'Animal Diversity Web - Branchiostoma', url: 'https://animaldiversity.org/accounts/Branchiostoma/' },
      { name: 'WoRMS - World Register of Marine Species', url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=103328' }
    ]
  },

  // --- PROTOCHORDATA: TUNICADOS ---
  {
    id: 'ascidia',
    commonName: 'Ascídia-comum',
    scientificName: 'Ciona intestinalis',
    group: 'Tunicados',
    subphylum: 'Tunicata',
    classOrClade: 'Ascidiacea',
    habitat: 'Costões rochosos, substratos rígidos artificiais e estuários até 500m de profundidade',
    geographicDistribution: 'Distribuição cosmopolita em oceanos temperados e subtropicais',
    diet: 'Filtrador suspensívoro de matéria orgânica e microrganismos',
    keyCharacteristics: [
      'Larva livre-natante dotada de notocorda e cauda (giriniforme)',
      'Adulto séssil revestido por uma túnica celulósica rica em tunicina',
      'Possui sifão inalante e exalante para circulação unidirecional de água',
      'Metamorfose retrógrada com reabsorção da cauda e da notocorda'
    ],
    conservationStatus: 'LC',
    riskLevel: 'Inofensivo',
    riskDescription: 'Organismo séssil marinho sem toxinas perigosas ao contato humano.',
    imageUrl: '/images/species/ascidia.webp',
    imageAuthor: 'Wikimedia Commons / Alberto Romeo (CC BY 3.0)',
    imageLicense: 'Creative Commons Attribution 3.0',
    curiosities: [
      'Genoma completamente sequenciado em 2002, revelando que os tunicados (Urochordata) são os parentes vivos mais próximos dos vertebrados (clado Olfactores).',
      'A túnica contém tunicina, uma substância química extraordinariamente idêntica à celulose vegetal, raríssima no reino animal.',
      'Possui coração tubular que inverte periodicamente o sentido dos batimentos e do fluxo sanguíneo.'
    ],
    ecologicalRole: 'Filtração intensa de colunas de água marinha e bioincrustação em recifes e estruturas náuticas.',
    sourceReferences: [
      { name: 'WoRMS - Ciona intestinalis', url: 'https://www.marinespecies.org/aphia.php?p=taxdetails&id=103732' },
      { name: 'NCBI Taxonomy Browser', url: 'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=7719' }
    ]
  },

  // --- VERTEBRATA: ÁGNATOS ---
  {
    id: 'lampreia-marinha',
    commonName: 'Lampreia-marinha',
    scientificName: 'Petromyzon marinus',
    group: 'Peixes Ágnatos',
    subphylum: 'Vertebrata',
    classOrClade: 'Cyclostomata / Petromyzontida',
    habitat: 'Rios de água doce durante a reprodução e mar aberto na fase adulta (anádromo)',
    geographicDistribution: 'Bacia do Atlântico Norte, Europa e América do Norte (invasora nos Grandes Lagos)',
    diet: 'Ectoparasita hematófago de peixes de grande porte',
    keyCharacteristics: [
      'Ausência total de mandíbulas verdadeiras e nadadeiras pares',
      'Ventosa bucal circular forrada por dentes córneos e língua raspadora',
      'Esqueleto inteiramente cartilaginoso rudimentar com arcualia',
      'Sete pares de aberturas branquiais circulares laterais'
    ],
    conservationStatus: 'LC',
    riskLevel: 'Atenção / Defensivo',
    riskDescription: 'Pode ocasionalmente fixar sua ventosa em mergulhadores se atraída por movimento, mas não preda humanos. Alto impacto destrutivo em peixes nativos onde foi introduzida.',
    imageUrl: '/images/species/lampreia-marinha.webp',
    imageAuthor: 'Wikimedia Commons / Aquarium Finisterrae',
    imageLicense: 'Creative Commons CC-BY-SA',
    curiosities: [
      'Representa uma das linhagens mais antigas de vertebrados vivos, divergindo há mais de 450 milhões de anos.',
      'A saliva da lampreia contém a lamfredina, um potente anticoagulante que mantém o sangue do peixe hospedeiro fluindo.',
      'A fase larval (amocete) vive enterrada na lama por até 7 anos alimentando-se como filtradora antes de metamorfosear.'
    ],
    ecologicalRole: 'Regulador populacional de peixes pelágicos em seu ecossistema nativo; praga ecológica devastadora onde introduzida.',
    sourceReferences: [
      { name: 'IUCN Red List - Petromyzon marinus', url: 'https://www.iucnredlist.org/species/16781/18229984' },
      { name: 'FishBase - Petromyzon marinus', url: 'https://www.fishbase.se/summary/Petromyzon-marinus.html' }
    ]
  },

  // --- VERTEBRATA: CONDRICTES ---
  {
    id: 'tubarao-branco',
    commonName: 'Tubarão-branco',
    scientificName: 'Carcharodon carcharias',
    group: 'Peixes Cartilaginosos',
    subphylum: 'Vertebrata',
    classOrClade: 'Chondrichthyes / Elasmobranchii',
    habitat: 'Águas costeiras e epipelágicas de mares temperados e subtropicais',
    geographicDistribution: 'Global (África do Sul, Austrália, Califórnia, Mediterrâneo)',
    diet: 'Carnívoro de topo (pinípedes, baleias mortas, golfinhos e grandes peixes)',
    keyCharacteristics: [
      'Esqueleto inteiramente cartilaginoso leve e flexível',
      'Fendas branquiais expostas (5 pares) sem opérculo ósseo',
      'Escamas placóides dérmicas (dentículos dérmicos hidrodinâmicos)',
      'Ampolas de Lorenzini eletro-receptoras na cabeça'
    ],
    conservationStatus: 'VU',
    riskLevel: 'Predador de Topo',
    riskDescription: 'Predador ápice marinho de grande porte. Mordidas em humanos decorrem geralmente de reconhecimento investigativo ou confusão visual com focas/leões-marinhos.',
    firstAidAdvice: 'Contenção urgente de hemorragia com torniquete ou pressão direta; resgate imediato da água e acionamento de resgate médico de emergência.',
    imageUrl: '/images/species/tubarao-branco.webp',
    imageAuthor: 'Wikimedia Commons / Terry Goss (CC BY-SA 3.0)',
    imageLicense: 'Creative Commons Attribution-ShareAlike 3.0',
    curiosities: [
      'Consegue detectar um campo elétrico minúsculo de um bilionésimo de volt emitido pelas contrações musculares de presas.',
      'Possui sistema de retenção de calor metabólico (gigantotermia com rete mirabile), mantendo o estômago e músculos até 14°C mais quentes que a água fria.',
      'Suas mandíbulas abrigam várias fileiras de dentes triangulares e serrilhados que são repostos continuamente ao longo da vida.'
    ],
    ecologicalRole: 'Regulador supremo das cadeias alimentares oceânicas, mantendo o equilíbrio populacional de leões-marinhos e peixes pelágicos.',
    sourceReferences: [
      { name: 'IUCN Red List - Carcharodon carcharias', url: 'https://www.iucnredlist.org/species/3855/2878674' },
      { name: 'Animal Diversity Web - Great White Shark', url: 'https://animaldiversity.org/accounts/Carcharodon_carcharias/' }
    ]
  },

  // --- VERTEBRATA: OSTEÍCTES ---
  {
    id: 'peixe-palhaco',
    commonName: 'Peixe-palhaço-comum',
    scientificName: 'Amphiprion ocellaris',
    group: 'Peixes Ósseos',
    subphylum: 'Vertebrata',
    classOrClade: 'Actinopterygii / Pomacentridae',
    habitat: 'Recifes de corais rasos e lagoas tropicais protegidas',
    geographicDistribution: 'Oceanos Índico e Pacífico Ocidental (Austrália, Sudeste Asiático e Japão)',
    diet: 'Onívoro (zooplâncton, algas filamentosas e sobras alimentares da anêmona)',
    keyCharacteristics: [
      'Esqueleto ósseo completo e bexiga natatória hidrostática',
      'Opérculo que protege as fendas branquiais e movimenta a água',
      'Camada espessa de muco cutâneo rico em açúcares que impede disparo de nematocistos',
      'Hermafroditismo sequencial protândrico (machos podem se tornar fêmeas)'
    ],
    conservationStatus: 'LC',
    riskLevel: 'Inofensivo',
    riskDescription: 'Peixe pequeno, pacífico e sem toxinas ou risco para mergulhadores.',
    imageUrl: '/images/species/peixe-palhaco.webp',
    imageAuthor: 'Wikimedia Commons / Ritik (CC BY-SA 4.0)',
    imageLicense: 'Creative Commons CC-BY-SA 4.0',
    curiosities: [
      'Vive em simbiose mutualística obrigatória com anêmonas-do-mar: o peixe ganha refúgio seguro e a anêmona recebe oxigenação e defesa.',
      'Todos nascem machos; se a fêmea dominante do grupo morrer, o maior macho muda permanentemente de sexo biológico para assumir a liderança reprodutiva.',
      'Comunica-se por meio de estalidos audíveis produzidos pelo movimento dos dentes faringianos.'
    ],
    ecologicalRole: 'Consumidor secundário e promotor da vitalidade e circulação de nutrientes em anêmonas recifais.',
    sourceReferences: [
      { name: 'Animal Diversity Web - Amphiprion ocellaris', url: 'https://animaldiversity.org/accounts/Amphiprion_ocellaris/' },
      { name: 'FishBase - Amphiprion ocellaris', url: 'https://www.fishbase.se/summary/Amphiprion-ocellaris.html' }
    ]
  },

  {
    id: 'pirarucu',
    commonName: 'Pirarucu',
    scientificName: 'Arapaima gigas',
    group: 'Peixes Ósseos',
    subphylum: 'Vertebrata',
    classOrClade: 'Actinopterygii / Osteoglossidae',
    habitat: 'Lagos de várzea e bacias fluviais de águas lentas e ricas em sedimentos',
    geographicDistribution: 'Bacia Amazônica (Brasil, Peru, Colômbia e Guianas)',
    diet: 'Carnívoro (peixes, crustáceos, pequenos anfíbios e aves ribeirinhas)',
    keyCharacteristics: [
      'Um dos maiores peixes de água doce do planeta (até 3 metros e 200 kg)',
      'Escamas ósseas espessas e mineralizadas com estrutura resistente a mordidas de piranha',
      'Respiração aérea obrigatória através da bexiga natatória vascularizada',
      'Cabeça deprimida e ossificada com dentes na língua (osso glossope)'
    ],
    conservationStatus: 'DD',
    riskLevel: 'Atenção / Defensivo',
    riskDescription: 'Animal tímido com humanos na natureza, mas seu grande porte físico e saltos poderosos podem tombar pequenas canoas ou provocar lesões mecânicas severas durante o manejo.',
    imageUrl: '/images/species/pirarucu.webp',
    imageAuthor: 'Wikimedia Commons / Gary Todd (Public Domain)',
    imageLicense: 'Public Domain',
    curiosities: [
      'Deve subir à superfície da água a cada 5 a 15 minutos para engolir oxigênio atmosférico, emitindo um resfolego sonoro característico.',
      'Os machos exercem cuidado parental zeloso, incubando ovos na boca e nadando com os alevinos protegidos sobre sua cabeça.',
      'Manejo comunitário sustentável na Reserva Mamirauá (AM) recuperou expressivamente as populações selvagens da espécie.'
    ],
    ecologicalRole: 'Predador ápice das águas calmas da bacia amazônica e sustentáculo econômico de populações ribeirinhas.',
    sourceReferences: [
      { name: 'IUCN Red List - Arapaima gigas', url: 'https://www.iucnredlist.org/species/4110/10398064' },
      { name: 'ICMBio - Plano de Manejo Sustentável do Pirarucu', url: 'https://www.icmbio.gov.br' }
    ]
  },

  // --- VERTEBRATA: ANFÍBIOS ---
  {
    id: 'sapo-cururu',
    commonName: 'Sapo-cururu',
    scientificName: 'Rhinella marina',
    group: 'Anfíbios',
    subphylum: 'Vertebrata',
    classOrClade: 'Amphibia / Anura / Bufonidae',
    habitat: 'Florestas tropicais, várzeas, bordas de matas e áreas antropizadas/urbanas',
    geographicDistribution: 'Nativo da América Central e América do Sul (introduzido na Austrália e ilhas do Pacífico)',
    diet: 'Carnívoro oportunista (insetos, aranhas, caracóis e pequenos vertebrados)',
    keyCharacteristics: [
      'Pele espessa, rugosa e queratinizada com tubérculos glandulares',
      'Grandes glândulas parotóides localizadas atrás dos olhos produtoras de bufotoxinas',
      'Respiração cutânea e pulmonar combinadas',
      'Fecundação externa com desova de cordões gelatinosos em corpos d’água'
    ],
    conservationStatus: 'LC',
    riskLevel: 'Tóxico',
    riskDescription: 'Passivamente tóxico: o veneno só é expelido sob compressão física das glândulas parotóides (ex: um cão que morde o sapo). O sapo NÃO ataca nem esguicha veneno voluntariamente contra pessoas.',
    firstAidAdvice: 'Se um animal doméstico morder o sapo, lavar a boca da vítima imediatamente com água corrente abundante para remover o muco e levar ao veterinário. Em humanos, lavar a pele ou olhos com água corrente se houver contato acidental.',
    imageUrl: '/images/species/sapo-cururu.webp',
    imageAuthor: 'Wikimedia Commons / LiquidGhoul (Public Domain)',
    imageLicense: 'Public Domain',
    curiosities: [
      'Mito popular errôneo: sapos não “esguicham leite de veneno” nem causam cegueira a distância; a secreção é exclusivamente de defesa passiva.',
      'Na Austrália foi introduzido em 1935 para combater besouros de cana-de-açúcar, mas tornou-se um desastre ecológico sem predadores adaptados à sua toxina.',
      'Seu veneno (bufotoxina) afeta o músculo cardíaco devido a glicosídeos esteróides similares à digitalina.'
    ],
    ecologicalRole: 'Controle biológico vital de insetos vetores e pragas agrícolas nas matas nativas brasileiras.',
    sourceReferences: [
      { name: 'IUCN Red List - Rhinella marina', url: 'https://www.iucnredlist.org/species/41065/53438570' },
      { name: 'AmphibiaWeb - Rhinella marina', url: 'https://amphibiaweb.org/species/202' }
    ]
  },

  {
    id: 'axolote',
    commonName: 'Axolote',
    scientificName: 'Ambystoma mexicanum',
    group: 'Anfíbios',
    subphylum: 'Vertebrata',
    classOrClade: 'Amphibia / Urodela / Ambystomatidae',
    habitat: 'Canais lacustres remanescentes de Xochimilco e Chalco',
    geographicDistribution: 'Endêmico do Vale do México (América do Norte)',
    diet: 'Carnívoro microfágico (pequenos moluscos, vermes, larvas de insetos e pequenos peixes)',
    keyCharacteristics: [
      'Neotenia extrema: atinge maturidade sexual preservando guelras externas e cristas larvais',
      'Três pares de brânquias plumosas externas vascularizadas',
      'Capacidade formidável de regenerar membros completos, medula espinhal, coração e partes do cérebro',
      'Locomoção ondulatória auxiliada por nadadeira caudal membranosa'
    ],
    conservationStatus: 'CR',
    riskLevel: 'Inofensivo',
    riskDescription: 'Espécie totalmente mansa e inofensiva para seres humanos.',
    imageUrl: '/images/species/axolote.webp',
    imageAuthor: 'Wikimedia Commons / ZePa (CC BY-SA 3.0)',
    imageLicense: 'Creative Commons CC-BY-SA 3.0',
    curiosities: [
      'Consegue regenerar um membro amputado com ossos, nervos, músculos e pele funcionais em cerca de 40 dias sem cicatrizes.',
      'Em raras condições experimentais de indução por hormônio tiroxina (iodo), pode metamorfosear em salamandra terrestre.',
      'Encontra-se criticamente ameaçado na natureza pela poluição dos canais de Xochimilco e introdução de carpas e tilápias invasoras.'
    ],
    ecologicalRole: 'Predador aquático de invertebrados lacustres e principal organismo modelo em medicina regenerativa mundial.',
    sourceReferences: [
      { name: 'IUCN Red List - Ambystoma mexicanum (CR)', url: 'https://www.iucnredlist.org/species/1095/539308' },
      { name: 'AmphibiaWeb - Ambystoma mexicanum', url: 'https://amphibiaweb.org/species/3831' }
    ]
  },

  {
    id: 'ra-dardo-dourada',
    commonName: 'Rã-dardo-dourada',
    scientificName: 'Phyllobates terribilis',
    group: 'Anfíbios',
    subphylum: 'Vertebrata',
    classOrClade: 'Amphibia / Anura / Dendrobatidae',
    habitat: 'Serapilheira úmida de florestas pluviais primárias da costa do Pacífico',
    geographicDistribution: 'Endêmica da região de Cauca e Chocó na Colômbia',
    diet: 'Insetívoro especializado (formigas ácidas, besouros e cupins)',
    keyCharacteristics: [
      'Coloração aposemática brilhante (amarelo-ouro ou menta) que sinaliza toxicidade letal',
      'Pele secreta batracotoxina, um alcaloide neurotóxico esteroide despolarizante de canais de sódio',
      'Corpo esguio de até 5,5 cm com discos adesivos na ponta dos dígitos',
      'Diurna e terrestre em áreas com altíssima umidade relativa'
    ],
    conservationStatus: 'EN',
    riskLevel: 'Tóxico',
    riskDescription: 'Considerado um dos animais mais tóxicos da Terra. Uma única rã possui batracotoxina suficiente em sua pele para matar múltiplos humanos adultos se ingerida ou absorvida por ferimento/mucosa.',
    firstAidAdvice: 'Nunca manipular sem luvas adequadas. Em caso de contato acidental com mucosas ou cortes, procurar imediatamente socorro médico hospitalar intensivo de urgência.',
    imageUrl: '/images/species/ra-dardo-dourada.webp',
    imageAuthor: 'Wikimedia Commons / Wilfried Berns (CC BY-SA 2.0 de)',
    imageLicense: 'Creative Commons CC-BY-SA 2.0',
    curiosities: [
      'A batracotoxina não é sintetizada de fábrica pela rã: ela sequestra precursores químicos da dieta silvestre de besouros da família Melyridae. Em cativeiro alimentada com moscas, perde a toxicidade.',
      'Povos indígenas Emberá da Colômbia usam a pele da rã para envenenar a ponta de dardos de zarabatana para caça.',
      'Possui mutações genéticas específicas em seus próprios canais iônicos de sódio que a tornam 100% imune ao seu próprio veneno.'
    ],
    ecologicalRole: 'Regulador especializado de artrópodes florestais de solo e clássico exemplo biológico de aposematismo.',
    sourceReferences: [
      { name: 'IUCN Red List - Phyllobates terribilis (EN)', url: 'https://www.iucnredlist.org/species/55265/85887889' },
      { name: 'AmphibiaWeb - Phyllobates terribilis', url: 'https://amphibiaweb.org/species/1707' }
    ]
  },

  // --- VERTEBRATA: RÉPTEIS ---
  {
    id: 'tartaruga-verde',
    commonName: 'Tartaruga-verde',
    scientificName: 'Chelonia mydas',
    group: 'Répteis',
    subphylum: 'Vertebrata',
    classOrClade: 'Testudines / Chelonioidea / Cheloniidae',
    habitat: 'Mares tropicais e subtropicais costeiros e praias arenosas para desova',
    geographicDistribution: 'Circunglobal em mares tropicais e subtropicais (Brasil: Atol das Rocas, Fernando de Noronha, Trindade)',
    diet: 'Predominantemente herbívora quando adulta (capins-marinhos e algas)',
    keyCharacteristics: [
      'Carapaça óssea hidrodinâmica fundida às vértebras torácicas e costelas',
      'Nadadeiras anteriores alongadas em forma de remo para natação contínua',
      'Glândulas de sal orbitais supra-oculares que eliminam o excesso de sódio',
      'Respiração pulmonar com capacidade de apneia de várias horas'
    ],
    conservationStatus: 'EN',
    riskLevel: 'Inofensivo',
    riskDescription: 'Totalmente dócil na água. Adultos desovando devem ser respeitados a distância para evitar estresse.',
    imageUrl: '/images/species/tartaruga-verde.webp',
    imageAuthor: 'Wikimedia Commons / Bernard Dupont (CC BY-SA 2.0)',
    imageLicense: 'Creative Commons CC-BY-SA 2.0',
    curiosities: [
      'O nome “tartaruga-verde” deriva da tonalidade esverdeada da gordura corporal acumulada pela ingestão de vegetação marinha, e não da cor da carapaça.',
      'Fêmeas adultas realizam migrações transoceânicas de milhares de quilômetros para desovar na mesmíssima praia em que nasceram (filopatria natal).',
      'O sexo dos embriões é determinado pela temperatura da areia do ninho: temperaturas mais quentes produzem fêmeas e mais frias, machos.'
    ],
    ecologicalRole: 'Pastoreadora vital de bancos de fanerógamas marinhas, favorecendo a oxigenação e saúde de ecossistemas costeiros.',
    sourceReferences: [
      { name: 'IUCN Red List - Chelonia mydas (EN)', url: 'https://www.iucnredlist.org/species/4615/11037468' },
      { name: 'Projeto TAMAR - Tartaruga-verde', url: 'https://www.tamar.org.br' }
    ]
  },

  {
    id: 'jiboia',
    commonName: 'Jiboia-constritora',
    scientificName: 'Boa constrictor',
    group: 'Répteis',
    subphylum: 'Vertebrata',
    classOrClade: 'Squamata / Serpentes / Boidae',
    habitat: 'Florestas tropicais, caatinga, cerrado e matas ciliares',
    geographicDistribution: 'América do Sul (desde a Colômbia e Venezuela até o Norte da Argentina e todo o Brasil)',
    diet: 'Carnívoro por emboscada (pequenos e médios mamíferos, roedores, aves e lagartos)',
    keyCharacteristics: [
      'Não-peçonhenta: mata as presas por constrição circulatória, impedindo a perfusão sanguínea',
      'Dentição áglifa (dentes cônicos voltados para trás sem canais de inoculação)',
      'Fossetas labiais termosensíveis rudimentares que detectam o calor corporal',
      'Vestígios de cintura pélvica e esporões cloacais (remanescentes de membros ancestrais)'
    ],
    conservationStatus: 'LC',
    riskLevel: 'Atenção / Defensivo',
    riskDescription: 'Não possui peçonha! Caso acoada, emite um sopro sonoro intimidador (assobio) e pode desferir mordidas defensivas dolorosas mas desprovidas de toxinas.',
    firstAidAdvice: 'Lavar o local da mordedura com água e sabão neutro para evitar infecção bacteriana secundária; não usar torniquetes nem substâncias caseiras.',
    imageUrl: '/images/species/jiboia.webp',
    imageAuthor: 'Wikimedia Commons / Geoff Gallice (CC BY 2.0)',
    imageLicense: 'Creative Commons CC-BY 2.0',
    curiosities: [
      'Estudos modernos comprovaram que a constrição da jiboia não mata por asfixia pulmonar lenta, mas sim interrompe imediatamente a circulação sanguínea da presa em segundos.',
      'Possui mandíbulas inferiores unidas anteriormente por ligamentos elásticos extensíveis, engolindo presas muito maiores que o diâmetro da própria cabeça.',
      'É vivípara: as fêmeas gestam os ovos internamente e dão à luz filhotes vivos totalmente formados.'
    ],
    ecologicalRole: 'Regulador crucial das populações de roedores silvestres, contendo proliferação de doenças zoonóticas como leptospirose e hantavirose.',
    sourceReferences: [
      { name: 'The Reptile Database - Boa constrictor', url: 'https://reptile-database.reptarium.cz/species?genus=Boa&species=constrictor' },
      { name: 'Instituto Butantan - Serpentes do Brasil', url: 'https://butantan.gov.br' }
    ]
  },

  {
    id: 'jacare-do-pantanal',
    commonName: 'Jacaré-do-pantanal',
    scientificName: 'Caiman yacare',
    group: 'Répteis',
    subphylum: 'Vertebrata',
    classOrClade: 'Crocodylia / Alligatoridae / Caimaninae',
    habitat: 'Rios, corixos, lagoas e baías do complexo pantaneiro e bacias vizinhas',
    geographicDistribution: 'Pantanal e Bacia do Rio Paraguai (Brasil, Bolívia, Paraguai e norte da Argentina)',
    diet: 'Carnívoro oportunista (peixes como piranhas, caramujos vetores, crustáceos e pequenos vertebrados)',
    keyCharacteristics: [
      'Placas dérmicas ósseas dorsais reforçadas (osteodermas)',
      'Coração com quatro câmaras bem separadas e forame de Panizza',
      'Pálpebra transparente (membrana nictitante) para visão subaquática',
      'Temperatura de incubação dos ninhos determina a proporção sexual da ninhada'
    ],
    conservationStatus: 'LC',
    riskLevel: 'Atenção / Defensivo',
    riskDescription: 'Menor e menos agressivo que o jacaré-açu. Não costuma atacar humanos a não ser que seja acuado, manipulado ou quando a fêmea protege ativamente o ninho com filhotes.',
    firstAidAdvice: 'Em caso improvável de mordida, afastar-se da água, estancar sangramento e procurar atendimento médico hospitalar imediato com antibioticoterapia preventiva.',
    imageUrl: '/images/species/jacare-do-pantanal.webp',
    imageAuthor: 'Wikimedia Commons / Bernard Dupont (CC BY-SA 2.0)',
    imageLicense: 'Creative Commons CC-BY-SA 2.0',
    curiosities: [
      'O Pantanal abriga a maior concentração populacional de crocodilianos do mundo, estimada em mais de 10 milhões de indivíduos de jacaré-do-pantanal.',
      'Possui papel no controle das piranhas carnívoras e no combate aos caramujos transmissores da esquistossomose.',
      'As fêmeas escavam o ninho de matéria vegetal com as patas ao ouvirem os vocalizadores estalidos dos filhotes chamando de dentro da casca dos ovos.'
    ],
    ecologicalRole: 'Engenheiro de ecossistema: escava lagoas e canais que retêm água na seca do Pantanal, servindo de refúgio vital para milhares de peixes.',
    sourceReferences: [
      { name: 'IUCN Red List - Caiman yacare', url: 'https://www.iucnredlist.org/species/46585/3010050' },
      { name: 'ICMBio / RAN - Centro Nacional de Répteis e Anfíbios', url: 'https://www.icmbio.gov.br' }
    ]
  },

  // --- VERTEBRATA: AVES (Arcossauros) ---
  {
    id: 'arara-azul-grande',
    commonName: 'Arara-azul-grande',
    scientificName: 'Anodorhynchus hyacinthinus',
    group: 'Aves',
    subphylum: 'Vertebrata',
    classOrClade: 'Aves / Psittaciformes / Psittacidae',
    habitat: 'Cerrado, Pantanal e florestas de galeria com palmeirais',
    geographicDistribution: 'Centro e Norte do Brasil, leste da Bolívia e nordeste do Paraguai',
    diet: 'Frugívoro e granívoro especializado em castanhas duras de palmeiras (acuri e bocaiuva)',
    keyCharacteristics: [
      'Maior espécie da família dos papagaios no mundo (cerca de 1 metro de comprimento)',
      'Plumagem inteiramente azul-cobalto com anéis perioculares e base da mandíbula em amarelo vivo',
      'Bico curvo potente capaz de quebrar sementes de extrema dureza',
      'Monogamia de longo prazo com cooperação mútua no cuidado parental'
    ],
    conservationStatus: 'VU',
    riskLevel: 'Inofensivo',
    riskDescription: 'Espécie silvestre desprovida de risco para humanos; bico forte se manipulada irregularmente em resgates.',
    imageUrl: '/images/species/arara-azul-grande.webp',
    imageAuthor: 'Wikimedia Commons / Giles Laurent (CC BY-SA 4.0)',
    imageLicense: 'Creative Commons CC-BY-SA 4.0',
    curiosities: [
      'Aves são taxonomicamente dinossauros terópodes aviários sobreviventes, pertencentes ao clado dos arcossauros ao lado dos crocodilianos.',
      'Depende quase exclusivamente das cavidades do manduvi (Sterculia apetala) para nidificar no Pantanal.',
      'O Projeto Arara Azul instalou centenas de ninhos artificiais, retirando a espécie da categoria de Criticamente em Perigo.'
    ],
    ecologicalRole: 'Dispersora fundamental de sementes e estruturadora de palmeirais em biomas savânicos e pantaneiros.',
    sourceReferences: [
      { name: 'IUCN Red List - Anodorhynchus hyacinthinus (VU)', url: 'https://www.iucnredlist.org/species/22685516/93077457' },
      { name: 'Instituto Arara Azul', url: 'https://www.institutoararaazul.org.br' }
    ]
  },

  {
    id: 'tucano-toco',
    commonName: 'Tucano-toco',
    scientificName: 'Ramphastos toco',
    group: 'Aves',
    subphylum: 'Vertebrata',
    classOrClade: 'Aves / Piciformes / Ramphastidae',
    habitat: 'Cerrado, bordas de florestas tropicais, capoeiras e áreas abertas arborizadas',
    geographicDistribution: 'Ampla ocorrência no Brasil Central, Bolívia, Paraguai e norte da Argentina',
    diet: 'Onívoro (frutas nativas, insetos, ovos de outras aves e pequenos lagartos)',
    keyCharacteristics: [
      'Bico gigante amarelo-alaranjado com extremidade preta, extremamente leve (composto de trabéculas ósseas ocas e queratina)',
      'Plumagem preta reluzente com papo branco e crisso vermelho',
      'Bico atua como um eficiente radiador térmico para dissipar calor corporal sob temperaturas altas',
      'Patas zigodáctilas (dois dedos apontados para a frente e dois para trás)'
    ],
    conservationStatus: 'LC',
    riskLevel: 'Inofensivo',
    riskDescription: 'Ave silvestre totalmente inofensiva ao ser humano.',
    imageUrl: '/images/species/tucano-toco.webp',
    imageAuthor: 'Wikimedia Commons / Giles Laurent (CC BY-SA 4.0)',
    imageLicense: 'Creative Commons CC-BY-SA 4.0',
    curiosities: [
      'O bico do tucano representa até 40% de sua superfície corporal total e consegue resfriar o corpo da ave modificando o fluxo sanguíneo em minutos.',
      'Ao dormir, o tucano gira a cabeça 180 graus e repousa o bico sobre as costas, cobrindo-o inteiramente com as asas e cauda.',
      'É o maior representante da família dos tucanos no continente americano.'
    ],
    ecologicalRole: 'Dispersor de sementes de grande calibre de árvores nativas em ecossistemas de transição.',
    sourceReferences: [
      { name: 'IUCN Red List - Ramphastos toco', url: 'https://www.iucnredlist.org/species/22682164/92934094' },
      { name: 'WikiAves - Ramphastos toco', url: 'https://www.wikiaves.com.br/wiki/tucano-toco' }
    ]
  },

  {
    id: 'pinguim-imperador',
    commonName: 'Pinguim-imperador',
    scientificName: 'Aptenodytes forsteri',
    group: 'Aves',
    subphylum: 'Vertebrata',
    classOrClade: 'Aves / Sphenisciformes / Spheniscidae',
    habitat: 'Calota de gelo marinho e águas congeladas da plataforma antártica',
    geographicDistribution: 'Endêmico da Antártica e águas circumpolares austrais',
    diet: 'Carnívoro piscívoro e caranguejeiro (peixes antárticos, krill e lulas pelágicas)',
    keyCharacteristics: [
      'Maior e mais pesado de todos os pinguins vivos (até 120 cm e 40 kg)',
      'Asas modificadas em nadadeiras rígidas propulsoras hidrodinâmicas',
      'Camada espessa de gordura subdérmica e quatro camadas de penas imbricadas à prova de água',
      'Adaptações extremas de mergulho profundo (alcança mais de 500 metros de profundidade)'
    ],
    conservationStatus: 'NT',
    riskLevel: 'Inofensivo',
    riskDescription: 'Animal selvagem antártico sem risco aos humanos.',
    imageUrl: '/images/species/pinguim-imperador.webp',
    imageAuthor: 'Wikimedia Commons / Ian Duffy (CC BY 2.0)',
    imageLicense: 'Creative Commons CC-BY 2.0',
    curiosities: [
      'Os machos incubam um único ovo equilibrado sobre os pés sob uma bolsa incubadora cutânea durante o inverno antártico a -50°C, jejuando por até 4 meses.',
      'Milhares de indivíduos formam uma formação compacta ("huddle") que gira lentamente para que todos os animais compartilhem o calor interno do grupo.',
      'Suas hemáceas contêm hemoglobina com afinidade especial que permite funcionamento em baixíssimas concentrações de oxigênio.'
    ],
    ecologicalRole: 'Consumidor secundário/terciário de topo na cadeia trófica antártica e bioindicador crucial do aquecimento global.',
    sourceReferences: [
      { name: 'IUCN Red List - Aptenodytes forsteri', url: 'https://www.iucnredlist.org/species/22697752/157658018' },
      { name: 'British Antarctic Survey - Emperor Penguins', url: 'https://www.bas.ac.uk' }
    ]
  },

  // --- VERTEBRATA: MAMÍFEROS ---
  {
    id: 'onca-pintada',
    commonName: 'Onça-pintada',
    scientificName: 'Panthera onca',
    group: 'Mamíferos',
    subphylum: 'Vertebrata',
    classOrClade: 'Mammalia / Carnivora / Felidae',
    habitat: 'Florestas tropicais densas (Amazônia, Mata Atlântica), Pantanal e matas de galeria',
    geographicDistribution: 'Desde o sudoeste dos EUA e México até o norte da Argentina (Brasil abriga a maior população contínua)',
    diet: 'Carnívoro estrito de topo (capivaras, jacarés, queixadas, veados e tatus)',
    keyCharacteristics: [
      'Maior felino das Américas e terceiro maior do mundo (machos de até 135 kg no Pantanal)',
      'Pelagem amarelada com rosetas negras únicas abrigando pintas no interior',
      'Mordida proporcionalmente mais forte entre todos os grandes felinos, perfurando cascos e crânios',
      'Excelente nadadora com predileção marcante por ambientes ripários e cursos de água'
    ],
    conservationStatus: 'NT',
    riskLevel: 'Predador de Topo',
    riskDescription: 'Predador de grande porte. Ataques contra humanos são raros e ocorrem quase exclusivamente em situações de encurralamento, defesa de filhotes ou animais feridos.',
    firstAidAdvice: 'Nunca correr (desencadeia instinto de perseguição de felino). Manter contato visual, erguer os braços para parecer maior, falar em tom firme e recuar calmamente. Em caso de ataque, lutar com determinação contra olhos e focinho.',
    imageUrl: '/images/species/onca-pintada.webp',
    imageAuthor: 'Wikimedia Commons / USFWS (Public Domain)',
    imageLicense: 'Public Domain',
    curiosities: [
      'Ao contrário de leões e tigres que asfixiam a presa pela garganta, a onça usa sua mordida para perfurar diretamente os ossos temporais do crânio da presa.',
      'O padrão de rosetas da pele de cada onça funciona como uma impressão digital imutável, permitindo identificação individual por armadilhas fotográficas.',
      'Possui papel de "espécie-guarda-chuva": preservar o habitat da onça garante a sobrevivência de milhares de outras espécies menores.'
    ],
    ecologicalRole: 'Predador ápice indispensável que regula populações de herbívoros, prevenindo degradação vegetal e colapsos em cascata.',
    sourceReferences: [
      { name: 'IUCN Red List - Panthera onca (NT)', url: 'https://www.iucnredlist.org/species/15953/123791436' },
      { name: 'ICMBio / CENAP - Centro Nacional de Pesquisa e Conservação de Mamíferos Carnívoros', url: 'https://www.icmbio.gov.br/cenap/' }
    ]
  },

  {
    id: 'capivara',
    commonName: 'Capivara',
    scientificName: 'Hydrochoerus hydrochaeris',
    group: 'Mamíferos',
    subphylum: 'Vertebrata',
    classOrClade: 'Mammalia / Rodentia / Caviidae',
    habitat: 'Margens de rios, lagos, banhados, várzeas e parques urbanos arborizados com água',
    geographicDistribution: 'América do Sul a leste dos Andes (ampla ocorrência em todo o Brasil)',
    diet: 'Herbívoro pastador (gramíneas aquáticas, capins, cascas de árvores e plantas cultivadas)',
    keyCharacteristics: [
      'Maior roedor vivo do mundo (pesando até 70 kg e 1,3 m de comprimento)',
      'Olhos, narinas e orelhas posicionados no topo da cabeça para vigilância na água',
      'Pés com membranas interdigitais parciais que auxiliam a natação',
      'Dentes incisivos frontais de crescimento contínuo sem raiz fechada'
    ],
    conservationStatus: 'LC',
    riskLevel: 'Atenção / Defensivo',
    riskDescription: 'Animal calmo e sociável. O risco sanitário direto decorre de ser hospedeira primária do carrapato-estrela (Amblyomma sculptum), vetor da Febre Maculosa Brasileira.',
    firstAidAdvice: 'Evitar sentar em gramados com presença frequente de capivaras. Se picado por carrapato, retirar com pinça sem esmagar e monitorar febre e dores no corpo por 15 dias, procurando UBS/hospital imediatamente caso surjam sintomas.',
    imageUrl: '/images/species/capivara.webp',
    imageAuthor: 'Wikimedia Commons / Paul K (CC BY 2.0)',
    imageLicense: 'Creative Commons CC-BY 2.0',
    curiosities: [
      'Consegue permanecer submersa na água por até 5 minutos para despistar predadores como onças e jacarés.',
      'São animais altamente gregários que vivem em grupos familiares organizados de 10 a 30 indivíduos sob a liderança de um macho dominante.',
      'Praticam a cecotrofia (reingestão de fezes cecais ricas em proteínas) para aproveitar nutrientes fermentados por bactérias no ceco.'
    ],
    ecologicalRole: 'Consumidor primário de vegetação ripária e principal presa na cadeia alimentar de grandes predadores (onças e jacarés).',
    sourceReferences: [
      { name: 'IUCN Red List - Hydrochoerus hydrochaeris', url: 'https://www.iucnredlist.org/species/10300/22190005' },
      { name: 'Fiocruz - Febre Maculosa e Fauna Silvestre', url: 'https://portal.fiocruz.br' }
    ]
  },

  {
    id: 'baleia-azul',
    commonName: 'Baleia-azul',
    scientificName: 'Balaenoptera musculus',
    group: 'Mamíferos',
    subphylum: 'Vertebrata',
    classOrClade: 'Mammalia / Artiodactyla (Cetacea) / Balaenopteridae',
    habitat: 'Águas oceânicas abertas e plataformas continentais polares e tropicais',
    geographicDistribution: 'Todos os oceanos do globo terrestre (migração sazonal entre polos e trópicos)',
    diet: 'Carnívoro filtrador microfágico especializado em pequenos crustáceos (krill eufausiáceo)',
    keyCharacteristics: [
      'Maior animal a ter existido na história da Terra (até 30 metros de comprimento e 190 toneladas)',
      'Possui placas córneas de barbas bucais de queratina no lugar de dentes para filtrar água',
      'Pregas gulares expansíveis na garganta que comportam dezenas de toneladas de água por bocada',
      'Coração com o peso aproximado de um carro popular (cerca de 400 a 600 kg)'
    ],
    conservationStatus: 'EN',
    riskLevel: 'Inofensivo',
    riskDescription: 'Gigante gentil e dócil em alto-mar sem agressividade com humanos.',
    imageUrl: '/images/species/baleia-azul.webp',
    imageAuthor: 'Wikimedia Commons / NOAA (Domínio Público)',
    imageLicense: 'Public Domain',
    curiosities: [
      'Sua língua pesa tanto quanto um elefante asiático adulto inteiro, e sua artéria aorta é larga o suficiente para uma criança nadar dentro.',
      'Suas vocalizações infrassônicas de baixa frequência alcançam até 188 decibéis e podem se propagar por milhares de quilômetros de oceano.',
      'Quase foi extinta pela caça baleeira industrial no século XX, quando mais de 350.000 indivíduos foram abatidos.'
    ],
    ecologicalRole: 'Bomba biológica de carbono: fertiliza os oceanos com ferro e nutrientes através de dejetos na superfície e sequestra toneladas de carbono na carcaça no fundo abissal.',
    sourceReferences: [
      { name: 'IUCN Red List - Balaenoptera musculus (EN)', url: 'https://www.iucnredlist.org/species/2477/156923585' },
      { name: 'Baleia Jubarte / Mamíferos Marinhos ICMBio', url: 'https://www.icmbio.gov.br' }
    ]
  },

  {
    id: 'morcego-vampiro',
    commonName: 'Morcego-vampiro-comum',
    scientificName: 'Desmodus rotundus',
    group: 'Mamíferos',
    subphylum: 'Vertebrata',
    classOrClade: 'Mammalia / Chiroptera / Phyllostomidae',
    habitat: 'Cavernas, ocos de árvores, túneis desativados e edificações rurais escuras',
    geographicDistribution: 'América Latina (do norte do México até a Argentina, comum no Brasil)',
    diet: 'Hematófago estrito (sangue de mamíferos como gado, cavalos e raramente aves/humanos)',
    keyCharacteristics: [
      'Único grupo de mamíferos dotado de voo verdadeiro ativo propulsionado por asas membranosas (patágio)',
      'Dentes incisivos superiores em lâmina cirúrgica para fazer incisão superficial indolor',
      'Saliva rica em draculina, uma potente enzima anticoagulante e anestésica local',
      'Locomove-se agilmente no solo correndo e saltando com o auxílio dos polegares'
    ],
    conservationStatus: 'LC',
    riskLevel: 'Atenção / Defensivo',
    riskDescription: 'Não é agressivo, mas sua mordedura pode transmitir o vírus da Raiva (Rhabdoviridae), doença viral com letalidade de quase 100% se não tratada preventivamente a tempo.',
    firstAidAdvice: 'Lavar exaustivamente o ferimento com água e sabão por 15 minutos; procurar imediatamente um posto de saúde para protocolo de profilaxia antirrábica pós-exposição (vacina e soro antirrábico). NUNCA manipular morcegos caídos no chão.',
    imageUrl: '/images/species/morcego-vampiro.webp',
    imageAuthor: 'Wikimedia Commons / Uwe Schmidt (CC BY-SA 4.0)',
    imageLicense: 'Creative Commons CC-BY-SA 4.0',
    curiosities: [
      'Apenas 3 espécies entre as mais de 1.400 espécies de morcegos do mundo se alimentam de sangue (todas nas Américas). A esmagadora maioria dos morcegos come insetos e frutas.',
      'Possuem sensores térmicos no nariz especializados em detectar radiação infravermelha para localizar onde os vasos sanguíneos da presa estão mais próximos da pele.',
      'Demonstram altruísmo recíproco extraordinário: indivíduos que conseguiram se alimentar regurgitam sangue para companheiros de colônia que não acharam alimento na noite.'
    ],
    ecologicalRole: 'Predador seletivo e vetor ecológico em comunidades silvestres; a enzima draculina de sua saliva serviu de base biotecnológica para novos medicamentos contra infarto e trombose.',
    sourceReferences: [
      { name: 'IUCN Red List - Desmodus rotundus', url: 'https://www.iucnredlist.org/species/6510/21979045' },
      { name: 'Ministério da Saúde - Manual de Vigilância da Raiva', url: 'https://www.gov.br/saude' }
    ]
  },

  // --- BRAZILIAN ICONIC ADDITION: SURUCUCU ---
  {
    id: 'surucucu',
    commonName: 'Surucucu-pico-de-jaca',
    scientificName: 'Lachesis muta',
    group: 'Répteis',
    subphylum: 'Vertebrata',
    classOrClade: 'Squamata / Serpentes / Viperidae',
    habitat: 'Florestas tropicais primárias densas e úmidas (Amazônia e remanescentes de Mata Atlântica)',
    geographicDistribution: 'Bacia Amazônica e Mata Atlântica brasileira, Guianas e América Central',
    diet: 'Carnívoro de emboscada (roedores florestais, tatus e pequenos marsupiais)',
    keyCharacteristics: [
      'Maior serpente peçonhenta da América Latina e segunda maior do mundo (pode atingir 3,5 metros)',
      'Escamas pontiagudas e rugosas semelhantes à casca do fruto da jaca',
      'Peçonha de ação proteolítica, coagulante, hemorrágica e vagal intensa',
      'Extremidade da cauda com escamas eriçadas que vibram no chão de folhas'
    ],
    conservationStatus: 'VU',
    riskLevel: 'Peçonhento',
    riskDescription: 'Serpente solenóglifa altamente peçonhenta. O envenenamento laquético injeta grande volume de veneno, desencadeando hipotensão brusca, bradicardia, dor intensa, necrose e risco de choque.',
    firstAidAdvice: 'Ligue 192 (SAMU) ou transporte a vítima urgentemente para hospital com soro antilaquético ou antibotrópico-laquético. Mantenha a vítima em repouso absoluto hidratada; NÃO faça torniquetes, não corte nem chupe o ferimento!',
    imageUrl: '/images/species/surucucu.webp',
    imageAuthor: 'Wikimedia Commons / Bernard Dupont (CC BY-SA 2.0)',
    imageLicense: 'Creative Commons CC-BY-SA 2.0',
    curiosities: [
      'É a única serpente da família dos viperídeos na América do Sul que bota ovos (ovípara), permanecendo enrolada sobre o ninho em guarda parental.',
      'Geralmente prefere fugir da presença humana e só ataca ao ser pisada ou encurralada em mata fechada.',
      'Seu veneno é objeto de pesquisas avançadas no Instituto Butantan para o desenvolvimento de fármacos anti-hipertensivos.'
    ],
    ecologicalRole: 'Predador noturno de topo na serapilheira florestal amazônica, regulando vertebrados terrestres.',
    sourceReferences: [
      { name: 'Instituto Butantan - Guia de Animais Peçonhentos', url: 'https://butantan.gov.br' },
      { name: 'IUCN Red List - Lachesis muta', url: 'https://www.iucnredlist.org' }
    ]
  }
];
