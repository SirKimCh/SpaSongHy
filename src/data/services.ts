/**
 * 5 dịch vụ Song Hỷ.
 * Nguồn: thư mục "Hình ảnh bổ sung/DichVu/" — TongQuan.jpg (danh sách + thời lượng)
 * và 5 ảnh quy trình. Các bước chép NGUYÊN VĂN từ ảnh, không sửa câu chữ.
 * KHÔNG có giá ở bất kỳ nguồn nào → priceNote = null, trang dùng CTA "nhắn tin nhận bảng giá".
 * TODO: cần Trung xác nhận [giá từng dịch vụ] để thay CTA bằng số.
 */
export type Service = {
  slug: string;
  title: string;
  forWhom: 'mẹ' | 'bé';
  durationMin: number;
  image: string;
  imageSource: 'Hình ảnh bổ sung' | 'Facebook';
  summary: string;
  steps: string[];
  commitment?: string;
  momPrep?: string[];
  priceNote: string | null;
};

export const services: Service[] = [
  {
    slug: 'tam-be',
    title: 'Tắm bé tại nhà chuẩn y khoa',
    forWhom: 'bé',
    durationMin: 45,
    image: '/assets/services/tam-be.jpg',
    imageSource: 'Hình ảnh bổ sung',
    priceNote: null,
    summary:
      'Kỹ thuật viên đến tận nhà kiểm tra sức khoẻ, massage, tắm và vệ sinh cho bé theo quy trình chuẩn; mẹ được xem và học cùng.',
    steps: [
      'Kiểm tra tình trạng sức khoẻ cho bé',
      'Massage toàn thân cho bé (dùng baby oil của spa)',
      'Khởi động làm ấm cơ và tập vận động cho bé',
      'Tắm bé bằng nước ấm',
      'Hơ lá trầu ấm (thóp, ngực, bụng, vùng kín, hai tay, hai chân)',
      'Vuốt mũi, tai, bóp chân',
      'Vẽ chân mày',
      'Vệ sinh cho bé (mắt, mũi, tai, rốn, vùng kín)',
      'Mặc quần áo đẹp cho bé',
      'Hỗ trợ mẹ cho bé ti (nếu bé ti bình)',
    ],
    momPrep: [
      '2 khăn sữa nhỏ',
      '2 khăn tắm lớn',
      '2 thau tắm bé lớn',
      'Bộ đồ dùng cá nhân của bé (tã, bông tăm, nước muối sinh lý, rơ lưỡi…)',
    ],
  },
  {
    slug: 'xong-me',
    title: 'Xông mẹ toàn thân + vùng kín',
    forWhom: 'mẹ',
    durationMin: 45,
    image: '/assets/services/xong-me.jpg',
    imageSource: 'Hình ảnh bổ sung',
    priceNote: null,
    summary:
      'Xông hơi thảo dược trong lều xông tại nhà, kết hợp thoa rượu nghệ và massage làm ấm, hỗ trợ tử cung co hồi.',
    steps: [
      'Chuẩn bị lều, nồi xông, bô xông cho mẹ',
      'Mẹ vào lều xông toàn thân (10–20 phút tuỳ cơ địa)',
      'Thoa rượu rừng nghệ hạ thổ làm ấm',
      'Massage cổ vai gáy',
      'Massage bụng làm ấm tử cung',
      'Định hình tử cung',
    ],
  },
  {
    slug: 'massage-body-phuc-hoi',
    title: 'Massage body phục hồi',
    forWhom: 'mẹ',
    durationMin: 100,
    image: '/assets/services/massage-body.jpg',
    imageSource: 'Hình ảnh bổ sung',
    priceNote: null,
    summary:
      'Liệu trình phục hồi toàn diện cho mẹ sau sinh — chăm mặt và massage toàn thân, giảm đau mỏi, thư giãn sâu.',
    steps: [
      'Chuẩn bị thẩm nhiệt giảm đau, mời mẹ nằm',
      'Ngâm chân thảo dược',
      'Mặt: rửa mặt, tẩy tế bào, massage mặt, ấn huyệt nâng cơ, đắp mặt nạ nâng cơ cấp ẩm',
      'Body: massage đầu, ấn huyệt đầu thư giãn, massage cổ vai gáy',
      'Massage tay, massage chân, massage bắp chân',
      'Massage lưng (nằm sấp hoặc nghiêng)',
      'Bóp tay chân, bóp vai thư giãn',
    ],
  },
  {
    slug: 'goi-phuc-hoi',
    title: 'Gội đầu thư giãn phục hồi',
    forWhom: 'mẹ',
    durationMin: 60,
    image: '/assets/services/goi-phuc-hoi.jpg',
    imageSource: 'Hình ảnh bổ sung',
    priceNote: null,
    summary:
      'Gội đầu dưỡng sinh cho mẹ sau sinh, kết hợp chăm sóc da mặt và massage đầu – cổ – vai gáy.',
    steps: [
      'Chuẩn bị',
      'Rửa mặt, tẩy tế bào',
      'Massage mặt, đắp mặt nạ cấp ẩm',
      'Massage đầu nhẹ nhàng',
      'Massage cổ vai gáy',
      'Gội lần 1, gội lần 2',
      'Ủ tóc, xả',
      'Sấy khô',
      'Xịt dưỡng tóc, thoa serum dưỡng đuôi tóc',
    ],
  },
  {
    slug: 'giam-eo-chuyen-sau',
    title: 'Massage bụng phục hồi eo chuyên sâu',
    forWhom: 'mẹ',
    durationMin: 75,
    image: '/assets/services/giam-eo.jpg',
    imageSource: 'Hình ảnh bổ sung',
    priceNote: null,
    commitment:
      'Giảm từ 9cm tổng 3 vòng (trên rốn, ngang rốn, dưới rốn) tuỳ cơ địa sau liệu trình.',
    summary:
      'Liệu trình giảm eo dành cho mẹ sau sinh — làm ấm tử cung, massage tan mỡ kết hợp đai nóng và đai rung.',
    steps: [
      'Chuẩn bị',
      'Massage bụng làm ấm tử cung — 10 phút',
      'Massage giảm eo tan mỡ — 10 phút',
      'Massage bụng bằng đai nóng — 20 phút',
      'Massage đai rung — 20 phút',
      'Massage giảm eo tan mỡ — 10 phút',
    ],
  },
];
