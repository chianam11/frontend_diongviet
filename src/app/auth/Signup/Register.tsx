"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login form submitted");
  };

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="xs:w-[30.8rem] sm:w-[33.8rem] md:w-[35.8rem] lg:w-[37.8rem] xl:w-[40rem] 2xl:w-[42rem] 3xl:w-[45rem] xs:h-[55rem] sm:h-[60.5rem] md:h-[63rem] lg:h-[64rem] xl:h-[66rem] 2xl:h-[67rem] 3xl:h-[68rem] rounded-2xl shadow-2xl px-[3.5rem] py-[3rem]">
        
        {/* Link Quay lại Login */}
        <Link
          href="/auth/login"
          className="absolute top-[1rem] left-[1rem] text-blue-500 text-[1.5rem] flex items-center gap-2 hover:underline"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Quay lại Login</span>
        </Link>

        <p className="text-center font-black text-[2.1rem] mt-[2rem] xs:text-[1.58rem] sm:text-[1.88rem] md:text-[2.16rem] lg:text-[2.34rem] xl:text-[2.52rem] 2xl:text-[2.7rem] 3xl:text-[2.88rem]">
          Register
        </p>
        <form onSubmit={handleSubmit} className="mt-9">
          <div className="flex flex-col relative h-[6rem] py-6 mt-5">
            <label htmlFor="name" className="text-[1.2rem] font-thin xs:text-[0.77rem] sm:text-[0.85rem] md:text-[0.93rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem]">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="xs:text-[1.23rem] sm:text-[1.35rem] md:text-[1.44rem] lg:text-[1.52rem] xl:text-[1.6rem] 2xl:text-[1.76rem] 3xl:text-[1.92rem] text-[1.2rem] border-b-2 border-gray-300 focus:border-gray-500 focus:rounded-md focus:shadow-lg outline-none w-full p-3"
              placeholder="abcxyz..."
              maxLength={100}
            />
          </div>
          <div className="flex flex-col relative h-[6rem] py-6 mt-5">
            <label htmlFor="name" className="text-[1.2rem] font-thin xs:text-[0.77rem] sm:text-[0.85rem] md:text-[0.93rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem]">
              Your Email
            </label>
            <input
              type="text"
              id="name"
              className="xs:text-[1.23rem] sm:text-[1.35rem] md:text-[1.44rem] lg:text-[1.52rem] xl:text-[1.6rem] 2xl:text-[1.76rem] 3xl:text-[1.92rem] text-[1.2rem] border-b-2 border-gray-300 focus:border-gray-500 focus:rounded-md focus:shadow-lg outline-none w-full p-3"
              placeholder="abcxyz..."
              maxLength={100}
            />
          </div>
          <div className="flex flex-col relative h-[6rem] py-6 mt-5">
            <label htmlFor="name" className="text-[1.2rem] font-thin xs:text-[0.77rem] sm:text-[0.85rem] md:text-[0.93rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem]">
              Your Phone Number
            </label>
            <input
              type="text"
              id="name"
              className="xs:text-[1.23rem] sm:text-[1.35rem] md:text-[1.44rem] lg:text-[1.52rem] xl:text-[1.6rem] 2xl:text-[1.76rem] 3xl:text-[1.92rem] text-[1.2rem] border-b-2 border-gray-300 focus:border-gray-500 focus:rounded-md focus:shadow-lg outline-none w-full p-3"
              placeholder="abcxyz..."
              maxLength={100}
            />
          </div>
          <div className="flex flex-col relative h-[6rem] py-6 mt-5">
            <label htmlFor="password" className="text-[1.2rem] font-medium xs:text-[0.77rem] sm:text-[0.85rem] md:text-[0.93rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem]">
              Password
            </label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="******"
                className="xs:text-[1.23rem] sm:text-[1.35rem] md:text-[1.44rem] lg:text-[1.52rem] xl:text-[1.6rem] 2xl:text-[1.76rem] 3xl:text-[1.92rem] text-[1.2rem] border-b-2 border-gray-300 focus:border-gray-500 focus:rounded-md focus:shadow-lg outline-none w-full p-3"
                maxLength={100}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="absolute right-[1rem] top-1/2 transform -translate-y-1/2 cursor-pointer xs:w-[1.54rem] sm:w-[1.69rem] md:w-[1.8rem] lg:w-[1.9rem] xl:w-[2rem] 2xl:w-[2.2rem] 3xl:w-[2.4rem]"
                onClick={handleTogglePassword}
              />
            </div>
          </div>
          <div className="flex flex-col relative h-[6rem] py-6 mt-5">
            <label htmlFor="password" className="text-[1.2rem] font-medium xs:text-[0.77rem] sm:text-[0.85rem] md:text-[0.93rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem]">
              Confirm Password
            </label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="******"
                className="xs:text-[1.23rem] sm:text-[1.35rem] md:text-[1.44rem] lg:text-[1.52rem] xl:text-[1.6rem] 2xl:text-[1.76rem] 3xl:text-[1.92rem] text-[1.2rem] border-b-2 border-gray-300 focus:border-gray-500 focus:rounded-md focus:shadow-lg outline-none w-full p-3"
                maxLength={100}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="absolute right-[1rem] top-1/2 transform -translate-y-1/2 cursor-pointer xs:w-[1.54rem] sm:w-[1.69rem] md:w-[1.8rem] lg:w-[1.9rem] xl:w-[2rem] 2xl:w-[2.2rem] 3xl:w-[2.4rem]"
                onClick={handleTogglePassword}
              />
            </div>
          </div>
          <button
            type="submit"
            className="xs:text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.5rem] w-full bg-red-500 text-white py-3 rounded-md mt-[6rem]"
          >
            Join now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
