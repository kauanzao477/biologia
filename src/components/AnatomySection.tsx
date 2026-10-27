import React, { useState } from 'react';
import { chordateSynapomorphies } from '../data/chordataInfo';
import { 
  Compass, 
  Info
} from 'lucide-react';

export const AnatomySection: React.FC = () => {
  const [selectedSynapomorphy, setSelectedSynapomorphy] = useState<string>('notocorda');

  const activeTrait = chordateSynapomorphies.find(s => s.id === selectedSynapomorphy) || chordateSynapomorphies[0];

  return (
    <section id="o-que-sao" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Fundamentos Biológicos</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            O que são os Cordados?
          </h2>
          
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Os cordados pertencem ao filo <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">Chordata</strong>. 
            Embora abranjam desde minúsculos animais marinhos translúcidos até a gigantesca baleia-azul, todos compartilham um 
            mesmo plano corporal arquitetônico básico durante pelo menos uma fase do seu desenvolvimento embrionário ou larval.
          </p>

          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 text-left text-xs sm:text-sm text-amber-900 dark:text-amber-200 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>Princípio Biológico Central:</strong> Essas características fundamentais <em>não precisam permanecer visíveis</em> durante toda a vida do indivíduo adulto! Em muitos vertebrados, elas sofrem profundas transformações morfogenéticas, sendo modificadas ou substituídas por estruturas definitivas mais complexas durante a embriogênese.
            </div>
          </div>
        </div>

        {/* Interactive Archetypal Chordate Anatomical Diagram */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-200/80 dark:border-slate-800/80 mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Diagrama Anatômico do Cordado Arquetípico</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-semibold">
                  Interativo
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Clique nas partes do corpo do animal modelo abaixo para inspecionar cada sinapomorfia e sua transformação ontogenética.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              {chordateSynapomorphies.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSynapomorphy(s.id)}
                  className={`px-3 py-1.5 rounded-xl font-semibold transition-all ${
                    selectedSynapomorphy === s.id
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {s.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Canvas Schematic */}
          <div className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-6 rounded-2xl overflow-hidden border border-slate-800 text-center shadow-inner">
            <svg 
              viewBox="0 0 900 360" 
              className="w-full h-auto max-h-[380px] select-none mx-auto drop-shadow-2xl"
            >
              <defs>
                <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1e293b" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#334155" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Water grid ambient lines */}
              <path d="M 0 180 Q 225 170 450 180 T 900 180" stroke="#065f46" strokeWidth="0.5" fill="none" opacity="0.3" />
              <path d="M 0 240 Q 225 250 450 240 T 900 240" stroke="#0e7490" strokeWidth="0.5" fill="none" opacity="0.3" />

              {/* Archetypal Chordate Body Outline (Translucent Pisciform) */}
              <path
                d="M 120 180 C 120 110, 260 70, 520 70 C 680 70, 800 130, 880 180 C 800 230, 680 290, 520 290 C 260 290, 120 250, 120 180 Z"
                fill="url(#bodyGrad)"
                stroke="#475569"
                strokeWidth="2"
              />

              {/* Metameric Muscle Blocks (Myotomes) chevron pattern */}
              {[280, 340, 400, 460, 520, 580, 640, 700, 760, 820].map((x, i) => (
                <path
                  key={i}
                  d={`M ${x} 90 L ${x + 25} 180 L ${x} 270`}
                  stroke="#334155"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  fill="none"
                  opacity="0.6"
                />
              ))}

              {/* 1. DORSAL HOLLOW NERVE CORD (Tubo Nervoso Dorsal e Oco) */}
              <g 
                onClick={() => setSelectedSynapomorphy('tubo-nervoso')} 
                className="cursor-pointer group"
              >
                <path
                  d="M 150 110 C 240 100, 480 95, 830 160"
                  fill="none"
                  stroke={selectedSynapomorphy === 'tubo-nervoso' ? '#38bdf8' : '#0284c7'}
                  strokeWidth={selectedSynapomorphy === 'tubo-nervoso' ? '9' : '6'}
                  filter={selectedSynapomorphy === 'tubo-nervoso' ? 'url(#glow)' : undefined}
                  className="transition-all duration-200"
                />
                {/* Brain vesicle expansion */}
                <circle cx="160" cy="110" r={selectedSynapomorphy === 'tubo-nervoso' ? "10" : "8"} fill="#38bdf8" />
                <text x="180" y="80" fill="#7dd3fc" fontSize="12" fontWeight="bold">
                  Tubo Nervoso Dorsal e Oco (Encéfalo anterior)
                </text>
                <line x1="240" y1="85" x2="260" y2="103" stroke="#38bdf8" strokeWidth="1" />
              </g>

              {/* 2. NOTOCHORD (Notocorda) */}
              <g 
                onClick={() => setSelectedSynapomorphy('notocorda')} 
                className="cursor-pointer group"
              >
                <path
                  d="M 140 140 C 240 135, 480 135, 850 175"
                  fill="none"
                  stroke={selectedSynapomorphy === 'notocorda' ? '#34d399' : '#059669'}
                  strokeWidth={selectedSynapomorphy === 'notocorda' ? '12' : '8'}
                  filter={selectedSynapomorphy === 'notocorda' ? 'url(#glow)' : undefined}
                  className="transition-all duration-200"
                />
                <text x="380" y="125" fill="#6ee7b7" fontSize="13" fontWeight="bold">
                  Notocorda (Bastão de Sustentação Axial)
                </text>
                <line x1="430" y1="130" x2="430" y2="138" stroke="#34d399" strokeWidth="1.5" />
              </g>

              {/* 3. PHARYNGEAL SLITS (Fendas Faringianas) */}
              <g 
                onClick={() => setSelectedSynapomorphy('fendas-faringianas')} 
                className="cursor-pointer group"
              >
                {[200, 220, 240, 260, 280, 300].map((fx, i) => (
                  <ellipse
                    key={i}
                    cx={fx}
                    cy="200"
                    rx="4.5"
                    ry="18"
                    fill={selectedSynapomorphy === 'fendas-faringianas' ? '#fbbf24' : '#d97706'}
                    stroke="#b45309"
                    strokeWidth="1"
                    filter={selectedSynapomorphy === 'fendas-faringianas' ? 'url(#glow)' : undefined}
                    className="transition-all duration-200"
                  />
                ))}
                <text x="170" y="245" fill="#fcd34d" fontSize="12" fontWeight="bold">
                  Fendas Faringianas Ciliadas
                </text>
                <line x1="230" y1="235" x2="245" y2="218" stroke="#fbbf24" strokeWidth="1" />
              </g>

              {/* 4. ENDOSTYLE (Endóstilo / Glândula Tireoide) */}
              <g 
                onClick={() => setSelectedSynapomorphy('endostilo')} 
                className="cursor-pointer group"
              >
                <path
                  d="M 195 224 Q 250 228 305 224"
                  fill="none"
                  stroke={selectedSynapomorphy === 'endostilo' ? '#f43f5e' : '#be123c'}
                  strokeWidth={selectedSynapomorphy === 'endostilo' ? '8' : '5'}
                  filter={selectedSynapomorphy === 'endostilo' ? 'url(#glow)' : undefined}
                  className="transition-all duration-200"
                />
                <text x="140" y="285" fill="#fda4af" fontSize="12" fontWeight="bold">
                  Endóstilo / Glândula Tireoide (assoalho faríngeo)
                </text>
                <line x1="250" y1="272" x2="250" y2="230" stroke="#f43f5e" strokeWidth="1" />
              </g>

              {/* Digestive Tract / Gut */}
              <path
                d="M 130 190 Q 170 195 320 205 L 620 215 L 640 255"
                fill="none"
                stroke="#64748b"
                strokeWidth="4"
                opacity="0.8"
              />
              {/* Mouth & Anus labels */}
              <text x="80" y="195" fill="#94a3b8" fontSize="11">Boca Anterior</text>
              <line x1="125" y1="190" x2="135" y2="190" stroke="#94a3b8" strokeWidth="1" />

              <circle cx="640" cy="255" r="5" fill="#f87171" />
              <text x="615" y="285" fill="#fca5a5" fontSize="11" fontWeight="bold">Ânus</text>
              <line x1="640" y1="275" x2="640" y2="260" stroke="#f87171" strokeWidth="1" />

              {/* 5. POST-ANAL TAIL (Cauda Pós-anal) */}
              <g 
                onClick={() => setSelectedSynapomorphy('cauda-pos-anal')} 
                className="cursor-pointer group"
              >
                <path
                  d="M 645 150 C 720 145, 800 155, 880 180 C 800 220, 720 240, 645 255 Z"
                  fill={selectedSynapomorphy === 'cauda-pos-anal' ? 'rgba(168, 85, 247, 0.4)' : 'rgba(147, 51, 234, 0.15)'}
                  stroke={selectedSynapomorphy === 'cauda-pos-anal' ? '#c084fc' : '#7e22ce'}
                  strokeWidth="2"
                  filter={selectedSynapomorphy === 'cauda-pos-anal' ? 'url(#glow)' : undefined}
                />
                <text x="700" y="325" fill="#d8b4fe" fontSize="12" fontWeight="bold">
                  Cauda Pós-anal Muscular
                </text>
                <line x1="750" y1="310" x2="750" y2="210" stroke="#c084fc" strokeWidth="1" strokeDasharray="3 2" />
              </g>

            </svg>
            <div className="text-[11px] text-slate-400 mt-2 font-mono">
              Esquema representativo do bauplan (plano corporal) arquétipo dos cordados • Clique nas estruturas para inspecionar
            </div>
          </div>

          {/* Active Synapomorphy Detailed Inspection Box */}
          <div className="mt-8 p-6 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <span className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">
                  Sinapomorfia Selecionada • {activeTrait.latinName}
                </span>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                  {activeTrait.name}
                </h4>
              </div>
              <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-semibold shadow-sm">
                Diagnóstico dos Cordados
              </span>
            </div>

            <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed mb-5">
              {activeTrait.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-emerald-200 dark:border-emerald-800/60 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-100 dark:border-slate-800">
                <span className="font-bold text-emerald-700 dark:text-emerald-400 block mb-1">
                  Origem no Embrião
                </span>
                <p className="text-slate-600 dark:text-slate-300">
                  {activeTrait.embryoFate}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-100 dark:border-slate-800">
                <span className="font-bold text-teal-700 dark:text-teal-400 block mb-1">
                  Destino no Animal Adulto
                </span>
                <p className="text-slate-600 dark:text-slate-300">
                  {activeTrait.adultPresence}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-100 dark:border-slate-800">
                <span className="font-bold text-cyan-700 dark:text-cyan-400 block mb-1">
                  Importância Evolutiva
                </span>
                <p className="text-slate-600 dark:text-slate-300">
                  {activeTrait.importance}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* General Biological Organization Cards */}
        <div className="space-y-4">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Organização dos Sistemas Orgânicos e Morfologia
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Características fundamentais compartilhadas na embriogênese e arquitetura fisiológica dos cordados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {/* Card 1: Simetria e Folhetos */}
            <div className="p-6 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-emerald-500/50 transition duration-300">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                Simetria e Folhetos Germinativos
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Apresentam <strong>simetria bilateral</strong> clara, com polos cefálico (anterior) e caudal (posterior), faces dorsal e ventral. 
                São animais <strong>triblásticos</strong> (desenvolvem ectoderma, mesoderma e endoderma bem individualizados).
              </p>
            </div>

            {/* Card 2: Desenvolvimento Deuterostômio */}
            <div className="p-6 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-emerald-500/50 transition duration-300">
              <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                Clivagem e Deuterostomia
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Durante a gastrulação, o <strong>blastóporo origina o ânus</strong>, e a boca é perfurada secundariamente. 
                Compartilham essa característica ancestral com os equinodermos (estrelas e ouriços) e hemicordados.
              </p>
            </div>

            {/* Card 3: Celoma Verdadeiro */}
            <div className="p-6 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-emerald-500/50 transition duration-300">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold mb-4">
                03
              </div>
              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                Celoma e Metameria
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Possuem <strong>celoma verdadeiro</strong> inteiramente revestido por peritônio mesodérmico. 
                A <strong>metameria</strong> é nítida na musculatura axial segmentada (miómeros), costelas e nervos espinhais pareados.
              </p>
            </div>

            {/* Card 4: Circulação e Coração */}
            <div className="p-6 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-emerald-500/50 transition duration-300">
              <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold mb-4">
                04
              </div>
              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                Sistema Circulatório Fechado
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                O sangue viaja estritamente dentro de vasos endoteliais (artérias, capilares e veias). 
                O <strong>coração é posicionado ventralmente</strong> (em contraste com invertebrados, cujo vaso propulsor é dorsal).
              </p>
            </div>

            {/* Card 5: Digestão Completa */}
            <div className="p-6 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-emerald-500/50 transition duration-300">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold mb-4">
                05
              </div>
              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                Tubo Digestório Completo
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Trato digestivo unidirecional iniciando na boca e encerrando no ânus (ou cloaca compartilhada). 
                Possuem grandes glândulas anexas como fígado metabolizador e pâncreas endócrino e exócrino.
              </p>
            </div>

            {/* Card 6: Radiação Adaptativa */}
            <div className="p-6 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-emerald-500/50 transition duration-300">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold mb-4">
                06
              </div>
              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                Radiação em Todos os Biomas
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Graças à notocorda, endoesqueleto reforçado e alta capacidade metabólica, os cordados conquistaram desde as 
                fossas oceânicas abissais até os ares (voo em aves e morcegos) e desertos extremos.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
