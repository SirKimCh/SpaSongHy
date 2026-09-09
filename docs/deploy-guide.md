# deploy-guide.md — Đưa web Song Hỷ lên mạng (dành cho người không rành kỹ thuật)

> Mục tiêu: từ thư mục code trên máy → website chạy thật trên Internet, qua **GitHub** và **Vercel**.
> Bạn **không cần gõ lệnh**. Chỉ tạo tài khoản, bấm nút, và chờ.
> Toàn bộ mất khoảng **15–20 phút** lần đầu. Những lần sau, chỉ cần "đẩy code" là web tự cập nhật.

---

## Bức tranh tổng thể (đọc 1 phút)

```
Máy của bạn  ──(1) tải lên──►  GitHub (nơi lưu code)  ──(2) kết nối──►  Vercel (nơi chạy web)
                                                                              │
                                                          (3) Vercel tự build ► website có địa chỉ .vercel.app
                                                                              │
                                                          (4) gắn tên miền ► songhycantho.io.vn
```

- **GitHub**: giống "Google Drive cho code". Miễn phí.
- **Vercel**: dịch vụ biến code thành website. Miễn phí cho dự án nhỏ như thế này.
- Bạn làm **1 lần** các bước 1–2. Sau đó mỗi lần sửa nội dung, làm lại **chỉ bước "đẩy code"** (mục 6) là web tự cập nhật sau ~1 phút.

---

## Bước 0 — Chuẩn bị (làm 1 lần)

1. **Tạo tài khoản GitHub**: vào `https://github.com` → bấm **Sign up** (góc trên bên phải) → làm theo hướng dẫn (email, mật khẩu, xác minh).
2. **Cài GitHub Desktop** (ứng dụng có giao diện, không cần gõ lệnh): vào `https://desktop.github.com` → bấm **Download for Windows** → cài như phần mềm bình thường → mở lên → **Sign in to GitHub.com** → đăng nhập tài khoản vừa tạo.
3. **Tạo tài khoản Vercel**: vào `https://vercel.com` → bấm **Sign Up** → chọn **Continue with GitHub** (để Vercel và GitHub nói chuyện được với nhau) → cho phép (Authorize).

> Xong bước 0 thì không phải làm lại nữa.

---

## Bước 1 — Đưa code lên GitHub (dùng GitHub Desktop)

1. Mở **GitHub Desktop**.
2. Trên thanh menu: **File → Add local repository…** (Thêm kho code có sẵn).
3. Bấm **Choose…** và chọn đúng thư mục dự án: `F:\SpaSongHy`. Bấm **Add repository**.
   - Nếu nó báo _"this directory does not appear to be a Git repository"_ và có nút **create a repository**, bấm nút đó → giữ nguyên các ô → bấm **Create repository**.
4. Bên trái sẽ hiện danh sách file. Ở ô **Summary** (góc dưới bên trái) gõ: `Phiên bản đầu tiên` → bấm nút xanh **Commit to main**.
5. Góc trên bên phải bấm **Publish repository**.
   - **Name**: để `SpaSongHy` (hoặc tên bạn thích, không dấu, không khoảng trắng).
   - **Bỏ tick** ô _"Keep this code private"_ nếu muốn ai cũng xem được code; **giữ tick** nếu muốn riêng tư (Vercel vẫn dùng được cả 2 kiểu).
   - Bấm **Publish repository**.
6. Chờ vài giây. Xong → code đã nằm trên GitHub. Bạn có thể bấm **View on GitHub** (menu Repository) để xem.

> **Lưu ý về thư mục `Hình ảnh bổ sung`**: thư mục này được đưa lên GitHub cùng code (dùng để lưu vết nguồn ảnh). Nó **không** hiển thị trên website, không sao cả. Nếu muốn gọn, có thể xoá sau — nhưng không bắt buộc.

---

## Bước 2 — Kết nối GitHub với Vercel

1. Vào `https://vercel.com/new` (hoặc: đăng nhập Vercel → bấm **Add New…** ở góc trên bên phải → **Project**).
2. Mục **Import Git Repository**: tìm dòng `SpaSongHy` trong danh sách → bấm nút **Import** bên phải dòng đó.
   - Nếu **không thấy** repo: bấm dòng **Adjust GitHub App Permissions** (hoặc **Configure GitHub App**) → chọn **All repositories** hoặc tick riêng `SpaSongHy` → **Save** → quay lại, giờ sẽ thấy.
3. Màn hình **Configure Project** hiện ra. **Bạn không cần đổi gì cả**:
   - **Framework Preset**: Vercel tự điền **Next.js**. (Nếu ô này trống, bấm và chọn **Next.js**.)
   - **Build Command**, **Output Directory**, **Install Command**: để nguyên (Vercel tự biết).
   - **Environment Variables**: **để trống** — dự án này không cần.
4. Bấm nút đen **Deploy**.

---

## Bước 3 — Chờ Vercel dựng web

- Bạn sẽ thấy màn hình chạy các dòng chữ (log build) khoảng **30–90 giây**.
- Khi xong: hiện pháo giấy 🎉 và một **ảnh chụp trang web** + nút **Continue to Dashboard** / **Visit**.
- Bấm **Visit** → web Song Hỷ mở ra ở địa chỉ dạng `https://spa-song-hy.vercel.app`. **Web đã sống trên Internet.**

> Nếu build **báo lỗi màu đỏ**: chụp màn hình phần chữ đỏ và gửi cho người làm kỹ thuật (Nguyễn Thế Trung). Không tự sửa trên Vercel.

---

## Bước 4 — Gắn tên miền `songhycantho.io.vn` (khi sẵn sàng)

> Bước này chỉ làm khi bạn muốn dùng tên miền riêng thay cho địa chỉ `.vercel.app`.
> Cần đăng nhập được vào nơi mua tên miền `songhycantho.io.vn` (nhà cung cấp domain).

1. Trong Vercel, mở project `SpaSongHy` → thanh trên cùng bấm **Settings** → menu trái bấm **Domains**.
2. Ô nhập: gõ `songhycantho.io.vn` → bấm **Add**.
3. Vercel hiện hướng dẫn: thường là thêm 1 bản ghi **A** trỏ về IP `76.76.21.21`, hoặc bản ghi **CNAME** cho `www` trỏ về `cname.vercel-dns.com`. Vercel ghi rõ giá trị cần nhập.
4. Vào trang quản lý tên miền (nơi mua domain) → phần **DNS** → thêm đúng bản ghi Vercel yêu cầu → lưu.
5. Quay lại Vercel, chờ (vài phút đến vài giờ). Khi ô domain chuyển **Valid Configuration** (dấu tick xanh) là xong.

> Tên miền hiện đang "tắt máy chủ" (lỗi 521). Sau khi làm bước này, nó sẽ trỏ về Vercel và chạy bình thường.

---

## Bước 5 — Vercel tự cập nhật mỗi khi bạn sửa code

Đây là điểm hay: **bạn không phải import lại**. Sau khi đã kết nối ở Bước 2:

- Mỗi lần bạn **Commit + Push** code mới lên GitHub (xem Bước 6), Vercel **tự động** build lại và cập nhật web sau ~1 phút.
- Xem lịch sử các lần cập nhật ở Vercel: project → tab **Deployments**.

---

## Bước 6 — Cập nhật nội dung về sau (quy trình lặp lại)

Ví dụ khi có bảng giá, muốn sửa giờ làm việc, thêm ảnh…

1. Người kỹ thuật sửa file trong thư mục dự án (`F:\SpaSongHy`), hoặc bạn tự sửa các file nội dung được chỉ (xem `CLAUDE.md` phần nội dung).
2. Mở **GitHub Desktop** → thấy danh sách thay đổi bên trái.
3. Ô **Summary**: gõ ngắn gọn việc vừa làm, ví dụ `Cập nhật bảng giá` → bấm **Commit to main**.
4. Bấm **Push origin** (góc trên bên phải).
5. Chờ ~1 phút → mở lại website, nội dung đã mới. Không cần đụng vào Vercel.

---

## Câu hỏi thường gặp

**Có tốn tiền không?**
Không, với lượng truy cập của một spa. GitHub và Vercel đều có gói miễn phí đủ dùng. Tên miền thì bạn trả cho nhà cung cấp domain như bình thường (không liên quan Vercel).

**Lỡ bấm nhầm gì đó có sao không?**
Không mất dữ liệu. Mọi phiên bản đều lưu trên GitHub. Vercel luôn giữ các bản deploy cũ, có thể "Rollback" (quay lại bản trước) trong tab **Deployments**.

**Ảnh bị mờ / web tải chậm?**
Ảnh trong `public/assets/` nên được nén nhỏ lại (người kỹ thuật làm 1 lần). Không ảnh hưởng cách deploy.

**Muốn đổi số điện thoại / địa chỉ / giờ hiển thị?**
Sửa file `src/data/site.ts` rồi làm Bước 6. Chỉ 1 file, không cần biết lập trình.

**Web hiện chưa có giá dịch vụ?**
Đúng — vì chưa có bảng giá chính thức. Trang đang để nút "Nhắn tin nhận bảng giá". Khi có giá, người kỹ thuật điền vào `src/data/services.ts` rồi làm Bước 6.

---

## Tóm tắt 3 bước (như ví dụ trong yêu cầu)

1. **Đẩy code lên GitHub** — dùng GitHub Desktop: _Add local repository → Commit to main → Publish repository_.
2. **Vào Vercel → Add New → Project → Import** repo `SpaSongHy` — giữ nguyên mọi thiết lập (Framework = Next.js, không thêm Environment Variables).
3. **Bấm Deploy** — chờ ~1 phút → bấm **Visit** để xem web. (Sau này: gắn tên miền ở _Settings → Domains_.)
