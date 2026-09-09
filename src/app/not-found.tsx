import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Không tìm thấy trang — Song Hỷ',
};

export default function NotFound() {
  return (
    <main id="main" className="section container">
      <h1>Không tìm thấy trang này</h1>
      <p>
        Trang bạn tìm không tồn tại. Quay lại <Link href="/">trang chủ Song Hỷ</Link>.
      </p>
    </main>
  );
}
