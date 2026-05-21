'use client'

import Image from 'next/image'

export default function Doctors() {
  const doctors = [
    {
      name: 'Dr. Mohamed Hatem Abd El-Azim',
      specialty: 'Consultant Vascular Surgery',
      bio: 'Specialist in vascular and endovascular surgery with 15+ years of experience. Assistant Professor at Ain Shams University with international certifications.',
      image: '/portrait.png',
      credentials: 'Ph.D., FRCS, European Vascular Surgery Member',
    },
    {
      name: 'Dr. Amira Hassan',
      specialty: 'Vascular Imaging Specialist',
      bio: 'Expert in diagnostic imaging and vascular ultrasound with advanced training in vascular assessment.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      credentials: 'MD, Imaging Certification',
    },
    {
      name: 'Dr. Ahmed Salem',
      specialty: 'Interventional Radiologist',
      bio: 'Specializing in minimally invasive vascular interventions and advanced catheterization techniques.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      credentials: 'MD, Interventional Certification',
    },
  ]

  return (
    <section id="doctors" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-medical-blue">Doctors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Highly qualified specialists dedicated to your vascular health
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-72 bg-gradient-to-br from-medical-blue to-blue-600">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-medical-blue font-semibold mb-3">
                  {doctor.specialty}
                </p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {doctor.bio}
                </p>
                <p className="text-xs text-gray-500 mb-6 italic">
                  {doctor.credentials}
                </p>

                {/* Contact */}
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                  <button className="w-full bg-medical-light-blue hover:bg-medical-blue text-medical-blue hover:text-white transition-all duration-200 px-4 py-2 rounded-lg font-semibold text-sm">
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
