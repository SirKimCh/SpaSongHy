import { site } from '@/data/site';
import styles from './Testimonials.module.css';

export function Testimonials() {
  const v = site.verified;

  return (
    <section className="section section-alt" id="danh-gia">
      <div className="container">
        <h2>Mẹ nói về Song Hỷ</h2>
        <p className={styles.big}>
          <strong>{v.recommendRate}</strong> mẹ giới thiệu Song Hỷ
        </p>
        <p className="section-intro">
          {v.reviewCount} lượt đánh giá trên fanpage, kèm hình từng buổi chăm gửi cho mẹ.{' '}
          <a href={v.facebook} target="_blank" rel="noopener noreferrer">
            Xem đánh giá &amp; hình thực tế trên Facebook
          </a>
          .
        </p>
        {/* TODO: cần Trung cung cấp [trích dẫn đánh giá thật của khách] để dựng phần review có tên + hình. */}
      </div>
    </section>
  );
}
