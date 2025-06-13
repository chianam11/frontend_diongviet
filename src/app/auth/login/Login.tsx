"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import axiosInstance from "@/axios/axiosInstance";
import Link from "next/link";
import { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/redux/user/userSlice";
import { RootState } from "@/redux/store";
import axios from "axios";
import { showCustomToast } from "@/components/toastifyAlert/ShowToast";
interface FormData {
  username: string;
  password: string;
}

const validate = (values: FormData) => {
  const errors: Partial<FormData> = {};

  if (!values.username) {
    errors.username = "Vui lòng nhập tên tài khoản.";
  }

  if (!values.password) {
    errors.password = "Vui lòng nhập mật khẩu.";
  }

  return errors;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.authSlice.user);
  console.log(userData);

  const formik = useFormik<FormData>({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        const { username, password } = values;

        const response = await axiosInstance.post(
          "/api/v1/auth/login",
          { username, password },
          { withCredentials: true }
        );
        console.log(response);

        // Trong trường hợp API trả về { status: 200, ... }
        if (response.data.status === 200) {
          const { user } = response.data.data;
          localStorage.setItem("user", JSON.stringify(user));
          dispatch(login(user));
          showCustomToast({
            type: "success",
            title: "Thông báo :",
            message: "Đăng nhập thành công",
          });
          router.push("/"); // điều hướng về trang chủ
        } else {
          showCustomToast({
            type: "error",
            title: "Đã xảy ra lỗi:",
            message: "Tài khoản hoặc mật khẩu không chính xác",
          });
        }
      } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
          showCustomToast({
            type: "error",
            title: "Đã có lỗi xảy ra: ",
            message: "Tài khoản hoặc mật khẩu chưa chính xác",
          });
        } else {
          showCustomToast({
            type: "error",
            title: "Đã có lỗi xảy ra: ",
            message: "Tài khoản hoặc mật khẩu chưa chính xác",
          });
        }
      }
    },
  });

  return (
    <div className=" max-w-[450px] mx-auto lg:mt-3 ">
      <div className="w-full max-w-[40rem] bg-white py-10 px-5 lg:px-10 rounded-lg shadow-xl">
        <h2 className="text-2xl text-center font-bold mb-5 lg:text-3xl">
          Đăng nhập
        </h2>

        <form onSubmit={formik.handleSubmit}>
          {/* Username */}

          <label
            htmlFor="username"
            className={`font-medium pb-2 lg-text-[1.1rem] inline-block ${
              formik.errors.username && formik.touched.username
                ? "text-red-500 "
                : ""
            }`}
          >
            {formik.errors.username && formik.touched.username
              ? formik.errors.username
              : "Tên tài khoản"}
          </label>
          <div className="mb-[2rem]">
            <input
              id="username"
              type="text"
              maxLength={100}
              {...formik.getFieldProps("username")}
              className={`w-full   border  shadow-sm p-3 rounded-lg outline-none focus:outline-none  ${
                formik.errors.username && formik.touched.username
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="abcxyz..."
            />
          </div>
          {/* Password */}
          <label
            htmlFor="password"
            className={`font-medium pb-2 lg-text-[1.1rem] inline-block  ${
              formik.errors.password && formik.touched.password
                ? "text-red-500"
                : ""
            }`}
          >
            {formik.errors.password && formik.touched.password
              ? formik.errors.password
              : "Mật khẩu"}
          </label>
          <div className="mb-5 relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              maxLength={100}
              {...formik.getFieldProps("password")}
              className={`w-full   border  shadow-sm p-3 rounded-lg outline-none focus:outline-none  ${
                formik.errors.password && formik.touched.password
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="******"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="absolute  right-3 top-[50%] translate-y-[-50%] text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>
          {/* Submit button */}
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full default-bg-color text-white p-3 rounded-lg lg:mt-5"
          >
            {formik.isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>

        {/* Forgot password */}
        <div className="text-right mt-[1.2rem]">
          <Link
            href="/auth/forgot-password"
            className="text-blue-500  hover:underline"
          >
            Quên mật khẩu?
          </Link>
        </div>

        {/* Social login */}
        <div className="text-center text-gray-500 my-3 ">
          Hoặc đăng nhập bằng
        </div>
        <div className="flex justify-center gap-[1.2rem]">
          <button className="bg-blue-600 text-white  rounded-full ">
            <FontAwesomeIcon icon={faFacebook} className="w-5 h-5 p-2" />
          </button>
          <button className="bg-red-600 text-white  rounded-full ">
            <FontAwesomeIcon icon={faGoogle} className="w-5 h-5 p-2" />
          </button>
          <button className="bg-blue-400 text-white  rounded-full p-2">
            <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
          </button>
        </div>

        {/* Signup */}
        <div className="mt-3 text-center">
          <Link href="/auth/Signup" className=" text-gray-600 underline">
            Tạo tài khoản mới?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
