import Image from 'next/image';
import { services } from '@/data/services';
import { site } from '@/data/site';
import styles from './Services.module.css';

export function Services() {
  return (
    <section className="section section-alt" id="dich-vu">
      <div className="container">
        <h2>Dịch vụ tại Song Hỷ</h2>
        <p className="section-intro">
          Năm dịch vụ chính, làm trọn gói ngay tại nhà mẹ. Thời lượng dưới đây là thời gian thực tế
          mỗi buổi.
        </p>

        <ul className={styles.grid} role="list">
          {services.map((s) => (
            <li key={s.slug} className={styles.card}>
              <Image
                src={s.image}
                alt=""
                width={480}
                height={300}
                className={styles.thumb}
                sizes="(min-width: 1000px) 360px, (min-width: 640px) 45vw, 90vw"
              />
              <div className={styles.body}>
                <span className={styles.tag} data-for={s.forWhom}>{`Cho ${s.forWhom}`}</span>
                <h3>{s.title}</h3>
                <p className={styles.dur}>Khoảng {s.durationMin} phút</p>
                <p>{s.summary}</p>
                {s.commitment && <p className={styles.commit}>Cam kết: {s.commitment}</p>}
                <a
                  className={styles.priceLink}
                  href={site.cta.messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nhắn tin nhận bảng giá &amp; tư vấn
                </a>
              </div>
            </li>
          ))}
        </ul>

        <p className={styles.note}>
          {/* TODO: cần Trung xác nhận [bảng giá] — khi có thì thay các link "nhận bảng giá" bằng số. */}
          Bảng giá được tư vấn theo tình trạng của mẹ và bé — nhắn tin để Song Hỷ gửi báo giá chi
          tiết.
        </p>
      </div>
    </section>
  );
}
