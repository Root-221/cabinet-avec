import { Award, UserCheck, Users, Settings, TrendingUp } from 'lucide-react';
import styles from './PourquoiNous.module.css';

const raisons = [
  {
    icon: Award,
    titre: 'Expertise professionnelle',
    desc: 'Une équipe de consultants certifiés avec des années d\'expérience.',
  },
  {
    icon: UserCheck,
    titre: 'Accompagnement personnalisé',
    desc: 'Chaque client bénéficie d\'un suivi sur mesure adapté à ses besoins.',
  },
  {
    icon: Users,
    titre: 'Équipe qualifiée',
    desc: 'Nos formateurs et coaches sélectionnés pour leur excellence.',
  },
  {
    icon: Settings,
    titre: 'Solutions adaptées à vos besoins',
    desc: 'Des solutions pragmatiques aux réalités du marché africain.',
  },
  {
    icon: TrendingUp,
    titre: 'Suivi efficace et rapide',
    desc: 'Un suivi post-mission pour garantir des résultats durables.',
  },
];

export default function PourquoiNous() {
  return (
    <section className={styles.section} id="pourquoi-nous">
      <div className="container">
        <h2 className={styles.title}>POURQUOI NOUS CHOISIR ?</h2>
        <div className={styles.grid}>
          {raisons.map(({ icon: Icon, titre, desc }) => (
            <div key={titre} className={styles.item}>
              <div className={styles.iconWrap}>
                <Icon size={28} />
              </div>
              <h3 className={styles.itemTitle}>{titre}</h3>
              <p className={styles.itemDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
