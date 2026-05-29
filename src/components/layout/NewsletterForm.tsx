'use client';

import styles from './NewsletterForm.module.css';

export default function NewsletterForm() {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Votre email"
        className={styles.input}
        aria-label="Email pour la newsletter AVEC"
        required
      />
      <button type="submit" className={styles.btn}>
        S'abonner
      </button>
    </form>
  );
}
