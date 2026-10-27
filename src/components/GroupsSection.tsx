import React, { useState } from 'react';
import { groupOverviews } from '../data/chordataInfo';
import type { GroupOverview } from '../types';
import { 
  Layers, 
  ChevronRight, 
  Wind, 
  Shield, 
  MapPin, 
  X, 
  TableProperties
} from 'lucide-react';

export const GroupsSection: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<GroupOverview | null>(null);
  const [showComparativeTable, setShowComparativeTable] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'Todos' | 'Protocordados' | 'Vertebrados'>('Todos');

  const filteredGroups = groupOverviews.filter(g => {
    if (activeTab === 'Todos') return true;
    return g.category === activeTab;
  });

  return (
    <section id="grupos" className="py-20 relative bg-slate-50/70 dark:bg-slate-900/50 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Zoologia Comparada</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Características dos Principais Grupos
            </h2>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              Explore a diversidade anatômica, fisiológica e ecológica dos subfilos e classes dos cordados. 
              Clique em qualquer card para ver o dossiê detalhado.
            </p>
          </div>

          {/* Action: Open Comparative Table */}
          <button
            onClick={() => setShowComparativeTable(true)}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 font-semibold text-xs sm:text-sm border border-emerald-300 dark:border-emerald-800 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 self-start md:self-auto"
          >
            <TableProperties className="w-4 h-4" />
            <span>Tabela Comparativa Completa</span>
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {(['Todos', 'Protocordados', 'Vertebrados'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === tab
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
              }`}
            >
              {tab}
            </button>
          ))}
          <span className="text-xs text-slate-400 dark:text-slate-500 font-medium ml-auto">
            {filteredGroups.length} grupos exibidos
          </span>
        </div>

        {/* Group Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => (
            <div
              key={group.name}
              onClick={() => setSelectedGroup(group)}
              className="group glass-panel rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col"
            >
              {/* Photo Banner with Gradient Overlay */}
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={group.photoUrl}
                  alt={group.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Badges on Image */}
                <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/30">
                    {group.category}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    group.thermoregulation === 'Endotérmico'
                      ? 'bg-rose-500/80 text-white'
                      : 'bg-cyan-500/80 text-white'
                  }`}>
                    {group.thermoregulation}
                  </span>
                </div>

                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                  <span className="text-[11px] font-mono text-emerald-300">
                    {group.scientificClade}
                  </span>
                  <h3 className="font-heading font-bold text-xl leading-tight">
                    {group.name}
                  </h3>
                </div>
              </div>

              {/* Card Body Snippets */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 dark:text-white">Revestimento: </strong>
                      <span className="line-clamp-1">{group.integument}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Wind className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 dark:text-white">Respiração: </strong>
                      <span className="line-clamp-1">{group.respiration}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 dark:text-white">Exemplos: </strong>
                      <span className="line-clamp-1">{group.representativeSpecies}</span>
                    </div>
                  </div>
                </div>

                {/* Footer trigger button */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500">
                  <span>Ver perfil zoológico completo</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal for Selected Group */}
        {selectedGroup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl relative">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedGroup(null)}
                aria-label="Fechar painel"
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-sm transition"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header Image */}
              <div className="relative h-64 w-full">
                <img
                  src={selectedGroup.photoUrl}
                  alt={selectedGroup.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500 text-white">
                      {selectedGroup.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white">
                      {selectedGroup.thermoregulation}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold font-heading">
                    {selectedGroup.name}
                  </h3>
                  <p className="text-sm font-mono text-emerald-300">
                    Clado Científico: {selectedGroup.scientificClade}
                  </p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 text-sm text-slate-700 dark:text-slate-300">
                
                {/* Anatomy */}
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Características Anatômicas
                  </h4>
                  <p className="leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                    {selectedGroup.anatomy}
                  </p>
                </div>

                {/* Physiology Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white block mb-1">
                      Revestimento Corporal
                    </strong>
                    <p className="text-xs sm:text-sm">{selectedGroup.integument}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white block mb-1">
                      Sistema Respiratório
                    </strong>
                    <p className="text-xs sm:text-sm">{selectedGroup.respiration}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white block mb-1">
                      Alimentação e Digestão
                    </strong>
                    <p className="text-xs sm:text-sm">{selectedGroup.diet}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white block mb-1">
                      Reprodução e Desenvolvimento
                    </strong>
                    <p className="text-xs sm:text-sm">{selectedGroup.reproduction}</p>
                  </div>
                </div>

                {/* Habitats & Ecological Role */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                      Importância Ecológica
                    </h4>
                    <p className="leading-relaxed bg-teal-50/50 dark:bg-teal-950/20 p-4 rounded-2xl border border-teal-200 dark:border-teal-900/50">
                      {selectedGroup.ecologicalImportance}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                      Notas Evolutivas
                    </h4>
                    <p className="leading-relaxed bg-cyan-50/50 dark:bg-cyan-950/20 p-4 rounded-2xl border border-cyan-200 dark:border-cyan-900/50 italic">
                      {selectedGroup.evolutionaryNotes}
                    </p>
                  </div>
                </div>

                {/* Close action */}
                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setSelectedGroup(null)}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs transition hover:opacity-90"
                  >
                    Fechar Detalhes
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Full Comparative Table Modal */}
        {showComparativeTable && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <TableProperties className="w-6 h-6 text-emerald-600" />
                    <span>Tabela Comparativa dos Cordados</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Análise anatômica e fisiológica lado a lado de todos os grupos do filo Chordata.
                  </p>
                </div>

                <button
                  onClick={() => setShowComparativeTable(false)}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Table */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white uppercase text-[11px] font-bold">
                    <tr>
                      <th className="p-3.5">Grupo</th>
                      <th className="p-3.5">Categoria</th>
                      <th className="p-3.5">Revestimento</th>
                      <th className="p-3.5">Respiração</th>
                      <th className="p-3.5">Termorregulação</th>
                      <th className="p-3.5">Reprodução</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {groupOverviews.map((g) => (
                      <tr key={g.name} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                        <td className="p-3.5 font-bold text-slate-900 dark:text-white whitespace-nowrap">
                          {g.name}
                        </td>
                        <td className="p-3.5 whitespace-nowrap">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            g.category === 'Protocordados' ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300' : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                          }`}>
                            {g.category}
                          </span>
                        </td>
                        <td className="p-3.5 min-w-[180px]">{g.integument}</td>
                        <td className="p-3.5 min-w-[180px]">{g.respiration}</td>
                        <td className="p-3.5 whitespace-nowrap font-semibold">
                          <span className={g.thermoregulation === 'Endotérmico' ? 'text-rose-500' : 'text-cyan-600 dark:text-cyan-400'}>
                            {g.thermoregulation}
                          </span>
                        </td>
                        <td className="p-3.5 min-w-[200px]">{g.reproduction}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  onClick={() => setShowComparativeTable(false)}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs shadow-md"
                >
                  Fechar Tabela
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
