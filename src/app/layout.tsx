import type { Metadata } from 'next';
import { Fraunces, Be_Vietnam_Pro } from 'next/font/google';
import './globals.css';
import { site } from '@/data/site';
import { localBusinessJsonLd } from '@/lib/jsonld';

// Fonts self-host tự động qua next/font (không phụ thuộc Google CDN lúc chạy).
// Bắt buộc subset 'vietnamese' cho dấu ữ/ỷ/ậ/ợ (design-system §C3).
const fraunces = Fraunces({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bvp',
  display: 'swap',
});

const description =
  'Spa chăm sóc mẹ và bé sau sinh tại nhà ở Cần Thơ: tắm bé chuẩn y khoa, xông mẹ, massage phục hồi, gội đầu, giảm eo. Nhắn tin đặt lịch với Song Hỷ.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — spa mẹ & bé tại nhà, Cần Thơ`,
  description,
  applicationName: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — spa mẹ & bé tại nhà, Cần Thơ`,
    description,
    images: ['/assets/brand/logo.jpg'],
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${fraunces.variable} ${beVietnamPro.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Bỏ qua tới nội dung chính
        </a>
        {children}
        <script
          type="application/ld+json"
          // JSON-LD tĩnh, an toàn.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
      </body>
    </html>
  );
}
