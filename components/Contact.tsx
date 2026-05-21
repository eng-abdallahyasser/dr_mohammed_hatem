'use client'

import { useState } from 'react'
import { MapPin, Phone, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', phone: '', message: '' })
    alert('Thank you for your message! We will contact you soon.')
  }

  const locations = [
    {
      name: 'New Cairo Clinic',
      address: '19 A, Al-Khalifa Al-Mamun St, Roxsy Tower, Floor 11, Next to Mobile Petrol Station, Opposite Al-Asr Market, New Cairo',
      phone: '02 2241838391',
      hours: 'Daily 7-9 PM | Saturday & Sunday 8-10 PM'
    },
    {
      name: 'Al-Tagammu Al-Khames Clinic',
      address: 'Al-Sheikh Al-Qamar St, Health Care City Building, Floor 2, The Clinic 218, Behind Al-Geesh Specialized Hospital, Egypt Radiology',
      phone: '01 1002616811',
      hours: 'Saturday & Thursday 6-8 PM'
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-medical-blue">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contact us to schedule an appointment or get more information
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 transition-all duration-200 outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 transition-all duration-200 outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 transition-all duration-200 outline-none"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 transition-all duration-200 outline-none resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-medical-blue hover:bg-medical-dark-blue text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="space-y-6">
              {locations.map((location, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {location.name}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <MapPin className="w-5 h-5 text-medical-blue mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600">{location.address}</p>
                    </div>

                    <div className="flex gap-3 items-center">
                      <Phone className="w-5 h-5 text-medical-blue flex-shrink-0" />
                      <a
                        href={`tel:${location.phone}`}
                        className="text-medical-blue hover:text-medical-dark-blue font-semibold transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>

                    <div className="flex gap-3 items-center">
                      <Clock className="w-5 h-5 text-medical-blue flex-shrink-0" />
                      <p className="text-gray-600">{location.hours}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Direct Contact */}
              <div className="bg-gradient-to-br from-medical-blue to-blue-600 text-white p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="mb-6 text-blue-100">
                  Call our clinic directly or use our emergency contact line.
                </p>
              <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">02 2241838391</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">01 1002616811</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
