# Song Hỷ — Landing page

Trang đích cho **Song Hỷ Chăm Sóc Mẹ Và Bé Cần Thơ** — spa chăm sóc mẹ & bé sau sinh **tại nhà** (Cần Thơ).
**Next.js 15 (App Router)**, prerender tĩnh, deploy **Vercel zero-config**.

## Bắt đầu (máy dev)

```bash
pnpm install
pnpm dev            # http://localhost:3000
```

Không có `.env` — dự án **không dùng biến môi trường**.
_(Máy dev này npm 11 bị lỗi Arborist — chạy qua `corepack pnpm@9.15.4 <lệnh>`.)_

## Đưa web lên mạng

Đẩy code lên GitHub → Import repo vào **Vercel** → Vercel tự nhận diện **Next.js** và build (không chỉnh gì).
Hướng dẫn từng bước cho người không rành kỹ thuật: **[`docs/deploy-guide.md`](./docs/deploy-guide.md)**.

## Tài liệu (đọc trước khi code)

| File                                                 | Nội dung                                                            |
| ---------------------------------------------------- | ------------------------------------------------------------------- |
| [`CLAUDE.md`](./CLAUDE.md)                           | Kiến trúc, quy ước code, skill/MCP, **Deploy Guide**, workflow      |
| [`docs/PRD.md`](./docs/PRD.md)                       | Phạm vi, section, tiêu chí nghiệm thu                               |
| [`docs/tech-stack.md`](./docs/tech-stack.md)         | Next.js/Vercel, cấu trúc thư mục, vì sao zero-config                |
| [`docs/design-system.md`](./docs/design-system.md)   | A. Nhận dạng gốc (2 nguồn ảnh) · B. Hiện đại hoá · C. Design tokens |
| [`docs/content-source.md`](./docs/content-source.md) | Dữ liệu đã xác minh + nguồn từng ảnh (FB / HABS) + `[CẦN BỔ SUNG]`  |
| [`docs/deploy-guide.md`](./docs/deploy-guide.md)     | GitHub → Vercel, từng bước, cho người không biết code               |

## Quy tắc

- **Không bịa** giá / giờ chính thức / chứng chỉ. Giá chưa có → nút "nhắn tin nhận bảng giá". Chỗ trống thật → `<NeedsInput>` hoặc comment `// TODO: cần Trung xác nhận […]`.
- Chỉ dùng token trong `src/app/globals.css` — không hex thô trong component / `*.module.css`.
- Nội dung: `src/data/*.ts` (`site.ts` NAP+CTA, `services.ts` dịch vụ, `gallery.ts` ảnh). Không hard-code vào JSX.
- Ảnh tĩnh: `public/assets/{brand,services,gallery}/`, tham chiếu `/assets/...` qua `next/image`.

## Lệnh

`pnpm dev` · `pnpm build` · `pnpm start` · `pnpm lint` · `pnpm format`

## Trạng thái

Migrate Astro → Next.js xong. 8 section dựng đủ, `pnpm build` xanh, render kiểm thử OK (desktop + mobile 390px).
Việc tiếp theo: `docs/PRD.md §7` (polish thị giác, nén ảnh, dữ liệu `[CẦN BỔ SUNG]`).
