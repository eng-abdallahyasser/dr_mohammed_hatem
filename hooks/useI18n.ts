'use client';
import { useTheme } from '@/context/ThemeContext';
import en from '@/locales/en';
import ar from '@/locales/ar';

type Locale = typeof en; // both have same shape

export function useI18n(): Locale {
  const { language } = useTheme();
  return language === 'ar' ? ar : en;
}
