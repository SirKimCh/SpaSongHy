import { site } from '@/data/site';
import styles from './Contact.module.css';

export function Contact() {
  const v = site.verified;
  const { cta } = site;

  return (
    <section className="section" id="lien-he">
      <div className="container">
        <h2>Đặt lịch với Song Hỷ</h2>
        <p>Nhắn tin để được tư vấn dịch vụ phù hợp và nhận bảng giá.</p>
        <div className="cta-row">
          <a
            className="btn btn-primary"
            href={cta.messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Nhắn tin Facebook
          </a>
          <a className="btn btn-ghost" href={cta.zaloUrl} target="_blank" rel="noopener noreferrer">
            Nhắn Zalo
          </a>
          <a className="btn-link" href={cta.telHref}>
            Gọi {v.phoneDisplay}
          </a>
        </div>
        <dl className={styles.info}>
          <div>
            <dt>Địa chỉ</dt>
            <dd>{v.address}</dd>
          </div>
          <div>
            <dt>Khu vực phục vụ</dt>
            <dd>{v.areaServed.join(' · ')} — dịch vụ tại nhà</dd>
          </div>
          <div>
            <dt>Giờ làm việc</dt>
            {/* TODO: cần Trung xác nhận [giờ làm việc chính thức] — hiện là giờ tạm. */}
            <dd>{site.provisional.openingHours}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
