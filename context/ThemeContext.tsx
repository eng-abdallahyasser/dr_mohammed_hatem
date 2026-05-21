'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
type Language = 'en' | 'ar'

interface ThemeContextType {
  theme: Theme
  language: Language
  toggleTheme: () => void
  toggleLanguage: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [language, setLanguage] = useState<Language>('en')
  // Initialize from localStorage
  useEffect(() => {
    try {
      const savedTheme = (localStorage.getItem('theme') as Theme) || 'light'
      const savedLanguage = (localStorage.getItem('language') as Language) || 'en'
      setTheme(savedTheme)
      setLanguage(savedLanguage)

      // Apply theme to document
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

      // Apply language direction
      document.documentElement.lang = savedLanguage
      document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr'
    } catch (e) {
      // Ignore localStorage errors (e.g., during SSR or blocked storage)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
    
    document.documentElement.lang = newLanguage
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr'
  }

  // Always provide the context so consumers won't throw during initial render.
  return (
    <ThemeContext.Provider value={{ theme, language, toggleTheme, toggleLanguage }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
