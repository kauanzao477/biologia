import React, { useState, useEffect, useRef } from 'react';
import { 
  Dna, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Bot, 
  Search,
  ChevronDown,
  Layers,
  BookOpen,
  Camera,
  Globe,
  History,
  Leaf,
  ShieldAlert,
  HelpCircle,
  FileText,
  ChevronRight,
  Compass
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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('inicio');
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Track scroll position and progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (winHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / winHeight) * 100));
        setScrollProgress(progress);
      }

      // Detect active section for scrollspy
      const sectionIds = [
        'inicio',
        'o-que-sao',
        'classificacao',
        'grupos',
        'catalogo',
        'galeria',
        'habitats',
        'perigos',
        'evolucao',
        'conservacao',
        'ia-assistente',
        'faq',
        'fontes'
      ];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut Ctrl+K / Cmd+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onOpenSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenSearch]);

  const handleMouseEnter = (menuKey: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleNavigate = (href: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Structured menu items
  const taxonomyItems = [
    {
      name: 'Classificação & Filogenia',
      desc: 'Árvore evolutiva e os 3 subfilos dos cordados',
      href: '#classificacao',
      icon: Compass,
      color: 'text-emerald-500 bg-emerald-500/10'
    },
    {
      name: 'Grupos Principais',
      desc: 'Protocordados, peixes, anfíbios, répteis, aves e mamíferos',
      href: '#grupos',
      icon: Layers,
      color: 'text-teal-500 bg-teal-500/10'
    },
    {
      name: 'Catálogo de Espécies',
      desc: 'Mais de 40 espécies com filtros e fichas técnicas',
      href: '#catalogo',
      icon: BookOpen,
      color: 'text-cyan-500 bg-cyan-500/10'
    },
    {
      name: 'Galeria Fotográfica',
      desc: 'Fotografias e espécimes em alta resolução',
      href: '#galeria',
      icon: Camera,
      color: 'text-blue-500 bg-blue-500/10'
    }
  ];

  const ecologyItems = [
    {
      name: 'Habitats & Distribuição',
      desc: 'Ecossistemas aquáticos, dulcícolas e terrestres',
      href: '#habitats',
      icon: Globe,
      color: 'text-sky-500 bg-sky-500/10'
    },
    {
      name: 'Evolução Fóssil',
      desc: '535 milhões de anos: da explosão cambriana à atualidade',
      href: '#evolucao',
      icon: History,
      color: 'text-amber-500 bg-amber-500/10'
    },
    {
      name: 'Conservação & Ameaças',
      desc: 'Espécies em risco, extinção e proteção ambiental',
      href: '#conservacao',
      icon: Leaf,
      color: 'text-emerald-500 bg-emerald-500/10'
    },
    {
      name: 'Defesa & Segurança',
      desc: 'Animais peçonhentos, perigos e relações com humanos',
      href: '#perigos',
      icon: ShieldAlert,
      color: 'text-rose-500 bg-rose-500/10'
    }
  ];

  const moreItems = [
    {
      name: 'Perguntas Frequentes (FAQ)',
      desc: 'Tire dúvidas rápidas e conceitos fundamentais',
      href: '#faq',
      icon: HelpCircle,
      color: 'text-purple-500 bg-purple-500/10'
    },
    {
      name: 'Fontes & Referências',
      desc: 'Bases acadêmicas, artigos e curadoria científica',
      href: '#fontes',
      icon: FileText,
      color: 'text-indigo-500 bg-indigo-500/10'
    },
    {
      name: 'BioChordata IA',
      desc: 'Assistente inteligente para consultas biológicas',
      href: '#ia-assistente',
      icon: Bot,
      color: 'text-teal-500 bg-teal-500/10',
      isAI: true
    }
  ];

  const isTaxonomyActive = ['classificacao', 'grupos', 'catalogo', 'galeria'].includes(activeSection);
  const isEcologyActive = ['habitats', 'evolucao', 'conservacao', 'perigos'].includes(activeSection);
  const isMoreActive = ['faq', 'fontes', 'ia-assistente'].includes(activeSection);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-black/50 border-b border-emerald-500/15 py-3' 
          : 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Portal Identity */}
          <a 
            href="#inicio" 
            onClick={(e) => {
              e.preventDefault();
              handleNavigate('#inicio');
            }}
            className="flex items-center gap-3.5 group shrink-0"
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 group-hover:scale-105 group-hover:shadow-emerald-500/40 transition-all duration-300">
                <Dna className="w-6 h-6 animate-pulse" />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white dark:border-slate-950"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
                  CHORDATA
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/80">
                  Zoologia
                </span>
              </div>
              <span className="text-[11px] tracking-wide font-medium text-slate-500 dark:text-slate-400">
                Portal dos Cordados & Biodiversidade
              </span>
            </div>
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            
            {/* Direct Link: Início */}
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate('#inicio');
              }}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeSection === 'inicio'
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100/70 dark:hover:bg-slate-900/60'
              }`}
            >
              Início
            </a>

            {/* Direct Link: O que são */}
            <a
              href="#o-que-sao"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate('#o-que-sao');
              }}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                activeSection === 'o-que-sao'
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100/70 dark:hover:bg-slate-900/60'
              }`}
            >
              O que são
            </a>

            {/* Dropdown: Classificação & Espécies */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('taxonomia')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'taxonomia' ? null : 'taxonomia')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isTaxonomyActive || activeDropdown === 'taxonomia'
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100/70 dark:hover:bg-slate-900/60'
                }`}
              >
                <span>Taxonomia</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'taxonomia' ? 'rotate-180' : ''}`} />
              </button>

              {/* Taxonomy Mega/Dropdown Menu */}
              {activeDropdown === 'taxonomia' && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200/90 dark:border-slate-800 p-2.5 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800/80 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Classificação & Espécies
                      </span>
                    </div>
                    <div className="space-y-1">
                      {taxonomyItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.href.replace('#', '');
                        return (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavigate(item.href);
                            }}
                            className={`flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 group ${
                              isActive 
                                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400' 
                                : 'hover:bg-slate-50 dark:hover:bg-slate-800/70'
                            }`}
                          >
                            <div className={`p-2 rounded-lg shrink-0 ${item.color}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                  {item.name}
                                </span>
                                <ChevronRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown: Ecologia & Vida */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('ecologia')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'ecologia' ? null : 'ecologia')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isEcologyActive || activeDropdown === 'ecologia'
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100/70 dark:hover:bg-slate-900/60'
                }`}
              >
                <span>Ecologia & Vida</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'ecologia' ? 'rotate-180' : ''}`} />
              </button>

              {/* Ecology Dropdown Menu */}
              {activeDropdown === 'ecologia' && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200/90 dark:border-slate-800 p-2.5 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800/80 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Biodiversidade & Ecossistemas
                      </span>
                    </div>
                    <div className="space-y-1">
                      {ecologyItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.href.replace('#', '');
                        return (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavigate(item.href);
                            }}
                            className={`flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 group ${
                              isActive 
                                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400' 
                                : 'hover:bg-slate-50 dark:hover:bg-slate-800/70'
                            }`}
                          >
                            <div className={`p-2 rounded-lg shrink-0 ${item.color}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                  {item.name}
                                </span>
                                <ChevronRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown: Mais Recursos */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('mais')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'mais' ? null : 'mais')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isMoreActive || activeDropdown === 'mais'
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100/70 dark:hover:bg-slate-900/60'
                }`}
              >
                <span>Mais</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'mais' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'mais' && (
                <div className="absolute top-full right-0 w-72 pt-2 z-50">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200/90 dark:border-slate-800 p-2.5 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800/80 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Recursos & Informações
                      </span>
                    </div>
                    <div className="space-y-1">
                      {moreItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.href.replace('#', '');
                        return (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault();
                              if (item.isAI) {
                                onOpenAIChat();
                                setActiveDropdown(null);
                              } else {
                                handleNavigate(item.href);
                              }
                            }}
                            className={`flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 group ${
                              isActive 
                                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400' 
                                : 'hover:bg-slate-50 dark:hover:bg-slate-800/70'
                            }`}
                          >
                            <div className={`p-2 rounded-lg shrink-0 ${item.color}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                  {item.name}
                                </span>
                                <ChevronRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

          </nav>

          {/* Right Action Hub */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Search Pill Button */}
            <button
              onClick={onOpenSearch}
              title="Pesquisar espécies no catálogo (Ctrl + K)"
              className="flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2 rounded-xl bg-slate-100/90 dark:bg-slate-900/90 hover:bg-slate-200/80 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium transition cursor-pointer shadow-sm hover:shadow"
            >
              <Search className="w-4 h-4 text-emerald-500" />
              <span className="hidden md:inline text-slate-700 dark:text-slate-200 font-semibold">Buscar</span>
              <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-400 dark:text-slate-400 shadow-xs">
                ⌘K
              </kbd>
            </button>

            {/* AI Assistant Quick Trigger */}
            <button
              onClick={() => onOpenAIChat()}
              className="relative group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-semibold text-xs shadow-md shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-100"></span>
              </span>
              <Bot className="w-4 h-4" />
              <span className="hidden sm:inline">BioChordata IA</span>
            </button>

            {/* Modern Theme Switcher (Claro / Escuro) */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? 'Mudar para tema claro (Fundo Branco)' : 'Mudar para tema escuro (Fundo Preto)'}
              aria-label="Alternar tema"
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all shadow-sm border cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 ${
                darkMode 
                  ? 'bg-slate-900 text-amber-300 border-amber-500/30 hover:bg-slate-800 hover:border-amber-400/50 shadow-amber-500/10' 
                  : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-100 hover:border-slate-300 shadow-slate-900/5'
              }`}
            >
              {darkMode ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="hidden xl:inline text-amber-200">Claro</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-slate-700 shrink-0" />
                  <span className="hidden xl:inline text-slate-700">Escuro</span>
                </>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 transition cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-500" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Dynamic Reading / Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-200/40 dark:bg-slate-800/40 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 px-4 pt-4 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
          
          {/* Quick Search in Mobile */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSearch();
            }}
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium"
          >
            <div className="flex items-center gap-2.5">
              <Search className="w-4 h-4 text-emerald-500" />
              <span>Pesquisar espécies no catálogo...</span>
            </div>
            <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
              Ctrl+K
            </kbd>
          </button>

          {/* Navigation Links Sections */}
          <div className="space-y-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1">
                Geral
              </span>
              <div className="grid grid-cols-2 gap-1.5 mt-1">
                <a
                  href="#inicio"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate('#inicio');
                  }}
                  className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 transition"
                >
                  Início
                </a>
                <a
                  href="#o-que-sao"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate('#o-que-sao');
                  }}
                  className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 transition"
                >
                  O que são
                </a>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1">
                Taxonomia & Grupos
              </span>
              <div className="grid grid-cols-1 gap-1 mt-1">
                {taxonomyItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate(item.href);
                      }}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 transition"
                    >
                      <Icon className="w-4 h-4 text-emerald-500" />
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1">
                Ecologia & Sociedade
              </span>
              <div className="grid grid-cols-1 gap-1 mt-1">
                {ecologyItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate(item.href);
                      }}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 transition"
                    >
                      <Icon className="w-4 h-4 text-teal-500" />
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1">
                Mais Recursos
              </span>
              <div className="grid grid-cols-1 gap-1 mt-1">
                {moreItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        if (item.isAI) {
                          setMobileMenuOpen(false);
                          onOpenAIChat();
                        } else {
                          handleNavigate(item.href);
                        }
                      }}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 transition"
                    >
                      <Icon className="w-4 h-4 text-cyan-500" />
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Action Buttons in Mobile */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAIChat();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-bold text-sm shadow-lg shadow-emerald-600/25"
            >
              <Bot className="w-5 h-5" />
              <span>Conversar com a BioChordata IA</span>
            </button>
            <button
              onClick={() => {
                setDarkMode(!darkMode);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-semibold text-xs text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-900"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              <span>{darkMode ? 'Mudar para Tema Claro (Fundo Branco)' : 'Mudar para Tema Escuro (Fundo Preto)'}</span>
            </button>
          </div>

        </div>
      )}
    </header>
  );
};
