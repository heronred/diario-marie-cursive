import React from 'react';
import { ViewMode } from '../types/diary';
import { BookOpen, Grid } from 'lucide-react';
import { MARIE_AVATAR_IMAGE, STUDENT_INFO } from '../data/initialDiary';

interface HeaderProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  totalCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  totalCount,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFDF8]/95 backdrop-blur-md border-b border-amber-900/10 shadow-xs">
      <div className="h-1.5 w-full bg-[#820101] flex">
        <div className="h-full w-1/3 bg-[#820101]" />
        <div className="h-full w-2/3 mariniere-stripes-horizontal" />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between gap-2 sm:gap-4 md:gap-8">
        {/* Marca: min-w-0 permite encolher, truncate corta o texto com "..." */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          <img
            src={MARIE_AVATAR_IMAGE}
            alt="Marie Cursive"
            className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full border-2 border-[#820101] shadow-xs object-cover"
          />
          <div className="min-w-0">
            <h1 className="font-fredoka text-base sm:text-lg md:text-xl font-bold tracking-tight text-[#820101] leading-tight truncate">
              Diário da Marie Cursive
            </h1>
            <p className="font-body text-[11px] sm:text-xs text-[#02A2BB] font-semibold tracking-wide truncate">
              {STUDENT_INFO.name} · 2° ano B
            </p>
          </div>
        </div>

        {/* Navegação: só ícone no celular, ícone + texto a partir de sm */}
        <nav className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={() => onViewChange('book')}
            aria-label="Livro Diário"
            className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-2 sm:py-1.5 text-xs sm:text-sm font-fredoka font-semibold rounded-full transition-all whitespace-nowrap ${
              currentView === 'book'
                ? 'bg-[#820101] text-white shadow-xs'
                : 'text-stone-600 hover:text-[#820101] hover:bg-[#820101]/10'
            }`}
          >
            <BookOpen className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
            <span className="hidden sm:inline">Livro Diário</span>
          </button>

          <button
            onClick={() => onViewChange('gallery')}
            aria-label="Álbum"
            className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-2 sm:py-1.5 text-xs sm:text-sm font-fredoka font-semibold rounded-full transition-all whitespace-nowrap ${
              currentView === 'gallery'
                ? 'bg-[#02A2BB] text-white shadow-xs'
                : 'text-stone-600 hover:text-[#02A2BB] hover:bg-[#02A2BB]/10'
            }`}
          >
            <Grid className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
            <span className="hidden sm:inline">Álbum</span>
          </button>
        </nav>
      </div>
    </header>
  );
};