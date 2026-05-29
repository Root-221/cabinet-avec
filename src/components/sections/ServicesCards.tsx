import Link from 'next/link';
import { Briefcase, GraduationCap, Target, Users, ChevronRight } from 'lucide-react';
import styles from './ServicesCards.module.css';

const services = [
  {
    id: 'consulting',
    icon: Briefcase,
    title: 'CONSULTING',
    color: '#1565C0',
    items: [
      'Gestion administrative',
      'Conseils en entreprise',
      'Stratégie de développement',
      'Gestion des ressources humaines',
      'Assistance organisationnelle',
    ],
  },
  {
    id: 'formation',
    icon: GraduationCap,
    title: 'FORMATION',
    color: '#F9A825',
    items: [
      'Formations professionnelles adaptées',
      'Formateurs qualifiés',
      'Attestations et certificats',
      'Formation pratique',
      'Suivi personnalisé',
    ],
  },
  {
    id: 'coaching',
    icon: Target,
    title: 'COACHING',
    color: '#C62828',
    items: [
      'Coaching professionnel',
      'Coaching en leadership',
      'Préparation aux entretiens',
      'Développement personnel',
      'Prise de parole en public',
    ],
  },
  {
    id: 'interim',
    icon: Users,
    title: 'INTÉRIM',
    color: '#2E7D32',
    items: [
      'Mise à disposition de profils',
      'Recrutement',
      'Placement',
      'Gestion du personnel',
      'Accompagnement RH',
    ],
  },
];

export default function ServicesCards() {
  return (
    <section className={styles.section} id="services">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.sectionLabel}>NOS ACTIVITÉS</div>
          <h2 className={styles.title}>Des solutions complètes pour votre succès</h2>
        </div>

        <div className={styles.grid}>
          {services.map(({ id, icon: Icon, title, color, items }) => (
            <div key={id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrap} style={{ backgroundColor: color }}>
                  <Icon size={26} color="white" />
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
              </div>

              <ul className={styles.itemsList}>
                {items.map((item) => (
                  <li key={item} className={styles.listItem}>
                    <ChevronRight size={14} className={styles.chevron} />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={`/services#${id}`}
                className={styles.cardBtn}
                style={{
                  borderColor: color,
                  '--service-color': color,
                } as React.CSSProperties}
                id={`service-card-${id}-btn`}
              >
                EN SAVOIR PLUS
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
