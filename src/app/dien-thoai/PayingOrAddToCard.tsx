"use client";

import { FaBolt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/cartSlice/cart_slice";
import { RootState,AppDispatch } from "@/redux/store";

type PayingOrAddToCardProps = {
  slug: string;
};

const PayingOrAddToCard = ({ slug }: PayingOrAddToCardProps) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  // Lấy số lượng sản phẩm hiện tại trong giỏ
  const quantity = useSelector((state: RootState) => state.cart.items[slug] || 0);

  const handleCheckout = () => { 
    if (quantity < 3) {
        dispatch(addToCart({ slug, quantity:1 }));
    }

  
    router.push("/check-out");
  };

  

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        className="flex items-center justify-center gap-2 px-6 py-3 default-bg-color text-white rounded-lg hover:bg-red-700 hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 w-full sm:w-auto"
        aria-label="Buy now"
        onClick={handleCheckout}
      >
        <FaBolt className="text-lg" />
        <span>Mua ngay</span>
      </button>

     
    </div>
  );
};

export default PayingOrAddToCard;
