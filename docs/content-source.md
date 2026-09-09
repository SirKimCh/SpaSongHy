# content-source.md — Nguồn nội dung & dữ liệu thật

> Ghi lại **mọi dữ liệu lấy từ nguồn thật** và **mọi khoảng trống**. Không mục nào trên landing page được mâu thuẫn với tài liệu này.
> `[ĐÃ XÁC MINH]` = có trong nguồn chính chủ · `[CẦN BỔ SUNG]` = thiếu, phải hỏi chủ spa.
> **Hai nguồn ảnh** — mọi ảnh phải ghi rõ: **(FB)** = fanpage Facebook · **(HABS)** = thư mục "Hình ảnh bổ sung" do chủ dự án cung cấp.

---

## 1. Danh sách nguồn

| #      | Nguồn                                                          | Chi tiết                                                                                                                                                                                                                            | Ngày                       |
| ------ | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| S1     | Fanpage FB `profile.php?id=100086331731231`                    | Render + DOM + screenshot bằng Playwright (BrightData bị login-wall)                                                                                                                                                                | 2026-09-09                 |
| S2     | Tab About của fanpage                                          | Địa chỉ, SĐT, website, khu vực, "100% recommend (11)"                                                                                                                                                                               | 2026-09-09                 |
| S3     | BrightData `scrape_as_markdown` trang reviews                  | **Thất bại** (timeout 300s, login-wall) → không có nội dung review                                                                                                                                                                  | 2026-09-09                 |
| S4     | Ảnh fbcdn tải trực tiếp (9 ảnh) — dùng cho đối chiếu nhận dạng | Vòng làm việc trước; **không nhập vào bản build hiện tại** vì đã có HABS                                                                                                                                                            | 2026-09-09                 |
| **S5** | **Thư mục `Hình ảnh bổ sung/`** (chủ dự án đưa)                | 3 thư mục con: `AnhDien/`, `DichVu/`, `AnhBe/` — 20 file                                                                                                                                                                            | 2025-12-26 (ngày sửa file) |
| S6     | Trả lời của chủ dự án (1 vòng hỏi)                             | Giá → "liên hệ báo giá"; CTA Zalo theo `0399931077` + Messenger trỏ fanpage; **Châu Huệ Hân = chủ spa & KTV chính (vợ của chủ dự án); Nguyễn Thế Trung = người làm IT/landing page, không lên trang**; giờ tạm 8:00–20:00 hằng ngày | phiên này                  |
| S7     | Website `songhycantho.io.vn`                                   | HTTP 521 (server tắt) — không nội dung; không có bản Wayback                                                                                                                                                                        | 2026-09-09                 |

---

## 2. Thông tin doanh nghiệp `[ĐÃ XÁC MINH]`

| Trường                  | Giá trị                                                                                        | Nguồn                                           |
| ----------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Tên                     | **Song Hỷ Chăm Sóc Mẹ Và Bé Cần Thơ**                                                          | S1, S5 (logo + ảnh TongQuan)                    |
| Định vị                 | "Spa chăm sóc mẹ và bé tại Cần Thơ (dịch vụ tại nhà)" · dòng EN "Mom & Baby care"              | S1, S5                                          |
| Địa chỉ                 | **18/9/42A, Xô Viết Nghệ Tĩnh, Tân An, Ninh Kiều, Cần Thơ**                                    | S2 + S5 (`DichVu/TongQuan.jpg` in cùng địa chỉ) |
| Điện thoại              | **039 993 1077** (`0399931077`)                                                                | S2 + S5                                         |
| Khu vực phục vụ         | Cần Thơ · Hậu Giang · Vĩnh Long (tại nhà)                                                      | S2                                              |
| Website (miền đích)     | `songhycantho.io.vn`                                                                           | S2                                              |
| Uy tín                  | 2.2K followers · 100% recommend (11 đánh giá)                                                  | S1, S2                                          |
| Năm thành lập           | **2020**                                                                                       | S6 (Trung xác nhận — phiên 2026-09-10)          |
| **Chủ spa & KTV chính** | **Châu Huệ Hân** — người trong hầu hết ảnh (áo scrubs xanh, khẩu trang), trực tiếp làm dịch vụ | S6 + S5 (`AnhDien/Avata.jpg`)                   |
| Người làm landing page  | Nguyễn Thế Trung (IT, chồng của Hân) — **không hiển thị trên trang**                           | S6                                              |
| Giờ làm việc            | **8:00–20:00 hằng ngày** — _tạm đặt theo S6, cần xác nhận_                                     | S6                                              |
| CTA                     | Messenger → link fanpage · Zalo → `https://zalo.me/0399931077`                                 | S6                                              |

---

## 3. Dịch vụ `[ĐÃ XÁC MINH]` — từ `Hình ảnh bổ sung/DichVu/` (HABS)

`TongQuan.jpg` liệt kê 5 dịch vụ + thời lượng; 5 ảnh còn lại là quy trình chi tiết từng dịch vụ.
**Không ảnh nào ghi giá** → giá = `[CẦN BỔ SUNG]`; trên trang dùng nút "Nhắn tin nhận bảng giá".

| #   | Dịch vụ                             | Thời lượng | Ảnh quy trình (HABS)                                                | File dự án                                                                  |
| --- | ----------------------------------- | ---------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 1   | Tắm bé tại nhà chuẩn y khoa         | 45′        | `488579822_...n.jpg` (10 bước + đồ ba mẹ chuẩn bị)                  | `public/assets/services/tam-be.jpg` · `src/data/services.ts` (mục `tam-be`) |
| 2   | Xông mẹ toàn thân + vùng kín        | 45′        | `488902900_...n.jpg` (6 bước, có ảnh lều xông thật)                 | `.../xong-me.jpg` · `services.ts` (`xong-me`)                               |
| 3   | Massage body phục hồi               | 100′       | `489026437_...n.jpg` (chăm mặt + toàn thân)                         | `.../massage-body.jpg` · `services.ts` (`massage-body-phuc-hoi`)            |
| 4   | Gội đầu thư giãn phục hồi           | 60′        | `488963174_...n.jpg` (13 bước)                                      | `.../goi-phuc-hoi.jpg` · `services.ts` (`goi-phuc-hoi`)                     |
| 5   | Massage bụng phục hồi eo chuyên sâu | 75′        | `488541627_...n.jpg` — **Cam kết: giảm 9cm tổng 3 vòng tuỳ cơ địa** | `.../giam-eo.jpg` · `services.ts` (`giam-eo-chuyen-sau`)                    |

Nội dung các bước đã chép nguyên văn vào mảng `steps` của từng mục trong `src/data/services.ts`.

---

## 4. Kho ảnh trong dự án — ghi rõ nguồn

Tất cả đặt trong `public/assets/` (phục vụ tĩnh, Vercel build không cần xử lý).

| File trong dự án                                                                | Nguồn                            | Nội dung                                                                                          | Dùng cho                                                                |
| ------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `public/assets/brand/logo.jpg`                                                  | **(HABS)** `AnhDien/LogoSpa.jpg` | Logo thật: huy hiệu răng cưa xanh da trời, 2 bàn chân (tím + hồng), "SONG HỶ" + "Mom & Baby care" | Header, footer, favicon nguồn, JSON-LD                                  |
| `public/assets/brand/caregiver-han.jpg`                                         | **(HABS)** `AnhDien/Avata.jpg`   | Châu Huệ Hân (áo scrubs xanh, kính, khẩu trang) bế bé quấn khăn                                   | Mục "Về Song Hỷ"                                                        |
| `public/assets/services/_overview.jpg`                                          | **(HABS)** `DichVu/TongQuan.jpg` | Banner tổng quan 5 dịch vụ (có chữ)                                                               | Tham chiếu — không nhúng trực tiếp (đã có chữ)                          |
| `public/assets/services/{tam-be,xong-me,massage-body,goi-phuc-hoi,giam-eo}.jpg` | **(HABS)** `DichVu/*`            | Ảnh quy trình từng dịch vụ                                                                        | Ảnh card dịch vụ                                                        |
| `public/assets/gallery/be-01…be-12.jpg`                                         | **(HABS)** `AnhBe/*` (12 ảnh)    | Chân dung bé sau buổi chăm, ánh sáng ngày, doodle vàng                                            | Hero + Gallery                                                          |
| _(9 ảnh fbcdn vòng trước)_                                                      | **(FB)** S4                      | Ảnh bìa, ảnh KTV, ảnh bé, ảnh chụp chat                                                           | **Không dùng trong build** — chỉ đối chiếu nhận dạng ở design-system §A |

**Bản quyền**: HABS do chủ spa (vợ chủ dự án) cung cấp trực tiếp → coi như đã có quyền dùng. Ảnh có mặt bé đã đăng công khai trên fanpage của chính spa; nếu chạy quảng cáo diện rộng nên xin lại xác nhận của phụ huynh cho chắc.

---

## 5. Nội dung văn bản

- Toàn bộ copy tiếng Việt **viết mới** theo tinh thần fanpage (gọi khách "mẹ", spa xưng "Song Hỷ"). Không chép nguyên caption.
- Các bước quy trình: **chép nguyên văn từ ảnh HABS** (là thông tin dịch vụ, không phải văn phong quảng cáo).
- **Câu chuyện thương hiệu** (mục "Về Song Hỷ", `src/data/site.ts > site.story`): **văn viết mới**, chỉ ráp từ dữ kiện có thật — thành lập 2020 (S6), mô hình phục vụ tại nhà, Hân trực tiếp làm, các bước trong ảnh HABS. **Không** nêu bằng cấp/chứng chỉ, **không** nêu số lượng mẹ&bé đã phục vụ (chưa có số). Trung đã duyệt cho phép diễn đạt thoáng.
- Testimonial: chưa có nội dung thật → mục Đánh giá chỉ hiển thị chỉ số "100% · 11 đánh giá" + link fanpage; **không** dựng quote giả.

---

## 6. Danh sách `[CẦN BỔ SUNG]`

1. **Bảng giá 5 dịch vụ** (giá lẻ + giá gói/liệu trình). Trang đang dùng CTA "nhắn tin nhận bảng giá" — thay bằng số khi có.
2. **Giờ làm việc chính thức** (đang tạm 8:00–20:00).
3. **Chứng chỉ / bằng cấp y khoa** của Châu Huệ Hân (điều dưỡng / hộ sinh / chứng chỉ chăm sóc sơ sinh…) — CHƯA nêu trên trang, không bịa.
4. ~~Câu chuyện thương hiệu + năm bắt đầu~~ → **ĐÃ XONG**: năm 2020 (Trung xác nhận), câu chuyện đã viết. Còn thiếu: **số mẹ & bé đã phục vụ** (không bịa số).
5. **Nội dung đánh giá thật** của khách (để dựng phần review có tên + hình).
6. **Email** liên hệ (nếu muốn hiển thị).
7. Xác nhận **link Messenger cụ thể** (hiện trỏ trang fanpage chung) + có OA Zalo riêng không.
8. Logo bản vector/PNG nền trong (hiện là `LogoSpa.jpg`, nền xanh nhạt) — cần cho favicon & bản in nét.
9. Ảnh không gian/cơ sở spa (nếu có) — hiện chỉ có ảnh bé + ảnh KTV, chưa có ảnh "không gian".

---

## 7. Rủi ro

- **Giá**: tuyệt đối không tự điền. Mọi chỗ giá = CTA nhắn tin cho tới khi chủ spa đưa số.
- **Địa chỉ**: một số nguồn cộng đồng ghi "41A / An Hội" — bản đúng (About + ảnh TongQuan) là **"42A … Tân An"**.
- **Giờ 8:00–20:00** là tạm — phải xác nhận trước khi đổ tiền quảng cáo / gửi Google Business.
- **Reviews**: không cào được (Facebook chặn) — đừng bịa nội dung, chỉ dùng chỉ số "100% / 11 đánh giá".
