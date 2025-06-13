"use client";
import ChevronLeft from "@/components/chevronIcon/ChevronLeft";
import Link from "next/link";
import ListProduct from "./ListProduct";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
const Page = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {}, [items]);
  return (
    <div className="mt-4 p-4 border rounded-lg">
      <Link href="/" className="default-text-color flex items-center">
        <ChevronLeft className="size-3" />
        Tiếp tục mua hàng
      </Link>
      <div>
        <ListProduct />
      </div>
    </div>
  );
};

export default Page;
