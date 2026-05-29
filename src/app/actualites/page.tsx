import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, ArrowRight, Calendar } from 'lucide-react';
import blog from '@/data/blog.json';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Actualités & Blog',
  description: 'Articles et conseils sur la formation professionnelle, l\'emploi, les RH et l\'entrepreneuriat en Afrique.',
};

const categorieColors: Record<string, string> = {
  'Formation': '#1565C0',
  'Carrière': '#2E7D32',
  'RH': '#C62828',
  'Coaching': '#F9A825',
  'Entrepreneuriat': '#0D2137',
};

export default function ActualitesPage() {
  const featured = blog[0];
  const rest = blog.slice(1);

  return (
    <div>
      <div className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Actualités</span>
          </div>
          <h1 className={styles.pageTitle}>Actualités & Blog</h1>
          <p className={styles.pageSubtitle}>
            Conseils, actualités et analyses du monde professionnel africain
          </p>
        </div>
      </div>

      <section className={styles.section}>
        <div className="container">
          {/* Featured Article */}
          <div className={styles.featuredCard}>
            <div className={styles.featuredContent}>
              <div className={styles.featuredMeta}>
                <span className={styles.categorieBadge} style={{ backgroundColor: categorieColors[featured.categorie] || '#1565C0' }}>
                  {featured.categorie}
                </span>
                <div className={styles.metaInfo}>
                  <Calendar size={14} />
                  <span>{featured.date}</span>
                  <span>·</span>
                  <Clock size={14} />
                  <span>{featured.lecture} de lecture</span>
                </div>
              </div>
              <h2 className={styles.featuredTitle}>{featured.titre}</h2>
              <p className={styles.featuredResume}>{featured.resume}</p>
              <div className={styles.featuredAuthor}>
                <div className={styles.authorAvatar}>{featured.auteur.charAt(0)}</div>
                <span>{featured.auteur}</span>
              </div>
              <Link href={`/actualites/${featured.slug}`} className={styles.readMoreBtn} id={`blog-${featured.id}-btn`}>
                Lire l'article
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className={styles.featuredImageContainer}>
              <img src={featured.image} alt={featured.titre} className={styles.featuredImageElement} />
            </div>
          </div>

          {/* Other Articles */}
          <div className={styles.articlesGrid}>
            {rest.map((article) => (
              <div key={article.id} className={styles.articleCard}>
                <div className={styles.articleImageContainer}>
                  <img src={article.image} alt={article.titre} className={styles.articleImageElement} />
                  <div className={styles.articleCategoryBadge} style={{ backgroundColor: categorieColors[article.categorie] || '#1565C0' }}>
                    {article.categorie}
                  </div>
                </div>
                <div className={styles.articleContent}>
                  <div className={styles.articleMeta}>
                    <Clock size={13} />
                    <span>{article.lecture} de lecture</span>
                    <span>·</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className={styles.articleTitle}>{article.titre}</h3>
                  <p className={styles.articleResume}>{article.resume}</p>
                  <div className={styles.articleFooter}>
                    <div className={styles.articleAuthor}>
                      <div className={styles.authorAvatarSm}>{article.auteur.charAt(0)}</div>
                      <span>{article.auteur}</span>
                    </div>
                    <Link href={`/actualites/${article.slug}`} className={styles.readLink} id={`blog-${article.id}-btn`}>
                      Lire <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
