import React, { useState } from 'react';
import { phylogeneticNodes } from '../data/chordataInfo';
import { 
  GitBranch, 
  AlertTriangle, 
  Feather,
  Fish
} from 'lucide-react';

export const PhylogenySection: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('chordata-raiz');

  const activeNode = phylogeneticNodes.find(n => n.id === selectedNodeId) || phylogeneticNodes[0];

  // Visual tree branches for the interactive cladogram
  const branches = [
    { id: 'chordata-raiz', title: 'Origem Chordata', age: '~535 Ma', trait: 'Notocorda, Tubo dorsal oco, Fendas faringianas, Cauda' },
    { id: 'olfactores', title: 'Clado Olfactores', age: '~530 Ma', trait: 'Sistema olfativo cefálico (Tunicados + Vertebrados)' },
    { id: 'vertebrata-craniata', title: 'Craniata / Vertebrata', age: '~518 Ma', trait: 'Crânio ósseo/cartilaginoso, Cristas neurais, Encéfalo tripartido' },
    { id: 'gnathostomata', title: 'Gnathostomata', age: '~440 Ma', trait: 'Mandíbulas articuladas derivadas do 1º arco visceral' },
    { id: 'osteichthyes-sarcopterygii', title: 'Sarcopterygii', age: '~410 Ma', trait: 'Nadadeiras lobadas carnosas com suporte ósseo axial' },
    { id: 'tetrapoda', title: 'Tetrapoda', age: '~375 Ma', trait: 'Quatro membros locomotores com dedos articulados' },
    { id: 'amniota', title: 'Amniota', age: '~318 Ma', trait: 'Ovo amniótico com casca e pele queratinizada' },
    { id: 'sauropsida-aves', title: 'Aves (Arcossauros)', age: '~150 Ma', trait: 'Penas assimétricas, asas aerodinâmicas, endotermia' }
  ];

  return (
    <section id="classificacao" className="py-20 relative bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Sistemática Filogenética</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Classificação Científica e Filogenia dos Cordados
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            A zoologia moderna não classifica os seres vivos com base em preferências arbitrárias de aparência, mas sim 
            através da <strong>análise cladística</strong> (relações evolutivas de parentesco e ancestralidade comum).
          </p>
        </div>

        {/* 2 Critical Scientific Clarification Banners Required by Prompt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          
          {/* Clarification 1: Peixes é termo parafilético */}
          <div className="p-6 rounded-3xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 shadow-sm relative overflow-hidden">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/20 shrink-0">
                <Fish className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-bold text-base text-blue-950 dark:text-blue-100">
                  Por que "Peixes" não é um táxon único?
                </h4>
                <p className="text-xs sm:text-sm text-blue-900/80 dark:text-blue-200/80 leading-relaxed">
                  "Peixes" é uma categoria tradicional de uso comum, mas <strong>não constitui um único grupo monofilético</strong>. 
                  Reúne linhagens imensamente divergentes (ciclóstomos sem mandíbulas, tubarões cartilaginosos e peixes ósseos). 
                  Os peixes sarcopterígeos (como celacantos e peixes pulmonados) são filogeneticamente mais próximos de você e dos animais terrestres do que de uma sardinha!
                </p>
              </div>
            </div>
          </div>

          {/* Clarification 2: Aves são répteis arcossauros */}
          <div className="p-6 rounded-3xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 shadow-sm relative overflow-hidden">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-500/20 shrink-0">
                <Feather className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-bold text-base text-emerald-950 dark:text-emerald-100">
                  Aves pertencem à linhagem dos Répteis
                </h4>
                <p className="text-xs sm:text-sm text-emerald-900/80 dark:text-emerald-200/80 leading-relaxed">
                  Na filogenia moderna, as <strong>aves são dinossauros terópodes vivos</strong> pertencentes ao clado dos arcossauros. 
                  Uma ave compartilha um ancestral comum com o jacaré muito mais recente do que o jacaré compartilha com uma lagartixa ou tartaruga. 
                  Portanto, excluir as aves tornaria o grupo dos répteis artificial (parafilético).
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Warning about the "Evolutionary Ladder" misconception */}
        <div className="mb-12 p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <strong>Atenção Metodológica:</strong> A evolução não é uma escada linear de progresso rumo ao ser humano! 
            O anfioxo ou a ascídia atuais não são "etapas intermediárias não terminadas", mas organismos com milhões de anos 
            de evolução independente, plenamente adaptados aos seus próprios nichos marinhos bentônicos.
          </div>
        </div>

        {/* Interactive Phylogenetic Tree Visualizer */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
                Cladograma dos Cordados
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                Árvore Filogenética Interativa
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Clique nos nós nodais para explorar as novidades evolutivas (apomorfias) surgidas ao longo do tempo.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              Nó Selecionado
            </div>
          </div>

          {/* Cladogram Branch Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
            {branches.map((b) => (
              <button
                key={b.id}
                onClick={() => setSelectedNodeId(b.id)}
                className={`p-3 rounded-2xl text-left border transition-all ${
                  selectedNodeId === b.id
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/30 -translate-y-1'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-emerald-400'
                }`}
              >
                <span className={`text-[10px] font-mono block ${selectedNodeId === b.id ? 'text-emerald-100' : 'text-slate-400'}`}>
                  {b.age}
                </span>
                <span className="font-heading font-bold text-xs block leading-tight mt-1">
                  {b.title}
                </span>
              </button>
            ))}
          </div>

          {/* Graphical Tree Display */}
          <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 overflow-x-auto">
            <div className="min-w-[700px] py-4 relative">
              {/* Main Axial Stem */}
              <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full w-full mb-12 relative">
                
                {/* Node Marks along axis */}
                {branches.map((b, idx) => {
                  const percent = (idx / (branches.length - 1)) * 90 + 5;
                  const isCurrent = selectedNodeId === b.id;
                  return (
                    <div
                      key={b.id}
                      onClick={() => setSelectedNodeId(b.id)}
                      style={{ left: `${percent}%` }}
                      className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer group transition-transform ${
                        isCurrent ? 'scale-125 z-20' : 'hover:scale-110'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        isCurrent ? 'bg-white border-emerald-400 shadow-lg shadow-emerald-400/50' : 'bg-slate-800 border-slate-600'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-emerald-600' : 'bg-slate-400'}`} />
                      </div>
                      
                      {/* Branch label above */}
                      <div className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                        <span className={`text-[10px] font-bold block ${isCurrent ? 'text-emerald-300 font-extrabold' : 'text-slate-400'}`}>
                          {b.title.split(' ')[0]}
                        </span>
                        <span className="text-[9px] text-slate-500 font-mono">{b.age}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Clade Lineages Terminal Showcase */}
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 pt-4 border-t border-slate-800 text-center">
                <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="text-[10px] font-bold text-emerald-400">Cefalocordados</div>
                  <div className="text-[9px] text-slate-400 mt-0.5">Anfioxos</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="text-[10px] font-bold text-teal-400">Tunicados</div>
                  <div className="text-[9px] text-slate-400 mt-0.5">Ascídias</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="text-[10px] font-bold text-cyan-400">Ágnatos</div>
                  <div className="text-[9px] text-slate-400 mt-0.5">Lampreias</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="text-[10px] font-bold text-blue-400">Condríctes</div>
                  <div className="text-[9px] text-slate-400 mt-0.5">Tubarões</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="text-[10px] font-bold text-indigo-400">Osteíctes</div>
                  <div className="text-[9px] text-slate-400 mt-0.5">Peixes Ósseos</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="text-[10px] font-bold text-purple-400">Anfíbios</div>
                  <div className="text-[9px] text-slate-400 mt-0.5">Sapos e Rãs</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="text-[10px] font-bold text-amber-400">Répteis + Aves</div>
                  <div className="text-[9px] text-slate-400 mt-0.5">Sauropsida</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="text-[10px] font-bold text-rose-400">Mamíferos</div>
                  <div className="text-[9px] text-slate-400 mt-0.5">Sinápsidos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Active Node Detailed Card */}
          <div className="mt-8 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  {activeNode.name}
                </h4>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-mono font-semibold text-slate-600 dark:text-slate-300">
                {activeNode.age}
              </span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50">
                <strong className="text-emerald-800 dark:text-emerald-300 block mb-1">
                  Novidade Evolutiva (Sinapomorfia do Nó):
                </strong>
                <p className="text-slate-700 dark:text-slate-200">
                  {activeNode.synapomorphy}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <strong className="text-slate-800 dark:text-slate-200 block mb-1">
                  Linhagens Descendentes:
                </strong>
                <div className="flex flex-wrap gap-2 mt-1">
                  {activeNode.descendants.map((d, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 text-xs font-medium border border-slate-300 dark:border-slate-700">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic pt-1">
                <strong>Insight Zoológico:</strong> {activeNode.note}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
