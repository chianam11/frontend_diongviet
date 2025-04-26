import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Tổng đài hỗ trợ */}
        <div className="mb-4 md:mb-6">
          <h3 className="text-xl font-semibold">Tổng đài hỗ trợ (Miễn phí)</h3>
          <ul className="mt-2 text-xl">
            <li>
                <pre>Mua ngay:                            <span className="text-red-500 font-medium">1800.6018</span> (07:30 – 21:30)</pre>
              
            </li>
            <li>
                <pre>Bảo hành tại Viện Di Động:           <span className="text-red-500 font-medium">1800.6729</span> (08:30 – 21:30)</pre>
             
            </li>
            <li>
                <pre>Góp ý:                               <span className="text-red-500 font-medium">1800.6306</span> (08:30 – 21:30)</pre>
             
            </li>
          </ul>
        </div>

        {/* Đối tác */}
        <div className="mb-4 md:mb-6">
          <h3 className=" text-xl font-semibold">Đối tác Di Động Việt</h3>
          <div className="flex gap-10 mt-2">
            <Link href="#" className="text-blue-600 text-4xl">
              <FaFacebookF />
            </Link>
            <Link href="#" className="text-pink-600 text-4xl">
              <FaInstagram />
            </Link>
            <Link href="#" className="text-red-600 text-4xl">
              <FaYoutube />
            </Link>
            <Link href="#" className="text-black text-4xl">
              <FaTiktok />
            </Link>
          </div>
        </div>

        {/* Kết nối mạng xã hội */}
        <div className="mb-4 md:mb-6">
          <h3 className=" text-xl font-semibold">Kết nối với Di Động Việt</h3>
          <div className="flex gap-10 mt-2">
            <Link href="#" className="text-blue-600 text-4xl">
              <FaFacebookF />
            </Link>
            <Link href="#" className="text-pink-600 text-4xl">
              <FaInstagram />
            </Link>
            <Link href="#" className="text-red-600 text-4xl">
              <FaYoutube />
            </Link>
            <Link href="#" className="text-black text-4xl">
              <FaTiktok />
            </Link>
          </div>
        </div>

        {/* Ứng dụng di động */}
        <div className="mb-4 md:mb-6">
          <h3 className=" md:text-lg font-semibold">Tải ngay ứng dụng nhận nhiều ưu đãi</h3>
          <div className="flex gap-10 mt-2">
            <Link href="#" className="text-blue-600 text-4xl">
              <FaFacebookF />
            </Link>
            <Link href="#" className="text-pink-600 text-4xl">
              <FaInstagram />
            </Link>
            <Link href="#" className="text-red-600 text-4xl">
              <FaYoutube />
            </Link>
            <Link href="#" className="text-black text-4xl">
              <FaTiktok />
            </Link>
          </div>
        </div>

        {/* Thông tin khác */}
        <div className="text-center text-xs md:text-sm text-gray-600">
          <p>© 2025 Di Động Việt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
