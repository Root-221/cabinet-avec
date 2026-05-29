import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Clock, Briefcase, Filter } from 'lucide-react';
import interimData from '@/data/interim.json';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Intérim & RH',
  description: 'Profils qualifiés disponibles pour vos missions d\'intérim. Administratifs, caissiers, commerciaux, techniciens — recrutement et placement professionnel.',
};

const categories = ['Tous', 'Administratif', 'Commerce', 'Commercial', 'Finance', 'Technique', 'Sécurité'];

export default function InterimPage() {
  return (
    <div>
      <div className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Intérim & RH</span>
          </div>
          <h1 className={styles.pageTitle}>Intérim & Ressources Humaines</h1>
          <p className={styles.pageSubtitle}>
            Des profils qualifiés prêts à intégrer vos équipes rapidement
          </p>
        </div>
      </div>

      {/* Services RH */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>NOS SERVICES RH</div>
            <h2 className={styles.sectionTitle}>Solutions complètes en ressources humaines</h2>
          </div>
          <div className={styles.rhServicesGrid}>
            {[
              { titre: 'Mise à disposition', desc: 'Profils qualifiés disponibles rapidement pour vos missions courtes ou longues durées.' },
              { titre: 'Recrutement', desc: 'Sélection rigoureuse des candidats selon vos critères pour vos postes permanents.' },
              { titre: 'Placement', desc: 'Mise en relation entre candidats qualifiés et entreprises à la recherche de talents.' },
              { titre: 'Gestion RH externalisée', desc: 'Externalisez votre gestion du personnel et concentrez-vous sur votre cœur de métier.' },
            ].map(({ titre, desc }) => (
              <div key={titre} className={styles.rhCard}>
                <div className={styles.rhCardIcon}>
                  <Briefcase size={24} />
                </div>
                <h3 className={styles.rhCardTitle}>{titre}</h3>
                <p className={styles.rhCardDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profiles */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.profilesHeader}>
            <div>
              <div className={styles.sectionLabel}>PROFILS DISPONIBLES</div>
              <h2 className={styles.sectionTitle}>Candidats qualifiés prêts à l'emploi</h2>
            </div>
            <div className={styles.filters}>
              <Filter size={16} />
              <span>Filtrer par catégorie :</span>
              <div className={styles.filterBtns}>
                {categories.map((cat) => (
                  <span key={cat} className={`${styles.filterBtn} ${cat === 'Tous' ? styles.active : ''}`}>
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.profilesGrid}>
            {interimData.map((profil) => (
              <div key={profil.id} className={styles.profileCard}>
                <div className={styles.profileTop}>
                  <div className={styles.profileAvatar} style={{ padding: 0, overflow: 'hidden' }}>
                    <img src={profil.image} alt={profil.nom} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <h3 className={styles.profileName}>{profil.nom}</h3>
                    <p className={styles.profilePoste}>{profil.poste}</p>
                    <span className={styles.profileCategorie}>{profil.categorie}</span>
                  </div>
                </div>

                <div className={styles.profileMeta}>
                  <div className={styles.profileMetaItem}>
                    <Clock size={14} />
                    <span>{profil.experience} d'expérience</span>
                  </div>
                  <div className={styles.profileMetaItem}>
                    <Briefcase size={14} />
                    <span>{profil.contrat}</span>
                  </div>
                </div>

                <div className={styles.competences}>
                  {profil.competences.map((comp) => (
                    <span key={comp} className={styles.competenceBadge}>{comp}</span>
                  ))}
                </div>

                <div className={styles.profileFooter}>
                  <div className={`${styles.dispoLabel} ${profil.disponibilite === 'Immédiate' ? styles.dispoDispo : styles.dispoDelai}`}>
                    {profil.disponibilite === 'Immédiate' ? '● Disponible' : `⏱ ${profil.disponibilite}`}
                  </div>
                  <Link href="/contact" className={styles.contactBtn} id={`profil-${profil.id}-contact-btn`}>
                    Contacter
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.moreProfilesCta}>
            <p>Vous cherchez un profil spécifique ? Contactez-nous pour accéder à notre base complète de candidats.</p>
            <Link href="/contact" className={styles.moreBtn} id="interim-more-btn">
              Voir plus de profils
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
