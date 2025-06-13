"use client";

import { useEffect, useState } from "react";
import Logo from "../Logo";
import Menu from "../menu/Menu";
import NavInfoUser from "../auth/NavInfoUser";
import YourIcon from "../navIcon/YourIcon";
import CallIcon from "../navIcon/CallIcon";
import TrackOrderIcon from "../navIcon/TrackOrderIcon";
import PromoIcon from "../navIcon/PromoIcon";
import Cart from "../navIcon/Cart";
import InputSearch from "../inputSearch/InputSearch";
import StoreIcon from "../navIcon/StoreIcon";
import { showCustomToast } from "../toastifyAlert/ShowToast";
import FormSearch from "./FormSearch";
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWaitingForUpdate = () => {
    showCustomToast({
      type: "error",
      title: "Xin Lỗi:",
      message: "Chức năng hiện đang trong quá trình update.",
    });
  };
  return (
    <nav
      className={`bg-[#BE1E2D] sticky top-0 z-50 w-full transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      } py-4`}
    >
      <div className="max-w-[1280px] mx-auto px-4 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
        {/* Left: Menu + Logo + Cart Mobile */}
        <div className="flex items-center justify-around gap-4 w-full lg:w-auto">
          <Menu />
          <Logo />
          <div className="lg:hidden">
            <Cart />
          </div>
        </div>

        {/* Search Mobile */}
        <div className="relative w-full block lg:hidden">
          <InputSearch
            propStyle={{
              input: "w-full h-10 text-sm pl-4 pr-12 rounded-full outline-none",
              button:
                "absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FDE7EB] p-2 rounded-full",
            }}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center text-white gap-4 w-full lg:w-auto min-w-0 lg:flex">
          <ul className="flex items-center gap-4 w-full">
            <li>
              <button
                onClick={handleWaitingForUpdate}
                className="flex items-center gap-2 text-white py-2 text-nowrap px-2 bg-[#D1616C] rounded-2xl transition-all duration-300 truncate"
              >
                <YourIcon />
                <span>Danh mục</span>
              </button>
            </li>
            <li className="relative w-full max-w-[280px] ">
              <FormSearch />
            </li>
            <li>
              <button
                onClick={handleWaitingForUpdate}
                className="text-sm text-white flex items-center gap-1 truncate"
              >
                <CallIcon />
                Đặt hàng
              </button>
            </li>
            <li>
              <button
                onClick={handleWaitingForUpdate}
                className="text-sm text-white flex items-center gap-1 truncate"
              >
                <StoreIcon />
                Cửa hàng gần bạn
              </button>
            </li>
            <li>
              <button
                onClick={handleWaitingForUpdate}
                className="text-sm text-white flex items-center gap-1 truncate"
              >
                <TrackOrderIcon />
                Tra cứu đơn hàng
              </button>
            </li>
            <li>
              <button
                onClick={handleWaitingForUpdate}
                className="text-sm text-white flex items-center gap-1 truncate"
              >
                <PromoIcon />
                Khuyến mãi
              </button>
            </li>
            <li>
              <Cart />
            </li>
          </ul>
        </div>

        {/* User Info Desktop */}
        <div className="hidden lg:block">
          <NavInfoUser />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
