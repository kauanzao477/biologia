import React from 'react';
import { conservationData } from '../data/chordataInfo';
import { 
  TreePine, 
  Flower, 
  Sprout, 
  ShieldCheck, 
  Waves, 
  AlertTriangle, 
  ExternalLink 
} from 'lucide-react';

export const ConservationSection: React.FC = () => {
  return (
    <section id="conservacao" className="py-20 relative bg-slate-50/70 dark:bg-slate-900/50 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <TreePine className="w-3.5 h-3.5" />
            <span>Serviços Ecossistêmicos & Preservação</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Importância Ecológica e Ações de Conservação
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Sem os cordados, os ecossistemas planetários colapsariam: desde a polinização de florestas até a regulação do 
            carbono oceânico pelas baleias. Conheça seus papéis vitais e os projetos brasileiros que protegem nossa biodiversidade.
          </p>
        </div>

        {/* 4 Core Ecosystem Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Funções Ecológicas Insuspeitas e Vitais
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {conservationData.ecosystemServices.map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl glass-panel border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-emerald-500/50 transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  {idx === 0 && <Flower className="w-6 h-6" />}
                  {idx === 1 && <Sprout className="w-6 h-6" />}
                  {idx === 2 && <ShieldCheck className="w-6 h-6" />}
                  {idx === 3 && <Waves className="w-6 h-6" />}
                </div>

                <h4 className="font-bold text-lg text-slate-900 dark:text-white">
                  {service.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Major Global and National Threats */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl mb-16 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-rose-500 text-white shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Principais Ameaças à Sobrevivência dos Cordados
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Fatores antrópicos que aceleram a perda de espécies no Brasil e no mundo.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {conservationData.majorThreats.map((threat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1.5"
              >
                <span className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  {threat.title}
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {threat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Proven Conservation Success Stories */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Projetos de Conservação em Ação no Brasil
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Iniciativas pioneiras que recuperaram populações ameaçadas de cordados brasileiros.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {conservationData.conservationProjects.map((proj, idx) => (
              <a
                key={idx}
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                      {proj.scope}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 transition" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                    {proj.name}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {proj.achievement}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <span>Conhecer o projeto oficial</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
