import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AnatomySection } from './components/AnatomySection';
import { PhylogenySection } from './components/PhylogenySection';
import { GroupsSection } from './components/GroupsSection';
import { SpeciesCatalog } from './components/SpeciesCatalog';
import { PhotoGallery } from './components/PhotoGallery';
import { HabitatsSection } from './components/HabitatsSection';
import { DangerSafetySection } from './components/DangerSafetySection';
import { EvolutionSection } from './components/EvolutionSection';
import { ConservationSection } from './components/ConservationSection';
import { AIChatSection } from './components/AIChatSection';
import { FAQSection } from './components/FAQSection';
import { SourcesSection } from './components/SourcesSection';
import { Footer } from './components/Footer';
import { FloatingAIWidget } from './components/FloatingAIWidget';
import type { Species } from './types';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('chordata_dark_mode');
      if (saved !== null) {
        return saved === 'true';
      }
    } catch {
      // localStorage can be unavailable in private/restricted contexts.
    }

    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  });

  const [aiExternalPrompt, setAiExternalPrompt] = useState<string>('');
  const [focusedSpecies, setFocusedSpecies] = useState<Species | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    try {
      localStorage.setItem('chordata_dark_mode', darkMode.toString());
    } catch {
      // Persisting the preference is optional.
    }
  }, [darkMode]);

  const handleOpenAIChat = (prompt?: string) => {
    if (prompt) {
      setAiExternalPrompt(prompt);
    }

    document.getElementById('ia-assistente')?.scrollIntoView({ behavior: 'smooth' });
    window.setTimeout(() => {
      document.getElementById('biochordata-chat-input')?.focus({ preventScroll: true });
    }, 450);
  };

  const handleOpenSearch = () => {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
    window.setTimeout(() => {
      document.getElementById('catalog-search')?.focus({ preventScroll: true });
    }, 350);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-500 selection:text-white transition-colors duration-300">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-emerald-600 focus:text-white focus:font-semibold"
      >
        Pular para o conteúdo principal
      </a>

      {/* Fixed Sticky Header Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenAIChat={handleOpenAIChat}
        onOpenSearch={handleOpenSearch}
      />

      <main id="conteudo-principal">
        {/* 1. Página Inicial / Hero */}
        <Hero
          onOpenAIChat={handleOpenAIChat}
        />

        {/* 2. O que são os cordados? & Características fundamentais */}
        <AnatomySection />

        {/* 3. Classificação dos cordados e Árvore Filogenética */}
        <PhylogenySection />

        {/* 4. Características dos principais grupos */}
        <GroupsSection />

        {/* 5. Catálogo interativo de espécies */}
        <SpeciesCatalog
          focusSpecies={focusedSpecies}
          onFocusHandled={() => setFocusedSpecies(null)}
        />

        {/* 6. Galeria de fotografias */}
        <PhotoGallery onSelectSpecies={setFocusedSpecies} />

        {/* 7. Habitats e distribuição geográfica */}
        <HabitatsSection />

        {/* 8. Perigos, defesa e relações com os seres humanos */}
        <DangerSafetySection />

        {/* 9. Evolução dos cordados */}
        <EvolutionSection />

        {/* 10. Conservação e importância ecológica */}
        <ConservationSection />

        {/* 11. Assistente de inteligência artificial BioChordata */}
        <AIChatSection
          externalPrompt={aiExternalPrompt}
          onClearExternalPrompt={() => setAiExternalPrompt('')}
        />

        {/* 12. Perguntas frequentes (FAQ) */}
        <FAQSection
          onAskAI={handleOpenAIChat}
        />

        {/* 13. Fontes científicas e referências */}
        <SourcesSection />
      </main>

      {/* 14. Rodapé */}
      <Footer />

      {/* Floating Action Button for AI Assistant */}
      <FloatingAIWidget
        onOpenChat={() => handleOpenAIChat()}
      />

      {/* Floating Quick Background Toggle (White / Black) */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setDarkMode(!darkMode)}
          title={darkMode ? 'Mudar fundo para Branco' : 'Mudar fundo para Preto'}
          className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 shadow-xl text-slate-800 dark:text-slate-100 font-bold text-xs hover:scale-105 active:scale-95 transition-all cursor-pointer backdrop-blur-md"
        >
          {darkMode ? (
            <>
              <Sun className="w-4 h-4 text-amber-400" />
              <span>Fundo Branco</span>
            </>
          ) : (
            <>
              <Moon className="w-4 h-4 text-slate-700 dark:text-cyan-400" />
              <span>Fundo Preto</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}

export default App;
