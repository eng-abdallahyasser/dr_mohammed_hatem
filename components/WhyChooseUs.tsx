'use client'

import { CheckCircle, Award, Users, TrendingUp } from 'lucide-react'
import { useI18n } from '@/hooks/useI18n'

export default function WhyChooseUs() {
  const t = useI18n()
  const reasons = t.whyChooseUs.reasons
  const credentials = t.whyChooseUs.credentials

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t.whyChooseUs.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {t.whyChooseUs.description}
            </p>

            {/* Reasons Grid */}
            <div className="space-y-4 mb-8">
              {reasons.map((reason, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 text-medical-blue dark:text-blue-400">
                    {(() => {
                      switch (i) {
                        case 0: return <Award className="w-10 h-10" />
                        case 1: return <TrendingUp className="w-10 h-10" />
                        case 2: return <Users className="w-10 h-10" />
                        case 3: return <CheckCircle className="w-10 h-10" />
                        default: return null
                      }
                    })()}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{reason.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-medical-light-blue to-blue-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                {t.whyChooseUs.qualityAssurance.title}
              </h3>

              {/* Credentials List */}
              <div className="space-y-4 mb-10">
                {credentials.map((credential, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-medical-blue dark:bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{credential}</span>
                  </div>
                ))}
              </div>

              {/* Highlight Box */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-medical-blue dark:border-blue-400">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-6 h-6 text-medical-green" />
                  <span className="font-bold text-gray-900">{t.whyChooseUs.qualityAssurance.title}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{t.whyChooseUs.qualityAssurance.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
