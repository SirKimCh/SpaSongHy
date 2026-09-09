import Image from 'next/image';
import { site } from '@/data/site';
import styles from './Footer.module.css';

export function Footer() {
  const v = site.verified;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Image
            src="/assets/brand/logo.jpg"
            width={48}
            height={48}
            alt=""
            className={styles.mark}
          />
          <p>{site.name}</p>
        </div>
        <p>{v.address}</p>
        <p>
          <a href={v.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>{' '}
          ·{' '}
          <a href={site.cta.zaloUrl} target="_blank" rel="noopener noreferrer">
            Zalo
          </a>{' '}
          · <a href={site.cta.telHref}>{v.phoneDisplay}</a>
        </p>
        <p className={styles.fine}>
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
