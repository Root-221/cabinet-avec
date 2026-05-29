'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, ZoomIn, GraduationCap, Briefcase, Target, Users, Calendar, Star } from 'lucide-react';
import galerieData from '@/data/galerie.json';
import styles from './page.module.css';

const categories = ['Tous', 'Formation', 'Coaching', 'Consulting', 'Intérim / RH', 'Événement'];

const iconMap: Record<string, React.ReactNode> = {
  'Formation':   <GraduationCap size={36} />,
  'Coaching':    <Target size={36} />,
  'Consulting':  <Briefcase size={36} />,
  'Intérim / RH': <Users size={36} />,
  'Événement':   <Star size={36} />,
};

type GalerieItem = typeof galerieData[0];

export default function GalerieClient() {
  const [activeCategorie, setActiveCategorie] = useState('Tous');
  const [lightboxItem, setLightboxItem]       = useState<GalerieItem | null>(null);

  const filtered =
    activeCategorie === 'Tous'
      ? galerieData
      : galerieData.filter((item) => item.categorie === activeCategorie);

  return (
    <>
      {/* ── Filter Bar ── */}
      <section className={styles.filtersSection}>
        <div className="container">
          <div className={styles.filterBar}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategorie === cat ? styles.filterActive : ''}`}
                onClick={() => setActiveCategorie(cat)}
                id={`galerie-filter-${cat.toLowerCase().replace(/[\s/]+/g, '-')}`}
              >
                {cat}
                {cat !== 'Tous' && (
                  <span className={styles.filterCount}>
                    {galerieData.filter((i) => i.categorie === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className={styles.galerieSection}>
        <div className="container">
          <div className={styles.statsBar}>
            <span className={styles.statsText}>
              <strong>{filtered.length}</strong> photo{filtered.length > 1 ? 's' : ''}
              {activeCategorie !== 'Tous' && <> dans <em>{activeCategorie}</em></>}
            </span>
          </div>

          <div className={styles.galerieGrid}>
            {filtered.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.galerieCard} ${index === 0 && activeCategorie === 'Tous' ? styles.featured : ''}`}
                onClick={() => setLightboxItem(item)}
                onKeyDown={(e) => e.key === 'Enter' && setLightboxItem(item)}
                role="button"
                tabIndex={0}
                aria-label={`Voir ${item.titre}`}
                id={`galerie-item-${item.id}`}
              >
                {/* Media */}
                <div className={styles.cardMedia} style={{ backgroundColor: item.couleur }}>
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.titre}
                      fill
                      unoptimized
                      className={styles.cardImg}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className={styles.cardVisual}>
                      <div className={styles.cardPattern}>
                        {[...Array(9)].map((_, i) => <div key={i} className={styles.patternDot} />)}
                      </div>
                      <div className={styles.cardIcon}>
                        {iconMap[item.categorie] ?? <Star size={36} />}
                      </div>
                    </div>
                  )}
                  <div className={styles.cardOverlay}>
                    <ZoomIn size={28} className={styles.zoomIcon} />
                  </div>
                  <div className={styles.cardBadge}>{item.categorie}</div>
                </div>

                {/* Info */}
                <div className={styles.cardInfo}>
                  <h3 className={styles.cardTitle}>{item.titre}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                  <div className={styles.cardMeta}>
                    <Calendar size={13} />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2>Participez à nos prochains événements</h2>
            <p>Rejoignez notre communauté et prenez part à nos formations, workshops et séminaires.</p>
            <div className={styles.ctaBtns}>
              <Link href="/formations" className={styles.ctaBtnPrimary} id="galerie-formations-btn">
                Voir nos formations
              </Link>
              <Link href="/contact" className={styles.ctaBtnOutline} id="galerie-contact-btn">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxItem && (
        <div
          className={styles.lightbox}
          onClick={() => setLightboxItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Agrandissement photo"
        >
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.lightboxClose}
              onClick={() => setLightboxItem(null)}
              aria-label="Fermer"
            >
              <X size={24} />
            </button>

            <div className={styles.lightboxMedia} style={{ backgroundColor: lightboxItem.couleur }}>
              {lightboxItem.image ? (
                <Image
                  src={lightboxItem.image}
                  alt={lightboxItem.titre}
                  fill
                  unoptimized
                  className={styles.lightboxImg}
                  sizes="80vw"
                />
              ) : (
                <div className={styles.lightboxVisual}>
                  <div className={styles.lightboxIcon}>
                    {iconMap[lightboxItem.categorie] ?? <Star size={64} />}
                  </div>
                </div>
              )}
            </div>

            <div className={styles.lightboxInfo}>
              <span className={styles.lightboxBadge}>{lightboxItem.categorie}</span>
              <h2 className={styles.lightboxTitle}>{lightboxItem.titre}</h2>
              <p className={styles.lightboxDesc}>{lightboxItem.description}</p>
              <div className={styles.lightboxMeta}>
                <Calendar size={15} />
                <span>{lightboxItem.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
