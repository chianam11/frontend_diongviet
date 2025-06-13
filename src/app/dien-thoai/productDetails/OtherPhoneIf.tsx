import React from "react";

const OtherPhoneInfo = () => {
  return (
    <div className="mt-4">
      <div>
        <div className="box-cmt-info w-full rounded-lg border grid grid-cols-2">
          <div className="col-span-2 bg-gray-100 p-2 font-bold !text-16">
            Thông tin sản phẩm
          </div>
          <div className="col-span-2 divide-y-[1px]">
            <div>
              <div className="flex flex-row items-start gap-2 p-2">
                <div className="w-[10%] flex justify-center pt-1">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 1L29 7.67023V24.3458L16 31L3 24.3458V7.67023L16 1ZM25.7656 8.3116L16 3.30893L12.2344 5.23303L21.9375 10.2678L25.7656 8.3116ZM16 13.3143L19.7188 11.4222L10 6.38749L6.23438 8.3116L16 13.3143ZM5 9.97916V23.0631L15 28.194V15.1101L5 9.97916ZM17 28.194L27 23.0631V9.97916L17 15.1101V28.194Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="w-[90%] relative text-justify text-14 antialiased">
                  <div className="info-content flex  flex-middle">
                    <div className="info-desc">
                      <p>Máy mới nguyên seal 100%, chính hãng Apple Việt Nam</p>
                      <p>
                        Di Động Việt là đại lý uỷ quyền chính thức của Apple
                        Việt Nam
                      </p>
                      <p>&nbsp;</p>
                    </div>
                  </div>
                  <div className="info-content flex flex-middle">
                    <div className="info-desc">
                      <p>
                        <strong>Bộ sản phẩm:</strong>&nbsp;Thân máy, Hộp, Cáp,
                        Cây lấy sim, Sách hướng dẫn, Túi giấy cao cấp Di Động
                        Việt
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start gap-2 p-2">
              <div className="w-[10%] flex justify-center pt-1">
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 2.66663L5.33331 6.66663V14.7866C5.33331 21.52 9.87998 27.8 16 29.3333C22.12 27.8 26.6666 21.52 26.6666 14.7866V6.66663L16 2.66663ZM24 14.7866C24 20.12 20.6 25.0533 16 26.56C11.4 25.0533 7.99998 20.1333 7.99998 14.7866V8.51996L16 5.51996L24 8.51996V14.7866Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="w-[90%] relative text-justify text-14 antialiased">
                <div>
                  <div className="rich-text-paragraph" data-eleid={30}>
                    <span className="text-only" data-eleid={31}>
                      Độc quyền tại Di Động Việt: Bảo hành Hư lỗi - Đổi mới
                      trong vòng&nbsp;<strong>33 ngày</strong>. Bảo hành chính
                      hãng&nbsp;
                      <strong>12 tháng&nbsp;</strong>
                    </span>
                    <div>&nbsp;</div>
                  </div>
                  <div className="rich-text-paragraph" data-eleid={32}>
                    <span className="text-only" data-eleid={33}>
                      Bảo hành Hư lỗi - Đổi mới&nbsp;<strong>12 tháng</strong>,
                      rơi vỡ với D.Care
                    </span>
                  </div>
                </div>
                <a
                  className="text-linkxanh"
                  title="Xem chi tiết"
                  href="/chinh-sach/chinh-sach-bao-hanh-dien-thoai"
                >
                  (Xem chi tiết)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherPhoneInfo;
