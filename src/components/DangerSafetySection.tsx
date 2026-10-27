import React, { useState } from 'react';
import { dangerData } from '../data/chordataInfo';
import { 
  ShieldAlert, 
  AlertTriangle, 
  PhoneCall, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ShieldCheck
} from 'lucide-react';

export const DangerSafetySection: React.FC = () => {
  const [selectedDangerIndex, setSelectedDangerIndex] = useState<number>(0);

  const activeCategory = dangerData[selectedDangerIndex];

  return (
    <section id="perigos" className="py-20 relative bg-slate-50/70 dark:bg-slate-900/50 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Educação em Saúde e Coexistência Pacífica</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Perigos, Defesa e Relações com os Seres Humanos
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            A imensa maioria dos cordados não representa risco direto aos humanos. Acidentes quase sempre decorrem de 
            reações defensivas quando o animal se sente acuado, pisado ou ameaçado. A ciência e a prevenção salvam vidas!
          </p>
        </div>

        {/* Fundamental Biological Distinction Banner: Peçonhentos vs Venenosos */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-2xl bg-amber-500 text-white shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Diferença Científica Crucial: Peçonhento vs. Venenoso
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Uma distinção biológica indispensável para evitar equívocos e pânico desnecessário.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            
            {/* Peçonhento */}
            <div className="p-5 rounded-2xl bg-red-50/70 dark:bg-red-950/30 border border-red-200 dark:border-red-900/60 space-y-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600 text-white inline-block">
                Animais Peçonhentos (Inoculação Ativa)
              </span>
              <h4 className="font-bold text-base text-red-950 dark:text-red-100">
                Possuem aparato inoculador de toxinas
              </h4>
              <p className="text-xs sm:text-sm text-red-900/80 dark:text-red-200/80 leading-relaxed">
                Dispõem de estruturas especializadas (como dentes inoculadores ocos ou sulcados em serpentes, ferrões em raias ou espinhos em peixes-escorpião) 
                para <strong>injetar ativamente</strong> a peçonha na presa ou no agressor.
              </p>
              <div className="text-xs font-semibold text-red-700 dark:text-red-300 pt-1">
                Exemplos: Jararaca, Cascavel, Surucucu e Raias fluviais.
              </div>
            </div>

            {/* Venenoso */}
            <div className="p-5 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/60 space-y-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-600 text-white inline-block">
                Animais Venenosos (Defesa Passiva / Tóxicos)
              </span>
              <h4 className="font-bold text-base text-purple-950 dark:text-purple-100">
                Não possuem estrutura de inoculação ativa
              </h4>
              <p className="text-xs sm:text-sm text-purple-900/80 dark:text-purple-200/80 leading-relaxed">
                Produzem ou acumulam toxinas em glândulas da pele ou órgãos internos. 
                O envenenamento só ocorre de forma <strong>passiva</strong>, se o animal for comido, mordido, mastigado ou se sua secreção entrar em contato com mucosas.
              </p>
              <div className="text-xs font-semibold text-purple-700 dark:text-purple-300 pt-1">
                Exemplos: Sapo-cururu (glândula parotóide), Peixe-baiacu (tetrodotoxina).
              </div>
            </div>

          </div>
        </div>

        {/* Categories Tab Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {dangerData.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedDangerIndex(idx)}
              className={`p-4 rounded-2xl text-left border transition-all ${
                selectedDangerIndex === idx
                  ? 'bg-rose-600 text-white border-rose-500 shadow-md shadow-rose-600/30 -translate-y-1'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-rose-400'
              }`}
            >
              <span className={`text-[10px] uppercase font-bold tracking-wider block ${
                selectedDangerIndex === idx ? 'text-rose-100' : 'text-slate-400'
              }`}>
                {cat.dangerType}
              </span>
              <span className="font-heading font-bold text-sm block leading-tight mt-1">
                {cat.title}
              </span>
            </button>
          ))}
        </div>

        {/* Detailed Safety Protocol Box */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                Protocolo Educativo • {activeCategory.dangerType}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                {activeCategory.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {activeCategory.subtitle}
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 self-start sm:self-auto">
              <PhoneCall className="w-4 h-4 text-emerald-600 inline-block mr-1.5" />
              <strong>Contato de Emergência: </strong>
              <span>{activeCategory.officialContact}</span>
            </div>
          </div>

          {/* Real Risk Assessment */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
              O Risco Real (Sem Sensacionalismo):
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
              {activeCategory.riskReality}
            </p>
          </div>

          {/* Prevention vs First Aid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Prevention */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Como Evitar Acidentes (Prevenção)</span>
              </h4>
              <ul className="space-y-2">
                {activeCategory.prevention.map((prev, i) => (
                  <li key={i} className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{prev}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* First Aid Protocol */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
                <span>Como Agir em Caso de Acidente (Primeiros Socorros)</span>
              </h4>
              <ul className="space-y-2">
                {activeCategory.firstAid.map((aid, i) => (
                  <li key={i} className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 text-xs sm:text-sm text-rose-950 dark:text-rose-200 flex items-start gap-2">
                    {aid.startsWith('NUNCA') || aid.startsWith('NÃO') ? (
                      <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    )}
                    <span>{aid}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Representative Species */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-400 block mb-2">
              Espécies de Atenção Médica ou Toxicológica Citadas:
            </span>
            <div className="flex flex-wrap gap-2">
              {activeCategory.speciesExamples.map((ex, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                >
                  {ex}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
