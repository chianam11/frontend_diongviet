import Link from "next/link";
import Logo from "./Logo";
import Menu from "./menu/Menu";
import NavInfoUser from "./auth/NavInfoUser";

const Nav = () => {
  
  return (
    <nav
      className="bg-[#BE1E2D] shadow-md py-4 min-h-[72px] sticky top-0 z-50  p-4"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto flex items-center mb-3 w-full min-w-full gap-x-1 justify-between">
        {/* Menu Button */}
        <Menu/>

        {/* Logo - Center */}
        <div className="">
          <Logo />
        </div>
       <div className="hidden lg:flex items-center justify-between text-white gap-4">
        <ul className="flex items-center gap-10 text-nowrap">
          <li>
            <button className="flex items-center gap-2 text-white py-2 px-4 bg-[#D1616C] rounded-2xl  transition-all duration-300">
            <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 18C2 16.46 2 15.69 2.347 15.124C2.541 14.807 2.807 14.541 3.124 14.347C3.689 14 4.46 14 6 14C7.54 14 8.31 14 8.876 14.347C9.193 14.541 9.459 14.807 9.653 15.124C10 15.689 10 16.46 10 18C10 19.54 10 20.31 9.653 20.877C9.459 21.193 9.193 21.459 8.876 21.653C8.311 22 7.54 22 6 22C4.46 22 3.69 22 3.124 21.653C2.807 21.459 2.541 21.193 2.347 20.877C2 20.31 2 19.54 2 18ZM14 18C14 16.46 14 15.69 14.347 15.124C14.541 14.807 14.807 14.541 15.124 14.347C15.689 14 16.46 14 18 14C19.54 14 20.31 14 20.877 14.347C21.193 14.541 21.459 14.807 21.653 15.124C22 15.689 22 16.46 22 18C22 19.54 22 20.31 21.653 20.877C21.459 21.193 21.193 21.459 20.877 21.653C20.31 22 19.54 22 18 22C16.46 22 15.69 22 15.124 21.653C14.807 21.459 14.541 21.193 14.347 20.877C14 20.31 14 19.54 14 18ZM2 6C2 4.46 2 3.69 2.347 3.124C2.541 2.807 2.807 2.541 3.124 2.347C3.689 2 4.46 2 6 2C7.54 2 8.31 2 8.876 2.347C9.193 2.541 9.459 2.807 9.653 3.124C10 3.689 10 4.46 10 6C10 7.54 10 8.31 9.653 8.876C9.459 9.193 9.193 9.459 8.876 9.653C8.311 10 7.54 10 6 10C4.46 10 3.69 10 3.124 9.653C2.807 9.459 2.541 9.193 2.347 8.876C2 8.311 2 7.54 2 6ZM14 6C14 4.46 14 3.69 14.347 3.124C14.541 2.807 14.807 2.541 15.124 2.347C15.689 2 16.46 2 18 2C19.54 2 20.31 2 20.877 2.347C21.193 2.541 21.459 2.807 21.653 3.124C22 3.689 22 4.46 22 6C22 7.54 22 8.31 21.653 8.876C21.459 9.193 21.193 9.459 20.877 9.653C20.31 10 19.54 10 18 10C16.46 10 15.69 10 15.124 9.653C14.807 9.459 14.541 9.193 14.347 8.876C14 8.311 14 7.54 14 6Z"
        stroke="#FAFAFA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
            <span>Danh mục</span>
            </button>
          </li>
          <li className="mx-auto w-full relative h-fit">
          <input
          type="text"
          className="w-full text-[14px] rounded-full h-14 pl-9 outline-none"
          placeholder="Siêu phẩm Samsung Galaxy S25"
        />
        <button className="absolute right-6 top-[50%] translate-y-[-50%] bg-[#FDE7EB] p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
          </li>
          <li>
            <button className="text-12 text-white truncate-multiline !line-clamp-2">Đặt hàng</button>
          </li>
          <li>
            <button className="text-12 text-white truncate-multiline !line-clamp-2">Cửa hàng gần bạn</button>
          </li>
          <li>
            <button className="text-12 text-white truncate-multiline !line-clamp-2">Tra cứu đơn hàng</button>
          </li>
          <li>
            <button className="text-12 text-white truncate-multiline !line-clamp-2">Khuyến mãi</button>
          </li>
        </ul>
       </div>
        {/* Cart Button - End */}
        <div className="flex items-center justify-between text-white gap-4">
       <NavInfoUser/>
          <Link href="/check-out" className="p-2  text-white" aria-label="Open cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[22px] h-[22px] text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Link>
          
        </div>
      </div>

      <form action="" className="mx-auto w-full relative h-fit  lg:hidden">
        <input
          type="text"
          className="w-full text-[14px] rounded-full h-14 pl-9 outline-none"
          placeholder="Siêu phẩm Samsung Galaxy S25"
        />
        <button className="absolute right-6 top-[50%] translate-y-[-50%] bg-[#FDE7EB] p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </form>
    </nav>
  );
};

export default Nav;
