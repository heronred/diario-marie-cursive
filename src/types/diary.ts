export type WeatherType = 'sunny' | 'cloudy' | 'rainy' | 'rainbow' | 'stars';
export type MoodType = 'happy' | 'super' | 'loved' | 'creative' | 'adventurous';

export interface StickerItem {
  id: string;
  emoji: string;
  name: string;
  x: number;
  y: number;
  scale?: number;
}

export interface DiaryEntry {
  id: number;
  dayNumber: number;
  title: string;
  date: string;
  weekday: string;
  location: string;
  weather: WeatherType;
  mood: MoodType;
  photoUrl: string;
  secondaryPhotoUrl?: string;
  photoCaption: string;
  secondaryCaption?: string;
  story: string;
  marieSecret: string;
  activityTag: string;
  stickers?: StickerItem[];
  doodleDataUrl?: string;
  isCustomPhoto?: boolean;
}

export type ViewMode = 'book' | 'gallery';
