
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Dr. Mohamed Hatem - Vascular Surgery Clinic',
  description:
    'Professional vascular surgery clinic offering specialized treatments for vascular conditions. Located in New Cairo and Tagammu. Book your appointment today.',
  keywords:
    'vascular surgery, clinic, doctor, Cairo, vascular disease, medical',
  authors: [{ name: 'Dr. Mohamed Hatem' }],
  openGraph: {
    title: 'Dr. Mohamed Hatem - Vascular Surgery Clinic',
    description: 'Professional vascular surgery clinic with expert care',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}


