import React from 'react';
import { X, MapPin } from 'lucide-react';
import { DiaryEntry } from '../types/diary';

interface PhotoLightboxProps {
  entry: DiaryEntry;
  onClose: () => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({ entry, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#FFFDF8] rounded-2xl overflow-hidden shadow-2xl border-4 border-white flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 bg-black/60 text-white hover:bg-black rounded-full transition-colors cursor-pointer"
          aria-label="Fechar ampliação"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Photo view */}
        <div className="w-full md:w-3/5 bg-stone-900 flex items-center justify-center min-h-[300px] max-h-[70vh]">
          <img
            src={entry.photoUrl}
            alt={entry.photoCaption || entry.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Caption details */}
        <div className="w-full md:w-2/5 p-6 flex flex-col justify-between bg-[#FFFDF8]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#820101] uppercase tracking-wider mb-2">
              <span className="bg-[#820101]/10 px-2 py-0.5 rounded-full font-fredoka">
                Página {entry.dayNumber} de 11
              </span>
              <span>·</span>
              <span>{entry.activityTag}</span>
            </div>

            <h3 className="font-fredoka text-xl font-bold text-stone-900 mb-3">
              {entry.title}
            </h3>

            {/* Location only (no March dates) */}
            <div className="flex items-center gap-1.5 text-xs text-[#02A2BB] font-semibold mb-4 font-body">
              <MapPin className="w-3.5 h-3.5 text-[#02A2BB] shrink-0" />
              <span>{entry.location}</span>
            </div>

            <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/60 mb-4">
              <p className="font-handwriting text-xl text-stone-900 leading-snug font-bold">
                "{entry.photoCaption}"
              </p>
            </div>

            <p className="font-body text-xs text-stone-600 line-clamp-4">
              {entry.story}
            </p>
          </div>

          <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
            <span>Gabriel Fontolan · 2° ano B</span>
            <span className="font-fredoka text-[#820101]">Marie Cursive</span>
          </div>
        </div>
      </div>
    </div>
  );
};
