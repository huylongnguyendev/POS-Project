# Simple POS System

## 📌 Giới thiệu

Hệ thống bán hàng (POS) đơn giản gồm:

- **Màn hình bán hàng (POS Screen)**:
  - Danh sách sản phẩm bao gồm tên, giá sản phẩm, nút mua hàng.
  - Giỏ hàng gồm số lượng sản phẩm (khác sản phẩm), tổng giá, và nút thanh toán.
  - Tìm kiếm sản phẩm theo tên.

- **Màn hình realtime (Realtime Screen)**: hiển thị danh sách đơn hàng realtime bao gồm mã đơn hàng, thời gian mua (thời điểm thanh toán), tổng tiền đơn hàng.

## 🛠️ Công nghệ (chính) sử dụng

- **Frontend**: TypeScript, ReactJS
- **Backend**: C#, ASP.NET CORE
- **Database**: In-memory
- **Realtime**: SignalR
- **Docker**: Container hoá backend và frontend

---

## 🚀 Cách chạy dự án

1.Clone source code
  git clone <https://github.com/huylongnguyendev/POS-Project.git>
  cd POS-Project

2.Chạy file

- Chạy bằng Docker:
  - Các lệnh:
    - Build: docker-compose build
    - Run: docker-compose up -d
    - Stop: docker-compose down
- Chạy thủ công
  - Frontend: cd frontend && npm install && npm run dev
  - Backend: cd backend/PosApi && dotnet restore && dotnet run

3.Truy cập

- Frontend
  - Màn hình chính: <http://localhost:5173>
  - Màn hình phụ: <http://localhost:5173/sub>

- Backend: <http://localhost:5192/api/v1/{endpoint}>
  - Lấy danh sách sản phẩm: <http://localhost:5192/api/v1/products>
  - Tạo giỏ hàng: <http://localhost:5192/api/v1/cart/create>
  - Truy cập giỏ hàng: <http://localhost:5192/api/v1/cart/{id}>
  - Danh sách đơn hàng: <http://localhost:5192/api/v1/orders>

4.Tác giả

  Nguyễn Huy Long - huylongnguyendev.
