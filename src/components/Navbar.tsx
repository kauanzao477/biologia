import React, { useState, useEffect } from 'react';
import { 
  Dna, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Bot, 
  Search
} from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenAIChat: (initialPrompt?: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  darkMode, 
  setDarkMode, 
  onOpenAIChat,
  onOpenSearch 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O que são', href: '#o-que-sao' },
    { name: 'Classificação', href: '#classificacao' },
    { name: 'Grupos', href: '#grupos' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Habitats', href: '#habitats' },
    { name: 'Segurança', href: '#perigos' },
    { name: 'Evolução', href: '#evolucao' },
    { name: 'Conservação', href: '#conservacao' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Fontes', href: '#fontes' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-nav shadow-lg border-b border-emerald-900/10 dark:border-emerald-500/10 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Dna className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
                CHORDATA
              </span>
              <span className="block text-[10px] tracking-widest font-semibold uppercase text-slate-500 dark:text-slate-400">
                Mundo dos Cordados
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-white dark:hover:bg-slate-800 transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Actions (Search, AI, Dark Mode) */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              title="Pesquisar espécies"
              className="p-2 sm:px-3 sm:py-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-slate-800 flex items-center gap-1.5 text-xs font-semibold border border-transparent hover:border-slate-300 dark:hover:border-slate-700 transition"
            >
              <Search className="w-4 h-4 text-emerald-500" />
              <span className="hidden sm:inline">Buscar</span>
            </button>

            {/* AI Assistant Quick Trigger */}
            <button
              onClick={() => onOpenAIChat()}
              className="relative group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-xs shadow-md shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-100"></span>
              </span>
              <Bot className="w-4 h-4" />
              <span>BioChordata IA</span>
            </button>

            {/* Explicit Button to toggle background from white to black */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? 'Mudar fundo para Branco' : 'Mudar fundo para Preto'}
              aria-label="Trocar cor do fundo de branco para preto"
              className={`flex items-center gap-1.5 sm:gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0 border cursor-pointer ${
                darkMode 
                  ? 'bg-slate-900 text-amber-300 border-amber-500/40 hover:bg-slate-800 shadow-amber-500/10' 
                  : 'bg-slate-900 text-white border-slate-700 hover:bg-black shadow-slate-900/20'
              }`}
            >
              {darkMode ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Fundo Branco</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span>Fundo Preto</span>
                </>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden glass-panel border-t border-slate-200 dark:border-slate-800 mt-3 px-4 pt-4 pb-6 space-y-2 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setDarkMode(!darkMode);
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border font-bold text-xs bg-slate-900 text-white dark:bg-slate-800 dark:text-amber-300 shadow-sm"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-300" />}
              <span>{darkMode ? 'Mudar para Fundo Branco' : 'Mudar para Fundo Preto'}</span>
            </button>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAIChat();
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-sm shadow-md"
          >
            <Bot className="w-4 h-4" />
            Perguntar à IA BioChordata
          </button>
        </div>
      )}
    </header>
  );
};
