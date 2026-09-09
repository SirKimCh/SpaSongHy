# design-system.md — Hệ thống thiết kế Song Hỷ

> **A. Nhận dạng gốc** — trích từ ảnh thật, mỗi dòng ghi rõ nguồn: **(FB)** fanpage · **(HABS)** thư mục "Hình ảnh bổ sung".
> **B. Áp dụng hiện đại hoá** — chuyển hoá A thành UI hiện đại, đối chiếu 1–1.
> **C. Design tokens** — giá trị chốt (mirror của `src/app/globals.css`).
>
> Nguyên tắc: **không bịa mã màu**. Màu ở §A là _ước lượng bằng mắt từ ảnh cụ thể_ (ghi nguồn). Màu dùng thật ở §C, đã chỉnh cho tương phản WCAG.
> Ảnh nguồn hiện dùng: `public/assets/` — xem `docs/content-source.md §4`.

---

# A. NHẬN DẠNG GỐC

## A1. Bảng nhận dạng thị giác (từ CẢ HAI nguồn)

| #     | Thuộc tính                       | Quan sát                                                                                                                                                                                                 | Nguồn ảnh                                               |
| ----- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| A1.1  | **Tông nền chủ đạo**             | Xanh da trời rất nhạt phủ nền: ảnh bìa fanpage, banner "TongQuan", và **toàn bộ 5 ảnh quy trình dịch vụ** đều dùng nền xanh phấn dạng vòm/arch. Là "màu nền thương hiệu".                                | (FB) ảnh bìa · (HABS) `DichVu/TongQuan.jpg`, `DichVu/*` |
| A1.2  | **Cặp màu biểu tượng**           | Logo: **2 bàn chân bé chồng nhau — trái tím chàm (periwinkle), phải hồng phấn**, viền nét tím đậm. Vành huy hiệu **răng cưa (scallop)** xanh da trời + 2 vòng chỉ mảnh, nền trong xanh-trắng.            | (HABS) `AnhDien/LogoSpa.jpg` — **file logo gốc**        |
| A1.3  | **Màu nhấn ấm (vàng nắng)**      | Doodle vàng nắng ở mọi ấn phẩm: mặt trời xoáy, tia sáng, ngôi sao, vương miện, cánh thiên thần; **bullet danh sách quy trình đều là hình mặt trời nhỏ màu vàng**.                                        | (HABS) tất cả `DichVu/*` · (FB) ảnh bé có doodle        |
| A1.4  | **Màu tin cậy / y khoa**         | Đồng phục KTV (Châu Huệ Hân) là **scrubs xanh cổ vịt / petrol** đậm, cổ tim, tay ngắn; kèm khẩu trang y tế trắng, kính. Xuất hiện ở ảnh đại diện + nhiều ảnh bé.                                         | (HABS) `AnhDien/Avata.jpg`, `AnhBe/*`                   |
| A1.5  | **Chất liệu / texture**          | Khăn muslin (xô) nhăn — trắng ngà, xanh sage, hoạ tiết xe/cá/mây; da bé hồng ấm; đạo cụ vải mềm (bịt tai lông, nón lá bắp cải, vương miện giấy). Lều xông vải xanh–đỏ. Không kim loại, không bóng gương. | (HABS) `AnhBe/*`, `DichVu/xong-me`                      |
| A1.6  | **Motif phụ**                    | Cầu vồng pastel, mây bo tròn, bong bóng xà phòng, lá monstera/khoai vẽ nét, chấm bi, bàn chân bé (watermark).                                                                                            | (HABS) `DichVu/tam-be`, `DichVu/*` góc dưới             |
| A1.7  | **Ánh sáng**                     | Ánh sáng ngày dịu từ cửa sổ / nhà tắm ốp gạch trắng; bóng mềm; nhiệt độ màu ấm. Không đèn studio.                                                                                                        | (HABS) `AnhBe/*` · (FB) ảnh bé                          |
| A1.8  | **Phong cách nhiếp ảnh**         | Tài liệu đời thường: phòng ngủ có võng sọc, tủ gỗ, gối chữ U xanh; nhà tắm ốp gạch. Cận mặt bé, DOF nông. Watermark tên thương hiệu chìm.                                                                | (HABS) `AnhBe/*`, `AnhDien/Avata.jpg`                   |
| A1.9  | **Hình khối**                    | Ảnh & khối nội dung **bo góc tròn rõ**; ảnh quy trình đặt trong **khung vòm (arch)** đỉnh tròn; ảnh chèn dạng **tròn**. Cảm giác mềm, ôm, an toàn.                                                       | (HABS) `DichVu/*`                                       |
| A1.10 | **Typography gốc**               | 3 giọng: (1) **script viết tay** "Mom & Baby care"; (2) **display bo tròn, nét run, in hoa** kiểu letterpress cho tiêu đề ("QUY TRÌNH TẮM BÉ"); (3) **sans in hoa đậm** xanh navy cho tên thương hiệu.   | (HABS) `DichVu/*`, `LogoSpa.jpg`                        |
| A1.11 | **Không khí thương hiệu**        | Dịu dàng • nâng niu • an tâm • trong trẻo • vui tươi nhẹ • gần gũi. Vừa **ấm áp gia đình** vừa **kỷ luật y tế** (khẩu trang, đồng phục, quy trình đánh số, "kiểm tra sức khoẻ bé trước khi bắt đầu").    | Tổng hợp                                                |
| A1.12 | **Iconography gốc**              | 100% doodle vẽ tay 1 nét, bo tròn, không đổ bóng: mặt trời (xoáy hoặc tia), sao, vương miện, cánh, mây, cầu vồng, bàn chân, bình sữa, lá.                                                                | (HABS) `DichVu/*`                                       |
| A1.13 | **Cách trình bày dịch vụ (gốc)** | Mỗi dịch vụ = 1 khung vòm: tiêu đề + "(Khoảng N phút)" + danh sách bước, bullet mặt trời; đôi khi có thẻ "CAM KẾT" dạng bong bóng thoại nét đứt; 1–3 ảnh tròn minh hoạ; **không có giá**.                | (HABS) `DichVu/*`                                       |

## A2. Mã màu gốc (ước lượng bằng mắt — KHÔNG phải giá trị chốt)

| Ký hiệu        | Vai trò                                      | Ước lượng | Nguồn (ảnh)                        |
| -------------- | -------------------------------------------- | --------- | ---------------------------------- |
| OG-sky         | Vành logo, nền vòm ấn phẩm, tên thương hiệu  | `#A9D4E1` | `AnhDien/LogoSpa.jpg`, `DichVu/*`  |
| OG-sky-pale    | Nền trong logo / nền banner                  | `#E7F4F7` | `AnhDien/LogoSpa.jpg`              |
| OG-periwinkle  | Bàn chân trái của logo                       | `#8E90D4` | `AnhDien/LogoSpa.jpg`              |
| OG-violet-line | Viền nét logo + chữ script "Mom & Baby care" | `#6E5FA8` | `AnhDien/LogoSpa.jpg`              |
| OG-pink        | Bàn chân phải của logo                       | `#F0A9C0` | `AnhDien/LogoSpa.jpg`              |
| OG-yellow      | Doodle nắng/sao/bullet                       | `#F6C445` | `DichVu/*` (mặt trời xoáy)         |
| OG-teal        | Đồng phục KTV                                | `#245F68` | `AnhDien/Avata.jpg`, `AnhBe/be-03` |
| OG-navy-ink    | Chữ tiêu đề thương hiệu                      | `#33415A` | `DichVu/TongQuan.jpg`              |
| OG-sage        | Khăn muslin xanh                             | `#CDD8C6` | `AnhBe/*`                          |
| OG-cream       | Khăn/nón muslin trắng ngà                    | `#F4EEDF` | `AnhBe/be-03`, `be-05`             |
| OG-skin        | Da bé                                        | `#E8B79C` | `AnhBe/*`                          |

> ⚠️ §A2 chỉ để hiểu "gam gốc". Giá trị dùng thật ở §C, tinh chỉnh cho tương phản. Nếu có logo vector → đo lại chính xác và cập nhật §A2 + §C.

---

# B. ÁP DỤNG HIỆN ĐẠI HOÁ (đối chiếu 1–1)

Giữ **ADN**: xanh da trời + nắng vàng + cặp tím/hồng "Song Hỷ" + teal y khoa + doodle + muslin + ảnh thật.
Nâng lên chuẩn landing page hiện đại: nhịp bố cục rõ, type scale chặt, khoảng thở rộng, vi chuyển động tiết chế.
**Không** bê nguyên phong cách ấn phẩm gốc (nền xanh phủ kín, chữ run to, khung vòm, nhồi doodle).

| Từ §A                       | Quyết định hiện đại hoá                                                                                                                                                                                                                                                  | Vì sao                                                                                                                                         |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **A1.1** nền xanh phủ kín   | Nền trang = **trắng ngà ấm** (từ **OG-cream**). Xanh da trời (**OG-sky**, nhạt hơn) chỉ dùng cho **section xen kẽ** (`--bg-alt`) + card.                                                                                                                                 | Nền xanh lớn làm chữ khó đạt 4.5:1 và trông "phông in sẵn". Ngà ấm để ảnh bé + doodle nổi.                                                     |
| **A1.2** cặp tím/hồng       | Giữ làm **cặp phụ trợ "Song Hỷ"**: lavender = tag "cho mẹ", hồng = tag "cho bé". Không làm màu nút chính. Logo dùng nguyên bản.                                                                                                                                          | Là hồn của cái tên. Nhưng hồng+tím pastel làm primary là mô-típ spa lặp khắp nơi.                                                              |
| **A1.3** vàng nắng          | **Màu nhấn số 1** (`--accent`): underline tiêu đề, icon "điểm cộng", số liệu, bullet quy trình. Hạ sáng nhẹ để chữ đen đạt AA khi đặt trên vàng.                                                                                                                         | Vàng là năng lượng/niềm vui của thương hiệu; hiếm spa mẹ&bé lấy vàng làm nhấn → tạo dấu riêng.                                                 |
| **A1.4** teal y khoa        | **Màu thương hiệu chính** (`--brand`, ~#12626E): nút CTA, link, header khi cuộn, footer.                                                                                                                                                                                 | Teal gánh cả hai vế A1.11 — đủ ấm để dịu, đủ "lâm sàng" để nói "chuẩn y khoa". Khác hẳn biển pastel hồng.                                      |
| **A1.5** muslin/sage        | Sage = `--muted` (viền mềm, chip). Texture muslin → **1 lớp SVG grain rất nhẹ** (≤3.5%) chỉ ở hero, tắt theo `prefers-reduced-motion`.                                                                                                                                   | Giữ cảm giác vải mềm không dùng ảnh nền nặng.                                                                                                  |
| **A1.6 / A1.12** doodle     | Bộ **8 SVG doodle 1 nét** (`sun, star, crown, wing, cloud, rainbow, footprint, sparkle`), dùng làm divider section / bullet / "vệt" sau số liệu. Mật độ **≤ 2/section**, luôn `aria-hidden`.                                                                             | Ấn phẩm gốc nhồi doodle kín; web hiện đại dùng doodle như dấu chấm câu.                                                                        |
| **A1.7 / A1.8** ảnh thật    | Ảnh thật là **anh hùng của hero** (không phải "số to + label"). Xử lý: crop 4:5 / 3:2, bo `--radius-lg`, viền trắng 6px + 1 tầng bóng mềm (polaroid dịu).                                                                                                                | Chất "chụp thật tại nhà" là USP niềm tin. Không thay bằng stock.                                                                               |
| **A1.9** hình khối vòm/tròn | Bỏ khung vòm. Giữ **bo góc có phân cấp**: `sm 8 / md 14 / lg 22 / pill 999` — card md, ảnh lg, nút pill. Ảnh đội ngũ có thể để tròn 1 chỗ.                                                                                                                               | 1 radius cho mọi thứ = tell của template. Vòm đỉnh nhọn khó responsive.                                                                        |
| **A1.10** typography        | Không dùng font script/run cho nội dung. **Fraunces** (serif mềm, optical, đủ dấu tiếng Việt) cho H1–H2 + tagline "Mom & Baby care" (1 lần, italic ở hero) — tải ~90% cảm xúc "thủ công" mà vẫn đọc tốt. **Be Vietnam Pro** (thiết kế cho tiếng Việt) cho H3↓, body, UI. | Script hỏng dấu tiếng Việt, khó đọc.                                                                                                           |
| **A1.11** không khí         | Giọng UI: câu chủ động, sentence case, gọi khách "mẹ", spa xưng "Song Hỷ". CTA nói rõ việc ("Nhắn tin đặt lịch", "Nhắn tin nhận bảng giá" — không "Gửi"). Chuyển động: chỉ 1 chuỗi vào ở hero (thuần CSS); các section còn lại tĩnh.                                     | Cân bằng "gia đình" (chữ ấm) và "y tế" (nhịp kỷ luật).                                                                                         |
| **A1.13** trình bày dịch vụ | Section **Dịch vụ** = lưới 3 card: ảnh + tag mẹ/bé + tên + thời lượng thật + tóm tắt + (cam kết nếu có) + **nút "Nhắn tin nhận bảng giá"** thay chỗ giá. Section **Quy trình** = `<details>` mở rộng từng dịch vụ, các bước đánh số (đây LÀ trình tự → dùng số).         | Không có giá thật (§content-source §3) → CTA nhắn tin, viết khéo kiểu spa (theo yêu cầu chủ dự án), không nhãn `[CẦN BỔ SUNG]` thô ở mặt tiền. |
| **A1.10** tên in hoa        | Tên thương hiệu chỉ in hoa trong logo lockup. Thân trang **không** ALL-CAPS eyebrow/label.                                                                                                                                                                               | ALL-CAPS eyebrow = tell của trang AI.                                                                                                          |

## B1. Bố cục landing page

`Header (sticky, CTA nhắn tin)` → `Hero` → `Dịch vụ (lưới 5 card, nút báo giá)` → `Quy trình (details từng dịch vụ)` → `Về Song Hỷ (ảnh + chuyện Châu Huệ Hân)` → `Gallery (ảnh bé thật)` → `Đánh giá (100%/11 + [CẦN BỔ SUNG] nội dung)` → `Liên hệ (Messenger/Zalo/tel + địa chỉ + giờ + khu vực)` → `Footer (teal)`.

- **Canh lề**: nội dung canh trái (dễ đọc tiếng Việt, body ≤ 66ch). Chỉ eyebrow hero canh trái theo cột.
- **Lưới**: max-width `1120px`, gutter `24px` (mobile `20px`), 12 cột ảo.
- **"Điểm bạo" duy nhất**: khối Hero — ảnh bé thật lớn + tagline Fraunces italic + 1 doodle nắng lớn sau H1. Mọi section sau giữ trầm.

## B2. Chuyển động (motion ~4/10 — tiết chế)

| Nơi                   | Hiệu ứng                                                   | Thông số                                                                 | Điều kiện                                                                                                                          |
| --------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Tải hero              | fade + slide-up: eyebrow → H1 → lede → CTA → proof (+ ảnh) | `@keyframes heroIn` 500ms `ease-out`, stagger 80ms qua `animation-delay` | **thuần CSS** (`Hero.module.css`), chỉ chạy trong `@media (prefers-reduced-motion: no-preference)` — mặc định nội dung đã hiển thị |
| Header                | nền trong suốt → đặc hơn + shadow                          | 200ms                                                                    | `scrollY > 48` (`Header.tsx`, client component)                                                                                    |
| Nút / card            | hover đổi nền / viền                                       | 180ms ease-out                                                           | —                                                                                                                                  |
| `<details>` quy trình | mở/đóng                                                    | mặc định trình duyệt                                                     | —                                                                                                                                  |

**Đã BỎ**: scroll-reveal bằng IntersectionObserver cho các section (nội dung vô hình với crawler/Lighthouse khi không cuộn; và fade-up mọi section là "tell" của trang AI — frontend-design). `Reveal.tsx` giờ chỉ là passthrough.
**Không dùng**: fade-up cho _mọi_ section, hover scale _mọi_ card, parallax nền, animation tự lặp, `opacity:0` mặc định chờ JS.

---

# C. DESIGN TOKENS (mirror của `src/app/globals.css`)

## C1. Primitive — màu

| Token              | Hex       | Xuất xứ                                             |
| ------------------ | --------- | --------------------------------------------------- |
| `--c-teal-700`     | `#0F5561` | brand đậm — hiện đại hoá từ **OG-teal** (A1.4)      |
| `--c-teal-600`     | `#12626E` | **brand chính** (AA nền sáng)                       |
| `--c-teal-500`     | `#1F6F7A` | teal — dùng cho hover                               |
| `--c-teal-50`      | `#E8F2F3` | nền teal nhạt                                       |
| `--c-yellow-500`   | `#EAB308` | **accent** — từ **OG-yellow**, hạ sáng cho AA       |
| `--c-yellow-300`   | `#F6C445` | vàng doodle nguyên bản (chỉ cho hình)               |
| `--c-lavender-200` | `#D9CCEC` | Song Hỷ pair "mẹ" — từ **OG-periwinkle** (nhạt hoá) |
| `--c-pink-200`     | `#F6CBD8` | Song Hỷ pair "bé" — từ **OG-pink**                  |
| `--c-blue-100`     | `#E4EEF4` | nền section xen kẽ — từ **OG-sky**                  |
| `--c-blue-50`      | `#F1F6F9` | nền card trên nền ngà                               |
| `--c-sage-200`     | `#CDD8C6` | muted / viền mềm — từ **OG-sage**                   |
| `--c-cream-50`     | `#FBF7F0` | **nền trang** — từ **OG-cream**                     |
| `--c-ink-900`      | `#1D2321` | chữ chính (không #000)                              |
| `--c-ink-600`      | `#4A5652` | chữ phụ (4.5:1 trên cream-50)                       |
| `--c-white`        | `#FFFFFF` | khung ảnh, card nổi                                 |
| `--c-danger`       | `#C2410C` | lỗi (đất nung — hợp gam)                            |

## C2. Semantic (cặp nền/chữ đã tính tương phản)

| Token              | =                  | Tương phản                                                  |
| ------------------ | ------------------ | ----------------------------------------------------------- |
| `--bg`             | `--c-cream-50`     | nền trang                                                   |
| `--bg-alt`         | `--c-blue-100`     | section Dịch vụ, Về Song Hỷ, Đánh giá                       |
| `--surface`        | `--c-white`        | card, khung ảnh                                             |
| `--text`           | `--c-ink-900`      | 13.9:1 trên `--bg` ✓                                        |
| `--text-muted`     | `--c-ink-600`      | 4.8:1 trên `--bg` ✓                                         |
| `--brand`          | `--c-teal-600`     | 5.3:1 trên `--bg` ✓                                         |
| `--brand-strong`   | `--c-teal-700`     | tiêu đề nhỏ, "cam kết"                                      |
| `--brand-contrast` | `--c-white`        | trên nút teal: 5.1:1 ✓                                      |
| `--accent`         | `--c-yellow-500`   | cho hình/underline; chữ trên vàng = `--c-ink-900` (8.7:1 ✓) |
| `--pair-mom`       | `--c-lavender-200` | nền tag; chữ = `--c-ink-900`                                |
| `--pair-baby`      | `--c-pink-200`     | nền tag; chữ = `--c-ink-900`                                |
| `--muted`          | `--c-sage-200`     | viền, chip                                                  |
| `--border`         | `#DFE6E0`          | 1px viền mặc định                                           |
| `--ring`           | `--c-teal-500`     | focus ring, offset 2px, luôn hiện                           |

## C3. Typography

| Token                      | Giá trị                                                                                                                          |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `--font-display`           | `"Fraunces Variable", "Fraunces", "Be Vietnam Pro", Georgia, serif` — H1–H2, tagline. optical sizing auto, wght 380–600, SOFT 60 |
| `--font-sans`              | `"Be Vietnam Pro", system-ui, "Segoe UI", Roboto, sans-serif` — H3↓, body, UI                                                    |
| `--fs-0…6`                 | `0.875 · 1 · 1.125 · 1.375 · 1.75 · 2.375rem · clamp(2.75, 6vw, 3.75rem)`                                                        |
| `--lh-tight / snug / body` | `1.15 · 1.3 · 1.65` (body rộng hơn cho dấu tiếng Việt)                                                                           |
| `--measure`                | `66ch` body · `24ch` H1                                                                                                          |
| weights                    | Fraunces 400/500/600 · Be Vietnam Pro 400/500/600/700 — self-host qua `next/font/google`, subset `latin` + `vietnamese`          |

## C4. Spacing / Radius / Shadow / Motion

| Token                    | Giá trị                                                                                      |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| `--space-1…8`            | `4 · 8 · 12 · 16 · 24 · 40 · 64 · 96` px (thang 4/8, mật độ marketing)                       |
| `--radius-sm/md/lg/pill` | `8 · 14 · 22 · 999` px — **có phân cấp**                                                     |
| `--shadow-sm`            | `0 1px 2px rgba(29,35,33,.06)`                                                               |
| `--shadow-md`            | `0 6px 20px -6px rgba(15,85,97,.18)` — 1 tầng, ám teal                                       |
| `--ease-out`             | `cubic-bezier(.22,1,.36,1)` · `--ease-back` `cubic-bezier(.34,1.56,.64,1)` (xấp xỉ back.out) |
| `--dur-fast/base/slow`   | `180 · 300 · 450` ms                                                                         |
| Breakpoints              | `480 · 768 · 1024 · 1280` — mobile-first                                                     |

## C5. Iconography & Doodle & Logo

- **Icon UI**: Lucide (stroke 1.75, `currentColor`, 20/24). Không emoji.
- **Doodle thương hiệu**: SVG tại `src/assets/doodles/` — `sun star crown wing cloud rainbow footprint sparkle`. 1 nét, `stroke: var(--accent)` hoặc `var(--brand)`, `aria-hidden`. ≤ 2/section.
- **Logo**: dùng file thật `public/assets/brand/logo.jpg` (huy hiệu răng cưa, 2 bàn chân tím+hồng). Cần bản vector/PNG nền trong cho favicon nét & bản in → `[CẦN BỔ SUNG]` (`content-source §6.8`). Favicon tạm: `public/favicon.svg` (2 chấm chân tím+hồng trên nền teal).

## C6. Checklist chất lượng (trước khi giao)

- [ ] Chữ thường 4.5:1, chữ lớn 3:1 (đã tính §C2)
- [ ] Focus ring `--ring` hiện rõ mọi phần tử tương tác, không bị che
- [ ] Vùng chạm ≥ 44×44px, cách ≥ 8px
- [ ] `prefers-reduced-motion`: tắt animation hero (+ grain nếu thêm sau)
- [ ] Ảnh: `width/height` cố định (CLS < 0.1), `loading="lazy"` trừ ảnh hero (`fetchpriority="high"`), `alt` tiếng Việt mô tả thật
- [ ] Responsive 375 / 768 / 1024 / 1440; không cuộn ngang; gallery/`<details>` tự cuộn trong khung
- [ ] Không ALL-CAPS eyebrow, không "→" cuối nút, không meta "A · B · C" kiểu tell, không `#0B0B0B` giả đen
- [ ] Tiếng Việt: đủ dấu ở Fraunces & Be Vietnam Pro; nút không tràn dòng
- [ ] **Không có con số giá nào** trên trang khi chưa có bảng giá thật; mục thật sự trống (chuyện thương hiệu, review) dùng `NeedsInput`
