'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Send, CheckCircle, FileText } from 'lucide-react';
import styles from './page.module.css';

const services = [
  'Consulting',
  'Formation professionnelle',
  'Coaching professionnel',
  'Coaching en leadership',
  'Prise de parole en public',
  'Préparation aux entretiens',
  'Intérim / Mise à disposition',
  'Recrutement',
  'Gestion RH externalisée',
  'Autre',
];

type FormData = {
  nom: string;
  email: string;
  telephone: string;
  entreprise: string;
  service: string;
  description: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function DevisPage() {
  const [form, setForm] = useState<FormData>({
    nom: '', email: '', telephone: '', entreprise: '', service: '', description: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.nom.trim()) newErrors.nom = 'Le nom est requis';
    if (!form.email.trim()) newErrors.email = 'L\'email est requis';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Email invalide';
    if (!form.telephone.trim()) newErrors.telephone = 'Le téléphone est requis';
    if (!form.service) newErrors.service = 'Veuillez sélectionner un service';
    if (!form.description.trim()) newErrors.description = 'La description est requise';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  return (
    <div>
      <div className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Demande de devis</span>
          </div>
          <h1 className={styles.pageTitle}>Demande de Devis</h1>
          <p className={styles.pageSubtitle}>
            Décrivez votre besoin et nous vous recontactons sous 24h
          </p>
        </div>
      </div>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.devisLayout}>
            {/* Left info */}
            <div className={styles.infoPanel}>
              <div className={styles.infoPanelHeader}>
                <div className={styles.infoPanelIcon}>
                  <FileText size={32} />
                </div>
                <h2>Pourquoi demander un devis ?</h2>
              </div>
              <p className={styles.infoPanelDesc}>
                Un devis personnalisé vous permet d'obtenir une proposition adaptée exactement
                à vos besoins et à votre budget. Toutes nos offres sont entièrement sur mesure.
              </p>

              <div className={styles.processSteps}>
                {[
                  { num: '01', titre: 'Remplissez le formulaire', desc: 'Décrivez votre besoin en détail.' },
                  { num: '02', titre: 'Analyse de votre demande', desc: 'Nous étudions votre demande sous 24h.' },
                  { num: '03', titre: 'Proposition sur mesure', desc: 'Nous vous envoyons un devis détaillé.' },
                  { num: '04', titre: 'Démarrage de la mission', desc: 'Validation et lancement de la collaboration.' },
                ].map(({ num, titre, desc }) => (
                  <div key={num} className={styles.processStep}>
                    <div className={styles.stepNum}>{num}</div>
                    <div>
                      <div className={styles.stepTitre}>{titre}</div>
                      <div className={styles.stepDesc}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.contactShortcut}>
                <p>Besoin d'une réponse immédiate ?</p>
                <a href="tel:+221784014126" className={styles.callBtn} id="devis-call-btn">
                  Appelez-nous : +221 78 401 41 26
                </a>
              </div>
            </div>

            {/* Form */}
            <div className={styles.formPanel}>
              {submitted ? (
                <div className={styles.successMessage}>
                  <CheckCircle size={64} className={styles.successIcon} />
                  <h3>Demande envoyée avec succès !</h3>
                  <p>
                    Merci <strong>{form.nom}</strong> ! Nous avons bien reçu votre demande de devis
                    pour <strong>{form.service}</strong>. Notre équipe vous contactera dans les 24 heures.
                  </p>
                  <div className={styles.successBtns}>
                    <Link href="/" className={styles.homeBtn}>Retour à l'accueil</Link>
                    <button className={styles.newBtn} onClick={() => { setSubmitted(false); setForm({ nom: '', email: '', telephone: '', entreprise: '', service: '', description: '' }); }}>
                      Nouvelle demande
                    </button>
                  </div>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <h2 className={styles.formTitle}>Informations sur votre demande</h2>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="devis-nom" className={styles.label}>Nom complet *</label>
                      <input id="devis-nom" type="text" className={`${styles.input} ${errors.nom ? styles.inputError : ''}`}
                        placeholder="Prénom Nom" value={form.nom}
                        onChange={(e) => { setForm({ ...form, nom: e.target.value }); setErrors({ ...errors, nom: '' }); }} />
                      {errors.nom && <span className={styles.error}>{errors.nom}</span>}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="devis-entreprise" className={styles.label}>Entreprise</label>
                      <input id="devis-entreprise" type="text" className={styles.input}
                        placeholder="Nom de votre entreprise" value={form.entreprise}
                        onChange={(e) => setForm({ ...form, entreprise: e.target.value })} />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="devis-email" className={styles.label}>Email *</label>
                      <input id="devis-email" type="email" className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                        placeholder="votre@email.com" value={form.email}
                        onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: '' }); }} />
                      {errors.email && <span className={styles.error}>{errors.email}</span>}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="devis-telephone" className={styles.label}>Téléphone *</label>
                      <input id="devis-telephone" type="tel" className={`${styles.input} ${errors.telephone ? styles.inputError : ''}`}
                        placeholder="+221 XX XXX XX XX" value={form.telephone}
                        onChange={(e) => { setForm({ ...form, telephone: e.target.value }); setErrors({ ...errors, telephone: '' }); }} />
                      {errors.telephone && <span className={styles.error}>{errors.telephone}</span>}
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="devis-service" className={styles.label}>Service demandé *</label>
                    <select id="devis-service" className={`${styles.input} ${errors.service ? styles.inputError : ''}`}
                      value={form.service}
                      onChange={(e) => { setForm({ ...form, service: e.target.value }); setErrors({ ...errors, service: '' }); }}>
                      <option value="">-- Sélectionnez un service --</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <span className={styles.error}>{errors.service}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="devis-description" className={styles.label}>Description de votre besoin *</label>
                    <textarea id="devis-description" className={`${styles.textarea} ${errors.description ? styles.inputError : ''}`}
                      placeholder="Décrivez en détail votre besoin, vos objectifs, votre calendrier..."
                      rows={6} value={form.description}
                      onChange={(e) => { setForm({ ...form, description: e.target.value }); setErrors({ ...errors, description: '' }); }} />
                    {errors.description && <span className={styles.error}>{errors.description}</span>}
                  </div>

                  <button type="submit" className={styles.submitBtn} id="devis-submit-btn">
                    <Send size={18} />
                    Envoyer ma demande de devis
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
