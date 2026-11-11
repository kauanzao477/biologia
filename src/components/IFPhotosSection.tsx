import React, { useCallback, useEffect, useState } from 'react';
import { useDialog } from '../hooks/useDialog';
import {
  Camera,
  MapPin,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  Info,
  PawPrint,
  Bird,
  Microscope
} from 'lucide-react';

type Confidence = 'confirmed' | 'probable';

interface IFPhoto {
  id: string;
  imageUrl: string;
  commonName: string;
  scientificName: string;
  group: string;
  groupClasses: string;
  icon: React.ComponentType<{ className?: string }>;
  confidence: Confidence;
  summary: string;
  details: string;
  traits: string[];
  note: string;
  alt: string;
}

const ifPhotos: IFPhoto[] = [
  {
    id: 'cachorro-if',
    imageUrl: '/images/if/cachorro-if.jpg',
    commonName: 'Cachorro SRD caramelo',
    scientificName: 'Canis lupus familiaris',
    group: 'Mamíferos',
    groupClasses: 'bg-amber-500/85 text-white',
    icon: PawPrint,
    confidence: 'confirmed',
    summary:
      'Cão doméstico de pelagem caramelo, sem raça definida (SRD), registrado nas dependências do IF.',
    details:
      'Todos os cães domésticos pertencem à espécie Canis lupus familiaris, incluindo os animais sem raça definida. O exemplar da foto apresenta pelagem curta caramelo, orelhas caídas e porte médio.',
    traits: ['Pelagem curta caramelo', 'Orelhas caídas', 'Sem raça definida (SRD)', 'Porte médio'],
    note:
      'Animal doméstico: a presença no campus costuma estar ligada a tutores ou à comunidade do entorno.',
    alt: 'Cachorro caramelo sem raça definida sentado nas dependências do IF'
  },
  {
    id: 'anfibio-anuro-if',
    imageUrl: '/images/if/anfibio-anuro-if.jpg',
    commonName: 'Rãzinha (anuro)',
    scientificName: 'Anura — provável Physalaemus sp.',
    group: 'Anfíbios',
    groupClasses: 'bg-emerald-600/85 text-white',
    icon: Microscope,
    confidence: 'probable',
    summary:
      'Anuro de pequeno porte com faixa clara no dorso, registrado sobre piso de concreto no IF.',
    details:
      'A ordem Anura reúne sapos, rãs e pererecas. O padrão de coloração — dorso marrom com faixa clara longitudinal e flancos escuros — sugere o gênero Physalaemus, mas a confirmação exige análise de caracteres morfológicos e, idealmente, registro da vocalização.',
    traits: ['Pequeno porte', 'Dorso marrom com faixa clara', 'Flancos escuros', 'Pele lisa e úmida'],
    note:
      'Anfíbios são bioindicadores: a presença deles sugere umidade e boas condições ambientais no entorno.',
    alt: 'Pequeno anuro marrom com faixa clara no dorso sobre piso de concreto no IF'
  },
  {
    id: 'ave-if',
    imageUrl: '/images/if/ave-if.jpg',
    commonName: 'Agapornis (provável)',
    scientificName: 'Agapornis sp. (provável)',
    group: 'Aves',
    groupClasses: 'bg-sky-600/85 text-white',
    icon: Bird,
    confidence: 'probable',
    summary:
      'Pequeno psitaciforme de plumagem cinza, registrado pousado sobre um notebook no IF.',
    details:
      'O porte pequeno, a cauda curta e a ausência de crista são compatíveis com o gênero Agapornis, conhecido como “inseparáveis”. A plumagem cinza indica uma mutação de cor; a espécie exata depende de detalhes do bico, da cabeça e da origem do animal.',
    traits: ['Porte pequeno', 'Cauda curta', 'Plumagem cinza', 'Bico curvo de psitacídeo'],
    note:
      'Ave exótica criada como animal de estimação — não faz parte da fauna nativa brasileira.',
    alt: 'Ave psitacídea cinza de pequeno porte pousada sobre um notebook no IF'
  }
];

const confidenceMeta: Record<
  Confidence,
  { label: string; classes: string; icon: React.ComponentType<{ className?: string }> }
> = {
  confirmed: {
    label: 'Espécie confirmada',
    classes: 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
    icon: CheckCircle2
  },
  probable: {
    label: 'Identificação provável',
    classes: 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-800',
    icon: HelpCircle
  }
};

export const IFPhotosSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activePhoto = activeIndex !== null ? ifPhotos[activeIndex] ?? null : null;

  const closeLightbox = useCallback(() => setActiveIndex(null), []);
  useDialog(activePhoto !== null, closeLightbox);

  const handleNextPhoto = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + 1) % ifPhotos.length;
    });
  }, []);

  const handlePrevPhoto = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current - 1 + ifPhotos.length) % ifPhotos.length;
    });
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        handleNextPhoto();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        handlePrevPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, handleNextPhoto, handlePrevPhoto]);

  return (
    <section
      id="fotos-if"
      className="py-20 relative bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5" />
              <span>Registros de campo • IF</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Fotos de Animais Registrados no IF
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              Registros fotográficos feitos nas dependências do Instituto Federal, com a identificação
              de cada animal no nível taxonômico possível a partir da imagem.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 self-start md:self-auto">
            <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>
              <strong className="text-slate-800 dark:text-slate-100">{ifPhotos.length} registros</strong> •
              acervo do projeto
            </span>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ifPhotos.map((photo, idx) => {
            const confidence = confidenceMeta[photo.confidence];
            const ConfidenceIcon = confidence.icon;

            return (
              <article
                key={photo.id}
                onClick={() => setActiveIndex(idx)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setActiveIndex(idx);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Ampliar foto de ${photo.commonName}`}
                className="group relative flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800/70 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                  <img
                    src={photo.imageUrl}
                    alt={photo.alt}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />

                  <span
                    className={`absolute top-3.5 left-3.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm ${photo.groupClasses}`}
                  >
                    {photo.group}
                  </span>

                  <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-slate-950/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100">
                    <ZoomIn className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <h3 className="font-heading font-bold text-lg leading-tight">
                      {photo.commonName}
                    </h3>
                    <p className="text-[12px] font-mono italic text-emerald-300 mt-0.5">
                      {photo.scientificName}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-4">
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {photo.summary}
                  </p>

                  <div className="mt-auto flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border ${confidence.classes}`}
                    >
                      <ConfidenceIcon className="w-3 h-3" />
                      {confidence.label}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-medium text-slate-500 dark:text-slate-400">
                      <MapPin className="w-3 h-3" />
                      IF
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Identification note */}
        <div className="mt-8 flex items-start gap-3 p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/70 dark:border-emerald-900/60">
          <Info className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong className="text-slate-800 dark:text-slate-100">Sobre as identificações:</strong>{' '}
            quando a espécie exata não pode ser confirmada apenas pela fotografia, indicamos o nível
            taxonômico seguro (gênero ou ordem) e sinalizamos o registro como identificação provável.
          </p>
        </div>

        {/* Lightbox */}
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              aria-label="Fechar foto"
              className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md transition"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(event) => {
                event.stopPropagation();
                handlePrevPhoto();
              }}
              aria-label="Foto anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md transition hidden sm:flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(event) => {
                event.stopPropagation();
                handleNextPhoto();
              }}
              aria-label="Próxima foto"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md transition hidden sm:flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              role="dialog"
              aria-modal="true"
              aria-label={`Registro fotográfico de ${activePhoto.commonName}`}
              className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto flex flex-col text-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[280px] max-h-[520px]">
                <img
                  src={activePhoto.imageUrl}
                  alt={activePhoto.alt}
                  className="max-h-full max-w-full object-contain"
                  decoding="async"
                />
              </div>

              <div className="p-6 bg-slate-900/95 border-t border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${activePhoto.groupClasses}`}>
                        {activePhoto.group}
                      </span>
                      <h3 className="text-xl font-bold font-heading">{activePhoto.commonName}</h3>
                    </div>
                    <p className="text-xs font-mono italic text-emerald-400">
                      {activePhoto.scientificName}
                    </p>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border self-start ${confidenceMeta[activePhoto.confidence].classes}`}
                  >
                    {React.createElement(confidenceMeta[activePhoto.confidence].icon, {
                      className: 'w-3.5 h-3.5'
                    })}
                    {confidenceMeta[activePhoto.confidence].label}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">{activePhoto.details}</p>

                <div className="flex flex-wrap gap-1.5">
                  {activePhoto.traits.map((trait) => (
                    <span
                      key={trait}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-800 text-slate-200 border border-slate-700"
                    >
                      {trait}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 border-t border-slate-800">
                  <p className="text-[11px] text-slate-400 leading-relaxed max-w-xl">
                    <MapPin className="w-3.5 h-3.5 inline-block mr-1 text-emerald-400" />
                    Local do registro: IF • {activePhoto.note}
                  </p>
                  <span className="text-[10px] text-slate-500 font-mono shrink-0">
                    Foto: acervo do projeto
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IFPhotosSection;
