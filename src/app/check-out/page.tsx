"use client"; // 👈 Phải có để dùng hook client-side

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="rounded-lg bg-white p-4 text-xl">
      <Link href="/" className="flex text-red-500 font-bold">
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
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        <span>Tiếp tục mua hàng</span>
      </Link>
      {/* <div className="w-full text-center">
        <Image
          src="/noresults.png"
          width={300}
          height={300}
          alt="checkout"
          className="mx-auto"
        />
        <p className="text-center">Không có sản phẩm nào</p>
        <button
          className="bg-[#BE1E2D] px-20 py-3 text-white rounded-xl"
          onClick={() => {
            router.push("/"); // ✅ Chuyển hướng client-side
          }}
        >
          Về trang chủ
        </button>
        <p>
          Khi cần trợ giúp, Vui lòng gọi{" "}
          <Link href="tel:18006018" className="text-blue-500 underline">
            18006018
          </Link>{" "}
          (7:30 - 22:00)
        </p>
      </div> */}

      <div className="flex m-5 border-b border-gray-200 p-3">
        <div className="relative w-[400px] h-[100px] mx-auto">
          <Image
            src="/iphone-13-128gb-didongviet_1.avif"
            alt="checkout"
            fill
            className="object-contain"
          />
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id
            quos eum consequuntur deserunt at provident iure commodi. Beatae
            pariatur ipsa, commodi quaerat sunt libero consequuntur, quo neque
            adipisci totam voluptates ut vero non! Quod ducimus minima,
            distinctio perspiciatis omnis error maiores cumque, voluptatum ut,
            fuga aliquid rem animi id.
          </p>
          <span className="font-bold text-red-500 inline-block my-2">
            27.200.200 đ
          </span>
          <div className="flex justify-between items-center">
            <div className="flex justify-around gap-2 items-center">
              <button className="bg-slate-300 px-3 py-2 rounded font-extrabold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              </button>
              <span className="bg-slate-200 px-3 p-1 rounded font-bold">1</span>
              <button className="bg-slate-300 px-3 py-2 rounded font-extrabold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
            <button >
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
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className="uppercase font-medium">Thông tin khách hàng</p>
        <div className="flex gap-3">
          <label htmlFor="male">Anh</label>
          <input type="radio" id="male" name="sex" className="accent-blue-500"/>
          <label htmlFor="female">Chị</label>
          <input type="radio" id="female" name="sex" className="accent-[red]"/>
        </div>
        <form action="">
          <div className="flex justify-between items-center w-full gap-10 my-5 border-b border-gray-200 py-5">
            <div className="flex flex-col w-full">
              <label htmlFor="name">Họ và tên</label>
              <input type="text"  className="border-b border-gray-200 my-2"/>
            </div>
            <div className="flex flex-col w-full">
               <label htmlFor="name">Số điện thoại</label>
              <input type="text" className="border-b border-gray-200 my-2"/>
            </div>
          </div>
          <div>
        <p className="uppercase font-medium">Hình thức giao hàng</p>
        <div className="flex gap-3">
          <label htmlFor="home_delivery">Giao hàng tận nơi</label>
          <input type="radio" id="home_delivery" name="method" className="accent-blue-500"/>
          <label htmlFor="at_store">Nhận hàng tại cửa hàng</label>
          <input type="radio" id="at_store" name="method" className="accent-[red]"/>
        </div>
          <div className="flex justify-between items-center w-full gap-10 my-5 border-b border-gray-200 py-5">
            <div className="flex flex-col w-full">
              <label htmlFor="name">Tỉnh thành</label>
              <input type="text"  className="border-b border-gray-200 my-2"/>
            </div>
            <div className="flex flex-col w-full">
               <label htmlFor="name">Quận huyện</label>
              <input type="text" className="border-b border-gray-200 my-2"/>
            </div>
            <div>
              <label htmlFor="">Phường xã</label>
            </div>
            <div>
            <label htmlFor="">Tên đường số nhà</label>

            </div>
            <div>
            <label htmlFor="">Yêu cầu khác nếu có</label>

            </div>
            <div>
            <label htmlFor="">Gọi người khác nhận hàng nếu có</label>

            </div>
            <div>
            <label htmlFor="">Xuất hóa đơn công ty</label>

            </div>
          </div>
          
        
      </div>

        </form>
        
      </div>
    </div>
  );
};

export default Page;
