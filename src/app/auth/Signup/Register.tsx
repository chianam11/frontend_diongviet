"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosInstance from "@/axios/axiosInstance";
import { showCustomToast } from "@/components/toastifyAlert/ShowToast";
import { useRouter } from "next/navigation";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Vui lòng nhập tên"),
      username: Yup.string()
        .required("Vui lòng nhập tên tài khoản")
        .email("Tên tài khoản phải là email hợp lệ"),
      password: Yup.string()
        .required("Vui lòng nhập mật khẩu")
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Mật khẩu xác nhận không khớp")
        .required("Vui lòng xác nhận mật khẩu"),
    }),
    onSubmit: async (values) => {
      try {
        const res = await axiosInstance.post("/api/v1/auth/register", values);
        if (res.status === 200) {
          showCustomToast({
            title: "Thông báo",
            type: "success",
            message: "Đăng ký tài khoản thành công.",
          });
          router.push("/auth/login");
        }
      } catch (error) {
        console.error("Error during registration:", error);
        showCustomToast({
          title: "Lỗi",
          type: "error",
          message: "Tên tài khoản đã tồi tại.",
        });
      }
    },
  });

  return (
    <div className="max-w-[450px] mx-auto lg:mt-3 relative">
      <div className="w-full bg-white py-10 px-5 lg:px-10 rounded-lg shadow-xl">
        <h2 className="text-2xl text-center font-bold mb-5 lg:text-3xl">
          Tạo mới tài khoản
        </h2>

        <form onSubmit={formik.handleSubmit}>
          {/* Name */}
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Tên của bạn
            </label>
            <input
              type="text"
              id="name"
              {...formik.getFieldProps("name")}
              className="w-full border shadow-sm p-3 rounded-lg outline-none focus:ring-2 focus:ring-gray-300"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          {/* Username */}
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block text-sm font-medium mb-1"
            >
              Tên tài khoản (email)
            </label>
            <input
              type="text"
              id="username"
              {...formik.getFieldProps("username")}
              className="w-full border shadow-sm p-3 rounded-lg outline-none focus:ring-2 focus:ring-gray-300"
            />
            {formik.touched.username && formik.errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.username}
              </p>
            )}
          </div>

          {/* Password */}
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Mật khẩu
          </label>
          <div className="mb-5 relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...formik.getFieldProps("password")}
              className="w-full border shadow-sm p-3 rounded-lg outline-none focus:ring-2 focus:ring-gray-300"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium mb-1"
          >
            Xác nhận mật khẩu
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              {...formik.getFieldProps("confirmPassword")}
              className="w-full border shadow-sm p-3 rounded-lg outline-none focus:ring-2 focus:ring-gray-300"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.confirmPassword}
                </p>
              )}
          </div>

          <Link
            href="/auth/login"
            className=" underline text-blue-500 block text-center my-2 hover:underline"
          >
            Quay lại trang đăng nhập
          </Link>

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
