import { services } from '@/data/services';
import styles from './Process.module.css';

export function Process() {
  return (
    <section className="section" id="quy-trinh">
      <div className="container">
        <h2>Từng buổi diễn ra thế nào</h2>
        <p className="section-intro">
          Quy trình lấy đúng từ tài liệu dịch vụ của Song Hỷ. Mẹ luôn được xem và hướng dẫn để tự
          làm giữa các buổi.
        </p>

        <div className={styles.list}>
          {services.map((s) => (
            <details key={s.slug} className={styles.item}>
              <summary>
                <span>{s.title}</span>
                <span className={styles.dur}>{s.durationMin}′</span>
              </summary>
              <ol>
                {s.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
              {s.momPrep && s.momPrep.length > 0 && (
                <p className={styles.prep}>
                  <strong>Ba mẹ chuẩn bị giúp:</strong> {s.momPrep.join(' · ')}
                </p>
              )}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
