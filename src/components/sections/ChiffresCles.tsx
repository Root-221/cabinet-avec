import { GraduationCap, Building2, Calendar, Award } from 'lucide-react';
import styles from './ChiffresCles.module.css';

const stats = [
  { valeur: '500+', label: 'Étudiants formés', icon: GraduationCap },
  { valeur: '120+', label: 'Entreprises accompagnées', icon: Building2 },
  { valeur: '10+', label: 'Ans d\'expérience', icon: Calendar },
  { valeur: '50+', label: 'Formateurs certifiés', icon: Award },
];

export default function ChiffresCles() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map(({ valeur, label, icon: Icon }) => (
            <div key={label} className={styles.statCard}>
              <div className={styles.iconWrap}>
                <Icon size={32} />
              </div>
              <div className={styles.statNumber}>{valeur}</div>
              <div className={styles.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
