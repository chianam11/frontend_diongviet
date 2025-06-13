"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { shouldRefetch } from "@/utils/shouldRefetch";
import { RootState } from "@/redux/store";
import { fetchProducts } from "@/redux/productSlice/product.Slice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

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

// ✅ Card sản phẩm đơn
const ProductCard: React.FC<Product> = ({
  name,
  price,
  product_image,
  discount,
  slug,
}) => {
  const imageUrl =
    product_image && product_image.startsWith("http")
      ? product_image
      : `${process.env.NEXT_PUBLIC_API_BASE_URL}/images/products/${
          product_image || ""
        }`;

  return (
    <div className="bg-white border pt-2 px-3 rounded-lg w-[200px] h-[420px] lg:w-[250px] text-sm cursor-pointer flex flex-col justify-bettwen shrink-0 ">
      <Link href={`/dien-thoai/${slug}`} className="block mb-2">
        {/* Gắn nhãn trả góp */}
        <div
          className="flex items-center justify-between text-red-500"
          style={{ height: 22 }}
        >
          <p className="whitespace-nowrap rounded-full px-2 text-11 font-medium border border-red-500 text-[0.6rem]">
            Trả góp 0%
          </p>
        </div>

        {/* Ảnh chính */}
        <div className="relative w-full h-[180px] overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            priority
            fill
            className="object-contain transform transition-transform duration-300 ease-in-out hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Banner khuyến mãi */}
        <div className="relative w-[50%] h-[50px] my-3">
          <Image
            src="/1743817539726_1741261309995_0_phaa_1.webp"
            alt="sale"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 50vw, 150px"
          />
        </div>

        {/* Tên sản phẩm */}
        <h3 className="font-semibold text-sm line-clamp-2 min-h-[40px]">
          {name}
        </h3>

        {/* Giá */}
        <p className="text-red-500 font-bold">
          {price?.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </p>

        {/* Discount */}
        {discount && (
          <span className="bg-red-500 text-white px-2 py-1 rounded text-xs mt-1 inline-block">
            -{discount}%
          </span>
        )}

        {/* Ưu đãi thêm */}
        <div className="flex items-center justify-start rounded my-3 bg-slate-200 px-2 py-1">
          <div className="w-full text-left text-[10px] leading-tight">
            <p>
              <strong>
                Giảm thêm đến{" "}
                <span className="text-red-600">
                  200K <span className="text-black">qua VNPAY&nbsp;</span>
                </span>
              </strong>
            </p>
            <p>
              Trả góp: Cam kết 0 lãi, <strong>0 phí phát sinh</strong>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

// ✅ Component danh mục sản phẩm cuộn ngang
const ProductCategory: React.FC<ProductCategoryProps> = ({ title, brand }) => {
  const dispatch = useAppDispatch();
  const productState = useAppSelector((state: RootState) => state.products);
  const brandData = productState.productsByBrand[brand] || {
    data: [],
    lastFetched: null,
  };

  useEffect(() => {
    if (shouldRefetch(brandData.lastFetched)) {
      dispatch(fetchProducts({ brand }));
    }
  }, [brand, brandData.lastFetched]);
  console.log(brandData);

  return (
    <section className="rounded-lg shadow-xl p-3 mb-10 flex flex-col justify-center overflow-x-auto  bg-white">
      <div>
        <Link href="/dien-thoai.html">
          <h2 className="font-bold text-[#a42e2e] mb-3 text-lg">{title}</h2>
        </Link>

        <div className=" scrollbar-hide lg:mx-auto justify-around .scroll-container flex overflow-x-auto gap-3 scroll-smooth scrollbar-hide scroll-container">
          {brandData.data.map((p) => (
            <ProductCard key={p.slug} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
