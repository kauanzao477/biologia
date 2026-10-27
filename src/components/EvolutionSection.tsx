import React, { useState } from 'react';
import { evolutionTimeline } from '../data/chordataInfo';
import { History } from 'lucide-react';

export const EvolutionSection: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);

  const activeEvent = evolutionTimeline[selectedMilestone];

  return (
    <section id="evolucao" className="py-20 relative bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-100 dark:bg-teal-950/60 border border-teal-300 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider">
            <History className="w-3.5 h-3.5" />
            <span>Tempo Profundo & Paleontologia</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Evolução dos Cordados: 535 Milhões de Anos de História
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Acompanhe a cronologia das grandes transformações anatômicas que permitiram aos cordados passarem de 
            pequenos filtradores fósseis nos mares cambrianos aos animais que dominam os oceanos, a terra firme e o ar.
          </p>
        </div>

        {/* Interactive Evolutionary Timeline */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl mb-12">
          
          {/* Timeline Milestones Horizontal Step Nav */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
            {evolutionTimeline.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedMilestone(idx)}
                className={`p-3.5 rounded-2xl text-left border transition-all ${
                  selectedMilestone === idx
                    ? 'bg-teal-600 text-white border-teal-500 shadow-md shadow-teal-600/30 -translate-y-1'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-teal-400'
                }`}
              >
                <span className={`text-[10px] font-mono block ${selectedMilestone === idx ? 'text-teal-100' : 'text-slate-400'}`}>
                  {item.mya}
                </span>
                <span className="font-heading font-bold text-xs block leading-tight mt-1">
                  {item.period}
                </span>
              </button>
            ))}
          </div>

          {/* Active Milestone Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-4 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-teal-400 uppercase tracking-widest font-bold">
                  {activeEvent.period} • {activeEvent.mya}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
                  {activeEvent.milestone}
                </h3>
              </div>

              <span className={`px-3 py-1 rounded-full text-xs font-semibold self-start sm:self-auto ${
                activeEvent.scientificConfidence === 'Evidência Fóssil Comprovada'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              }`}>
                {activeEvent.scientificConfidence}
              </span>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {activeEvent.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-400">
                Fósseis e Clados-Chave:
              </span>
              <span className="px-3 py-1 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono text-teal-300">
                {activeEvent.keyFossilsOrClades}
              </span>
            </div>
          </div>

        </div>

        {/* 3 Core Evolutionary Milestones Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-3xl glass-panel border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-2.5">
            <div className="w-10 h-10 rounded-2xl bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
              1
            </div>
            <h4 className="font-bold text-lg text-slate-900 dark:text-white">
              Origem da Mandíbula (Gnathostomata)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              A modificação do primeiro arco branquial cartilaginoso permitiu a mastigação ativa, convertendo os cordados 
              em predadores de topo e propiciando a explosão adaptativa dos peixes.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass-panel border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-2.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              2
            </div>
            <h4 className="font-bold text-lg text-slate-900 dark:text-white">
              A Transição Água-Terra (Tetrapoda)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Sarcopterígeos como o <em>Tiktaalik</em> adaptaram suas nadadeiras lobadas em membros com punhos e dedos, 
              acompanhados por pulmões funcionais e pescoço flexível para respirar e caçar em terra firme.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass-panel border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-2.5">
            <div className="w-10 h-10 rounded-2xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold">
              3
            </div>
            <h4 className="font-bold text-lg text-slate-900 dark:text-white">
              O Ovo Amniótico (Amniota)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              A criação de um microambiente aquático encapsulado (ânion, córion e alantoide) permitiu que os répteis e mamíferos 
              se reproduzissem no interior seco dos continentes sem depender de corpos d’água.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
