import type { Metadata } from 'next';
import Link from 'next/link';
import { Target, Eye, Heart, Award, Building2, Users, BookOpen } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'À Propos',
  description:
    'Découvrez Africa Vision Expérience Consulting (AVEC) : notre mission, nos valeurs et notre histoire au service du développement professionnel au Sénégal.',
};

const valeurs = [
  { icon: Award, titre: 'Professionnalisme', desc: 'Nous maintenons les plus hauts standards de qualité dans toutes nos interventions, assurant un service irréprochable.' },
  { icon: Target, titre: 'Excellence', desc: 'Nous visons constamment l\'excellence dans chaque accompagnement, chaque formation et chaque conseil délivré.' },
  { icon: BookOpen, titre: 'Innovation', desc: 'Nous adoptons des méthodes modernes et innovantes, adaptées aux réalités du marché africain en constante évolution.' },
  { icon: Heart, titre: 'Engagement', desc: 'Pleinement investis dans la réussite de nos clients, nous nous engageons à obtenir des résultats concrets et mesurables.' },
  { icon: Users, titre: 'Satisfaction', desc: 'Votre satisfaction est notre priorité absolue. Chaque décision que nous prenons place votre réussite au centre.' },
];

const equipe = [
  { nom: 'Moussa Diop', poste: 'Directeur Général', image: 'https://i.pravatar.cc/150?img=11' },
  { nom: 'Fatima Sarr', poste: 'Directrice Formation', image: 'https://i.pravatar.cc/150?img=5' },
  { nom: 'Ibrahima Fall', poste: 'Responsable Consulting', image: 'https://i.pravatar.cc/150?img=12' },
  { nom: 'Aissatou Kane', poste: 'Responsable RH & Intérim', image: 'https://i.pravatar.cc/150?img=9' },
];

export default function AProposPage() {
  return (
    <div>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>À Propos</span>
          </div>
          <h1 className={styles.pageTitle}>À Propos de Nous</h1>
          <p className={styles.pageSubtitle}>
            Votre partenaire de confiance pour le développement professionnel au Sénégal
          </p>
        </div>
      </div>

      {/* Présentation */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.presentationGrid}>
            <div>
              <div className={styles.sectionLabel}>QUI SOMMES-NOUS ?</div>
              <h2 className={styles.sectionTitle}>
                Africa Vision Expérience Consulting
              </h2>
              <p className={styles.text}>
                <strong>AFRICA VISION EXPÉRIENCE CONSULTING (AVEC)</strong> est un cabinet spécialisé
                dans le développement des compétences, l'accompagnement professionnel et les solutions
                de ressources humaines, implanté au cœur de Dakar, Sénégal.
              </p>
              <p className={styles.text}>
                Depuis plus de <strong>10 ans</strong>, nous accompagnons les particuliers, les
                professionnels et les entreprises dans leur quête d'excellence. Notre approche
                combine expertise internationale et connaissance profonde des réalités locales.
              </p>
              <p className={styles.text}>
                Notre mission est simple : <em>Former, Accompagner, Révéler les talents</em>.
                Nous croyons fermement que chaque individu possède un potentiel unique qui,
                bien développé, peut transformer des vies et des organisations.
              </p>
            </div>
            <div className={styles.infoCard}>
              <h3 className={styles.infoCardTitle}>Informations légales</h3>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Dénomination</span>
                <span className={styles.infoValue}>Africa Vision Expérience Consulting</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Sigle</span>
                <span className={styles.infoValue}>AVEC</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>NINEA</span>
                <span className={styles.infoValue}>0123456789</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>RCCM</span>
                <span className={styles.infoValue}>SN-DKR-2015-B-12345</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Siège social</span>
                <span className={styles.infoValue}>Dakar, Sénégal</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Statut juridique</span>
                <span className={styles.infoValue}>SARL</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Année de création</span>
                <span className={styles.infoValue}>2014</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>
                <Target size={32} />
              </div>
              <h3>Notre Mission</h3>
              <p>
                Accompagner les individus et les entreprises dans le développement de leurs
                compétences, l'optimisation de leurs performances et l'atteinte de leurs
                objectifs stratégiques à travers des solutions innovantes et personnalisées.
              </p>
            </div>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>
                <Eye size={32} />
              </div>
              <h3>Notre Vision</h3>
              <p>
                Devenir le cabinet de référence en Afrique de l'Ouest pour la formation
                professionnelle, le consulting et le développement du capital humain, en
                proposant des solutions adaptées aux défis du XXIe siècle.
              </p>
            </div>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>
                <Heart size={32} />
              </div>
              <h3>Nos Engagements</h3>
              <p>
                Qualité irréprochable, respect des délais, confidentialité totale et
                résultats mesurables. Chaque intervention est conduite avec la plus haute
                exigence professionnelle et un véritable sens de l'éthique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>NOS VALEURS</div>
            <h2 className={styles.sectionTitle}>Ce qui nous définit</h2>
          </div>
          <div className={styles.valeursGrid}>
            {valeurs.map(({ icon: Icon, titre, desc }) => (
              <div key={titre} className={styles.valeurCard}>
                <div className={styles.valeurIcon}>
                  <Icon size={24} />
                </div>
                <h3 className={styles.valeurTitre}>{titre}</h3>
                <p className={styles.valeurDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.sectionStats}>
        <div className="container">
          <div className={styles.statsGrid}>
            {[
              { icon: Users, val: '500+', label: 'Étudiants formés' },
              { icon: Building2, val: '120+', label: 'Entreprises accompagnées' },
              { icon: Award, val: '10+', label: 'Ans d\'expérience' },
              { icon: BookOpen, val: '50+', label: 'Formateurs certifiés' },
            ].map(({ icon: Icon, val, label }) => (
              <div key={label} className={styles.statItem}>
                <Icon size={36} className={styles.statIcon} />
                <div className={styles.statVal}>{val}</div>
                <div className={styles.statLbl}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>NOTRE ÉQUIPE</div>
            <h2 className={styles.sectionTitle}>Des experts à votre service</h2>
          </div>
          <div className={styles.equipeGrid}>
            {equipe.map(({ nom, poste, image }) => (
              <div key={nom} className={styles.teamCard}>
                <div className={styles.teamAvatar} style={{ padding: 0, overflow: 'hidden' }}>
                  <img src={image} alt={`Photo de ${nom}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 className={styles.teamName}>{nom}</h3>
                <p className={styles.teamPoste}>{poste}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
