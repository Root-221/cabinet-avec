import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import AProposResume from '@/components/sections/AProposResume';
import ChiffresCles from '@/components/sections/ChiffresCles';
import ServicesCards from '@/components/sections/ServicesCards';
import PourquoiNous from '@/components/sections/PourquoiNous';
import Temoignages from '@/components/sections/Temoignages';
import CTAFinal from '@/components/sections/CTAFinal';

export const metadata: Metadata = {
  title: 'Accueil — Africa Vision Expérience Consulting | Formation, Consulting, Coaching, Intérim',
  description:
    'AVEC est votre partenaire de confiance pour la formation professionnelle, le consulting, le coaching et l\'intérim au Sénégal. Former, Accompagner, Révéler les talents.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AProposResume />
      <ChiffresCles />
      <ServicesCards />
      <PourquoiNous />
      <Temoignages />
      <CTAFinal />
    </>
  );
}
