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

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('chordata_dark_mode');
    if (saved !== null) {
      return saved === 'true';
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [aiExternalPrompt, setAiExternalPrompt] = useState<string>('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('chordata_dark_mode', darkMode.toString());
  }, [darkMode]);

  const handleOpenAIChat = (prompt?: string) => {
    if (prompt) {
      setAiExternalPrompt(prompt);
    }
    const aiSection = document.getElementById('ia-assistente');
    if (aiSection) {
      aiSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSearch = () => {
    const catalogSection = document.getElementById('catalogo');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
      const input = catalogSection.querySelector('input');
      if (input) input.focus();
    }
  };

  const handleNavigateTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-500 selection:text-white transition-colors duration-300">
      
      {/* Fixed Sticky Header Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenAIChat={handleOpenAIChat}
        onOpenSearch={handleOpenSearch}
      />

      <main>
        {/* 1. Página Inicial / Hero */}
        <Hero
          onOpenAIChat={handleOpenAIChat}
          onNavigateTo={handleNavigateTo}
        />

        {/* 2. O que são os cordados? & Características fundamentais */}
        <AnatomySection />

        {/* 3. Classificação dos cordados e Árvore Filogenética */}
        <PhylogenySection />

        {/* 4. Características dos principais grupos */}
        <GroupsSection />

        {/* 5. Catálogo interativo de espécies */}
        <SpeciesCatalog />

        {/* 6. Galeria de fotografias */}
        <PhotoGallery />

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
