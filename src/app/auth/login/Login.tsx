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
import { useDispatch,useSelector } from "react-redux";
import { login,logout } from "@/redux/user/userSlice";
import { RootState } from "@/redux/store";
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
  const [err, setErr] = useState<string | null>(null);
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.authSlice.user)
  console.log(userData);
  
  const formik = useFormik<FormData>({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      setErr(null); // clear error cũ nếu có
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
          const {user} = response.data.data;
          localStorage.setItem('user', JSON.stringify(user));
           dispatch(login(user))
          console.log("Login success:", response.data);
          router.push("/"); // điều hướng về trang chủ
        } else {
          setErr("Tài khoản hoặc mật khẩu không chính xác!");
        }
      } catch (e: any) {
        // Nếu server trả lỗi từ backend, lấy thông điệp lỗi
        console.log(e);
        
        const message = e.response?.data?.message || "Có lỗi xảy ra khi đăng nhập.";
        setErr("Tài khoản hoặc mật khẩu không chính xác");
        console.error("Login error:", message);
      }
    },
  });
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-[2rem]">
      <div className="w-full max-w-[40rem] bg-white p-[3rem] rounded-[2rem] shadow-xl">
        <h2 className="text-[2.4rem] font-bold text-center mb-[2rem]">
          Đăng nhập
        </h2>
{err&& <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">{err}</span> 
</div>}
       

        <form onSubmit={formik.handleSubmit}>
          {/* Username */}
          <div className="mb-[2rem]">
            <label
              htmlFor="username"
              className={`block text-[1.4rem] font-medium mb-[0.6rem] ${
                formik.errors.username && formik.touched.username
                  ? "text-red-500"
                  : ""
              }`}
            >
              {formik.errors.username && formik.touched.username
                ? formik.errors.username
                : "Tên tài khoản"}
            </label>
            <input
              id="username"
              type="text"
              maxLength={100}
              {...formik.getFieldProps("username")}
              className={`w-full px-[1.5rem] py-[1.2rem] border rounded-[0.8rem] shadow-sm text-[1.6rem] focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                formik.errors.username && formik.touched.username
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="abcxyz..."
            />
          </div>

          {/* Password */}
          <div className="mb-[2rem] relative">
            <label
              htmlFor="password"
              className={`block text-[1.4rem] font-medium mb-[0.6rem] ${
                formik.errors.password && formik.touched.password
                  ? "text-red-500"
                  : ""
              }`}
            >
              {formik.errors.password && formik.touched.password
                ? formik.errors.password
                : "Mật khẩu"}
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              maxLength={100}
              {...formik.getFieldProps("password")}
              className={`w-full px-[1.5rem] py-[1.2rem] border rounded-[0.8rem] shadow-sm pr-[4rem] text-[1.6rem] focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                formik.errors.password && formik.touched.password
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="******"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="absolute right-[1rem] top-[3.8rem] cursor-pointer text-gray-500 w-[2rem] h-[2rem]"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full bg-blue-500 text-white py-[1.2rem] rounded-[0.8rem] hover:bg-blue-600 transition disabled:opacity-50 text-[1.6rem] font-medium"
          >
            {formik.isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>

        {/* Forgot password */}
        <div className="text-right mt-[1.2rem]">
          <Link
            href="/auth/forgot-password"
            className="text-blue-500 text-[1.4rem] hover:underline"
          >
            Quên mật khẩu?
          </Link>
        </div>

        {/* Social login */}
        <div className="text-center text-gray-500 my-[2rem] text-[1.4rem]">
          Hoặc đăng nhập bằng
        </div>
        <div className="flex justify-center gap-[1.2rem]">
          <button className="bg-blue-600 text-white p-[1.2rem] rounded-full text-[1.8rem]">
            <FontAwesomeIcon icon={faFacebook} />
          </button>
          <button className="bg-red-600 text-white p-[1.2rem] rounded-full text-[1.8rem]">
            <FontAwesomeIcon icon={faGoogle} />
          </button>
          <button className="bg-blue-400 text-white p-[1.2rem] rounded-full text-[1.8rem]">
            <FontAwesomeIcon icon={faTwitter} />
          </button>
        </div>

        {/* Signup */}
        <div className="mt-[2rem] text-center">
          <Link
            href="/auth/Signup"
            className="text-[1.4rem] text-gray-600 underline"
          >
            Tạo tài khoản mới?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
