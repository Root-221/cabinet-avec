'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À Propos' },
  { href: '/services', label: 'Nos Services' },
  { href: '/formations', label: 'Formations' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/interim', label: 'Intérim' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/actualites', label: 'Actualités' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navInner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/logoApp.png"
            alt="AVEC Consulting"
            width={40}
            height={40}
            className={styles.logoImg}
            priority
            unoptimized
          />
          <div className={styles.logoText}>
            <span className={styles.logoMain}>AFRICA VISION</span>
            <span className={styles.logoSub}>EXPÉRIENCE CONSULTING</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav} aria-label="Navigation principale">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Burger */}
        <div className={styles.navActions}>
          <Link href="/devis" className={styles.ctaButton}>
            Demander un devis
          </Link>
          <button
            className={styles.burgerBtn}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileNavLink} ${pathname === link.href ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/devis" className={styles.mobileCta}>
            Demander un devis
          </Link>
        </nav>
      </div>
    </header>
  );
}
