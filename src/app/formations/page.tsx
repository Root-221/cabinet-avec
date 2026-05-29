import type { Metadata } from 'next';
import Link from 'next/link';
import FormationsClient from './FormationsClient';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Nos Formations',
  description: 'Découvrez notre catalogue de formations professionnelles : bureautique, comptabilité, gestion de caisse, entrepreneuriat et développement personnel.',
};

export default function FormationsPage() {
  return (
    <div>
      <div className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Formations</span>
          </div>
          <h1 className={styles.pageTitle}>Nos Formations</h1>
          <p className={styles.pageSubtitle}>
            Des programmes certifiants adaptés aux réalités du marché africain
          </p>
        </div>
      </div>

      <FormationsClient />

      {/* Info section */}
      <section className={styles.infoSection}>
        <div className="container">
          <div className={styles.infoGrid}>
            <div className={styles.infoBox}>
              <h3>Formations sur mesure</h3>
              <p>Vous souhaitez une formation adaptée à vos besoins spécifiques ? Nous proposons des programmes sur mesure pour les entreprises.</p>
              <Link href="/devis" className={styles.infoBtn} id="formations-devis-btn">Demander un devis</Link>
            </div>
            <div className={styles.infoBox}>
              <h3>Certification & Attestations</h3>
              <p>Toutes nos formations donnent lieu à une attestation reconnue. Certaines permettent d'obtenir des certifications professionnelles.</p>
              <Link href="/contact" className={styles.infoBtn} id="formations-contact-btn">Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
