import React, { useState, useMemo } from 'react';
import { speciesList } from '../data/speciesData';
import type { Species, IUCNStatus, RiskLevel } from '../types';
import { 
  Search, 
  X, 
  ShieldAlert, 
  ExternalLink, 
  Sparkles, 
  Globe, 
  Utensils, 
  AlertTriangle, 
  Info,
  MapPin,
  HelpCircle,
  Eye,
  CheckCircle2
} from 'lucide-react';

interface SpeciesCatalogProps {
  initialSearchQuery?: string;
}

export const SpeciesCatalog: React.FC<SpeciesCatalogProps> = ({ initialSearchQuery = '' }) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedGroup, setSelectedGroup] = useState<string>('Todos');
  const [selectedConservation, setSelectedConservation] = useState<string>('Todos');
  const [selectedRisk, setSelectedRisk] = useState<string>('Todos');
  const [onlyBrazil, setOnlyBrazil] = useState<boolean>(false);
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);

  // Filter species
  const filteredSpecies = useMemo(() => {
    return speciesList.filter((sp) => {
      // Search text (popular or scientific)
      const matchesSearch = 
        sp.commonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sp.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sp.classOrClade.toLowerCase().includes(searchQuery.toLowerCase());

      // Group filter
      const matchesGroup = 
        selectedGroup === 'Todos' || 
        sp.group === selectedGroup ||
        (selectedGroup === 'Peixes (Geral)' && sp.group.includes('Peixes'));

      // Conservation filter
      const matchesConservation = 
        selectedConservation === 'Todos' ||
        sp.conservationStatus === selectedConservation ||
        (selectedConservation === 'Ameaçadas (CR/EN/VU)' && ['CR', 'EN', 'VU'].includes(sp.conservationStatus));

      // Risk filter
      const matchesRisk = 
        selectedRisk === 'Todos' ||
        sp.riskLevel === selectedRisk;

      // Brazilian region toggle
      const matchesBrazil = 
        !onlyBrazil || 
        sp.geographicDistribution.toLowerCase().includes('brasil') ||
        sp.habitat.toLowerCase().includes('brasil');

      return matchesSearch && matchesGroup && matchesConservation && matchesRisk && matchesBrazil;
    });
  }, [searchQuery, selectedGroup, selectedConservation, selectedRisk, onlyBrazil]);

  const getIUCNBadge = (status: IUCNStatus) => {
    switch (status) {
      case 'CR':
        return { label: 'CR • Criticamente em Perigo', color: 'bg-red-600 text-white' };
      case 'EN':
        return { label: 'EN • Em Perigo', color: 'bg-orange-600 text-white' };
      case 'VU':
        return { label: 'VU • Vulnerável', color: 'bg-amber-500 text-white' };
      case 'NT':
        return { label: 'NT • Quase Ameaçado', color: 'bg-lime-600 text-white' };
      case 'LC':
        return { label: 'LC • Pouco Preocupante', color: 'bg-emerald-600 text-white' };
      case 'DD':
        return { label: 'DD • Dados Insuficientes', color: 'bg-slate-500 text-white' };
      default:
        return { label: status, color: 'bg-slate-500 text-white' };
    }
  };

  const getRiskBadge = (risk: RiskLevel) => {
    switch (risk) {
      case 'Peçonhento':
        return { label: 'Peçonhento', color: 'bg-red-500 text-white', icon: AlertTriangle };
      case 'Tóxico':
        return { label: 'Venenoso / Tóxico', color: 'bg-purple-600 text-white', icon: ShieldAlert };
      case 'Predador de Topo':
        return { label: 'Predador Ápice', color: 'bg-amber-600 text-white', icon: AlertTriangle };
      case 'Atenção / Defensivo':
        return { label: 'Atenção / Defensivo', color: 'bg-blue-600 text-white', icon: Info };
      case 'Inofensivo':
      default:
        return { label: 'Inofensivo', color: 'bg-emerald-600 text-white', icon: CheckCircle2 };
    }
  };

  return (
    <section id="catalogo" className="py-20 relative bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5" />
            <span>Biodiversidade Global & Brasileira</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Catálogo Interativo de Espécies
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Pesquise por nome popular ou científico e filtre por grupo zoológico, bioma, estado de conservação 
            ou risco. Fichas auditadas com fotografia em alta resolução e dados fidedignos.
          </p>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="glass-panel p-5 sm:p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg mb-10 space-y-4">
          
          {/* Top row: Search input & Brazil toggle */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar por nome popular (ex: Pirarucu, Axolote) ou científico..."
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Limpar campo de busca"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Brazil Fauna Fast Switch */}
            <button
              onClick={() => setOnlyBrazil(!onlyBrazil)}
              className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 border transition ${
                onlyBrazil
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/30'
                  : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100'
              }`}
            >
              <span>🇧🇷 Fauna Brasileira</span>
              {onlyBrazil && <CheckCircle2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Bottom row: Filter Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            
            {/* Group Selector */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                Grupo Zoológico
              </label>
              <select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Todos">Todos os Grupos</option>
                <option value="Cefalocordados">Cefalocordados (Anfioxos)</option>
                <option value="Tunicados">Tunicados (Ascídias)</option>
                <option value="Peixes (Geral)">Peixes (Ágnatos, Cartilaginosos, Ósseos)</option>
                <option value="Anfíbios">Anfíbios</option>
                <option value="Répteis">Répteis</option>
                <option value="Aves">Aves</option>
                <option value="Mamíferos">Mamíferos</option>
              </select>
            </div>

            {/* Conservation Status Selector */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                Conservação (IUCN)
              </label>
              <select
                value={selectedConservation}
                onChange={(e) => setSelectedConservation(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Todos">Todos os Estados</option>
                <option value="Ameaçadas (CR/EN/VU)">⚠️ Apenas Ameaçadas (CR, EN, VU)</option>
                <option value="CR">CR • Criticamente em Perigo</option>
                <option value="EN">EN • Em Perigo</option>
                <option value="VU">VU • Vulnerável</option>
                <option value="NT">NT • Quase Ameaçado</option>
                <option value="LC">LC • Menor Preocupação</option>
                <option value="DD">DD • Dados Insuficientes</option>
              </select>
            </div>

            {/* Risk Level Selector */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                Faixa de Risco para Humanos
              </label>
              <select
                value={selectedRisk}
                onChange={(e) => setSelectedRisk(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Todos">Todos os Níveis de Risco</option>
                <option value="Inofensivo">Inofensivo</option>
                <option value="Atenção / Defensivo">Atenção / Defensivo</option>
                <option value="Tóxico">Venenoso / Tóxico (Passivo)</option>
                <option value="Peçonhento">Peçonhento (Inoculação)</option>
                <option value="Predador de Topo">Predador de Topo</option>
              </select>
            </div>

          </div>

          {/* Active Filter Indicators */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
            <span>
              Mostrando <strong>{filteredSpecies.length}</strong> de {speciesList.length} espécies cadastradas
            </span>
            {(searchQuery || selectedGroup !== 'Todos' || selectedConservation !== 'Todos' || selectedRisk !== 'Todos' || onlyBrazil) && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedGroup('Todos');
                  setSelectedConservation('Todos');
                  setSelectedRisk('Todos');
                  setOnlyBrazil(false);
                }}
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                Limpar todos os filtros
              </button>
            )}
          </div>

        </div>

        {/* Species Cards Grid */}
        {filteredSpecies.length === 0 ? (
          <div className="p-12 text-center glass-panel rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
            <Info className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              Nenhuma espécie encontrada com os filtros selecionados
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Tente redefinir os filtros ou buscar por outro termo.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSpecies.map((sp) => {
              const iucn = getIUCNBadge(sp.conservationStatus);
              const risk = getRiskBadge(sp.riskLevel);
              const RiskIcon = risk.icon;

              return (
                <div
                  key={sp.id}
                  onClick={() => setSelectedSpecies(sp)}
                  className="group glass-panel rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col"
                >
                  {/* Photo Container */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={sp.imageUrl}
                      alt={sp.commonName}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-1.5">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${iucn.color} shadow-sm`}>
                        {sp.conservationStatus}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${risk.color} flex items-center gap-1 shadow-sm`}>
                        <RiskIcon className="w-3 h-3" />
                        <span>{risk.label.split(' ')[0]}</span>
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 text-white">
                      <span className="text-[10px] font-semibold text-emerald-300 uppercase tracking-wider block">
                        {sp.group}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight">
                        {sp.commonName}
                      </h3>
                      <p className="text-xs font-mono italic text-slate-500 dark:text-slate-400 mt-0.5">
                        {sp.scientificName}
                      </p>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                      <div className="flex items-start gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{sp.habitat}</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <Utensils className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{sp.diet}</span>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      <span>Ver ficha completa</span>
                      <Eye className="w-3.5 h-3.5 transform group-hover:scale-125 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Detailed Species Modal Dialog */}
        {selectedSpecies && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl relative">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedSpecies(null)}
                aria-label="Fechar ficha da espécie"
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white backdrop-blur-sm transition"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner Photo */}
              <div className="relative h-72 sm:h-80 w-full bg-slate-950">
                <img
                  src={selectedSpecies.imageUrl}
                  alt={selectedSpecies.commonName}
                  className="w-full h-full object-cover"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500 text-white">
                      {selectedSpecies.group}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getIUCNBadge(selectedSpecies.conservationStatus).color}`}>
                      {getIUCNBadge(selectedSpecies.conservationStatus).label}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getRiskBadge(selectedSpecies.riskLevel).color}`}>
                      {getRiskBadge(selectedSpecies.riskLevel).label}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold font-heading">
                    {selectedSpecies.commonName}
                  </h3>
                  <p className="text-base font-mono text-emerald-300">
                    {selectedSpecies.scientificName} • {selectedSpecies.classOrClade}
                  </p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-6 text-sm text-slate-700 dark:text-slate-300">
                
                {/* Photo credits */}
                {selectedSpecies.imageAuthor && (
                  <div className="text-[11px] text-slate-400 font-mono">
                    Foto: {selectedSpecies.imageAuthor} | Licença: {selectedSpecies.imageLicense || 'Uso Educativo'}
                  </div>
                )}

                {/* Key Characteristics */}
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-500" />
                    <span>Características Marcantes</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedSpecies.keyCharacteristics.map((char, i) => (
                      <li key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Habitat & Geography */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white block mb-1">
                      Habitat Típico
                    </strong>
                    <p className="text-xs sm:text-sm">{selectedSpecies.habitat}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white block mb-1">
                      Distribuição Geográfica
                    </strong>
                    <p className="text-xs sm:text-sm">{selectedSpecies.geographicDistribution}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white block mb-1">
                      Alimentação
                    </strong>
                    <p className="text-xs sm:text-sm">{selectedSpecies.diet}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white block mb-1">
                      Papel Ecológico
                    </strong>
                    <p className="text-xs sm:text-sm">{selectedSpecies.ecologicalRole}</p>
                  </div>
                </div>

                {/* Risk and Safety Guidance */}
                {selectedSpecies.riskDescription && (
                  <div className={`p-4 rounded-2xl border text-xs sm:text-sm space-y-1.5 ${
                    selectedSpecies.riskLevel === 'Peçonhento' 
                      ? 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/60 text-red-950 dark:text-red-200'
                      : 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/60 text-amber-950 dark:text-amber-200'
                  }`}>
                    <div className="font-bold flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      <span>Relação com os Seres Humanos & Risco:</span>
                    </div>
                    <p>{selectedSpecies.riskDescription}</p>
                    {selectedSpecies.firstAidAdvice && (
                      <div className="pt-2 border-t border-amber-200/60 dark:border-amber-900/40">
                        <strong>Primeiros Socorros / Conduta: </strong>
                        <span>{selectedSpecies.firstAidAdvice}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Curiosities */}
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-teal-500" />
                    <span>Curiosidades Científicas</span>
                  </h4>
                  <div className="space-y-2">
                    {selectedSpecies.curiosities.map((cur, i) => (
                      <p key={i} className="p-3.5 rounded-xl bg-teal-50/60 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/50 text-xs sm:text-sm text-teal-950 dark:text-teal-200">
                        {cur}
                      </p>
                    ))}
                  </div>
                </div>

                {/* References */}
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-bold text-slate-400 block mb-2">
                    Fontes Científicas Verificadas:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedSpecies.sourceReferences.map((ref, idx) => (
                      <a
                        key={idx}
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-xs font-medium text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700 transition"
                      >
                        <span>{ref.name}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Modal close */}
                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setSelectedSpecies(null)}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs shadow-md hover:bg-emerald-500 transition"
                  >
                    Fechar Ficha
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
