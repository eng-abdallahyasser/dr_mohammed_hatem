'use client'

import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

export default function Hero() {
  const t = useI18n();
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-medical-light-blue via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-medical-blue hover:bg-medical-dark-blue text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Calendar className="w-5 h-5" />
                {t.cta.book}
              </button>
              <button className="border-2 border-medical-blue text-medical-blue hover:bg-medical-light-blue px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200">
                {t.cta.learnMore}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-medical-green rounded-full" />
                <span className="text-gray-600 dark:text-gray-400">{t.hero.trust.available}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-medical-green rounded-full" />
                <span className="text-gray-600 dark:text-gray-400">{t.hero.trust.expert}</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-medical-blue/10 to-medical-green/10 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-medical-blue to-blue-600 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
                <Image src="/portrait.png" alt="Dr. Mohamed Hatem" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '15+', label: t.stats.yearsExperience },
            { number: '5000+', label: t.stats.patientsTreated },
            { number: '100%', label: t.stats.successRate },
            { number: '2', label: t.stats.clinicLocations },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 hover:bg-medical-light-blue dark:hover:bg-gray-800 rounded-lg transition-colors duration-200">
              <div className="text-3xl md:text-4xl font-bold text-medical-blue dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
