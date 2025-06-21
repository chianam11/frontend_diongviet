"use client";
import { useState, useCallback, ChangeEvent, FormEvent } from "react";
import {
  PencilIcon,
  EyeIcon,
  EyeSlashIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { logout } from "@/redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { showCustomToast } from "@/components/toastifyAlert/ShowToast";
import { clearCart } from "@/redux/cartSlice/cart_slice";
import Image from "next/image";
const UserProfile = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [user, setUser] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    registrationDate: "2023-01-15",
    isVerified: true,
    profileImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
  });

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  console.log(showPasswordModal);

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prev) => ({ ...prev, profileImage: reader.result as string }));
        showCustomToast({
          type: "success",
          title: "Thành công",
          message: "Ảnh đại diện đã được cập nhật!",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setPasswords((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const getPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const handlePasswordSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      showCustomToast({
        type: "success",
        title: "Thành công",
        message: "Mật khẩu đã được cập nhật!",
      });
      setShowPasswordModal(false);
      setPasswords({ current: "", new: "", confirm: "" });
    } catch (error) {
      console.log(error);

      showCustomToast({
        type: "error",
        title: "Lỗi",
        message: "Cập nhật mật khẩu thất bại!",
      });
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(clearCart());
      dispatch(logout());
      showCustomToast({
        type: "success",
        title: "Thông báo",
        message: "Đăng xuất thành công",
      });
      return router.push("/");
    } catch (error) {
      console.log("Logout failed:", error);
      showCustomToast({
        type: "error",
        title: "Lỗi",
        message: "Đăng xuất thất bại!",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Profile Header */}
      <div className="mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-32 default-bg-color">
          <div className="absolute -bottom-16 left-8">
            <div className="relative">
              <Image
                src={user.profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
              <label className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer hover:bg-blue-600 transition">
                <PencilIcon className="w-5 h-5 text-white" />
                <input
                  type="file"
                  className="hidden"
                  onChange={handleImageUpload}
                  accept="image/*"
                />
              </label>
            </div>
          </div>
        </div>

        <div className="pt-20 px-8 pb-8 flex flex-col items-start">
          <div>
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                {user.fullName}
              </h1>
              {user.isVerified && (
                <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                  <CheckCircleIcon className="w-4 h-4 mr-1 text-green-700" />
                  Verified
                </span>
              )}
            </div>
            <p className="text-gray-600">{user.email}</p>
          </div>

          <div className="mt-2">
            <button
              onClick={() => setShowLogoutModal(true)}
              className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none "
            >
              Đăng xuất
            </button>
          </div>

          {showLogoutModal && (
            <div className="relative z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                  className="fixed inset-0 transition-opacity"
                  aria-hidden="true"
                >
                  <div className="fixed inset-0 bg-gray-500 opacity-75"> </div>
                </div>
                <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:text-left">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Confirm Logout
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Are you sure you want to log out?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Logout
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowLogoutModal(false)}
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* User Information */}
      <div className="mx-auto mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            ["Full Name", user.fullName, "fullName"],
            ["Email", user.email, "email"],
            ["Phone", user.phone, "phone"],
            [
              "Registration Date",
              user.registrationDate,
              "registrationDate",
              true,
            ],
          ].map(([label, value, key, readOnly]) => (
            <div key={key as string}>
              <label className="block text-sm font-medium text-gray-700">
                {label}
              </label>
              <input
                type={key === "email" ? "email" : "text"}
                value={value as string}
                readOnly={readOnly as boolean}
                onChange={(e) =>
                  !readOnly &&
                  setUser((prev) => ({
                    ...prev,
                    [key as string]: e.target.value,
                  }))
                }
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  readOnly ? "bg-gray-50" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Password Change Section */}
      <div className="mx-auto mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Change Password</h2>
        <form onSubmit={handlePasswordSubmit}>
          <div className="space-y-4">
            {Object.entries(passwords).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 capitalize">
                  {key === "new"
                    ? "New Password"
                    : `${key.charAt(0).toUpperCase() + key.slice(1)} Password`}
                </label>
                <div className="mt-1 relative">
                  <input
                    type={
                      showPassword[key as keyof typeof showPassword]
                        ? "text"
                        : "password"
                    }
                    name={key}
                    value={value}
                    onChange={handlePasswordChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((prev) => ({
                        ...prev,
                        [key]: !prev[key as keyof typeof prev],
                      }))
                    }
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword[key as keyof typeof showPassword] ? (
                      <EyeSlashIcon className="w-5 h-5 text-gray-400" />
                    ) : (
                      <EyeIcon className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {passwords.new && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Password Strength
              </p>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className={`h-full rounded-full transition-all ${
                    [
                      "bg-red-500",
                      "bg-orange-500",
                      "bg-yellow-500",
                      "bg-blue-500",
                      "bg-green-500",
                    ][getPasswordStrength(passwords.new) - 1]
                  }`}
                  style={{
                    width: `${getPasswordStrength(passwords.new) * 20}%`,
                  }}
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
