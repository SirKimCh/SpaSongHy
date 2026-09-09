import { site } from '@/data/site';

/**
 * JSON-LD LocalBusiness / DaySpa cho SEO địa phương.
 * openingHours dùng giờ TẠM 08:00–20:00 (chủ dự án đặt) — cập nhật khi có giờ chính thức.
 */
export function localBusinessJsonLd() {
  const v = site.verified;
  return {
    '@context': 'https://schema.org',
    '@type': ['HealthAndBeautyBusiness', 'DaySpa'],
    name: site.name,
    description: site.tagline,
    url: site.url,
    telephone: `+84${v.phone.replace(/^0/, '')}`,
    image: `${site.url}/assets/brand/logo.jpg`,
    foundingDate: String(v.foundedYear),
    address: {
      '@type': 'PostalAddress',
      streetAddress: '18/9/42A, Xô Viết Nghệ Tĩnh, Tân An',
      addressLocality: 'Ninh Kiều',
      addressRegion: 'Cần Thơ',
      addressCountry: 'VN',
    },
    areaServed: v.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
    sameAs: [v.facebook],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '20:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      bestRating: '5',
      ratingCount: String(v.reviewCount),
      reviewCount: String(v.reviewCount),
    },
  };
}
