import React from "react";

const ProductDetails = () => {
  return (
    <div className="mt-5" style={{ height: "auto", overflow: "hidden" }}>
      <h2 className="!text-16 text-ddv font-bold">Thông số kỹ thuật</h2>
      <div className="relative">
        <div className="flex flex-col justify-start items-start mt-2">
          <div>
            <p className="text-left font-bold pb-2">Màn hình</p>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Công nghệ màn hình</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">Super Retina XDR</p>
            </div>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Độ phân giải</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">2532 x 1170 pixels</p>
            </div>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Màn hình rộng</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">6.1 inches</p>
            </div>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Độ sáng tối đa</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">
                Độ sáng tối đa 800 nit (tiêu chuẩn); độ sáng đỉnh 1200 nit (HDR)
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start mt-2">
          <div>
            <p className="text-left font-bold pb-2">Camera sau</p>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Độ phân giải</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">
                48MP Fusion, 12MP 2x Telephoto
              </p>
            </div>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Quay phim</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">
                Quay video 4K Dolby Vision ở tốc độ 24 fps, 25 fps, 30 fps hoặc
                60 fps, Hỗ trợ quay video chậm 1080p ở tốc độ 120 fps hoặc 240
                fps, Chế độ quay video QuickTake, Chống rung quang học cho
                video, Video tự động lấy nét liên tiếp
              </p>
            </div>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Đèn Flash</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">Có</p>
            </div>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Tính năng</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">
                Độ thu phóng kỹ thuật số lên đến 10x, Lớp bảo vệ ống kính bằng
                sapphire, HDR thông minh thế hệ 5, Chế độ chân dung với Kiểm
                soát độ sâu, Chụp ảnh toàn cảnh Panorama (lên đến 63MP), Deep
                Fusion
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start mt-2">
          <div>
            <p className="text-left font-bold pb-2">Camera trước</p>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Độ phân giải</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">12MP</p>
            </div>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Tính năng</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">
                Camera TrueDepth hỗ trợ nhận diện khuôn mặt
              </p>
            </div>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Video Call</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">
                FaceTime HD (1080), Chế độ chân dung trong video FaceTime, Chế
                độ cô lập giọng nói và micrô phổ rộng, Phóng to bằng camera sau
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start mt-2">
          <div>
            <p className="text-left font-bold pb-2">Hệ điều hành &amp; CPU</p>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Hệ điều hành</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">iOS 18</p>
            </div>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Chip xử lý (CPU)</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">Chip A18</p>
            </div>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Chip đồ họa (GPU)</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">GPU 4 lõi mới</p>
            </div>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Tốc độ CPU</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">
                CPU 6 lõi mới với 2 lõi hiệu năng và 4 lõi tiết kiệm điện
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start mt-2">
          <div>
            <p className="text-left font-bold pb-2">Bộ nhớ &amp; Lưu trữ</p>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Bộ nhớ trong</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">128 GB</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start mt-2">
          <div>
            <p className="text-left font-bold pb-2">Kết nối</p>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">SIM</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">
                Sim kép (nano-Sim và e-Sim) - Hỗ trợ 2 e-Sim
              </p>
            </div>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Định vị GPS</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">
                GPS, GLONASS, Galileo, QZSS, BeiDou và NavIC La bàn kỹ thuật số,
                Mạng di động, Định vị vi mô iBeacon
              </p>
            </div>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Bluetooth</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">5.3</p>
            </div>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Cổng kết nối/sạc</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">USB Type-C</p>
            </div>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Kết nối khác</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">NFC</p>
            </div>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Mạng di động</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">5G</p>
            </div>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Wifi</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">
                Wi‑Fi 6 (802.11ax) với 2x2 MIMO
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start mt-2">
          <div>
            <p className="text-left font-bold pb-2">Pin &amp; Sạc</p>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Dung lượng pin</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">Đang cập nhật</p>
            </div>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Loại pin</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">Pin lithium-ion</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start mt-2">
          <div>
            <p className="text-left font-bold pb-2">Tiện ích</p>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Kháng nước, bụi</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">
                Đạt mức IP68 (chống nước ở độ sâu tối đa 6 mét trong vòng tối đa
                30 phút) theo tiêu chuẩn IEC 60529
              </p>
            </div>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Tính năng đặc biệt</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">
                Sạc không dây, Nhận diện khuôn mặt, Kháng nước, kháng bụi, Điện
                thoại AI
              </p>
            </div>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Cảm biến</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">
                Vân tay, Gia tốc, Tiệm cận, áp kế, Ánh sáng, La bàn, Con quay
                hồi chuyển
              </p>
            </div>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Thời điểm ra mắt</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">02/2025</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start mt-2">
          <div>
            <p className="text-left font-bold pb-2">Thiết kế</p>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Kích thước</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">
                Dài: 146.7 mm - Ngang :71.5 mm - Dày: 7.80 mm
              </p>
            </div>
          </div>
          <div className="flex justify-between items-start odd:bg-white even:bg-gray-100 p-2 w-full">
            <div className="w-1/2">
              <p className="text-left">Trọng lượng</p>
            </div>
            <div className="w-1/2">
              <p className="text-left break-words">167 gram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
