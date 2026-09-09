# PRD.md — Landing page Song Hỷ Chăm Sóc Mẹ Và Bé Cần Thơ

## 1. Tóm tắt

Landing page một trang, tiếng Việt, giới thiệu **spa chăm sóc mẹ và bé sau sinh tại nhà** của Song Hỷ (Cần Thơ),
dẫn khách tới **nhắn tin đặt lịch qua Facebook Messenger / Zalo**.

- **Chủ spa & kỹ thuật viên chính**: **Châu Huệ Hân** (người trong hầu hết ảnh). Người làm landing page: Nguyễn Thế Trung (IT, chồng — không lên trang).
- **Nguồn nội dung/ảnh**: (1) fanpage `facebook.com/profile.php?id=100086331731231`; (2) thư mục `Hình ảnh bổ sung/` do chủ dự án cung cấp. Chi tiết + nguồn từng ảnh: `content-source.md`.
- **Framework**: **Next.js 15 (App Router)**, prerender tĩnh. **Deploy**: đẩy code lên GitHub → Import repo vào Vercel → Vercel tự build (preset auto = Next.js). **Không** thao tác CLI, **không** biến môi trường. Xem `deploy-guide.md`. _(Đổi từ Astro theo brief — `tech-stack.md` đầu file.)_
- **Không bịa dữ liệu/giá**: mục thiếu → nhãn `[CẦN BỔ SUNG]` (hoặc, với giá, dùng CTA "nhắn tin nhận bảng giá").

## 2. Mục tiêu & chỉ số

| Mục tiêu                       | Chỉ số                                         | Ngưỡng                                                                                 |
| ------------------------------ | ---------------------------------------------- | -------------------------------------------------------------------------------------- |
| Ra quyết định liên hệ nhanh    | CTA "Nhắn tin"/"Zalo"/"Gọi" luôn trong tầm tay | header sticky + cuối trang; mọi breakpoint                                             |
| Tin tưởng ("giao cả mẹ và bé") | Social proof thật + đội ngũ có mặt             | 2.2K followers · 100% recommend (11) · ảnh + tên KTV Châu Huệ Hân                      |
| Tốc độ & SEO địa phương        | Lighthouse mobile                              | Perf ≥ 90 · A11y = 100 · SEO = 100 · CLS < 0.1 · First Load JS ≈ 113KB (Next baseline) |
| Tiếp cận                       | WCAG 2.2 AA                                    | axe không lỗi nghiêm trọng; kiểm phím + bộ đọc màn hình                                |
| Dễ cập nhật                    | Sửa dịch vụ/giờ/ảnh không cần đụng component   | qua `src/data/*.ts`                                                                    |
| Deploy không cần biết code     | Vercel Git-connected zero-config (Next.js)     | build xanh khi Import Project, không cần chỉnh setting                                 |

**Ngoài phạm vi (v1)**: form đặt lịch trên trang (dùng Messenger/Zalo thay thế), thanh toán/cọc online, tài khoản khách, blog/CMS, đa ngôn ngữ, analytics theo dõi cá nhân.

## 3. Người dùng

1. **Mẹ bầu cuối thai kỳ / mới sinh 0–6 tuần** ở Cần Thơ — lo lắng, ít thời gian, dùng điện thoại, quen nhắn tin FB/Zalo. Cần: dịch vụ gồm gì, ở đâu, bao lâu, có an toàn/chuẩn y khoa không, giá & đặt lịch thế nào.
2. **Người thân đặt hộ** (chồng, mẹ ruột/chồng) — cần thông tin cô đọng + số điện thoại + đánh giá.
3. **Khách tỉnh lân cận** (Hậu Giang, Vĩnh Long) — cần biết có phục vụ khu vực mình.

## 4. Yêu cầu chức năng

### 4.1 Cấu trúc trang (thứ tự cố định)

Header (sticky, nút "Nhắn tin đặt lịch") → Hero → **Dịch vụ** (lưới 5 card) → **Quy trình** (mở rộng từng dịch vụ) → **Về Song Hỷ** (ảnh + chuyện Châu Huệ Hân) → **Gallery** (ảnh bé thật) → **Đánh giá** → **Liên hệ** (Messenger/Zalo/tel + địa chỉ + giờ + khu vực) → Footer.
Bố cục & motion: `design-system.md §B1–B2`.

### 4.2 Nội dung từng section

| Section    | Nội dung thật (nguồn)                                                                                                                                             | `[CẦN BỔ SUNG]`                                                    |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Hero       | Định vị "spa mẹ & bé tại nhà, Cần Thơ"; ảnh bé thật (HABS); 2.2K followers; 100% recommend (11); khu vực                                                          | Tagline chốt cuối; câu chữ marketing tinh                          |
| Dịch vụ    | **5 dịch vụ + thời lượng thật** (HABS `TongQuan.jpg`): Tắm bé 45′ · Xông mẹ 45′ · Massage body 100′ · Gội phục hồi 60′ · Giảm eo 75′. Ảnh quy trình cho mỗi card. | **Giá** → không bịa; card có nút "Nhắn tin nhận bảng giá"          |
| Quy trình  | Các bước chi tiết từng dịch vụ (HABS, chép nguyên văn vào `steps:`); đồ ba mẹ chuẩn bị (tắm bé); cam kết giảm 9cm (giảm eo)                                       | —                                                                  |
| Về Song Hỷ | Châu Huệ Hân là chủ + KTV chính; **thành lập 2020**; câu chuyện thương hiệu (văn viết mới, ráp từ dữ kiện thật — `site.story`); ảnh `caregiver-han.jpg`           | Chứng chỉ y khoa cụ thể (chưa nêu, không bịa); số mẹ&bé đã phục vụ |
| Gallery    | 12 ảnh bé thật (HABS `AnhBe/`)                                                                                                                                    | Ảnh "không gian" spa (chưa có)                                     |
| Đánh giá   | "100% mẹ giới thiệu" + "11 đánh giá" + link fanpage (không hộp "Sắp có")                                                                                          | Trích dẫn review thật của khách (để dựng phần có tên + hình)       |
| Liên hệ    | SĐT **039 993 1077**; địa chỉ **18/9/42A Xô Viết Nghệ Tĩnh, Tân An, Ninh Kiều, Cần Thơ**; khu vực Cần Thơ/Hậu Giang/Vĩnh Long; **giờ 8:00–20:00 hằng ngày (tạm)** | Xác nhận giờ; email                                                |
| Footer     | Logo, tên, địa chỉ, link fanpage                                                                                                                                  | —                                                                  |

### 4.3 CTA & liên hệ (không có form ở v1)

- **CTA chính**: nút "Nhắn tin đặt lịch" → Messenger (link fanpage `https://www.facebook.com/profile.php?id=100086331731231`).
- **CTA phụ**: "Nhắn Zalo" → `https://zalo.me/0399931077` · "Gọi 039 993 1077" → `tel:+84399931077`.
- Hiện ở: header (sticky, desktop + trong menu mobile) + Hero + section Liên hệ.
- Tất cả là link tĩnh trong `src/data/site.ts` — **không biến môi trường**.

### 4.4 Nội dung dữ liệu hoá (module TypeScript, không CMS)

- `src/data/services.ts` — mảng `Service[]`: `slug, title, forWhom('mẹ'|'bé'), durationMin, image ('/assets/...'), imageSource, summary, steps[], commitment?, momPrep?, priceNote (null → CTA báo giá), order`.
- `src/data/gallery.ts` — `GalleryItem[]`: `{ src ('/assets/gallery/...'), alt }`.
- `src/data/site.ts` — `site` (NAP, `verified.*`, `provisional.openingHours`, `cta.{messengerUrl,zaloUrl,telHref}`, `url`), `needsInput` (các mục `null` + comment `// TODO`), `nav`.
- Kiểm tra: `pnpm build` chạy `next lint` + typecheck; sai kiểu dữ liệu → build fail. Không có script kiểm ảnh riêng — `next/image` fail lúc build nếu file `/public` không tồn tại.

### 4.5 Ảnh

- **Tất cả ảnh tĩnh trong `public/assets/{brand,services,gallery}/`**. Tham chiếu `/assets/...` qua `next/image` (`width`/`height` bắt buộc; `sizes` theo cột).
- Ảnh hero: `priority`. Ảnh khác: mặc định lazy. Ảnh trang trí `alt=""`; ảnh nội dung `alt` tiếng Việt.
- Không dùng phần tử có `height: 100%` khi cha không có chiều cao xác định — dùng `aspect-ratio` (bug đã gặp & sửa ở Gallery).

## 5. Yêu cầu phi chức năng

- **Hiệu năng**: mọi route prerender tĩnh; font self-host qua `next/font` (`display: swap`, subset `latin`+`vietnamese`); JS chỉ có 1 client component (`Header` — scroll + burger). Ảnh `public/` nên nén nguồn ≤ ~300KB (TODO — hiện 100–900KB).
- **SEO địa phương**: `metadata` trong `layout.tsx` (`<title>`, description, Open Graph, canonical), **JSON-LD `HealthAndBeautyBusiness`/`DaySpa`** (NAP, `areaServed`, `aggregateRating` 5/11, `openingHoursSpecification` 08:00–20:00), `lang="vi"`, `app/sitemap.ts`, `app/robots.ts`, `favicon.svg`.
- **Tiếp cận**: WCAG 2.2 AA; landmark (`header`/`main#main`/`footer`); heading tuần tự (1 `<h1>`); focus nhìn thấy; `<details>` cho quy trình; menu mobile `aria-expanded`/`aria-controls`; `prefers-reduced-motion` tắt animation hero.
- **Trình duyệt**: 2 phiên bản gần nhất Chrome/Safari/Firefox/Edge + Safari iOS, Chrome Android.
- **Riêng tư**: không analytics theo dõi cá nhân v1; không cookie → không cần banner; không thu PII (không có form).
- **Bản quyền ảnh**: HABS do chủ spa cung cấp → coi như có quyền. Nếu chạy quảng cáo diện rộng: xin xác nhận phụ huynh cho ảnh bé.
- **i18n**: chỉ tiếng Việt v1; chuỗi giữ trong content/JSON.

## 6. Tiêu chí nghiệm thu (v1) — trạng thái

1. ✅ `pnpm build` xanh (`next lint` + typecheck sạch); `pnpm start` render đủ mọi section; routes `/`, `/sitemap.xml`, `/robots.txt`, `/_not-found` đều `○ Static`.
2. ✅ Import repo vào Vercel (framework auto = **Next.js**) → deploy **không chỉnh setting, không thêm env**. Ảnh `/assets/*` trả 200 (không 404).
3. ⬜ Lighthouse/axe chạy sau khi deploy (cần môi trường thật). Trang đã: 1 `<h1>`, landmark, focus-visible, no horizontal-scroll ở 390px, menu mobile hoạt động.
4. ✅ Thông tin khớp `content-source.md`; **không có con số giá nào**; mục thiếu → CTA báo giá / `<NeedsInput>` / comment `// TODO`.
5. ✅ 3 CTA (Messenger, Zalo, tel) đúng đích ở header + hero + liên hệ.
6. ✅ 5 dịch vụ + bước quy trình hiển thị đúng từ `src/data/services.ts`.
7. ✅ Sửa `src/data/site.ts` (vd giờ) → trang đổi, không đụng component.
8. ✅ `CLAUDE.md` + 5 file `/docs` cập nhật theo Next.js.

## 7. Mốc triển khai tiếp theo

1. ✅ Migrate Astro → Next.js 15, dựng đủ 8 section, build xanh, render kiểm thử OK.
2. Polish thị giác qua `frontend-design` + `ui-ux-pro-max`: bộ doodle SVG thương hiệu, lớp grain hero, nút nhắn tin nổi ở mobile, tinh chỉnh spacing/typography.
3. Nén ảnh nguồn trong `public/assets/` (≤ ~300KB) + thêm OG image riêng + favicon vector khi có logo.
4. Chủ spa cung cấp `[CẦN BỔ SUNG]` (giá, giờ chính thức, chứng chỉ, chuyện, review) → thay nội dung thật, gỡ `<NeedsInput>` / `// TODO`.
5. Chạy Lighthouse/axe trên bản deploy → tinh chỉnh nếu chưa đạt ngưỡng §2.
