import type { Metadata } from 'next';
import Link from 'next/link';
import GalerieClient from './GalerieClient';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Galerie — AVEC Consulting',
  description:
    'Découvrez en images nos formations, ateliers de coaching, missions de consulting et événements. La galerie d\'Africa Vision Expérience Consulting.',
};

export default function GaleriePage() {
  return (
    <div>
      {/* ── Page Header (Server) ── */}
      <div className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Galerie</span>
          </div>
          <h1 className={styles.pageTitle}>Notre Galerie</h1>
          <p className={styles.pageSubtitle}>
            Découvrez nos formations, coaching, événements et moments forts en images
          </p>
        </div>
      </div>

      {/* ── Interactive part (Client) ── */}
      <GalerieClient />
    </div>
  );
}
