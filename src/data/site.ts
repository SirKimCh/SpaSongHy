/**
 * NAP + CTA + dữ liệu tạm. Nguồn: docs/content-source.md §2, §6.
 * KHÔNG dùng biến môi trường — sửa thẳng ở đây rồi push (Vercel zero-config).
 */
export const site = {
  name: 'Song Hỷ Chăm Sóc Mẹ Và Bé Cần Thơ',
  shortName: 'Song Hỷ',
  tagline: 'Spa chăm sóc mẹ và bé tại nhà — Cần Thơ',
  taglineEn: 'Mom & Baby care',
  url: 'https://songhycantho.io.vn',

  // ĐÃ XÁC MINH (content-source.md §2)
  verified: {
    address: '18/9/42A, Xô Viết Nghệ Tĩnh, Tân An, Ninh Kiều, Cần Thơ',
    phone: '0399931077',
    phoneDisplay: '039 993 1077',
    areaServed: ['Cần Thơ', 'Hậu Giang', 'Vĩnh Long'],
    facebook: 'https://www.facebook.com/profile.php?id=100086331731231',
    followers: 2200,
    recommendRate: '100%',
    reviewCount: 11,
    owner: 'Châu Huệ Hân',
    ownerRole: 'Chủ spa & kỹ thuật viên chính — người trực tiếp chăm mẹ và bé trong các hình',
    foundedYear: 2020, // Trung xác nhận
  },

  // Câu chuyện thương hiệu — dựng theo dữ kiện có thật (thành lập 2020, mô hình tại nhà,
  // Hân trực tiếp làm, quy trình trong ảnh), diễn đạt lại cho mượt; Trung đã duyệt.
  // Không nêu bằng cấp/chứng chỉ cụ thể (chưa xác nhận — xem needsInput.certifications).
  story: [
    'Song Hỷ bắt đầu từ năm 2020, khi chị Châu Huệ Hân nhận chăm sóc mẹ và bé sau sinh ngay tại nhà cho các gia đình quanh Cần Thơ. Ý tưởng rất đơn giản: những tuần đầu sau sinh, mẹ nên được nghỉ ngơi chứ không phải bồng con đi lại — nên người có chuyên môn sẽ đến tận nơi.',
    'Đến nay chị Hân vẫn là người trực tiếp làm mọi buổi: tắm bé, xông và massage phục hồi cho mẹ, theo cùng một quy trình — kiểm tra sức khoẻ bé trước khi bắt đầu, dùng đồ dùng riêng, sát khuẩn tay, và luôn hướng dẫn mẹ cách tự chăm con giữa các buổi. "Song Hỷ" — niềm vui nhân đôi — là mẹ khoẻ và bé ngoan.',
  ],

  // TẠM ĐẶT theo yêu cầu chủ dự án — chưa xác nhận chính thức
  provisional: {
    // TODO: cần Trung xác nhận [giờ làm việc chính thức của spa]
    openingHours: '8:00 – 20:00 hằng ngày',
  },

  cta: {
    messengerUrl: 'https://www.facebook.com/profile.php?id=100086331731231',
    zaloUrl: 'https://zalo.me/0399931077',
    telHref: 'tel:+84399931077',
  },
} as const;

// Những mục nguồn KHÔNG có — không được bịa. Xem docs/content-source.md §6.
export const needsInput = {
  // TODO: cần Trung xác nhận [bảng giá 5 dịch vụ] — hiện dùng CTA "nhắn tin nhận bảng giá"
  servicePrices: null as string | null,
  // TODO: cần Trung xác nhận [bằng cấp/chứng chỉ y khoa của KTV] — chưa nêu trên trang, không bịa
  certifications: null as string | null,
  // TODO: cần Trung xác nhận [email liên hệ hiển thị công khai]
  email: null as string | null,
  // TODO: cần Trung cung cấp [trích dẫn đánh giá thật của khách] để dựng phần review
  reviewsText: null as string | null,
};

export const nav = [
  { href: '#dich-vu', label: 'Dịch vụ' },
  { href: '#quy-trinh', label: 'Quy trình' },
  { href: '#ve-song-hy', label: 'Về Song Hỷ' },
  { href: '#danh-gia', label: 'Đánh giá' },
  { href: '#lien-he', label: 'Liên hệ' },
] as const;
