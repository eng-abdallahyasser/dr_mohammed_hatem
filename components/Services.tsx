'use client'
import { useI18n } from '@/hooks/useI18n'

import { Activity, Heart, Zap, Stethoscope, Wind, Droplet } from 'lucide-react'

export default function Services() {
  const t = useI18n();
  const services = [
    {
      icon: <Activity className="w-12 h-12" />,
      title: t.services.varicose.title,
      description: t.services.varicose.description
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: t.services.fistula.title,
      description: t.services.fistula.description
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: t.services.aneurysm.title,
      description: t.services.aneurysm.description
    },
    {
      icon: <Wind className="w-12 h-12" />,
      title: t.services.pad.title,
      description: t.services.pad.description
    },
    {
      icon: <Droplet className="w-12 h-12" />,
      title: t.services.diabeticFoot.title,
      description: t.services.diabeticFoot.description
    },
    {
      icon: <Stethoscope className="w-12 h-12" />,
      title: t.services.hyperhidrosis.title,
      description: t.services.hyperhidrosis.description
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-medical-blue dark:text-blue-400">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive vascular care solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-medical-blue dark:text-blue-400 mb-4 group-hover:text-medical-green dark:group-hover:text-emerald-400 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
