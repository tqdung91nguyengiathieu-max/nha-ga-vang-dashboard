---
title: Quy Chuẩn Tự Động Hóa Dashboard Nhà Ga Vàng Cho AI Agent
created: 2026-10-30
tags:
  - nha-ga-vang
  - instruction
  - system-prompt
  - automation
  - trading
---

# 🚂 Quy Chuẩn Tự Động Hóa Báo Cáo Nhà Ga Vàng (System Rule)

> **DÀNH CHO MỌI PHIÊN CHAT CỦA AI AGENT (PC & MOBILE):**  
> Khi người dùng gửi kết quả lệnh / báo cáo tuần của **Nhà Ga Vàng** (dưới dạng văn bản hoặc ảnh chụp màn hình), AI Agent **BẮT BUỘC** thực hiện quy trình sau đây mà **KHÔNG ĐƯỢC MỞ TRÌNH DUYỆT (BROWSER)**.

---

## ⛔ QUY TẮC CẤM (CRITICAL)
- **TUYỆT ĐỐI KHÔNG** dùng công cụ Browser / Puppeteer để mở web `nha-ga-vang-dashboard.vercel.app`.
- Website này là **Static Web lưu mã nguồn trên GitHub và deploy tự động qua Vercel**. Mọi thao tác cập nhật đều diễn ra trên file mã nguồn local.

---

## 🛠️ QUY TRÌNH THỰC HIỆN 4 BƯỚC

### Bước 1: Kiểm toán và chuẩn hóa số liệu lệnh
- Thị trường: Vàng **XAU/USD**.
- Quy ước: **$1\text{ USD} = 10\text{ pips}$** ($0.1\text{ USD} = 1\text{ pip}$).
- Người nhập thủ công hay bị nhầm giá ra. Công thức chuẩn để tính lại giá ra:
  - Lệnh **BUY**: $\text{Exit} = \text{Entry} + (\text{Pips} / 10)$
  - Lệnh **SELL**: $\text{Exit} = \text{Entry} - (\text{Pips} / 10)$
- Nếu pips > 0: Status là `ĐÃ ĐẠT TP`.
- Nếu pips < 0: Status là `ĐÃ SL`.
- Nếu pips = 0: Status là `HÒA BE`.

### Bước 2: Cập nhật file mã nguồn `app.js`
- Thư mục dự án: `c:\Users\ADMIN\Desktop\Brain2\nha-ga-vang-dashboard`
- Mở file: [`app.js`](file:///c:/Users/ADMIN/Desktop/Brain2/nha-ga-vang-dashboard/app.js)
1. Thêm object tuần mới vào cuối mảng `DEFAULT_WEEKS`:
   ```javascript
   {
     id: 'week_YYYY_MM_WW',
     name: 'Tuần X Tháng Y (dd/mm - dd/mm)',
     month: 'MM/YYYY',
     orders: [ ... ]
   }
   ```
2. Tăng số phiên bản `STORAGE_KEY` (ví dụ từ `10W_FULL` lên `11W_FULL`).
3. Đổi `currentWeekId` trong `state` thành id của tuần mới vừa tạo để web mở ra là thấy ngay tuần mới.
4. Thêm key cũ vào hàm `loadData()` trong danh sách xóa `localStorage.removeItem(k)` để xóa sạch cache trên thiết bị khách hàng.

### Bước 3: Cập nhật placeholder trong `index.html`
- Mở file: [`index.html`](file:///c:/Users/ADMIN/Desktop/Brain2/nha-ga-vang-dashboard/index.html)
- Cập nhật các chỉ số ban đầu hiển thị theo tuần mới:
  - `currentWeekTitle`: Tên tuần mới.
  - `kpiTotalPips`: Tổng pips tuần mới (ví dụ: `+310`).
  - `kpiWinRate`: Tỷ lệ thắng (ví dụ: `62.5%`).
  - `kpiWinRateDetail`: Chi tiết số lệnh (ví dụ: `5 TP • 3 SL`).
  - `kpiTotalTrades`: Tổng số lệnh (ví dụ: `8 Lệnh`).
  - `kpiAvgPips`: Pips trung bình (ví dụ: `+38.8 p/l`).
  - `tableTotalPips`: Tổng pips ở chân bảng.
  - Các mục trong modal chia sẻ: `shareWeekTitle`, `shareTotalPips`, `shareWinRate`, `shareTradesSummary`.

### Bước 4: Deploy Vercel bằng Git
Chạy các lệnh terminal trong thư mục `c:\Users\ADMIN\Desktop\Brain2\nha-ga-vang-dashboard`:
```bash
git add app.js index.html
git commit -m "Nhap du lieu bao cao ky [Ten Tuan] dat [So Pips] pips"
git push origin main
```
*(Vercel sẽ tự động phát hiện commit mới và cập nhật lên live trong vòng 10 giây).*

### Bước 5: Trả kết quả cho người dùng
1. Bảng chi tiết toàn bộ các lệnh trong tuần (Ngày, Loại lệnh, Entry, Exit, Kết quả, Pips, Note).
2. Tóm tắt các chỉ số KPI tuần.
3. Link kiểm tra live: `https://nha-ga-vang-dashboard.vercel.app`
4. Hai mẫu nội dung thông báo (Mẫu 1: Chuyên nghiệp, Mẫu 2: Ngắn gọn) để người dùng copy gửi vào nhóm Zalo/Telegram.

---

## 📝 VÍ DỤ MẪU HỘI THOẠI CHUẨN

**Người dùng (gửi từ điện thoại):**
> *"Nhập tiếp tục số liệu tuần này từ thứ 2 đến thứ 6 nhà ga vàng lên web giúp mình: Tuần 4 tháng 10 (19/10-23/10) [Kèm ảnh]"*

**Hành động của AI:**
1. Đọc ảnh trích xuất các lệnh.
2. Sửa file `app.js` và `index.html`.
3. Chạy `git add . && git commit && git push origin main`.
4. Xuất bảng tổng kết và mẫu báo cáo nhóm.
