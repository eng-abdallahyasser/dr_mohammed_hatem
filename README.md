# Dr. Mohamed Hatem - Vascular Surgery Clinic

A professional, modern medical clinic landing page built with **Next.js 14**, **React**, and **Tailwind CSS**.

## Features

✅ **Fully Responsive** - Mobile, tablet, and desktop optimized  
✅ **Modern Design** - Clean, trustworthy medical aesthetic  
✅ **Smooth Animations** - Professional scroll and hover effects  
✅ **Component-Based** - Modular, maintainable architecture  
✅ **SEO Optimized** - Meta tags and semantic HTML  
✅ **Vercel Ready** - Deployment-optimized configuration  

## Sections Included

- **Navbar** - Logo, navigation links, and CTA button with mobile menu
- **Hero Section** - Headline, subtext, dual CTA buttons, and medical imagery
- **Services** - 6 comprehensive vascular surgery services with icons
- **Why Choose Us** - Trust signals, credentials, and expertise highlights
- **Doctors** - Doctor profiles with specialties and booking options
- **Testimonials** - Patient reviews with star ratings
- **Contact** - Two clinic locations, contact form, and direct phone numbers
- **Footer** - Links, social media, and copyright information

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Language**: TypeScript
- **Images**: Optimized with Next.js Image component

## Color Scheme

- Medical Blue: `#0066CC`
- Medical Dark Blue: `#004B99`
- Medical Light Blue: `#E6F2FF`
- Medical Green: `#10B981`

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dr-hatem-clinic
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Hero.tsx             # Hero section
│   ├── Services.tsx         # Services showcase
│   ├── WhyChooseUs.tsx      # Trust signals & credentials
│   ├── Doctors.tsx          # Doctor profiles
│   ├── Testimonials.tsx     # Patient reviews
│   ├── Contact.tsx          # Contact form & locations
│   └── Footer.tsx           # Footer section
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Customization

### Update Clinic Information
Edit the following files to update clinic details:
- `components/Contact.tsx` - Phone numbers, addresses, hours
- `components/Doctors.tsx` - Doctor information
- `components/WhyChooseUs.tsx` - Credentials and credentials

### Modify Colors
Update the color values in `tailwind.config.js`:
```js
colors: {
  'medical-blue': '#0066CC',
  'medical-dark-blue': '#004B99',
  'medical-light-blue': '#E6F2FF',
  'medical-green': '#10B981',
}
```

### Change Images
Replace Unsplash URLs in components with your own images:
- Hero section: `components/Hero.tsx`
- Doctor profiles: `components/Doctors.tsx`
- Testimonials: `components/Testimonials.tsx`

## Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and configure it
5. Click Deploy

### Environment Variables
No environment variables required for basic deployment.

## Performance

- ⚡ **Next.js Optimization** - Automatic code splitting and optimization
- 🖼️ **Image Optimization** - Automatic WebP conversion and responsive images
- 📊 **Core Web Vitals** - Optimized for Largest Contentful Paint (LCP)
- 🎯 **SEO** - Semantic HTML and meta tags

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and owned by Dr. Mohamed Hatem - Vascular Surgery Clinic.

## Doctor Profile

**Dr. Mohamed Hatem Abd El-Azim**
- Consultant & Assistant Professor of Vascular Surgery
- Specialty: Vascular surgery, peripheral catheterization, diabetic foot
- Qualifications:
  - Ph.D. in Vascular Surgery (Ain Shams University)
  - Fellow of Royal College of Surgeons - England
  - Member of European Society for Vascular Surgery
  - Member of Egyptian Society for Vascular Surgery
  - Member of International Society for Vascular Surgery
- Experience: 15+ years in vascular and endovascular surgery
- Languages: Arabic, English

## Contact

**Dr. Mohamed Hatem Abd El-Azim - Vascular Surgery Specialist**

📞 **Phone:**
- New Cairo: 02 2241838391
- Al-Tagammu: 01 1002616811

📍 **Locations:**
- New Cairo: 19 A, Al-Khalifa Al-Mamun St, Roxsy Tower, Floor 11, Next to Mobile Petrol Station, Opposite Al-Asr Market
- Al-Tagammu Al-Khames: Al-Sheikh Al-Qamar St, Health Care City Building, Floor 2, The Clinic 218, Behind Al-Geesh Specialized Hospital

---

Built with ❤️ for excellent vascular care
