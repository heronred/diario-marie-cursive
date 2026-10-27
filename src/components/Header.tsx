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
    <header className="sticky top-0 z-40 bg-[#FFFDF8]/95 backdrop-blur-md border-b border-amber-900/10 shadow-xs">
      {/* Marie Cursive signature color bar: Crimson beret #820101 and Cyan stripes #02A2BB */}
      <div className="h-1.5 w-full bg-[#820101] flex">
        <div className="h-full w-1/3 bg-[#820101]" />
        <div className="h-full w-2/3 mariniere-stripes-horizontal" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Brand wordmark & Student info with 2° ano B */}
        <div className="flex items-center gap-3 shrink-0">
          <img
            src={MARIE_AVATAR_IMAGE}
            alt="Marie Cursive"
            className="w-10 h-10 rounded-full border-2 border-[#820101] shadow-xs object-cover"
          />
          <div>
            <h1 className="font-fredoka text-lg md:text-xl font-bold tracking-tight text-[#820101] whitespace-nowrap leading-none">
              Diário da Marie Cursive
            </h1>
            <p className="font-body text-xs text-[#02A2BB] font-semibold tracking-wide">
              {STUDENT_INFO.name} · 2° ano B
            </p>
          </div>
        </div>

        {/* Zone 2: Navigation Links (Livro Diário e Álbum) */}
        <nav className="flex items-center gap-2">
          <button
            onClick={() => onViewChange('book')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-fredoka font-semibold rounded-full transition-all whitespace-nowrap shrink-0 ${
              currentView === 'book'
                ? 'bg-[#820101] text-white shadow-xs'
                : 'text-stone-600 hover:text-[#820101] hover:bg-[#820101]/10'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Livro Diário</span>
          </button>

          <button
            onClick={() => onViewChange('gallery')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-fredoka font-semibold rounded-full transition-all whitespace-nowrap shrink-0 ${
              currentView === 'gallery'
                ? 'bg-[#02A2BB] text-white shadow-xs'
                : 'text-stone-600 hover:text-[#02A2BB] hover:bg-[#02A2BB]/10'
            }`}
          >
    
          </button>
        </nav>
      </div>
    </header>
  );
};
