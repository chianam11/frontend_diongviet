import React from "react";

const NavMobile = () => {
  return (
    <div
      className="bottom-tab fixed bottom-0 left-0 right-0 w-full bg-white md:hidden border-t border-gray-200"
      style={{ height: 52, zIndex: 999 }}
    >
      <div className="flex h-full w-full items-center justify-between px-2">
        {/* Trang chủ */}
        <div className="w-1/5 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            {/* Icon nhà */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              fill="none"
            >
              <path
                d="M12 17H12.009"
                stroke="#BE1E2D"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 8.5V13.5C20 17.2712 20 19.1569 18.8284 20.3284C17.6569 21.5 15.7712 21.5 12 21.5C8.22876 21.5 6.34315 21.5 5.17157 20.3284C4 19.1569 4 17.2712 4 13.5V8.5"
                stroke="#BE1E2D"
                strokeWidth="1.5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 10.5L17.6569 6.33548C14.9902 3.77849 13.6569 2.5 12 2.5C10.3431 2.5 9.00981 3.77849 6.34315 6.33548L2 10.5"
                stroke="#BE1E2D"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="text-ddv text-center text-[10px] font-bold">Trang chủ</p>
        </div>

        {/* Danh mục */}
        <div className="w-1/5 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            {/* Icon danh mục */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              fill="none"
            >
              {/* Thêm nội dung SVG của bạn ở đây */}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V8C10 9.88562 10 10.8284 9.41421 11.4142C8.82843 12 7.88562 12 6 12C4.11438 12 3.17157 12 2.58579 11.4142C2 10.8284 2 9.88562 2 8V6Z"
                stroke="#808A94"
                strokeWidth="1.5"
              />
              {/* Thêm các phần khác nếu cần */}
            </svg>
          </div>
          <p className="text-gray-500 text-center text-[10px] font-bold">Danh mục</p>
        </div>

        {/* Tìm kiếm */}
        <div className="w-1/5 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            {/* Icon tìm kiếm */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C11.8475 18 13.5282 17.3249 14.8266 16.1984L20.2929 21.6642C20.6834 22.0547 21.3166 22.0547 21.7071 21.6642C22.0976 21.2737 22.0976 20.6405 21.7071 20.25L16.2408 14.7842C17.3673 13.4858 18.0424 11.8051 18.0424 9.95757C18.0424 5.53929 14.4607 2 10 2Z"
                stroke="#808A94"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <p className="text-gray-500 text-center text-[10px] font-bold">Tìm kiếm</p>
        </div>

        {/* Thông báo */}
        <div className="w-1/5 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              fill="none"
            >
              <path
                d="M12 2C9.23858 2 7 4.23858 7 7V10C7 12.7614 5.76142 15 3 15H21C18.2386 15 17 12.7614 17 10V7C17 4.23858 14.7614 2 12 2Z"
                stroke="#808A94"
                strokeWidth="1.5"
              />
              <path
                d="M12 22C13.1046 22 14 21.1046 14 20H10C10 21.1046 10.8954 22 12 22Z"
                fill="#808A94"
              />
            </svg>
          </div>
          <p className="text-gray-500 text-center text-[10px] font-bold">Thông báo</p>
        </div>

        {/* Tài khoản */}
        <div className="w-1/5 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              fill="none"
            >
              <path
                d="M12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2Z"
                stroke="#808A94"
                strokeWidth="1.5"
              />
              <path
                d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22"
                stroke="#808A94"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <p className="text-gray-500 text-center text-[10px] font-bold">Tài khoản</p>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
