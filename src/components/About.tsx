import Image from 'next/image';
import { site } from '@/data/site';
import styles from './About.module.css';

export function About() {
  const v = site.verified;

  return (
    <section className="section section-alt" id="ve-song-hy">
      <div className={`container ${styles.grid}`}>
        <figure className={styles.media}>
          <Image
            src="/assets/brand/caregiver-han.jpg"
            alt={`${v.owner}, kỹ thuật viên chính của Song Hỷ, đang bế một bé sơ sinh được quấn khăn`}
            width={560}
            height={560}
            sizes="(min-width: 900px) 420px, 90vw"
          />
        </figure>

        <div>
          <h2>Về Song Hỷ</h2>
          <p className={styles.lead}>
            Chăm sóc mẹ và bé sau sinh tại nhà ở Cần Thơ từ năm {v.foundedYear}.
          </p>
          {site.story.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
          {/* TODO: cần Trung xác nhận [bằng cấp/chứng chỉ y khoa] nếu muốn nêu cụ thể — hiện không nêu, không bịa. */}
        </div>
      </div>
    </section>
  );
}
