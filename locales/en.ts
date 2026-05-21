export type Locale = {
  nav: { home: string; services: string; about: string; contact: string };
  cta: { book: string; learnMore: string };
  hero: { title: string; subtitle: string; trust: { available: string; expert: string } };
  stats: { yearsExperience: string; patientsTreated: string; successRate: string; clinicLocations: string };
  services: {
    varicose: { title: string; description: string };
    fistula: { title: string; description: string };
    aneurysm: { title: string; description: string };
    pad: { title: string; description: string };
    diabeticFoot: { title: string; description: string };
    hyperhidrosis: { title: string; description: string };
  };
  whyChooseUs: {
    title: string;
    description: string;
    reasons: { title: string; description: string }[];
    credentials: string[];
    qualityAssurance: { title: string; description: string };
  };
  footer: { rights: string };
};

const en: Locale = {
  nav: { home: 'Home', services: 'Services', about: 'About', contact: 'Contact' },
  cta: { book: 'Book Appointment', learnMore: 'Learn More' },
  hero: {
    title: 'Expert Vascular Surgery Care',
    subtitle: 'Specialist in vascular and endovascular surgery with over 15 years of experience.',
    trust: { available: 'Available 7 Days a Week', expert: 'Expert Specialists' },
  },
  stats: {
    yearsExperience: 'Years Experience',
    patientsTreated: 'Patients Treated',
    successRate: 'Success Rate',
    clinicLocations: 'Clinic Locations',
  },
  services: {
    varicose: { title: 'Varicose Vein Treatment', description: 'Laser‑based treatment for leg varicose veins without surgery. Pain‑free with flexible installment options available.' },
    fistula: { title: 'Dialysis Access Fistula', description: 'Expert creation of vascular access for dialysis with minimal complications and optimal long‑term functionality.' },
    aneurysm: { title: 'Aortic Aneurysm Treatment', description: 'Advanced covered stent technology for aortic aneurysm repair without the need for open surgical intervention.' },
    pad: { title: 'Peripheral Artery Disease', description: 'Minimally invasive catheterization for peripheral circulation occlusion using latest endovascular techniques.' },
    diabeticFoot: { title: 'Diabetic Foot Treatment', description: 'Comprehensive care for diabetic foot complications with vascular assessment and specialized interventions.' },
    hyperhidrosis: { title: 'Hand Hyperhidrosis', description: 'Endoscopic surgical treatment for excessive hand sweating with excellent cosmetic and functional results.' },
  },
  whyChooseUs: {
    title: 'Why Choose Dr. Hatem?',
    description: 'With over 15 years of experience in vascular surgery, Dr. Mohamed Hatem has established himself as a leading specialist in the region, providing cutting‑edge treatments with a patient‑first approach.',
    reasons: [
      { title: 'Board Certified', description: 'Fellow of Royal College of Surgeons - England and internationally recognized specialist in vascular surgery.' },
      { title: 'Advanced Technology', description: 'Specialist in minimally invasive endovascular techniques and catheterization with reduced recovery time.' },
      { title: 'Academic Excellence', description: 'Assistant Professor of Vascular Surgery at Ain Shams University with active research and teaching responsibilities.' },
      { title: 'Patient Testimonials', description: 'Consistently praised for diagnostic expertise, patient care, and responsive communication with excellent surgical outcomes.' },
    ],
    credentials: [
      'Consultant & Assistant Professor of Vascular Surgery - Ain Shams University',
      'Ph.D. in Vascular Surgery - Ain Shams University',
      'Fellow of Royal College of Surgeons - England',
      'Member of European Society for Vascular Surgery',
      'Member of Egyptian Society for Vascular Surgery',
      'Member of International Society for Vascular Surgery',
    ],
    qualityAssurance: { title: 'Quality Assurance', description: 'All procedures follow international standards and best practices to ensure the highest level of patient safety and care quality.' },
  },
  footer: { rights: 'All rights reserved.' },
};

export default en;
