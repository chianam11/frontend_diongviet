"use client";

import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
const categories = [
  {
    name: "Điện thoại",
    subcategories: [
      "iPhone",
      "Samsung",
      "OPPO",
      "Xiaomi",
      "realme",
      "TECNO",
      "Honor",
      "Điện thoại cũ",
    ],
  },
  {
    name: "Tablet",
    subcategories: ["iPad", "Samsung Galaxy Tab", "Lenovo Tab"],
  },
  {
    name: "Mac",
    subcategories: ["MacBook Air", "MacBook Pro"],
  },
  {
    name: "Máy cũ giá rẻ",
    subcategories: ["Điện thoại cũ", "Laptop cũ", "Máy tính bảng cũ"],
  },
  {
    name: "Phụ kiện",
    subcategories: [
      "Sạc & Cáp",
      "Ốp lưng",
      "Tai nghe",
      "Chuột & Bàn phím",
      "Cường lực",
    ],
  },
  {
    name: "Đồng hồ",
    subcategories: [
      "Apple Watch",
      "Samsung Galaxy Watch",
      "Đồng hồ thông minh",
    ],
  },
  {
    name: "Âm thanh",
    subcategories: ["Tai nghe không dây", "Loa Bluetooth"],
  },
  {
    name: "Sức khỏe & Gia dụng",
    subcategories: ["Máy lọc không khí", "Cân sức khỏe", "Máy massage"],
  },
  {
    name: "Apple (AAR)",
    subcategories: ["iPhone", "MacBook", "iPad", "Apple Watch"],
  },
  {
    name: "Xe điện",
    subcategories: ["Xe máy điện", "Xe đạp điện"],
  },
  {
    name: "Màn hình & Tivi",
    subcategories: ["Màn hình máy tính", "Smart TV"],
  },
  {
    name: "Thu cũ đổi mới",
    subcategories: ["Thu cũ iPhone", "Thu cũ MacBook", "Thu cũ iPad"],
  },
  {
    name: "Khuyến mãi",
    subcategories: ["Giảm giá HOT", "Mua 1 tặng 1"],
  },
  {
    name: "Công nghệ 24H",
    subcategories: ["Tin tức công nghệ", "Đánh giá sản phẩm"],
  },
];

const CategoryMenu = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<boolean | false>(false);
const isOpen = useSelector((state: RootState) => state.sidebar.value);

//   const dispatch = useDispatch();
  return (
    <div className="relative py-3">
      {/* Danh mục chính */}
      <ul className="w-64  max-h-screen bg-white shadow-lg rounded-md overflow-y-auto scroll-container font-bold pb-20">
        {categories.map((category) => (
          <li
            key={category.name}
            
            onMouseEnter={() => !isOpen&& setHoveredCategory(category.name)}
            onMouseLeave={() =>!isOpen&& setHoveredCategory(null)}
            onClick={() => {
              setActiveCategory(true);
              setHoveredCategory(category.name)
            }}
            className={`flex items-center justify-center p-7 cursor-pointer  relative bg-[#FEF2F2]
                 ${
                  hoveredCategory === category.name
                    ? "bg-[#FFFFFF]"
                    : "bg-[#FEF2F2]"
                }
                `}
          >
            {activeCategory && (
              <span
                className={`absolute left-0 top-0 h-full w-3 bg-red-500 transition-all
                ${
                  hoveredCategory === category.name
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              ></span>
            )}

            <div className="p-4 flex flex-col justify-center items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
              <span>{category.name}</span>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-500" />
          </li>
        ))}
      </ul>

      {/* Danh mục con */}
      {hoveredCategory && (
        <div
          className="absolute left-64 ml-3  top-0 mt-3 bottom-0 right-2  bg-white shadow-lg rounded-md p-4 min-w-[200px] max-h-screen overflow-y-auto"
          onMouseEnter={() =>!isOpen&& setHoveredCategory(hoveredCategory)}
          onMouseLeave={() =>!isOpen&& setHoveredCategory(null)}
        >
          <h3 className="font-semibold mb-2">{hoveredCategory}</h3>
          <ul>
            {categories
              .find((cat) => cat.name === hoveredCategory)
              ?.subcategories.map((sub, index) => (
                <li
                  key={index}
                  className="py-1 text-gray-700 hover:text-red-500 cursor-pointer"
                >
                  {sub}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryMenu;
