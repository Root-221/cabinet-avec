import Link from 'next/link';
import styles from './CTAFinal.module.css';

export default function CTAFinal() {
  return (
    <section className={styles.section} id="cta">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <h2 className={styles.title}>PRÊT À TRANSFORMER VOTRE AVENIR ?</h2>
            <p className={styles.subtitle}>
              Contactez-nous aujourd'hui pour discuter de vos besoins.
            </p>
          </div>
          <Link href="/contact" className={styles.btn} id="cta-contact-btn">
            NOUS CONTACTER
          </Link>
        </div>
      </div>
    </section>
  );
}
