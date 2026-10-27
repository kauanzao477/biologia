import React from 'react';
import { 
  ArrowRight, 
  Bot, 
  Compass, 
  Layers, 
  BookOpen, 
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onOpenAIChat: (prompt?: string) => void;
  onNavigateTo?: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAIChat }) => {
  const representativeCards = [
    {
      group: 'Peixes',
      badge: 'Aquáticos',
      name: 'Tubarão-branco & Pirarucu',
      image: '/images/species/tubarao-branco.webp',
      gradient: 'from-blue-600/80 to-cyan-900/90'
    },
    {
      group: 'Anfíbios',
      badge: 'Dupla vida',
      name: 'Axolote & Sapo-cururu',
      image: '/images/species/axolote.webp',
      gradient: 'from-emerald-600/80 to-teal-900/90'
    },
    {
      group: 'Répteis',
      badge: 'Amniotas',
      name: 'Tartaruga-verde & Jiboia',
      image: '/images/species/tartaruga-verde.webp',
      gradient: 'from-amber-600/80 to-emerald-950/90'
    },
    {
      group: 'Aves',
      badge: 'Arcossauros',
      name: 'Arara-azul & Tucano',
      image: '/images/species/arara-azul-grande.webp',
      gradient: 'from-indigo-600/80 to-blue-950/90'
    },
    {
      group: 'Mamíferos',
      badge: 'Endotérmicos',
      name: 'Onça-pintada & Baleia',
      image: '/images/species/onca-pintada.webp',
      gradient: 'from-rose-600/80 to-slate-950/90'
    }
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Glows and Abstract Shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/15 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-emerald-400/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold tracking-wide shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 animate-pulse" />
            <span>Portal de Divulgação Científica e Zoologia</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span className="font-mono text-[11px] opacity-80">Filo Chordata</span>
          </div>

          {/* Main Title Required */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Cordados: conheça a{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
              incrível diversidade
            </span>{' '}
            do reino animal
          </h1>

          {/* Subtitle Required */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed">
            Explore as características, a evolução, os habitats e a diversidade dos animais pertencentes ao filo Chordata.
          </p>

          {/* 4 Required Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            
            {/* Button 1: Explorar os cordados */}
            <a
              href="#o-que-sao"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Compass className="w-4 h-4" />
              <span>Explorar os cordados</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Button 2: Conhecer os grupos */}
            <a
              href="#grupos"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold text-sm border border-slate-200 dark:border-slate-800 shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Conhecer os grupos</span>
            </a>

            {/* Button 3: Ver catálogo de espécies */}
            <a
              href="#catalogo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold text-sm border border-slate-200 dark:border-slate-800 shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <BookOpen className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>Ver catálogo de espécies</span>
            </a>

            {/* Button 4: Perguntar à IA */}
            <button
              onClick={() => onOpenAIChat()}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-teal-600/25 transition-all transform hover:-translate-y-0.5"
            >
              <Bot className="w-4 h-4" />
              <span>Perguntar à IA</span>
            </button>
          </div>

          {/* Quick Metrics Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
              <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">+65.000</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Espécies descritas no mundo</div>
            </div>
            <div className="p-4 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
              <div className="text-2xl font-extrabold text-teal-600 dark:text-teal-400">535 Ma</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">De história evolutiva fóssil</div>
            </div>
            <div className="p-4 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
              <div className="text-2xl font-extrabold text-cyan-600 dark:text-cyan-400">3 Subfilos</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Cefalocordados, Tunicados e Vertebrados</div>
            </div>
            <div className="p-4 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
              <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">100% Brasil</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Fauna nacional e dados científicos</div>
            </div>
          </div>

          {/* Representative Chordates Visual Showcase */}
          <div className="pt-8">
            <p className="text-xs uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 mb-3">
              Representantes emblemáticos do filo Chordata
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {representativeCards.map((card) => (
                <a
                  key={card.group}
                  href="#grupos"
                  className="group relative h-48 rounded-2xl overflow-hidden shadow-md transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl block border border-slate-200/60 dark:border-slate-800/60"
                >
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${card.gradient} opacity-75 group-hover:opacity-85 transition-opacity`} />
                  
                  <div className="absolute inset-0 p-3.5 flex flex-col justify-between text-left text-white">
                    <span className="self-start text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md">
                      {card.badge}
                    </span>
                    <div>
                      <h4 className="font-heading font-bold text-base leading-tight">
                        {card.group}
                      </h4>
                      <p className="text-[11px] text-white/80 line-clamp-1 mt-0.5">
                        {card.name}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
