import React, { useState } from 'react';
import { habitatsData } from '../data/chordataInfo';
import { 
  Compass, 
  AlertTriangle, 
  CheckCircle2
} from 'lucide-react';

export const HabitatsSection: React.FC = () => {
  const [selectedHabitatId, setSelectedHabitatId] = useState<string>(habitatsData[0].id);

  const activeHabitat = habitatsData.find(h => h.id === selectedHabitatId) || habitatsData[0];

  return (
    <section id="habitats" className="py-20 relative bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Ecologia e Biogeografia</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Habitats e Distribuição Geográfica dos Cordados
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Desde as fossas abissais do oceano Pacífico até os picos do Himalaia e o semiárido da Caatinga, 
            veja como a fisiologia dos cordados foi esculpida pelos desafios de cada bioma.
          </p>
        </div>

        {/* Biome Selection Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-10">
          {habitatsData.map((hab) => (
            <button
              key={hab.id}
              onClick={() => setSelectedHabitatId(hab.id)}
              className={`p-3 rounded-2xl text-left border transition-all ${
                selectedHabitatId === hab.id
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/25 -translate-y-1'
                  : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-emerald-400'
              }`}
            >
              <span className="font-heading font-bold text-xs block leading-tight">
                {hab.name.split(' ')[0]}
              </span>
              <span className={`text-[10px] block truncate mt-0.5 ${selectedHabitatId === hab.id ? 'text-emerald-100' : 'text-slate-400'}`}>
                {hab.name.split(' ').slice(1).join(' ') || 'Bioma'}
              </span>
            </button>
          ))}
        </div>

        {/* Active Habitat Showcase Card */}
        <div className="glass-panel rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Photo Column */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img
                src={activeHabitat.imageUrl}
                alt={activeHabitat.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950/30" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/80 backdrop-blur-md">
                  Bioma Selecionado
                </span>
                <h3 className="text-3xl font-extrabold font-heading">
                  {activeHabitat.name}
                </h3>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              
              <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                {activeHabitat.description}
              </p>

              {/* Environmental Challenges vs Adaptations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Challenges */}
                <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50">
                  <span className="font-bold text-amber-900 dark:text-amber-200 text-xs sm:text-sm block mb-2">
                    Desafios Ambientais:
                  </span>
                  <ul className="space-y-1.5 text-xs text-amber-950 dark:text-amber-300">
                    {activeHabitat.environmentalChallenges.map((ch, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5"></span>
                        <span>{ch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Adaptations */}
                <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50">
                  <span className="font-bold text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm block mb-2">
                    Adaptações dos Cordados:
                  </span>
                  <ul className="space-y-1.5 text-xs text-emerald-950 dark:text-emerald-300">
                    {activeHabitat.chordateAdaptations.map((ad, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{ad}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Species Examples */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                  Representantes Típicos deste Ambiente:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeHabitat.examples.map((ex, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>

              {/* Native vs Introduced Species Alert */}
              {activeHabitat.nativeVsIntroducedAlert && (
                <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 flex items-start gap-3 text-xs sm:text-sm text-rose-900 dark:text-rose-200">
                  <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Impacto de Espécies Invasoras:</strong> {activeHabitat.nativeVsIntroducedAlert}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
