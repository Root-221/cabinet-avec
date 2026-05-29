"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, BarChart, Users, CheckCircle, X, Eye } from 'lucide-react';
import formations from '@/data/formations.json';
import styles from './page.module.css';

const niveauColor: Record<string, string> = {
  'Débutant': '#2E7D32',
  'Intermédiaire': '#F9A825',
  'Tous niveaux': '#1565C0',
};

type Formation = typeof formations[0];

export default function FormationsClient() {
  const [selectedFormation, setSelectedFormation] = useState<Formation | null>(null);

  useEffect(() => {
    if (selectedFormation) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedFormation]);

  const closeModal = () => setSelectedFormation(null);

  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.formationsGrid}>
            {formations.map((f) => (
              <div 
                key={f.id} 
                className={styles.formationCard}
                onClick={() => setSelectedFormation(f)}
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.cardImageContainer}>
                  <img src={f.image} alt={f.titre} className={styles.cardImage} />
                  <div className={styles.cardImageOverlay}>
                    <div className={styles.cardImageOverlayIcon}>
                      <Eye size={24} />
                      <span>Voir les détails</span>
                    </div>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTop}>
                    <div className={styles.categorieBadge}>{f.categorie}</div>
                    <div
                      className={styles.niveauBadge}
                      style={{ backgroundColor: niveauColor[f.niveau] || '#1565C0' }}
                    >
                      {f.niveau}
                    </div>
                  </div>

                  <h2 className={styles.formationTitle}>{f.titre}</h2>
                  <p className={styles.formationDesc}>
                    {f.description.length > 100 ? f.description.substring(0, 100) + '...' : f.description}
                  </p>

                  <div className={styles.metaRow}>
                    <div className={styles.metaItem}>
                      <Clock size={16} className={styles.metaIcon} />
                      <span>{f.duree}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <BarChart size={16} className={styles.metaIcon} />
                      <span>{f.niveau}</span>
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <div className={styles.prixBlock}>
                      <span className={styles.prixLabel}>Inscription</span>
                      <span className={styles.prixValue}>{f.prixInscription}</span>
                    </div>
                    <div className={styles.prixDivider}></div>
                    <div className={styles.prixBlock}>
                      <span className={styles.prixLabel}>Mensuel</span>
                      <span className={styles.prixValue}>{f.prixMensuel}</span>
                    </div>
                    <button className={styles.voirPlusBtn}>Voir les détails →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedFormation && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeModal}>
              <X size={24} />
            </button>
            
            <div className={styles.modalImageContainer}>
              <img src={selectedFormation.image} alt={selectedFormation.titre} />
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalBadges}>
                <span className={styles.categorieBadge}>{selectedFormation.categorie}</span>
                <span 
                  className={styles.niveauBadge}
                  style={{ backgroundColor: niveauColor[selectedFormation.niveau] || '#1565C0' }}
                >
                  {selectedFormation.niveau}
                </span>
              </div>

              <h2 className={styles.modalTitle}>{selectedFormation.titre}</h2>
              <p className={styles.modalDesc}>{selectedFormation.description}</p>
              
              <div className={styles.modalStats}>
                <div className={styles.statItem}>
                  <Clock size={20} className={styles.statIcon} />
                  <div>
                    <strong>Durée</strong>
                    <span>{selectedFormation.duree} ({selectedFormation.heures})</span>
                  </div>
                </div>
                <div className={styles.statItem}>
                  <Users size={20} className={styles.statIcon} />
                  <div>
                    <strong>Places</strong>
                    <span>{selectedFormation.places} max</span>
                  </div>
                </div>
              </div>

              <div className={styles.objectifs}>
                <h3 className={styles.objectifsTitle}>Objectifs de la formation</h3>
                <ul className={styles.objectifsList}>
                  {selectedFormation.objectifs.map((obj) => (
                    <li key={obj} className={styles.objectifItem}>
                      <CheckCircle size={16} className={styles.checkIcon} />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

                <div className={styles.modalFooter}>
                  <div className={styles.prochaine}>
                    <span className={styles.prochaineLabel}>Prochaine session</span>
                    <span className={styles.prochaineDate}>{selectedFormation.prochaineDemarrage}</span>
                  </div>
                  <div className={styles.modalPrixRow}>
                    <div className={styles.modalPrixItem}>
                      <span className={styles.modalPrixLabel}>Frais d'inscription</span>
                      <span className={styles.modalPrixValue}>{selectedFormation.prixInscription}</span>
                    </div>
                    <div className={styles.modalPrixItem}>
                      <span className={styles.modalPrixLabel}>Frais mensuel</span>
                      <span className={styles.modalPrixValue}>{selectedFormation.prixMensuel}</span>
                    </div>
                  </div>
                  <Link
                    href="/devis"
                    className={styles.inscriptionBtnModal}
                    onClick={closeModal}
                  >
                    S'inscrire maintenant
                  </Link>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
