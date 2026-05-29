'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, GraduationCap, Target, Users, ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const services = [
  { icon: Briefcase, label: 'Consulting' },
  { icon: GraduationCap, label: 'Formation' },
  { icon: Target, label: 'Coaching' },
  { icon: Users, label: 'Intérim' },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="accueil">
      <div className={styles.heroContent}>
        <div className="container">
          <div className={styles.heroInner}>
            {/* Left - Text */}
            <div className={styles.heroLeft}>
              <div className={styles.badge}>
                <span className={styles.badgeDot}></span>
                Cabinet de référence au Sénégal
              </div>

              <h1 className={styles.heroTitle}>
                AFRICA VISION<br />
                EXPÉRIENCE{' '}
                <span className={styles.highlight}>CONSULTING</span>
              </h1>

              <p className={styles.heroSlogan}>
                Former, Accompagner, Révéler les talents
              </p>

              <p className={styles.heroDesc}>
                Nous accompagnons les entreprises, les professionnels et les étudiants
                à travers des solutions innovantes en :
              </p>

              {/* Service icons */}
              <div className={styles.serviceIcons}>
                {services.map(({ icon: Icon, label }) => (
                  <div key={label} className={styles.serviceIconItem}>
                    <div className={styles.serviceIconWrap}>
                      <Icon size={22} />
                    </div>
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className={styles.heroBtns}>
                <Link href="/devis" className={styles.btnPrimary} id="hero-devis-btn">
                  Demander un devis
                </Link>
                <Link href="/services" className={styles.btnOutline} id="hero-services-btn">
                  Nos services
                  <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className={styles.btnSecondary} id="hero-contact-btn">
                  Nous contacter
                </Link>
              </div>
            </div>

            {/* Right - Image */}
            <div className={styles.heroRight}>
              <div className={styles.heroImageWrapper}>
                <div className={styles.heroImagePlaceholder}>
                  <Image
                    src="/equipeHero.jpg"
                    alt="Équipe AVEC Consulting"
                    fill
                    className={styles.heroImage}
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    priority
                    unoptimized
                  />
                </div>
                {/* Decorative elements */}
                <div className={styles.decorBox1}></div>
                <div className={styles.decorBox2}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
