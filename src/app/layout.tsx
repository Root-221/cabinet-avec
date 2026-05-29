import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'AVEC — Africa Vision Expérience Consulting | Formation, Consulting, Coaching, Intérim',
    template: '%s | AVEC — Africa Vision Expérience Consulting',
  },
  description:
    'Cabinet spécialisé dans la formation professionnelle, le consulting, le coaching et les ressources humaines au Sénégal. Former, Accompagner, Révéler les talents.',
  keywords: [
    'formation professionnelle Sénégal',
    'consulting Dakar',
    'coaching professionnel',
    'intérim RH Sénégal',
    'AVEC consulting',
    'Africa Vision Expérience Consulting',
  ],
  authors: [{ name: 'AVEC Consulting' }],
  openGraph: {
    type: 'website',
    locale: 'fr_SN',
    url: 'https://www.avconsulting.sn',
    siteName: 'AVEC — Africa Vision Expérience Consulting',
    title: 'AVEC — Formation, Consulting, Coaching, Intérim au Sénégal',
    description:
      'Former, Accompagner, Révéler les talents. Cabinet de référence en formation professionnelle et consulting au Sénégal.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main className="page-wrapper">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
