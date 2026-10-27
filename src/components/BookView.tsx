import React, { useState, useEffect } from 'react';
import { DiaryEntry } from '../types/diary';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Maximize2,
  Sparkles,
  MapPin,
  CheckCircle2,
  Image as ImageIcon,
} from 'lucide-react';
import { MARIE_AVATAR_IMAGE } from '../data/initialDiary';

interface BookViewProps {
  entries: DiaryEntry[];
  currentDayIndex: number;
  onPageChange: (index: number) => void;
  onOpenLightbox: (entry: DiaryEntry) => void;
}

const PAGE_ICONS = ['🎮', '🐾', '🥟', '📚', '🐕', '🧇', '🎺', '🎄', '🪡', '💤', '💡'];

export const BookView: React.FC<BookViewProps> = ({
  entries,
  currentDayIndex,
  onPageChange,
  onOpenLightbox,
}) => {
  const currentEntry = entries[currentDayIndex];
  const [activePhotoInView, setActivePhotoInView] = useState<'primary' | 'secondary'>('primary');

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && currentDayIndex > 0) {
        onPageChange(currentDayIndex - 1);
      } else if (e.key === 'ArrowRight' && currentDayIndex < entries.length - 1) {
        onPageChange(currentDayIndex + 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentDayIndex, entries.length, onPageChange]);

  useEffect(() => {
    setActivePhotoInView('primary');
  }, [currentDayIndex]);

  const getWeatherIcon = (weather: DiaryEntry['weather']) => {
    switch (weather) {
      case 'sunny': return '☀️ Ensolarado';
      case 'cloudy': return '☁️ Nublado';
      case 'rainy': return '🌧️ Chuvoso';
      case 'rainbow': return '🌈 Arco-Íris';
      case 'stars': return '⭐ Estrelado';
      default: return '☀️ Bom Tempo';
    }
  };

  const getMoodIcon = (mood: DiaryEntry['mood']) => {
    switch (mood) {
      case 'super': return '😃 Super Feliz';
      case 'creative': return '🎨 Muito Criativo';
      case 'adventurous': return '🚀 Aventureiro';
      case 'loved': return '💖 Amado';
      case 'happy': return '🎉 Animado';
      default: return '😊 Feliz';
    }
  };

  const hasTwoPhotos = !!currentEntry.secondaryPhotoUrl;
  const prevEntry = currentDayIndex > 0 ? entries[currentDayIndex - 1] : null;
  const nextEntry = currentDayIndex < entries.length - 1 ? entries[currentDayIndex + 1] : null;

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-6 py-4 md:py-6 flex flex-col gap-5">
      {/* Enhanced Top Pagination & Chapter Deck */}
      <div className="bg-[#FAF6EE] p-3 sm:p-4 rounded-2xl border-2 border-[#820101]/20 shadow-xs flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          {/* Page Index & Title */}
          <div className="flex items-center gap-2">
            <span className="bg-[#820101] text-white font-fredoka text-xs sm:text-sm font-bold px-3 py-1 rounded-full shadow-xs">
              Página {currentEntry.dayNumber} de {entries.length}
            </span>
            <span className="font-fredoka text-xs sm:text-sm font-semibold text-[#02A2BB] truncate max-w-[200px] sm:max-w-xs">
              {currentEntry.title}
            </span>
            {hasTwoPhotos && (
              <span className="text-[11px] font-fredoka bg-[#02A2BB]/15 text-[#02A2BB] px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                <ImageIcon className="w-3 h-3" />
                <span>2 Fotos</span>
              </span>
            )}
          </div>

          {/* Quick Prev / Next Navigator */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => onPageChange(0)}
              disabled={currentDayIndex === 0}
              className="p-1.5 rounded-lg text-stone-600 hover:bg-stone-200 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              title="Primeira página"
            >
              <ChevronsLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => onPageChange(Math.max(0, currentDayIndex - 1))}
              disabled={currentDayIndex === 0}
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-fredoka font-semibold rounded-lg bg-stone-100 hover:bg-stone-200 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Anterior</span>
            </button>

            <span className="text-xs font-fredoka font-bold text-[#820101] px-2">
              {currentDayIndex + 1} / {entries.length}
            </span>

            <button
              onClick={() => onPageChange(Math.min(entries.length - 1, currentDayIndex + 1))}
              disabled={currentDayIndex === entries.length - 1}
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-fredoka font-semibold rounded-lg bg-[#820101] text-white hover:bg-[#680101] disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <span className="hidden sm:inline">Próxima</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onPageChange(entries.length - 1)}
              disabled={currentDayIndex === entries.length - 1}
              className="p-1.5 rounded-lg text-stone-600 hover:bg-stone-200 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              title="Última página"
            >
              <ChevronsRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 11 Clickable Page Tabs with Emojis */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {entries.map((entry, idx) => (
            <button
              key={entry.id}
              onClick={() => onPageChange(idx)}
              className={`relative flex items-center gap-1 px-2.5 py-1.5 rounded-xl font-fredoka text-xs transition-all shrink-0 border ${
                idx === currentDayIndex
                  ? 'bg-[#820101] text-white border-[#820101] shadow-xs scale-102 font-bold'
                  : 'bg-white text-stone-700 border-stone-200 hover:border-[#02A2BB] hover:bg-[#02A2BB]/10 font-medium'
              }`}
            >
              <span>{PAGE_ICONS[idx] || '📖'}</span>
              <span>Pág {entry.dayNumber}</span>
              {entry.secondaryPhotoUrl && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#02A2BB]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Realistic Book Open Spread */}
      <div className="relative bg-[#FAF6EE] rounded-3xl p-3 sm:p-6 shadow-2xl border-4 border-[#820101]/20">
        {/* Book spine middle visual seam on desktop */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-stone-400/20 via-stone-400/40 to-stone-400/20 pointer-events-none z-10 rounded-xs" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* LEFT PAGE: Photo Scrapbook */}
          <div className="bg-[#FFFDF8] rounded-2xl p-4 sm:p-6 shadow-md border border-stone-200/90 flex flex-col justify-between relative overflow-hidden">
            {/* Washi Tape styling at top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-36 h-6 bg-[#02A2BB]/30 backdrop-blur-xs rotate-1 shadow-xs border-y border-dashed border-[#02A2BB]/40 z-10" />

            <div>
              {/* If page has 2 photos: show dual-photo scrapbook layout */}
              {hasTwoPhotos ? (
                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {/* Photo 1 */}
                    <div
                      onClick={() => setActivePhotoInView('primary')}
                      className={`relative bg-white p-2 rounded-xl shadow-md border-2 transition-all cursor-pointer ${
                        activePhotoInView === 'primary' ? 'border-[#820101] ring-2 ring-[#820101]/20' : 'border-stone-200 hover:border-[#02A2BB]'
                      }`}
                    >
                      <div className="relative aspect-4/3 rounded-lg overflow-hidden bg-stone-100">
                        <img
                          src={currentEntry.photoUrl}
                          alt={currentEntry.photoCaption}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenLightbox({ ...currentEntry, photoUrl: currentEntry.photoUrl });
                          }}
                          className="absolute top-1 right-1 p-1 bg-black/60 text-white rounded hover:bg-black transition-colors"
                          title="Ampliar foto 1"
                        >
                          <Maximize2 className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-[10px] font-fredoka font-bold text-center text-stone-700 mt-1 truncate">
                        Foto 1
                      </p>
                    </div>

                    {/* Photo 2 */}
                    <div
                      onClick={() => setActivePhotoInView('secondary')}
                      className={`relative bg-white p-2 rounded-xl shadow-md border-2 transition-all cursor-pointer ${
                        activePhotoInView === 'secondary' ? 'border-[#820101] ring-2 ring-[#820101]/20' : 'border-stone-200 hover:border-[#02A2BB]'
                      }`}
                    >
                      <div className="relative aspect-4/3 rounded-lg overflow-hidden bg-stone-100">
                        <img
                          src={currentEntry.secondaryPhotoUrl}
                          alt={currentEntry.secondaryCaption || currentEntry.photoCaption}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenLightbox({
                              ...currentEntry,
                              photoUrl: currentEntry.secondaryPhotoUrl || currentEntry.photoUrl,
                            });
                          }}
                          className="absolute top-1 right-1 p-1 bg-black/60 text-white rounded hover:bg-black transition-colors"
                          title="Ampliar foto 2"
                        >
                          <Maximize2 className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-[10px] font-fredoka font-bold text-center text-stone-700 mt-1 truncate">
                        Foto 2
                      </p>
                    </div>
                  </div>

                  {/* Main Active Photo Preview */}
                  <div className="relative bg-white p-3 rounded-xl shadow-lg border border-stone-200">
                    <div className="relative aspect-16/10 rounded-lg overflow-hidden bg-stone-100">
                      <img
                        src={activePhotoInView === 'primary' ? currentEntry.photoUrl : currentEntry.secondaryPhotoUrl}
                        alt={currentEntry.photoCaption}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute top-2 left-2 bg-[#820101]/90 text-white text-[10px] font-fredoka px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Foto Real do Diário</span>
                      </div>

                      <button
                        onClick={() => onOpenLightbox({
                          ...currentEntry,
                          photoUrl: activePhotoInView === 'primary' ? currentEntry.photoUrl : (currentEntry.secondaryPhotoUrl || currentEntry.photoUrl),
                        })}
                        className="absolute top-2 right-2 p-1.5 bg-black/60 text-white hover:bg-black rounded-lg transition-colors"
                        title="Ampliar em tela cheia"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Exact physical diary caption */}
                    <div className="pt-3 pb-1 text-center">
                      <p className="font-handwriting text-xl sm:text-2xl text-stone-900 leading-snug font-bold">
                        "{currentEntry.photoCaption}"
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                /* Single Photo Polaroid Frame */
                <div className="relative bg-white p-3 sm:p-4 rounded-xl shadow-lg border border-stone-200 transform sm:-rotate-1 transition-transform hover:rotate-0 group">
                  <div className="relative aspect-4/3 rounded-lg overflow-hidden bg-stone-100 border border-stone-200">
                    <img
                      src={currentEntry.photoUrl}
                      alt={currentEntry.photoCaption}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                    />

                    <div className="absolute top-2 left-2 bg-[#820101]/90 text-white text-[10px] font-fredoka px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Foto Real do Diário</span>
                    </div>

                    <button
                      onClick={() => onOpenLightbox(currentEntry)}
                      className="absolute top-2 right-2 p-1.5 bg-black/60 text-white hover:bg-black rounded-lg transition-colors"
                      title="Ampliar foto em tela cheia"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Exact physical diary caption */}
                  <div className="pt-3 pb-1 text-center">
                    <p className="font-handwriting text-xl sm:text-2xl text-stone-900 leading-snug font-bold">
                      "{currentEntry.photoCaption}"
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom footnote */}
            <div className="mt-4 pt-3 border-t border-stone-200/80 flex items-center justify-between text-[11px] text-stone-400 font-body">
              <span>Diário da Marie Cursive</span>
              <span>Gabriel Fontolan · 2° ano B</span>
            </div>
          </div>

          {/* RIGHT PAGE: Lined Notebook Text */}
          <div className="bg-[#FFFDF8] lined-paper rounded-2xl p-5 sm:p-7 shadow-md border border-stone-200/90 flex flex-col justify-between relative overflow-hidden notebook-margin pl-12 sm:pl-14">
            <div>
              {/* Header: Location PIN only (no march dates) */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
                <div className="flex items-center gap-1.5 text-xs font-body font-semibold text-[#02A2BB]">
                  <MapPin className="w-4 h-4 text-[#02A2BB]" />
                  <span>{currentEntry.location}</span>
                </div>

                {/* Weather & Mood Tags */}
                <div className="flex items-center gap-2 text-xs font-body font-semibold">
                  <span className="text-stone-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
                    {getWeatherIcon(currentEntry.weather)}
                  </span>
                  <span className="text-stone-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200/60">
                    {getMoodIcon(currentEntry.mood)}
                  </span>
                </div>
              </div>

              {/* Title without pencil icon */}
              <div className="mt-2 mb-3">
                <h2 className="font-fredoka text-xl sm:text-2xl font-bold text-[#820101] leading-tight">
                  {currentEntry.title}
                </h2>
              </div>

              {/* Exact physical diary quote highlight */}
              <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/70 mb-4">
                <span className="text-[10px] font-fredoka font-bold uppercase tracking-wider text-[#820101]">
                  Legenda do Diário Físico:
                </span>
                <p className="font-handwriting text-xl text-stone-900 leading-snug mt-1 font-bold">
                  "{currentEntry.photoCaption}"
                </p>
              </div>

              {/* Story Content */}
              <div className="space-y-3 font-body text-stone-800 text-sm sm:text-base leading-relaxed">
                <p className="font-medium text-stone-900 bg-stone-50/60 p-3.5 rounded-xl border border-stone-200/60">
                  {currentEntry.story}
                </p>
              </div>

              {/* Marie's Secret Box */}
              <div className="mt-5 p-3.5 bg-gradient-to-r from-[#820101]/5 via-[#02A2BB]/5 to-white rounded-xl border-2 border-dashed border-[#820101]/30 flex items-start gap-3">
                <img
                  src={MARIE_AVATAR_IMAGE}
                  alt="Marie Cursive"
                  className="w-10 h-10 rounded-full border-2 border-[#820101] shrink-0 object-cover mt-0.5"
                />
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-fredoka font-bold text-[#820101]">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>O Segredinho da Marie:</span>
                  </div>
                  <p className="font-handwriting text-lg sm:text-xl text-stone-700 leading-snug mt-0.5">
                    "{currentEntry.marieSecret}"
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom signature and page flip buttons */}
            <div className="mt-6 pt-3 border-t border-stone-200/70 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="font-handwriting text-xl text-[#02A2BB]">
                Gabriel Fontolan · 2° ano B
              </div>

              <div className="flex items-center gap-2">
                {prevEntry && (
                  <button
                    onClick={() => onPageChange(currentDayIndex - 1)}
                    className="flex items-center gap-1 text-xs font-fredoka font-semibold text-stone-600 hover:text-[#820101] px-2 py-1 rounded-md hover:bg-stone-100 transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Voltar ({prevEntry.dayNumber})</span>
                  </button>
                )}
                {nextEntry && (
                  <button
                    onClick={() => onPageChange(currentDayIndex + 1)}
                    className="flex items-center gap-1 text-xs font-fredoka font-bold text-[#820101] hover:text-[#680101] px-2.5 py-1 rounded-md bg-[#820101]/10 hover:bg-[#820101]/20 transition-colors"
                  >
                    <span>Avançar ({nextEntry.dayNumber})</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Page Turner Bar with Full Previews */}
      <div className="flex items-center justify-between p-3 bg-white rounded-2xl border border-stone-200 shadow-xs">
        <button
          onClick={() => onPageChange(Math.max(0, currentDayIndex - 1))}
          disabled={currentDayIndex === 0}
          className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-fredoka font-semibold text-stone-700 hover:text-[#820101] disabled:opacity-30 disabled:pointer-events-none rounded-xl hover:bg-stone-50 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <div className="text-left hidden sm:block">
            <span className="text-[10px] text-stone-400 block">Página Anterior</span>
            <span className="truncate max-w-[150px] block font-bold">{prevEntry ? prevEntry.title : ''}</span>
          </div>
          <span className="sm:hidden">Anterior</span>
        </button>

        {/* Big Page Badge */}
        <div className="flex flex-col items-center">
          <span className="font-fredoka text-sm font-bold text-[#820101]">
            Página {currentEntry.dayNumber} de {entries.length}
          </span>
          <span className="text-[10px] text-stone-400 font-body hidden sm:block">
            {currentEntry.activityTag}
          </span>
        </div>

        <button
          onClick={() => onPageChange(Math.min(entries.length - 1, currentDayIndex + 1))}
          disabled={currentDayIndex === entries.length - 1}
          className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-fredoka font-semibold text-[#820101] hover:text-[#680101] disabled:opacity-30 disabled:pointer-events-none rounded-xl hover:bg-[#820101]/10 transition-colors"
        >
          <div className="text-right hidden sm:block">
            <span className="text-[10px] text-stone-400 block">Próxima Página</span>
            <span className="truncate max-w-[150px] block font-bold">{nextEntry ? nextEntry.title : ''}</span>
          </div>
          <span className="sm:hidden">Próxima</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
