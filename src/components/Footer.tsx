import React from 'react';
import { Dna, ExternalLink } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center text-white shadow-md">
                <Dna className="w-6 h-6" />
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                CHORDATA
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Plataforma digital moderna e educativa dedicada à divulgação científica, zoologia comparada 
              e conservação da biodiversidade do filo Chordata, com ênfase na fauna brasileira.
            </p>

            <div className="text-xs text-slate-500">
              Desenvolvido com rigor acadêmico, fotografia real auditada e assistente de inteligência artificial BioChordata.
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-2">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-200">
              Navegação Rápida
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#o-que-sao" className="hover:text-emerald-400 transition">O que são os cordados</a></li>
              <li><a href="#classificacao" className="hover:text-emerald-400 transition">Árvore Filogenética</a></li>
              <li><a href="#grupos" className="hover:text-emerald-400 transition">Características dos Grupos</a></li>
              <li><a href="#catalogo" className="hover:text-emerald-400 transition">Catálogo de Espécies</a></li>
              <li><a href="#galeria" className="hover:text-emerald-400 transition">Galeria Fotográfica</a></li>
              <li><a href="#habitats" className="hover:text-emerald-400 transition">Habitats e Biomas</a></li>
              <li><a href="#perigos" className="hover:text-emerald-400 transition">Perigos e Primeiros Socorros</a></li>
            </ul>
          </div>

          {/* Scientific Repositories */}
          <div className="space-y-2">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-200">
              Bases de Dados
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a href="https://www.iucnredlist.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1">
                  <span>IUCN Red List</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://animaldiversity.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1">
                  <span>Animal Diversity Web</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://www.icmbio.gov.br" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1">
                  <span>ICMBio / Livro Vermelho</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://butantan.gov.br" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1">
                  <span>Instituto Butantan</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://www.marinespecies.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1">
                  <span>WoRMS (Espécies Marinhas)</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {CURRENT_YEAR} Chordata: Explorando o Mundo dos Cordados • Projeto Educativo de Biologia
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Ciência, Biodiversidade e Preservação</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
