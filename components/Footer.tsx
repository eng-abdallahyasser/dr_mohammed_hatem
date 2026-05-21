'use client'

import { Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Quick: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' },
    ],
    Services: [
      { label: 'Varicose Veins', href: '#services' },
      { label: 'Aortic Aneurysm', href: '#services' },
      { label: 'Vascular Access', href: '#services' },
      { label: 'Consultation', href: '#services' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, label: 'Facebook', href: '#' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', href: '#' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: '#' },
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: '#' },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-100 dark:text-gray-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Branding */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Dr. Mohamed Hatem Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-xl font-bold text-white">Dr. Hatem</h3>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Specialist in vascular surgery and endovascular interventions with 15+ years of expertise serving patients across Cairo.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-medical-blue flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {footerLinks.Quick.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-gray-400 hover:text-medical-blue transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <div className="space-y-2">
              {footerLinks.Services.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-gray-400 hover:text-medical-blue transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <div className="space-y-2">
              {footerLinks.Legal.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-gray-400 hover:text-medical-blue transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2 items-start">
                <Phone className="w-4 h-4 text-medical-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">02 2241838391</p>
                  <p className="text-gray-400">01 1002616811</p>
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 text-medical-blue mt-0.5 flex-shrink-0" />
                <p className="text-gray-400">New Cairo & Al-Tagammu Al-Khames</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} Dr. Mohamed Hatem - Vascular Surgery Clinic. All rights reserved.
          </p>
          <p className="mt-4 md:mt-0">
            Designed for excellence in vascular care
          </p>
        </div>
      </div>
    </footer>
  )
}
