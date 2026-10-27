import React, { useState } from 'react';
import { faqList } from '../data/chordataInfo';
import { 
  HelpCircle, 
  ChevronDown, 
  Bot, 
  ArrowRight
} from 'lucide-react';

interface FAQSectionProps {
  onAskAI: (question: string) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onAskAI }) => {
  const [openIds, setOpenIds] = useState<string[]>(['o-que-sao-cordados']);

  const toggleFAQ = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(item => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section id="faq" className="py-20 relative bg-slate-50/70 dark:bg-slate-900/50 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Dúvidas Frequentes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Perguntas Frequentes sobre o Filo Chordata
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Respostas claras, didáticas e cientificamente embasadas para as principais dúvidas de estudantes do 
            ensino fundamental, médio e universitário.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqList.map((item) => {
            const isOpen = openIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="glass-panel rounded-2xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden shadow-sm transition-all"
              >
                {/* Accordion Question Header */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 transition hover:bg-slate-100/50 dark:hover:bg-slate-800/30"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                    <span className="font-heading font-bold text-base text-slate-900 dark:text-white">
                      {item.question}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>

                {/* Accordion Answer Body */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-100 dark:border-slate-800/60 space-y-4 animate-fadeIn">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.answer}
                    </p>

                    {/* Ask AI button for this question */}
                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={() => onAskAI(item.question)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold transition"
                      >
                        <Bot className="w-3.5 h-3.5" />
                        <span>Aprofundar com a IA BioChordata</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
