/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DiaryEntry, ViewMode } from './types/diary';
import { INITIAL_ENTRIES, STUDENT_INFO, MARIE_AVATAR_IMAGE } from './data/initialDiary';
import { Header } from './components/Header';
import { BookView } from './components/BookView';
import { GalleryView } from './components/GalleryView';
import { PhotoLightbox } from './components/PhotoLightbox';
import { Heart } from 'lucide-react';

export default function App() {
  const [entries] = useState<DiaryEntry[]>(INITIAL_ENTRIES);
  const [currentView, setCurrentView] = useState<ViewMode>('book');
  const [currentDayIndex, setCurrentDayIndex] = useState<number>(0);
  const [lightboxEntry, setLightboxEntry] = useState<DiaryEntry | null>(null);

  return (
    <div className="min-h-screen bg-[#FFFDF8] flex flex-col font-body selection:bg-[#02A2BB]/20 selection:text-[#820101]">
      <div className="flex-1 flex flex-col">
        {/* Navigation Header */}
        <Header
          currentView={currentView}
          onViewChange={setCurrentView}
          totalCount={entries.length}
        />

        {/* Main Content Area based on currentView */}
        <main className="flex-1 pb-12">
          {currentView === 'book' && (
            <BookView
              entries={entries}
              currentDayIndex={currentDayIndex}
              onPageChange={setCurrentDayIndex}
              onOpenLightbox={(entry) => setLightboxEntry(entry)}
            />
          )}

          {currentView === 'gallery' && (
            <GalleryView
              entries={entries}
              onSelectDay={(idx) => {
                setCurrentDayIndex(idx);
                setCurrentView('book');
              }}
              onOpenLightbox={(entry) => setLightboxEntry(entry)}
            />
          )}
        </main>

        {/* Footer with Kid-friendly Branding */}
        <footer className="bg-[#FAF6EE] border-t border-stone-200/90 py-5 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
            <div className="flex items-center gap-2">
              <img
                src={MARIE_AVATAR_IMAGE}
                alt="Marie Cursive"
                className="w-6 h-6 rounded-full border border-[#820101] object-cover"
              />
              <span className="font-fredoka font-semibold text-stone-700">
                {STUDENT_INFO.projectTitle} · {STUDENT_INFO.name} · 2° ano B
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-stone-500 font-body">
              <span>Feito com</span>
              <Heart className="w-3.5 h-3.5 text-[#820101] fill-[#820101]" />
              <span>para a turma do 2° ano B</span>
            </div>
          </div>
        </footer>
      </div>

      {/* Lightbox Modal for Fullscreen Photos */}
      {lightboxEntry && (
        <PhotoLightbox
          entry={lightboxEntry}
          onClose={() => setLightboxEntry(null)}
        />
      )}
    </div>
  );
}
