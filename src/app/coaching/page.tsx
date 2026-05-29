import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Clock, Users } from 'lucide-react';
import coaching from '@/data/coaching.json';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Coaching',
  description: 'Nos programmes de coaching professionnel, leadership, prise de parole et préparation aux entretiens pour développer votre potentiel.',
};

export default function CoachingPage() {
  return (
    <div>
      <div className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Coaching</span>
          </div>
          <h1 className={styles.pageTitle}>Coaching Professionnel</h1>
          <p className={styles.pageSubtitle}>
            Révélez votre potentiel avec l'accompagnement de nos coaches certifiés
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.introBox}>
            <h2 className={styles.introTitle}>Pourquoi le coaching ?</h2>
            <p className={styles.introText}>
              Le coaching professionnel est un accompagnement personnalisé qui permet à chaque
              individu de développer ses compétences, d'identifier ses forces et de surmonter
              les obstacles qui freinent son développement. Nos coaches certifiés utilisent des
              méthodes éprouvées pour vous aider à atteindre vos objectifs.
            </p>
          </div>
        </div>
      </section>

      {/* Coaching Programs */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.coachingGrid}>
            {coaching.map((prog) => (
              <div key={prog.id} className={styles.coachingCard}>
                <div className={styles.cardNumber}>{String(prog.id).padStart(2, '0')}</div>
                <h2 className={styles.coachingTitle}>{prog.titre}</h2>
                <p className={styles.coachingDesc}>{prog.description}</p>

                <div className={styles.coachingMeta}>
                  <div className={styles.metaItem}>
                    <Clock size={16} />
                    <span>{prog.duree} — {prog.sessions}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Users size={16} />
                    <span>{prog.format}</span>
                  </div>
                </div>

                <div className={styles.benefices}>
                  <h3 className={styles.beneficesTitle}>Ce que vous allez développer</h3>
                  <ul className={styles.beneficesList}>
                    {prog.benefices.map((b) => (
                      <li key={b} className={styles.beneficeItem}>
                        <CheckCircle size={15} className={styles.checkIcon} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/devis"
                  className={styles.coachingBtn}
                  id={`coaching-${prog.id}-btn`}
                >
                  Commencer ce coaching
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>NOTRE APPROCHE</div>
            <h2 className={styles.sectionTitle}>Comment ça fonctionne ?</h2>
          </div>
          <div className={styles.processGrid}>
            {[
              { num: '01', titre: 'Diagnostic initial', desc: 'Évaluation de votre situation actuelle, de vos objectifs et de vos besoins.' },
              { num: '02', titre: 'Plan personnalisé', desc: 'Élaboration d\'un programme de coaching sur mesure adapté à votre profil.' },
              { num: '03', titre: 'Séances de coaching', desc: 'Sessions régulières en face-à-face ou en visioconférence avec votre coach.' },
              { num: '04', titre: 'Suivi & résultats', desc: 'Évaluation des progrès et ajustement du plan pour maximiser les résultats.' },
            ].map(({ num, titre, desc }) => (
              <div key={num} className={styles.processStep}>
                <div className={styles.processNum}>{num}</div>
                <h3 className={styles.processTitre}>{titre}</h3>
                <p className={styles.processDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
