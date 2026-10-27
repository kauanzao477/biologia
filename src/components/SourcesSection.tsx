import React from 'react';
import { scientificSourcesList } from '../data/chordataInfo';
import { 
  BookMarked, 
  ExternalLink 
} from 'lucide-react';

export const SourcesSection: React.FC = () => {
  return (
    <section id="fontes" className="py-20 relative bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <BookMarked className="w-3.5 h-3.5" />
            <span>Rigor Científico & Referências</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Fontes Científicas e Bases de Dados Consultadas
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Todas as informações taxonômicas, ecológicas, conservacionistas e médicas apresentadas nesta plataforma são 
            fundamentadas em repositórios científicos internacionais e órgãos ambientais federais brasileiros.
          </p>
        </div>

        {/* Sources Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scientificSourcesList.map((src, idx) => (
            <a
              key={idx}
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-3xl glass-panel border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800">
                    {src.purpose.split(' ')[0]}
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition" />
                </div>

                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition leading-tight">
                  {src.title}
                </h3>

                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {src.institution}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {src.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mt-4">
                <span>Acessar base de dados</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
