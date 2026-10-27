import React from 'react';
import { DiaryEntry } from '../types/diary';
import { CheckCircle2, Maximize2, BookOpen, Layers, MapPin } from 'lucide-react';
import { STUDENT_INFO } from '../data/initialDiary';

interface GalleryViewProps {
  entries: DiaryEntry[];
  onSelectDay: (index: number) => void;
  onOpenLightbox: (entry: DiaryEntry) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({
  entries,
  onSelectDay,
  onOpenLightbox,
}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-8 flex flex-col gap-6">
      {/* Banner */}
      <div className="bg-[#FAF6EE] rounded-3xl p-6 sm:p-8 border-2 border-[#02A2BB]/30 shadow-md relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-fredoka font-bold text-[#820101] uppercase tracking-wider mb-1">
              <span>Álbum do Diário Físico</span>
              <span>·</span>
              <span>{STUDENT_INFO.name} · 2° ano B</span>
            </div>
            <h2 className="font-fredoka text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
              Todas as {entries.length} Páginas do Diário com a Marie Cursive
            </h2>
            <p className="font-body text-sm text-stone-600 max-w-2xl">
              Páginas organizadas na mesma ordem do diário físico do Gabriel, com as fotos originais e as anotações do dia a dia com a Marie!
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm shrink-0 min-w-[200px] text-center">
            <span className="text-xs font-fredoka font-bold text-stone-700 block mb-1">
              Total de Momentos:
            </span>
            <span className="font-fredoka text-2xl font-bold text-[#820101]">
              {entries.length} Páginas
            </span>
            <p className="text-[11px] text-stone-500 font-body mt-1">
              Gabriel Fontolan · 2° ano B
            </p>
          </div>
        </div>
      </div>

      {/* Grid of All 11 Pages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {entries.map((entry, idx) => (
          <div
            key={entry.id}
            className="bg-[#FFFDF8] rounded-2xl overflow-hidden shadow-md border-2 border-stone-200/90 hover:border-[#820101]/50 transition-all hover:shadow-xl flex flex-col group"
          >
            {/* Photo Thumbnail */}
            <div className="relative aspect-4/3 bg-stone-100 overflow-hidden">
              <img
                src={entry.photoUrl}
                alt={entry.photoCaption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Page badge */}
              <div className="absolute top-3 left-3 bg-[#820101] text-white font-fredoka text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                Pág {entry.dayNumber}
              </div>

              {/* Multi-photo badge if exists */}
              {entry.secondaryPhotoUrl ? (
                <div className="absolute top-3 right-3 bg-[#02A2BB] text-white font-fredoka text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                  <Layers className="w-3 h-3" />
                  <span>2 Fotos</span>
                </div>
              ) : (
                <div className="absolute top-3 right-3 bg-stone-800/80 text-white font-fredoka text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Foto Real</span>
                </div>
              )}

              {/* Action overlays on hover */}
              <div className="absolute bottom-2 right-2 flex items-center gap-1">
                <button
                  onClick={() => onOpenLightbox(entry)}
                  className="p-1.5 bg-black/60 hover:bg-black text-white rounded-lg transition-colors cursor-pointer"
                  title="Ver foto em tela cheia"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
              <div>
                {/* Location PIN only (no March dates) */}
                <div className="flex items-center gap-1.5 text-xs text-[#02A2BB] font-semibold mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#02A2BB] shrink-0" />
                  <span className="truncate">{entry.location}</span>
                </div>

                <h3 className="font-fredoka text-base font-bold text-stone-900 mb-1.5 group-hover:text-[#820101] transition-colors line-clamp-1">
                  {entry.title}
                </h3>

                {/* Exact physical diary quote */}
                <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200/80 mb-3">
                  <p className="font-handwriting text-base font-bold text-stone-900 leading-snug">
                    "{entry.photoCaption}"
                  </p>
                </div>

                <p className="font-body text-xs text-stone-600 line-clamp-2 mb-2">
                  {entry.story}
                </p>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                <button
                  onClick={() => onSelectDay(idx)}
                  className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-[#820101] hover:bg-[#680101] text-white rounded-xl text-xs font-fredoka font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Abrir no Livro Diário</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
