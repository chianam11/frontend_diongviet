"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const ForgotPassword = () => {
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login form submitted");
  };

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="xs:w-[30.8rem] sm:w-[33.8rem] md:w-[35.8rem] lg:w-[37.8rem] xl:w-[40rem] 2xl:w-[42rem] 3xl:w-[45rem] xs:h-[51rem] sm:h-[60.5rem] md:h-[63rem] lg:h-[51rem] xl:h-[66rem] 2xl:h-[51rem] 3xl:h-[51rem] rounded-2xl shadow-2xl px-[3.5rem] py-[3rem] ">
      <Link
          href="/auth/login"
          className="absolute top-[1rem] left-[1rem] text-blue-500 text-[1.5rem] flex items-center gap-2 hover:underline"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-md"/>
          <span>Quay lại Login</span>
        </Link>
      <p className="text-center font-black text-[2.1rem] mt-[2rem] xs:text-[1.58rem] sm:text-[1.88rem] md:text-[2.16rem] lg:text-[2.34rem] xl:text-[2.52rem] 2xl:text-[2.7rem] 3xl:text-[2.88rem]">
          Quên mật khẩu!
        </p>
        <form onSubmit={handleSubmit} className="mt-9">
          <div className="flex flex-col relative h-[6rem] py-6">
            <label htmlFor="name" className="text-[1.2rem] font-thin xs:text-[0.77rem] sm:text-[0.85rem] md:text-[0.93rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem]">
              Số điện thoại hoặc email của bạn.
            </label>
            <input
  type="text"
  id="name"
  className="xs:text-[1.23rem] sm:text-[1.35rem] md:text-[1.44rem] lg:text-[1.52rem] xl:text-[1.6rem] 2xl:text-[1.76rem] 3xl:text-[1.92rem] text-[1.2rem] border-b-2 border-gray-300 focus:border-gray-500 focus:rounded-md focus:shadow-lg outline-none w-full p-3"
  placeholder="abcxyz..."
  maxLength={100}
/>

          </div>
          <div className="flex flex-col relative h-[6rem] py-6 mt-2">
            <label htmlFor="codecode" className="text-[1.2rem] font-thin xs:text-[0.77rem] sm:text-[0.85rem] md:text-[0.93rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem]">
              Mã xác thực.
            </label>
            <div className="relative flex gap-5">
                <input
  type="text"
  id="code"
  className="xs:text-[1.23rem] sm:text-[1.35rem] md:text-[1.44rem] lg:text-[1.52rem] xl:text-[1.6rem] 2xl:text-[1.76rem] 3xl:text-[1.92rem] text-[1.2rem] border-b-2 border-gray-300 focus:border-gray-500 focus:rounded-md focus:shadow-lg outline-none w-full p-3"
  placeholder="abcxyz..."
  maxLength={10}
/>
<button className="absolute right-0 top-[50%] translate-y-[-50%] inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 text-[1.4rem]">
    Gửi mã ngay
  </button>  
            </div>
          
          </div>
<span className="text-[1.2rem] font-thin xs:text-[0.77rem] sm:text-[0.85rem] md:text-[0.93rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem] inline-block mt-9 text-green-600">Mã đã được gửi hãy kiểm tra email hoặc số điện thoại!</span>

          <button
  type="button"
  className="xs:text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.5rem] w-full bg-green-500 text-white py-3 rounded-md mt-[2.5rem]"
>
 Đặt lại mật khẩu.
</button>
<button
  type="submit"
  className="xs:text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.5rem] w-full bg-red-500 text-white py-3 rounded-md mt-[2rem]"
>
 Tiếp tục đăng nhập không cần mật khẩu.
</button>

        </form>
       
       
        <div className="mt-[2rem]">
       
          <div className="mt-[5.44rem] sm:mt-[5.95rem] md:mt-[6rem] lg:mt-[6.2rem] xl:mt-[6.4rem] 2xl:mt-[6.6rem] 3xl:mt-[2.5rem]">
            <Link href={"/auth/login"} className="xs:text-[1.32rem] sm:text-[1.45rem] md:text-[1.55rem] lg:text-[1.65rem] xl:text-[1.75rem] 2xl:text-[1.85rem] 3xl:text-[1.95rem] mx-2 text-gray-500 text-center block text-[1rem] underline">Quay lại đăng nhập?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
