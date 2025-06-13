"use client";
import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import { FaEnvelope, FaMobile } from "react-icons/fa";

const ForgotPassword: React.FC = () => {
  const [method, setMethod] = useState<"phone" | "email">("phone");
  const [contact, setContact] = useState<string>("");
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState<number>(60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const otpRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerRunning(false);
      setTimer(60);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timer]);

  const handleContactChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setContact(value);
    setError("");

    if (method === "phone") {
      const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
      if (value && !phoneRegex.test(value)) {
        setError("Số điện thoại không hợp lệ");
      }
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        setError("Email không hợp lệ");
      }
    }
  };

  const handleOtpChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5 && otpRefs.current[index + 1]) {
        otpRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleResendOtp = () => {
    setIsTimerRunning(true);
    // Gửi lại mã OTP logic tại đây
  };

  const isFormValid = (): boolean => {
    return contact !== "" && error === "" && otp.every((digit) => digit !== "");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Quên Mật Khẩu</h1>
        <p className="text-gray-600 mb-6">
          Vui lòng nhập thông tin để khôi phục mật khẩu của bạn
        </p>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
            <button
              className={`flex-1 py-2 rounded-md flex items-center justify-center gap-2 ${
                method === "phone"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600"
              }`}
              onClick={() => setMethod("phone")}
            >
              <FaMobile />
              SMS
            </button>
            <button
              className={`flex-1 py-2 rounded-md flex items-center justify-center gap-2 ${
                method === "email"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600"
              }`}
              onClick={() => setMethod("email")}
            >
              <FaEnvelope />
              Email
            </button>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              {method === "phone" ? "Số điện thoại" : "Email"}
            </label>
            <input
              type={method === "phone" ? "tel" : "email"}
              placeholder={`Nhập ${
                method === "phone" ? "số điện thoại" : "email"
              }`}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={contact}
              onChange={handleContactChange}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Mã xác thực OTP</label>
            <div className="flex gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                />
              ))}
            </div>
            <div className="mt-4 text-right">
              <button
                className={`text-sm ${
                  isTimerRunning
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-blue-600 hover:text-blue-700"
                }`}
                onClick={handleResendOtp}
                disabled={isTimerRunning}
              >
                {isTimerRunning ? `Gửi lại mã sau ${timer}s` : "Gửi lại mã OTP"}
              </button>
            </div>
          </div>

          <button
            className={`w-full py-3 rounded-lg text-white font-medium transition-colors ${
              isFormValid()
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isFormValid()}
          >
            Xác nhận
          </button>
        </div>

        <p className="text-center text-gray-600 text-sm">
          Bạn đã có tài khoản?{" "}
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            Đăng nhập
          </button>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
