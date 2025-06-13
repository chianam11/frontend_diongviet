import React from "react";

const Promotion = () => {
  return (
    <div className="mt-5">
      <div className="flex items-center justify-start bg-gray-100 p-2">
        <p className="!text-16 font-bold">Ưu đãi thêm</p>
      </div>
      <div className="flex w-full flex-col items-start justify-start bg-white p-2">
        <div>
          <div className="flex items-center py-2">
            <div className="pl-2 text-left text-14">
              Giảm đến <span className="font-bold">800.000đ</span> khi thanh
              toán trả góp qua thẻ tín dụng Sacombank{" "}
              <a
                target="_blank"
                href="https://didongviet.vn/dchannel/sieu-hoi-tra-gop-giam-toi-800-000d-khi-thanh-toan-tra-gop-visa-qua-mpos/"
                className="text-linkxanh"
              >
                (Xem chi tiết)
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center py-2">
            <div className="pl-2 text-left text-14">
              Giảm <span className="font-bold">38%</span> khi mua máy kèm Gói
              VieON{" "}
              <a
                target="_blank"
                href="https://didongviet.vn/dchannel/uu-dai-goi-vieon-tai-di-dong-viet"
                className="text-linkxanh"
              >
                (Xem chi tiết)
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center py-2">
            <div className="pl-2 text-left text-14">
              Giảm thêm <span className="font-bold">500.000đ</span> mở thẻ qua
              VIB{" "}
              <a
                target="_blank"
                href="https://didongviet.vn/dchannel/voucher-200k-mo-the-vib-tai-di-dong-viet/"
                className="text-linkxanh"
              >
                (Xem chi tiết)
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center py-2">
            <div className="pl-2 text-left text-14">
              Mở Thẻ MB JCB KOC – Giảm{" "}
              <span className="font-bold">1.000.000đ</span> mua iPhone 16 Series{" "}
              <a
                target="_blank"
                href="https://didongviet.vn/dchannel/giam-1tr-khi-thanh-toan-qua-the-mb-jcb-hi-accesstrade-tai-di-dong-viet/"
                className="text-linkxanh"
              >
                (Xem chi tiết)
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center py-2">
            <div className="pl-2 text-left text-14">
              Nhận ngay voucher <span className="font-bold">giảm 600k</span> khi
              mở thẻ tín dụng VpBank trên SenID{" "}
              <a
                target="_blank"
                href="https://didongviet.vn/dchannel/mo-the-senid-voucher-600k-di-dong-viet/"
                className="text-linkxanh"
              >
                (Xem chi tiết)
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full my-2">
        <button
          className="w-full more-content !h-auto flex items-center justify-center"
          aria-expanded="false"
        >
          <p className="text-[#1456F0] text-center text-14">
            Xem thêm 4 ưu đãi
          </p>
        </button>
      </div>
    </div>
  );
};

export default Promotion;
