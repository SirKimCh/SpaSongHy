import Image from 'next/image';
import { gallery } from '@/data/gallery';
import styles from './Gallery.module.css';

export function Gallery() {
  // Ảnh đầu đã dùng ở Hero → hiển thị từ ảnh thứ 2.
  const items = gallery.slice(1);

  return (
    <section className="section" id="gallery">
      <div className="container">
        <h2>Hình ảnh mẹ &amp; bé tại Song Hỷ</h2>
        <ul className={styles.grid} role="list">
          {items.map((g) => (
            <li key={g.src} className={styles.item}>
              <Image
                src={g.src}
                alt={g.alt}
                width={400}
                height={500}
                className={styles.img}
                sizes="(min-width: 1000px) 260px, (min-width: 700px) 30vw, 45vw"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
