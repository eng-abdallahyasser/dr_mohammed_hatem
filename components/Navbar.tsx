'use client'

import { useI18n } from '@/hooks/useI18n';
import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from '@/context/ThemeContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme, language, toggleLanguage } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const t = useI18n();
  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#services', label: t.nav.services },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <nav
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-gray-900 shadow-lg'
          : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Dr. Mohamed Hatem Logo"
              width={45}
              height={45}
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-sm md:text-base font-bold text-medical-blue dark:text-blue-400">
                Dr. Mohamed Hatem
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Vascular Surgery</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-medical-blue dark:hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Section - Theme, Language, and CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 font-medium text-sm text-gray-700 dark:text-gray-300"
              aria-label="Toggle language"
            >
              {language === 'en' ? 'عربي' : 'EN'}
            </button>

            {/* CTA Button */}
            <button dir={language === 'ar' ? 'rtl' : 'ltr'} className="bg-medical-blue hover:bg-medical-dark-blue text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
              {language === 'ar' ? 'احجز الآن' : 'Book Appointment'}
            </button>
          </div>

          {/* Mobile Menu Button and Toggles */}
          <div className="md:hidden flex items-center gap-2">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            {/* Language Toggle Mobile */}
            <button
              onClick={toggleLanguage}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium text-sm text-gray-700 dark:text-gray-300"
              aria-label="Toggle language"
            >
              {language === 'en' ? 'عربي' : 'EN'}
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 dark:border-gray-700 animate-slide-up">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-medical-light-blue dark:hover:bg-gray-800 hover:text-medical-blue dark:hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
            <button className="w-full mt-3 mx-4 bg-medical-blue hover:bg-medical-dark-blue text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
              {language === 'ar' ? 'احجز الآن' : 'Book Appointment'}
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
