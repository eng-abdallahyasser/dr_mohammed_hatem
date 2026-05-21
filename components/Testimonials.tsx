'use client'

import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ahmed Mohamed',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      text: 'Dr. Hatem provided excellent care and successfully treated my vascular condition. Highly professional and compassionate.',
      rating: 5
    },
    {
      name: 'Fatima Hassan',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      text: 'The treatment was quick and painless. Dr. Hatem explained everything clearly. I would definitely recommend his clinic.',
      rating: 5
    },
    {
      name: 'Omar Khalil',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      text: 'Outstanding medical expertise combined with genuine care for patient wellbeing. Best vascular clinic in Cairo.',
      rating: 5
    },
    {
      name: 'Nadia Saleh',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      text: 'Professional team, modern equipment, and excellent results. Highly satisfied with the treatment provided.',
      rating: 5
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Patient <span className="text-medical-blue dark:text-blue-400">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real experiences from our satisfied patients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="mb-4 text-medical-blue/20 dark:text-blue-400/20">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="bg-medical-green hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
            Share Your Experience
          </button>
        </div>
      </div>
    </section>
  )
}
