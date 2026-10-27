import { useState } from 'react';
import { Bot, X, Sparkles } from 'lucide-react';

interface FloatingAIWidgetProps {
  onOpenChat: () => void;
}

export const FloatingAIWidget: React.FC<FloatingAIWidgetProps> = ({ onOpenChat }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Friendly Tooltip Prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 text-xs font-semibold shadow-xl animate-bounce">
          <Sparkles className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
          <span>Dúvidas sobre cordados? Pergunte à IA!</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dispensar aviso do assistente"
            className="text-slate-400 hover:text-slate-600 dark:hover:text-white ml-1"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={onOpenChat}
        title="Conversar com a IA BioChordata"
        className="relative group p-4 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white shadow-xl shadow-emerald-600/35 transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center"
      >
        <span className="relative flex h-3 w-3 absolute -top-1 -right-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-300"></span>
        </span>
        <Bot className="w-6 h-6 animate-pulse" />
      </button>
    </div>
  );
};
