'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { site, nav } from '@/data/site';
import styles from './Header.module.css';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      data-scrolled={scrolled}
    >
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          <Image
            src="/assets/brand/logo.jpg"
            width={44}
            height={44}
            alt=""
            className={styles.mark}
            priority
          />
          <span>{site.shortName}</span>
        </a>

        <nav className={styles.nav} aria-label="Điều hướng chính">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>

        <a
          className={`btn btn-primary btn-sm ${styles.cta}`}
          href={site.cta.messengerUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Nhắn tin đặt lịch
        </a>

        <button
          type="button"
          className={styles.burger}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Đóng menu' : 'Mở menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className={styles.mobileNav} aria-label="Điều hướng">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a
            href={site.cta.messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Nhắn tin đặt lịch
          </a>
        </nav>
      )}
    </header>
  );
}
