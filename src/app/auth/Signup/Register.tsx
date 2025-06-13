"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
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
    <div className="max-w-[450px] mx-auto lg:mt-3 relative">
      {/* Link quay lại Login */}

      <div className="w-full bg-white py-10 px-5 lg:px-10 rounded-lg shadow-xl">
        <h2 className="text-2xl text-center font-bold mb-5 lg:text-3xl">
          Tạo mới tài khoản
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Tên của bạn
            </label>
            <input
              type="text"
              id="name"
              placeholder="abcxyz..."
              maxLength={100}
              className="w-full border shadow-sm p-3 rounded-lg outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="abcxyz@example.com"
              maxLength={100}
              className="w-full border shadow-sm p-3 rounded-lg outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Phone */}
          <div className="mb-5">
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Số điện thoại
            </label>
            <input
              type="text"
              id="phone"
              placeholder="0123456789"
              maxLength={100}
              className="w-full border shadow-sm p-3 rounded-lg outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Password */}
          <div className="mb-5 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Mật khẩu
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="******"
              maxLength={100}
              className="w-full border shadow-sm p-3 rounded-lg outline-none focus:ring-2 focus:ring-gray-300"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={handleTogglePassword}
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium mb-1"
            >
              Xác nhận mật khẩu
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="******"
              maxLength={100}
              className="w-full border shadow-sm p-3 rounded-lg outline-none focus:ring-2 focus:ring-gray-300"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={handleTogglePassword}
            />
          </div>
          <Link
            href="/auth/login"
            className=" underline text-blue-500 block text-center my-2 hover:underline"
          >
            Quay lại trang đăng nhập
          </Link>
          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white p-3 rounded-lg font-medium"
          >
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
