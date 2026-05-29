'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import styles from './page.module.css';

const phones = [
  '+221 78 401 41 26',
  '+221 76 517 10 10',
  '+221 70 625 59 59',
];

type FormData = {
  nom: string;
  email: string;
  sujet: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ nom: '', email: '', sujet: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.nom.trim()) newErrors.nom = 'Le nom est requis';
    if (!form.email.trim()) newErrors.email = 'L\'email est requis';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Email invalide';
    if (!form.message.trim()) newErrors.message = 'Le message est requis';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <div className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <h1 className={styles.pageTitle}>Contactez-Nous</h1>
          <p className={styles.pageSubtitle}>
            Notre équipe est disponible pour répondre à toutes vos questions
          </p>
        </div>
      </div>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Info Column */}
            <div className={styles.infoColumn}>
              <h2 className={styles.infoTitle}>Nos coordonnées</h2>
              <p className={styles.infoDesc}>
                N'hésitez pas à nous contacter par téléphone, email ou en remplissant
                le formulaire. Nous répondons dans les plus brefs délais.
              </p>

              <div className={styles.contactItems}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div className={styles.contactLabel}>Adresse</div>
                    <div className={styles.contactValue}>Dakar, Sénégal</div>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <div className={styles.contactLabel}>Téléphones</div>
                    {phones.map((phone) => (
                      <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className={styles.contactValue}>
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className={styles.contactLabel}>Email</div>
                    <a href="mailto:contact@avconsulting.sn" className={styles.contactValue}>
                      contact@avconsulting.sn
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <div className={styles.contactLabel}>Horaires</div>
                    <div className={styles.contactValue}>Lun – Ven : 8h – 18h</div>
                    <div className={styles.contactValue}>Sam : 9h – 13h</div>
                  </div>
                </div>
              </div>

              {/* WhatsApp direct */}
              <a
                href="https://wa.me/221784014126"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
                id="contact-whatsapp-btn"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contacter via WhatsApp
              </a>
            </div>

            {/* Form Column */}
            <div className={styles.formColumn}>
              {submitted ? (
                <div className={styles.successMessage}>
                  <CheckCircle size={56} className={styles.successIcon} />
                  <h3>Message envoyé !</h3>
                  <p>Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.</p>
                  <button className={styles.newMessageBtn} onClick={() => { setSubmitted(false); setForm({ nom: '', email: '', sujet: '', message: '' }); }}>
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <h2 className={styles.formTitle}>Envoyez-nous un message</h2>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="contact-nom" className={styles.label}>Nom complet *</label>
                      <input
                        id="contact-nom"
                        type="text"
                        className={`${styles.input} ${errors.nom ? styles.inputError : ''}`}
                        placeholder="Votre nom"
                        value={form.nom}
                        onChange={(e) => { setForm({ ...form, nom: e.target.value }); setErrors({ ...errors, nom: '' }); }}
                      />
                      {errors.nom && <span className={styles.error}>{errors.nom}</span>}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="contact-email" className={styles.label}>Email *</label>
                      <input
                        id="contact-email"
                        type="email"
                        className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                        placeholder="votre@email.com"
                        value={form.email}
                        onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: '' }); }}
                      />
                      {errors.email && <span className={styles.error}>{errors.email}</span>}
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="contact-sujet" className={styles.label}>Sujet</label>
                    <input
                      id="contact-sujet"
                      type="text"
                      className={styles.input}
                      placeholder="Objet de votre message"
                      value={form.sujet}
                      onChange={(e) => setForm({ ...form, sujet: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="contact-message" className={styles.label}>Message *</label>
                    <textarea
                      id="contact-message"
                      className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                      placeholder="Décrivez votre demande en détail..."
                      rows={6}
                      value={form.message}
                      onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }); }}
                    />
                    {errors.message && <span className={styles.error}>{errors.message}</span>}
                  </div>

                  <button type="submit" className={styles.submitBtn} id="contact-submit-btn">
                    <Send size={18} />
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
