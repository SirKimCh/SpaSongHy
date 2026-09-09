import Image from 'next/image';
import { site } from '@/data/site';
import { gallery } from '@/data/gallery';
import styles from './Hero.module.css';

export function Hero() {
  const v = site.verified;
  const hero = gallery[0];

  return (
    <section className={`section ${styles.hero}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{site.taglineEn}</p>
          <h1>
            Chăm mẹ nhẹ nhàng,
            <br />
            nâng niu bé từ ngày đầu
          </h1>
          <p className={styles.lede}>
            Spa mẹ và bé <strong>tại nhà</strong> ở Cần Thơ. Kỹ thuật viên đến tận nơi, chăm bé và
            phục hồi cho mẹ theo quy trình chuẩn y khoa — mẹ chỉ việc nghỉ ngơi.
          </p>
          <div className="cta-row">
            <a
              className="btn btn-primary"
              href={site.cta.messengerUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Nhắn tin đặt lịch
            </a>
            <a
              className="btn btn-ghost"
              href={site.cta.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Nhắn Zalo
            </a>
            <a className="btn-link" href={site.cta.telHref}>
              Gọi {v.phoneDisplay}
            </a>
          </div>
          <p className={styles.proof}>
            <strong>{v.followers.toLocaleString('vi-VN')}</strong> mẹ theo dõi ·{' '}
            <strong>{v.recommendRate}</strong> hài lòng ({v.reviewCount} đánh giá) · phục vụ{' '}
            {v.areaServed.join(', ')}
          </p>
        </div>

        <div className={styles.mediaWrap}>
          <figure className={styles.media}>
            <Image
              src={hero.src}
              alt={hero.alt}
              width={640}
              height={800}
              priority
              sizes="(min-width: 1000px) 480px, 90vw"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
