import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import styles from './AProposResume.module.css';

const valeurs = ['Professionnalisme', 'Excellence', 'Innovation', 'Engagement', 'Satisfaction client'];

export default function AProposResume() {
  return (
    <section className={styles.section} id="a-propos">
      <div className="container">
        <div className={styles.inner}>
          {/* Left - Text */}
          <div className={styles.content}>
            <div className={styles.sectionLabel}>À PROPOS DE NOUS</div>
            <h2 className={styles.title}>
              Un cabinet d'excellence au service de votre développement
            </h2>
            <p className={styles.text}>
              <strong>AFRICA VISION EXPÉRIENCE CONSULTING</strong> est un cabinet spécialisé
              dans le développement des compétences, l'accompagnement professionnel et les
              solutions de ressources humaines.
            </p>
            <p className={styles.text}>
              Notre mission est d'aider les particuliers et les entreprises à atteindre
              leurs objectifs grâce à une expertise moderne, un accompagnement personnalisé
              et des formations adaptées aux réalités du marché.
            </p>
            <Link href="/a-propos" className={styles.btn} id="apropos-more-btn">
              En savoir plus
            </Link>
          </div>

          {/* Right - Image placeholder */}
          <div className={styles.imageBox}>
            <div className={styles.imagePlaceholder}>
              <Image
                src="/equipeNext.jpg"
                alt="Notre équipe AVEC Consulting"
                fill
                className={styles.teamImage}
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                unoptimized
              />
            </div>
            <div className={styles.statsCard}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Étudiants formés</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>120+</span>
                <span className={styles.statLabel}>Entreprises</span>
              </div>
            </div>
          </div>
        </div>

        {/* Valeurs */}
        <div className={styles.valeursRow}>
          {valeurs.map((v) => (
            <div key={v} className={styles.valeurItem}>
              <CheckCircle size={20} className={styles.valeurIcon} />
              <span>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
