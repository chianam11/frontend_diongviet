"use client";

import Image from "next/image";
import Link from "next/link";
import axiosInstance from "@/axios/axiosInstance";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  product_image: string;
  slug?: string;
  stock?: number;
  description?: string;
  createdAt?: string;
  discount?: number;
}

interface ProductCategoryProps {
  title: string;
  brand: string;
}

const ProductCard: React.FC<Product> = ({ name, price, product_image, discount,slug }) => {
  const imageUrl =
    product_image && product_image.startsWith("http")
      ? product_image
      : `${process.env.NEXT_PUBLIC_API_BASE_URL}/images/products/${product_image || ""}`;

  return (
    <div className="border p-4 rounded-lg min-w-72 cursor-pointer">
      <Link href={`/dien-thoai/${slug}`} className="block mb-2">

       <div className="overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-105"
          width={150}
          height={150}
        />
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-red-500 font-bold">{price} đ</p>
      {discount && <span className="bg-red-500 text-white p-1">{discount}%</span>}
      </Link>
     
    </div>
  );
};

const ProductCategory: React.FC<ProductCategoryProps> = ({ title, brand }) => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const handleGetProduct = async () => {
      try {
        const response = await axiosInstance.get(`/api/v1/products/phones?page=1&limit=5&brand=${brand}`);
        setData(response.data.results || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    handleGetProduct();
  }, [brand]);

  return (
    <section className="rounded-lg shadow-xl p-6 mb-10">
      <Link href={"/dien-thoai"}>
        <h2 className="text-xl font-bold text-[#a42e2e] mb-3">{title}</h2>
      </Link>
      <div className="flex overflow-x-auto scroll-container gap-3">
        {data.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;
