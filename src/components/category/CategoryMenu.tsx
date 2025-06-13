"use client";

import { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Điện thoại",
    src: "/categoryIcon_1.webp",
    subtitle: "Thương hiệu",
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
    brands: ["Apple", "Samsung", "OPPO", "Xiaomi", "realme", "Vivo", "Nokia", "Sony"],
    Hot: [
      {
        image: "/products/iphone15.webp",
        name: "iPhone 15 Pro Max",
      },
      {
        image: "/products/iphone15.webp",
        name: "iPhone 15 Pro Max",
      },
      {
        image: "/products/iphone15.webp",
        name: "iPhone 15 Pro Max",
      },
      {
        image: "/products/iphone15.webp",
        name: "iPhone 15 Pro Max",
      },
    ],
  },
  {
    id: 2,
    name: "Tablet",
    src: "/categoryIcon_2.webp",
    subtitle: "Thương hiệu",
    subcategories: ["iPad", "Samsung Galaxy Tab", "Lenovo Tab"],
    brands: ["Apple", "Samsung", "OPPO", "Xiaomi", "realme", "Vivo", "Nokia", "Sony"],
    Hot: [
      {
        image: "/products/iphone15.webp",
        name: "iPhone 15 Pro Max",
      },
      {
        image: "/products/iphone15.webp",
        name: "iPhone 15 Pro Max",
      },
      {
        image: "/products/iphone15.webp",
        name: "iPhone 15 Pro Max",
      },
      {
        image: "/products/iphone15.webp",
        name: "iPhone 15 Pro Max",
      },
    ],
  },
  {
    id: 3,
    name: "Mac",
    src: "/categoryIcon_3.webp",
    subcategories: ["MacBook Air", "MacBook Pro"],
  },
  {
    id: 4,
    name: "Máy cũ giá rẻ",
    src: "/categoryIcon_4.webp",
    subcategories: ["Điện thoại cũ", "Laptop cũ", "Máy tính bảng cũ"],
  },
  {
    id: 5,
    name: "Phụ kiện",
    src: "/categoryIcon_10.webp",
    subcategories: ["Sạc & Cáp", "Ốp lưng", "Tai nghe", "Chuột & Bàn phím", "Cường lực"],
  },
  {
    id: 6,
    name: "Đồng hồ",
    src: "/categoryIcon_11.webp",
    subtitle: "Thương hiệu",
    subcategories: ["Apple Watch", "Samsung Galaxy Watch", "Đồng hồ thông minh"],
  },
  {
    id: 7,
    name: "Âm thanh",
    src: "/categoryIcon_6.webp",
    subcategories: ["Tai nghe không dây", "Loa Bluetooth"],
  },
  {
    id: 8,
    name: "Apple (AAR)",
    src: "/categoryIcon_12.webp",
    subtitle: "Thương hiệu",
    subcategories: ["iPhone", "MacBook", "iPad", "Apple Watch"],
  },
  {
    id: 9,
    name: "Xe điện",
    src: "/categoryIcon_9.webp",
    subcategories: ["Xe máy điện", "Xe đạp điện"],
  },
  {
    id: 10,
    name: "Màn hình & Tivi",
    src: "/categoryIcon_15.webp",
    subcategories: ["Màn hình máy tính", "Smart TV"],
  },
  {
    id: 11,
    name: "Thu cũ đổi mới",
    src: "/categoryIcon_16.webp",
    subtitle: "Thương hiệu",
    subcategories: ["Thu cũ iPhone", "Thu cũ MacBook", "Thu cũ iPad"],
  },
];

const CategoryMenu = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(1); // Mặc định là id = 1
  const [activeCategory, setActiveCategory] = useState<number | null>(1);   // Mặc định là id = 1
  const isOpen = useSelector((state: RootState) => state.sidebar.value);

  return (<>{isOpen&& <div className="relative py-3 z-50">
      <ul className="w-20 scroll-container overflow-y-auto overflow-x-hidden max-h-screen  bg-white shadow-lg rounded-md font-bold pb-20">
        {categories.map((category) => (
          <li
            key={category.id}
            onMouseEnter={() => !isOpen && setHoveredCategory(category.id)}
            onMouseLeave={() => !isOpen && setHoveredCategory(null)}
            onClick={() => {
              setActiveCategory(category.id);
              setHoveredCategory(category.id);
            }}
            className={`flex items-center justify-center cursor-pointer relative transition-all 
              ${hoveredCategory === category.id ? "bg-white" : "bg-[#FEF2F2]"}`}
          >
            {activeCategory === category.id && (
              <span
                className={`absolute left-0 top-0 h-full w-2 bg-red-500 transition-all ${
                  hoveredCategory === category.id ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
            <div className="p-4 relative flex flex-col justify-center items-center gap-2">
              <Image
                src={category.src}
                alt={category.name}
                className="w-7 h-7 transform transition-transform duration-300 hover:scale-105"
                width={80}
                height={80}
              />
              <span className="text-center text-xs">{category.name}</span>
            </div>
            <ChevronUpIcon className={ `"w-5 h-5 text-gray-500 absolute right-0 transition-transform duration-500 ease-in-out" ${hoveredCategory === category.id && "-rotate-[-90deg] text-red-300"} `} />
          </li>
        ))}
      </ul>

      {hoveredCategory !== null && (
        <div
          className="scroll-container absolute top-0 mt-3 bottom-0 left-[5.4rem] bg-white shadow-lg rounded-md p-4 min-w-[230px] max-h-screen overflow-y-auto"
          onMouseEnter={() => !isOpen && setHoveredCategory(hoveredCategory)}
          onMouseLeave={() => !isOpen && setHoveredCategory(null)}
        >
          <h3 className="font-semibold mb-2">
            {categories.find((cat) => cat.id === hoveredCategory)?.name}
          </h3>
          <ul>
            {categories
              .find((cat) => cat.id === hoveredCategory)
              ?.subcategories.map((sub, index) => (
                <li
                  key={index}
                  className="py-1 text-gray-700 hover:text-red-500 cursor-pointer text-sm"
                >
                  {sub}
                  
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>} </>
   
  );
};

export default CategoryMenu;
