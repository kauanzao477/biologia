export type ChordataGroup = 
  | 'Cefalocordados'
  | 'Tunicados'
  | 'Peixes Ágnatos'
  | 'Peixes Cartilaginosos'
  | 'Peixes Ósseos'
  | 'Anfíbios'
  | 'Répteis'
  | 'Aves'
  | 'Mamíferos';

export type IUCNStatus = 
  | 'EX' // Extinto
  | 'EW' // Extinto na Natureza
  | 'CR' // Criticamente em Perigo
  | 'EN' // Em Perigo
  | 'VU' // Vulnerável
  | 'NT' // Quase Ameaçado
  | 'LC' // Menor Preocupação
  | 'DD'; // Dados Insuficientes

export type RiskLevel = 'Inofensivo' | 'Atenção / Defensivo' | 'Tóxico' | 'Peçonhento' | 'Predador de Topo';

export interface Species {
  id: string;
  commonName: string;
  scientificName: string;
  group: ChordataGroup;
  subphylum: 'Cephalochordata' | 'Tunicata' | 'Vertebrata';
  classOrClade: string;
  habitat: string;
  geographicDistribution: string;
  diet: string;
  keyCharacteristics: string[];
  conservationStatus: IUCNStatus;
  riskLevel: RiskLevel;
  riskDescription?: string;
  firstAidAdvice?: string;
  imageUrl: string;
  imageAuthor?: string;
  imageLicense?: string;
  curiosities: string[];
  ecologicalRole: string;
  sourceReferences: {
    name: string;
    url: string;
  }[];
}

export interface ChordateSynapomorphy {
  id: string;
  name: string;
  latinName: string;
  description: string;
  embryoFate: string;
  adultPresence: string;
  importance: string;
}

export interface GroupOverview {
  name: ChordataGroup;
  category: 'Protocordados' | 'Vertebrados';
  scientificClade: string;
  representativeSpecies: string;
  photoUrl: string;
  anatomy: string;
  integument: string;
  respiration: string;
  diet: string;
  reproduction: string;
  thermoregulation: string;
  habitats: string[];
  ecologicalImportance: string;
  evolutionaryNotes: string;
}

export interface HabitatInfo {
  id: string;
  name: string;
  description: string;
  environmentalChallenges: string[];
  chordateAdaptations: string[];
  examples: string[];
  nativeVsIntroducedAlert?: string;
  imageUrl: string;
}

export interface DangerCategory {
  title: string;
  subtitle: string;
  dangerType: 'Peçonhento' | 'Tóxico' | 'Ataque Defensivo' | 'Zoonoses';
  riskReality: string;
  prevention: string[];
  firstAid: string[];
  officialContact: string;
  speciesExamples: string[];
}

export interface TimelineEvent {
  period: string;
  mya: string; // Millions of years ago
  milestone: string;
  description: string;
  keyFossilsOrClades: string;
  scientificConfidence: 'Evidência Fóssil Comprovada' | 'Consenso com Hipóteses Ativas';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ScientificSource {
  title: string;
  institution: string;
  url: string;
  purpose: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  suggestedFollowUps?: string[];
  references?: { title: string; url: string }[];
}
