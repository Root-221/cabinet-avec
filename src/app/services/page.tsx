import type { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, GraduationCap, Target, Users, ChevronRight, ArrowRight } from 'lucide-react';
import services from '@/data/services.json';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Nos Services',
  description: 'Découvrez nos 4 pôles d\'expertise : Consulting, Formation, Coaching et Intérim/RH. Des solutions professionnelles adaptées à vos besoins.',
};

const iconMap: Record<string, React.FC<{ size: number; color: string }>> = {
  Briefcase: ({ size, color }) => <Briefcase size={size} color={color} />,
  GraduationCap: ({ size, color }) => <GraduationCap size={size} color={color} />,
  Target: ({ size, color }) => <Target size={size} color={color} />,
  Users: ({ size, color }) => <Users size={size} color={color} />,
};

export default function ServicesPage() {
  return (
    <div>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Nos Services</span>
          </div>
          <h1 className={styles.pageTitle}>Nos Services</h1>
          <p className={styles.pageSubtitle}>
            Des solutions complètes et sur mesure pour votre développement professionnel
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((service) => {
              const IconComp = iconMap[service.icon];
              return (
                <div key={service.id} id={service.id} className={styles.serviceBlock}>
                  <div className={styles.serviceHeader} style={{ borderLeftColor: service.color }}>
                    <div className={styles.serviceIcon} style={{ backgroundColor: service.color }}>
                      {IconComp && <IconComp size={32} color="white" />}
                    </div>
                    <div>
                      <h2 className={styles.serviceTitle}>{service.title}</h2>
                      <p className={styles.serviceShortDesc}>{service.shortDesc}</p>
                    </div>
                  </div>

                  <p className={styles.serviceDesc}>{service.description}</p>

                  <div className={styles.subServicesSection}>
                    <h3 className={styles.subServicesTitle}>Nos prestations</h3>
                    <ul className={styles.subServicesList}>
                      {service.subServices.map((sub) => (
                        <li key={sub} className={styles.subServiceItem}>
                          <ChevronRight size={16} style={{ color: service.color, flexShrink: 0 }} />
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/devis"
                    className={styles.serviceBtn}
                    style={{ backgroundColor: service.color }}
                    id={`service-devis-${service.id}-btn`}
                  >
                    Demander un devis
                    <ArrowRight size={18} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2>Vous ne savez pas quel service choisir ?</h2>
            <p>Notre équipe est disponible pour vous guider vers la solution la plus adaptée à vos besoins.</p>
            <Link href="/contact" className={styles.ctaBtn} id="services-contact-btn">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
