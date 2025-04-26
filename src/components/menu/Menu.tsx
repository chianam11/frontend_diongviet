"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toggleSidebar } from "@/redux/isSiderbar/OpenSiderbarSlice";
import Logo from "../Logo";
import CategoryMenu from "../category/CategoryMenu";
const Menu = () => {
  const isOpen = useSelector((state: RootState) => state.sidebar.value);

  const dispatch = useDispatch();
  return (
    <div className="lg:hidden">
      <div
        className={`fixed inset-0 bg-black bg-opacity-60 z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className=" max-w-full  bg-[#E5E7EB] shadow-lg ">
          <div className="bg-[#BE1E2D] p-4 flex justify-between text-white">
            <Logo />
            <button  onClick={() => dispatch(toggleSidebar())}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="h-full">
            <CategoryMenu/>
          </div>
          
        </div>
      </div>

      <button
        className="w-[24px] h-[24px] text-white"
        aria-label="Open menu"
        onClick={() => dispatch(toggleSidebar())}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[24px] h-[24px] text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Menu;
