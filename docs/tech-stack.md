# tech-stack.md — Song Hỷ Landing

> **Thay đổi kiến trúc so với bản gốc**: chuyển từ Astro → **Next.js 15 (App Router)**.
> Lý do: brief yêu cầu "mặc định chọn Next.js" cho Vercel zero-config ("bấm là chạy"). Vercel do đội Next.js làm ra
> nên preset Next.js là đường deploy chắc chắn nhất. Mọi nguyên tắc khác (không biến môi trường, ảnh trong /public,
> nội dung tách file, design token) giữ nguyên.

## Nguyên tắc chọn stack

- Landing 1 trang, nội dung là chính, SEO địa phương, nhẹ trên điện thoại phổ thông.
- Chủ spa **sửa nội dung không cần lập trình** → nội dung tách thành file TS/ảnh.
- Chủ dự án **push GitHub rồi Import repo vào Vercel**, không chạy CLI, **không set biến môi trường** → stack phải **Vercel zero-config**.

## Thành phần

| Lớp             | Lựa chọn                                                                                                                                                                      | Phiên bản                         | Lý do                                                                                                                                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework       | **Next.js — App Router**, toàn bộ trang prerender **tĩnh** (`○ Static`)                                                                                                       | 15.1.6                            | Vercel tự nhận diện "Next.js" → Build Command `next build`, Output tự cấu hình. Không adapter, không `next export`, không cấu hình server.                                                                                                            |
| UI runtime      | **React**                                                                                                                                                                     | 19.0.0                            | Đi kèm Next 15.                                                                                                                                                                                                                                       |
| Runtime build   | **Node.js**                                                                                                                                                                   | ≥ 20.9 (`package.json > engines`) | Vercel đọc `engines.node`.                                                                                                                                                                                                                            |
| Package manager | **pnpm** (`pnpm-lock.yaml` + `packageManager` field)                                                                                                                          | 9.15.4                            | Vercel tự phát hiện `pnpm-lock.yaml` → dùng pnpm, vẫn zero-config. _(npm 11.x trên máy dev bị bug Arborist `Cannot read properties of null (reading 'matches')` — không cài được; pnpm ổn định. Người dùng không chạy lệnh nào nên không ảnh hưởng.)_ |
| Ngôn ngữ        | **TypeScript**                                                                                                                                                                | ^5.7                              | `strict`.                                                                                                                                                                                                                                             |
| Styling         | **Tailwind CSS v4** (`@tailwindcss/postcss`) + **CSS Modules** cho từng component + `src/app/globals.css` chứa design token                                                   | ^4                                | Token (`:root { --… }` + `@theme inline`) trong `globals.css` là **nguồn sự thật** (design-system §C). Component style dùng `*.module.css`, chỉ tham chiếu `var(--token)` — cấm hex thô.                                                              |
| Font            | **`next/font/google`** — Fraunces (400/500/600, normal+italic) + Be Vietnam Pro (400/500/600/700)                                                                             | —                                 | Tự self-host lúc build (không gọi Google CDN lúc chạy). Bắt buộc `subsets: ['latin','vietnamese']`. Xuất `--font-fraunces` / `--font-bvp` cho token.                                                                                                  |
| Ảnh             | `next/image`, file gốc trong **`/public/assets/{brand,services,gallery}/`**                                                                                                   | —                                 | Vercel cấp Image Optimization zero-config. Mỗi ảnh khai `width`/`height`. Tham chiếu `/assets/...`.                                                                                                                                                   |
| Chuyển động     | **Thuần CSS**, chỉ 1 chuỗi vào ở Hero (`@keyframes heroIn` trong `Hero.module.css`, guard bằng `prefers-reduced-motion`). Các section: tĩnh.                                  | —                                 | **Bỏ scroll-reveal bằng IntersectionObserver** (bản nháp đầu): nội dung sẽ vô hình với trình thu thập/Lighthouse khi không cuộn, và fade-up mọi section là "tell" của trang AI (frontend-design). GSAP để dành nếu sau này cần choreography phức tạp. |
| SEO             | `metadata` export trong `layout.tsx` (title/description/OG/canonical) + JSON-LD `HealthAndBeautyBusiness`/`DaySpa` (`src/lib/jsonld.ts`) + `app/sitemap.ts` + `app/robots.ts` | —                                 | Tất cả native Next, prerender tĩnh.                                                                                                                                                                                                                   |
| HTTP headers    | `next.config.mjs > headers()` (bảo mật + cache `/assets`)                                                                                                                     | —                                 | Không cần `vercel.json`.                                                                                                                                                                                                                              |
| Chất lượng mã   | **ESLint** (`eslint-config-next` qua `eslint.config.mjs` + `FlatCompat`) + **Prettier** (`prettier-plugin-tailwindcss`)                                                       | —                                 | `next lint` chạy trong `next build`.                                                                                                                                                                                                                  |
| CI (tuỳ chọn)   | có thể thêm `.github/workflows/ci.yml`: `pnpm install --frozen-lockfile && pnpm lint && pnpm build`                                                                           | —                                 | Không bắt buộc cho Vercel.                                                                                                                                                                                                                            |
| Hosting         | **Vercel** (Git-connected)                                                                                                                                                    | —                                 | Import repo → Deploy. Preset auto = **Next.js**.                                                                                                                                                                                                      |

## Vì sao "bấm là chạy" trên Vercel

1. Vercel dò `package.json` thấy `next` → chọn preset **Next.js** → Build `next build`, output tự nhận.
2. `pnpm-lock.yaml` → Vercel cài bằng pnpm (`corepack` dùng version trong `packageManager`).
3. `engines.node` `">=20.9.0"` → Node 20.
4. **Không biến môi trường bắt buộc**: link Messenger/Zalo/tel nằm cứng trong `src/data/site.ts`; `site.url` cũng trong đó.
5. Không có route động, không API route cần secret, không database. Toàn bộ `/`, `/sitemap.xml`, `/robots.txt`, `/_not-found` là **static**.

## KHÔNG dùng (và vì sao)

- **`next export` / `output: 'export'`**: không cần — Vercel phục vụ Next tĩnh trực tiếp và vẫn có Image Optimization. `export` sẽ mất `next/image` optimizer.
- **SSR / route handler có state / middleware**: trang tĩnh thuần.
- **Biến môi trường**: cố tình tránh để chủ dự án không phải cấu hình gì.
- **CMS**: v1 nội dung ít, sửa file TS + Git đủ. Cân nhắc **Decap CMS** (git-based) ở v2.
- **Google Fonts qua `<link>`**: dùng `next/font` để self-host.
- **GSAP / thư viện animation**: chưa cần cho mức "motion 5/10".
- **State management, data fetching lib**: không có dữ liệu runtime.

## Cấu trúc thư mục

```
F:/SpaSongHy/
├─ CLAUDE.md
├─ docs/           PRD.md · tech-stack.md · design-system.md · content-source.md · deploy-guide.md
├─ Hình ảnh bổ sung/     ← nguồn gốc do chủ dự án đưa (giữ lại làm provenance; không hiển thị trên web)
├─ public/
│  ├─ favicon.svg
│  └─ assets/
│     ├─ brand/      logo.jpg · caregiver-han.jpg
│     ├─ services/   tam-be.jpg · xong-me.jpg · massage-body.jpg · goi-phuc-hoi.jpg · giam-eo.jpg · _overview.jpg
│     └─ gallery/    be-01.jpg … be-12.jpg
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx      <html lang="vi">, next/font, metadata, JSON-LD, skip-link
│  │  ├─ page.tsx        ghép các section
│  │  ├─ globals.css     DESIGN TOKENS (§C) + base + helper .container/.section/.btn
│  │  ├─ not-found.tsx · sitemap.ts · robots.ts
│  ├─ components/
│  │  ├─ Header.tsx (+ .module.css)     'use client' — sticky + burger mobile
│  │  ├─ Hero.tsx · Services.tsx · Process.tsx · About.tsx · Gallery.tsx · Testimonials.tsx · Contact.tsx · Footer.tsx (+ .module.css)
│  │  ├─ NeedsInput.tsx (+ .module.css)  nhãn "Sắp có" cho mục thật sự trống
│  │  └─ Reveal.tsx      passthrough (giữ để không phải sửa lời gọi; không còn hiệu ứng)
│  ├─ data/
│  │  ├─ site.ts       NAP + CTA + provisional + needsInput + nav
│  │  ├─ services.ts   5 dịch vụ (bước quy trình chép nguyên văn từ ảnh HABS)
│  │  └─ gallery.ts    12 ảnh bé
│  └─ lib/jsonld.ts
├─ next.config.mjs · tsconfig.json · postcss.config.mjs · eslint.config.mjs
├─ package.json · pnpm-lock.yaml · .prettierrc · .editorconfig · .nvmrc · .gitattributes · .gitignore
└─ next-env.d.ts (Next tự sinh — .gitignore bỏ qua)
```

## Lệnh

| Lệnh           | Việc                                                                |
| -------------- | ------------------------------------------------------------------- |
| `pnpm install` | cài phụ thuộc                                                       |
| `pnpm dev`     | dev `http://localhost:3000`                                         |
| `pnpm build`   | build production (`next build`, đã bao gồm `next lint` + typecheck) |
| `pnpm start`   | chạy bản build ở `http://localhost:3000`                            |
| `pnpm lint`    | `next lint`                                                         |
| `pnpm format`  | Prettier                                                            |

> `npm run build` cũng chạy nếu máy có npm không lỗi; Vercel tự chọn pnpm theo lockfile.

## Ràng buộc & rủi ro

- **Dấu tiếng Việt**: `next/font` phải khai `subsets: ['latin','vietnamese']` cho cả 2 font. QA chuỗi có `ữ ỷ ậ ợ`.
- **CLS**: mọi `next/image` khai `width/height`; gallery + about dùng `aspect-ratio`.
- **Ảnh `/public` chưa nén**: ảnh HABS 100–900KB. `next/image` sẽ tối ưu lúc phục vụ, nhưng nên nén nguồn ≤ ~300KB để build/Lighthouse nhẹ hơn. TODO ghi trong report.
- **`Reveal.tsx`**: hiện là passthrough. Nếu muốn thêm scroll-animation, phải làm kiểu progressive-enhancement (SSR render _visible_, chỉ animate khi có JS) — đừng để `opacity:0` mặc định.
- **Domain**: `songhycantho.io.vn` đang HTTP 521. Sau khi Vercel deploy, gắn domain ở Vercel > Settings > Domains (deploy-guide §4).
- **Máy dev Node 24 + npm 11**: `npm install` lỗi Arborist. Dùng `corepack pnpm@9.15.4 …`. Không ảnh hưởng Vercel.
