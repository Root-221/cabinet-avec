import { Star, Quote } from 'lucide-react';
import styles from './Temoignages.module.css';

const temoignages = [
  {
    id: 1,
    nom: 'Aminata S.',
    poste: 'Étudiante en comptabilité',
    texte: 'Une formation très pratique et professionnelle. Je recommande vivement !',
    etoiles: 5,
  },
  {
    id: 2,
    nom: 'Cheikh T.',
    poste: 'Directeur d\'entreprise',
    entreprise: 'SenTech SARL',
    texte: 'Excellent accompagnement pour notre entreprise. Équipe compétente et disponible.',
    etoiles: 5,
  },
  {
    id: 3,
    nom: 'Fatou K.',
    poste: 'Responsable RH',
    entreprise: 'DakarPlus Group',
    texte: 'Service rapide et équipe sérieuse. Très satisfaite de l\'intérim proposé.',
    etoiles: 5,
  },
];

export default function Temoignages() {
  return (
    <section className={styles.section} id="temoignages">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.sectionLabel}>TÉMOIGNAGES</div>
          <h2 className={styles.title}>Ce que disent nos clients</h2>
        </div>

        <div className={styles.grid}>
          {temoignages.map(({ id, nom, poste, entreprise, texte, etoiles }) => (
            <div key={id} className={styles.card}>
              <div className={styles.quoteIcon}>
                <Quote size={28} />
              </div>
              <p className={styles.texte}>{texte}</p>
              <div className={styles.stars}>
                {Array.from({ length: etoiles }).map((_, i) => (
                  <Star key={i} size={16} className={styles.star} />
                ))}
              </div>
              <div className={styles.author}>
                <div className={styles.authorAvatar}>
                  {nom.charAt(0)}
                </div>
                <div>
                  <div className={styles.authorName}>{nom}</div>
                  <div className={styles.authorPoste}>
                    {poste}
                    {entreprise && <span>, {entreprise}</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
