/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Phục vụ ảnh gốc trong /public/assets nguyên trạng (plain <img>, không qua /_next/image).
    // Lý do: chỉ ~18 ảnh nhỏ, bỏ tầng tối ưu -> loại hẳn rủi ro optimizer nghẽn/timeout,
    // "bấm là chạy" chắc chắn. Vẫn giữ width/height (không CLS) + native lazy-load.
    // Nếu sau này nén ảnh nguồn xong và muốn bật lại: xoá dòng dưới.
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), camera=(), microphone=()',
          },
        ],
      },
      {
        source: '/assets/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

export default nextConfig;
