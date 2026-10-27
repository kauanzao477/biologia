import React, { useState } from 'react';
import { speciesList } from '../data/speciesData';
import type { Species } from '../types';
import { 
  Camera, 
  ZoomIn, 
  X, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

interface PhotoGalleryProps {
  onSelectSpecies?: (species: Species) => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>('Todos');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const groups = ['Todos', 'Peixes', 'Anfíbios', 'Répteis', 'Aves', 'Mamíferos', 'Protocordados'];

  const filteredPhotos = speciesList.filter(s => {
    if (selectedGroup === 'Todos') return true;
    if (selectedGroup === 'Peixes') return s.group.includes('Peixes');
    if (selectedGroup === 'Protocordados') return s.group === 'Cefalocordados' || s.group === 'Tunicados';
    return s.group === selectedGroup;
  });

  const activeSpecies = activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  const handleNextPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % filteredPhotos.length);
    }
  };

  const handlePrevPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <section id="galeria" className="py-20 relative bg-slate-50/60 dark:bg-slate-900/40 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-100 dark:bg-teal-950/60 border border-teal-300 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5" />
              <span>Acervo Fotográfico Científico</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Galeria de Fotografias dos Cordados
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              Imagens reais de alta resolução com identificação taxonômica rigorosa, créditos de autoria e licenças de uso.
            </p>
          </div>

          {/* Group Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 self-start md:self-auto">
            {groups.map((grp) => (
              <button
                key={grp}
                onClick={() => setSelectedGroup(grp)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                  selectedGroup === grp
                    ? 'bg-teal-600 text-white shadow-md shadow-teal-600/30'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
                }`}
              >
                {grp}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((sp, idx) => (
            <div
              key={sp.id}
              onClick={() => setActivePhotoIndex(idx)}
              className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 border border-slate-200/60 dark:border-slate-800/60 bg-slate-900"
            >
              <img
                src={sp.imageUrl}
                alt={sp.commonName}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-slate-950/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Badges and Caption */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/80 backdrop-blur-sm inline-block">
                  {sp.group}
                </span>
                <h4 className="font-heading font-bold text-base leading-tight">
                  {sp.commonName}
                </h4>
                <p className="text-[11px] font-mono italic text-emerald-300">
                  {sp.scientificName}
                </p>
                <p className="text-[11px] text-white/70 line-clamp-1">
                  {sp.keyCharacteristics[0]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Zoom Modal */}
        {activeSpecies && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
            
            {/* Close */}
            <button
              onClick={() => setActivePhotoIndex(null)}
              className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Photo Arrow */}
            <button
              onClick={handlePrevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md transition hidden sm:flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Photo Arrow */}
            <button
              onClick={handleNextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md transition hidden sm:flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col text-white shadow-2xl">
              
              {/* Photo Area */}
              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[350px] max-h-[550px]">
                <img
                  src={activeSpecies.imageUrl}
                  alt={activeSpecies.commonName}
                  className="max-h-full max-w-full object-contain"
                  decoding="async"
                />
              </div>

              {/* Photo Caption & Credits bar */}
              <div className="p-6 bg-slate-900/95 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-500 text-white">
                      {activeSpecies.group}
                    </span>
                    <h3 className="text-xl font-bold font-heading">
                      {activeSpecies.commonName}
                    </h3>
                  </div>
                  <p className="text-xs font-mono italic text-emerald-400">
                    {activeSpecies.scientificName}
                  </p>
                  <p className="text-xs text-slate-300 max-w-xl">
                    {activeSpecies.keyCharacteristics[0]} • Habitat: {activeSpecies.habitat}
                  </p>
                  {activeSpecies.imageAuthor && (
                    <p className="text-[10px] text-slate-400 font-mono pt-1">
                      Créditos: {activeSpecies.imageAuthor} | Licença: {activeSpecies.imageLicense || 'Creative Commons'}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="#catalogo"
                    onClick={() => setActivePhotoIndex(null)}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md transition flex items-center gap-1.5"
                  >
                    <span>Ver no Catálogo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
