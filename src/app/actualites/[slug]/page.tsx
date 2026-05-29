import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2, MessageCircle, Hash, Briefcase } from 'lucide-react';
import blog from '@/data/blog.json';
import styles from './page.module.css';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const article = blog.find((a) => a.slug === params.slug);
  if (!article) return { title: 'Article introuvable' };
  
  return {
    title: `${article.titre} — AVEC Consulting`,
    description: article.resume,
  };
}

export default async function ArticlePage(props: Props) {
  const params = await props.params;
  const article = blog.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  // Get two random "related" articles for demo purposes
  const relatedArticles = blog.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <article className={styles.articlePage}>
      
      {/* ── HERO SECTION ── */}
      <div className={styles.heroSection}>
        <img src={article.image} alt={article.titre} className={styles.heroImageBg} />
        <div className={styles.heroOverlay}></div>
        
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <div className={styles.topRow}>
              <Link href="/actualites" className={styles.backLink}>
                <ArrowLeft size={16} /> Retour au blog
              </Link>
              <span className={styles.categoryBadge}>{article.categorie}</span>
            </div>
            <h1 className={styles.title}>{article.titre}</h1>
            
            <div className={styles.metaRow}>
              <div className={styles.metaItem}>
                <div className={styles.authorAvatarSm}>{article.auteur.charAt(0)}</div>
                <span>Par <strong>{article.auteur}</strong></span>
              </div>
              <div className={styles.metaDivider}></div>
              <div className={styles.metaItem}>
                <Calendar size={16} />
                <span>{article.date}</span>
              </div>
              <div className={styles.metaDivider}></div>
              <div className={styles.metaItem}>
                <Clock size={16} />
                <span>{article.lecture} de lecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className={styles.mainContentArea}>
        <div className="container">
          <div className={styles.contentLayout}>
            
            {/* Sidebar (Share Buttons) */}
            <div className={styles.shareSidebar}>
              <div className={styles.stickyShare}>
                <span className={styles.shareTitle}>Partager</span>
                <button className={styles.shareBtn} aria-label="Partager (Pro)"><Briefcase size={20} /></button>
                <button className={styles.shareBtn} aria-label="Partager (Social)"><Hash size={20} /></button>
                <button className={styles.shareBtn} aria-label="Partager (Message)"><MessageCircle size={20} /></button>
                <button className={styles.shareBtn} aria-label="Copier le lien"><Share2 size={20} /></button>
              </div>
            </div>

            {/* Article Body */}
            <div className={styles.articleBody}>
              <p className={styles.leadParagraph}>{article.resume}</p>
              
              <div className={styles.richText}>
                <p>
                  <span className={styles.dropCap}>{article.contenu.charAt(0)}</span>
                  {article.contenu.slice(1)}
                </p>
                
                <h2>Les enjeux majeurs de cette année</h2>
                <p>
                  La dynamique actuelle impose aux acteurs du marché de s'adapter rapidement. Les entreprises recherchent des profils non seulement compétents techniquement, mais aussi dotés de <em>soft skills</em> solides (adaptabilité, communication, leadership). 
                  Il est donc primordial d'investir dans la formation continue pour rester compétitif.
                </p>

                <blockquote>
                  "Le véritable investissement d'une entreprise réside dans le développement continu du potentiel de ses collaborateurs."
                  <cite>— Expert AVEC Consulting</cite>
                </blockquote>

                <h3>Comment tirer son épingle du jeu ?</h3>
                <p>
                  Plusieurs stratégies s'offrent aux professionnels souhaitant booster leur carrière :
                </p>
                <ul>
                  <li>Mettre à jour régulièrement ses connaissances via des formations certifiantes.</li>
                  <li>Développer son réseau professionnel (networking).</li>
                  <li>S'appuyer sur le coaching pour identifier ses points forts et axes d'amélioration.</li>
                </ul>

                <p>
                  En conclusion, anticiper les besoins du marché et se préparer en conséquence est la clé du succès. Notre cabinet AVEC est là pour vous accompagner dans chacune de ces étapes décisives.
                </p>
              </div>

              {/* Tags */}
              <div className={styles.tagsContainer}>
                {article.tags.map((tag) => (
                  <span key={tag} className={styles.tagBadge}>#{tag}</span>
                ))}
              </div>

              {/* Author Box */}
              <div className={styles.authorBox}>
                <div className={styles.authorAvatarLg}>{article.auteur.charAt(0)}</div>
                <div className={styles.authorInfo}>
                  <h4>{article.auteur}</h4>
                  <p>Expert(e) en accompagnement professionnel chez AVEC Consulting. Passionné(e) par le développement du capital humain en Afrique.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* ── RELATED ARTICLES ── */}
      <div className={styles.relatedSection}>
        <div className="container">
          <h2 className={styles.relatedTitle}>À lire aussi</h2>
          <div className={styles.relatedGrid}>
            {relatedArticles.map((rel) => (
              <Link key={rel.id} href={`/actualites/${rel.slug}`} className={styles.relatedCard}>
                <div className={styles.relatedImgContainer}>
                  <img src={rel.image} alt={rel.titre} />
                  <span className={styles.relatedCategory}>{rel.categorie}</span>
                </div>
                <div className={styles.relatedContent}>
                  <h3>{rel.titre}</h3>
                  <div className={styles.relatedMeta}>
                    <Calendar size={14} /> {rel.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
    </article>
  );
}
