import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4 md:p-6 text-base">
      <div className="max-w-screen-xl mx-auto space-y-6">
        {/* Tổng đài hỗ trợ */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold">Tổng đài hỗ trợ (Miễn phí)</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex justify-between flex-wrap">
              <span>Mua ngay:</span>
              <span className="text-red-500 font-medium">1800.6018 (07:30 – 21:30)</span>
            </li>
            <li className="flex justify-between flex-wrap">
              <span>Bảo hành tại Viện Di Động:</span>
              <span className="text-red-500 font-medium">1800.6729 (08:30 – 21:30)</span>
            </li>
            <li className="flex justify-between flex-wrap">
              <span>Góp ý:</span>
              <span className="text-red-500 font-medium">1800.6306 (08:30 – 21:30)</span>
            </li>
          </ul>
        </div>

        {/* Đối tác */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold">Đối tác Di Động Việt</h3>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link href="#" className="text-blue-600 text-2xl md:text-4xl"><FaFacebookF /></Link>
            <Link href="#" className="text-pink-600 text-2xl md:text-4xl"><FaInstagram /></Link>
            <Link href="#" className="text-red-600 text-2xl md:text-4xl"><FaYoutube /></Link>
            <Link href="#" className="text-black text-2xl md:text-4xl"><FaTiktok /></Link>
          </div>
        </div>

        {/* Kết nối */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold">Kết nối với Di Động Việt</h3>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link href="#" className="text-blue-600 text-2xl md:text-4xl"><FaFacebookF /></Link>
            <Link href="#" className="text-pink-600 text-2xl md:text-4xl"><FaInstagram /></Link>
            <Link href="#" className="text-red-600 text-2xl md:text-4xl"><FaYoutube /></Link>
            <Link href="#" className="text-black text-2xl md:text-4xl"><FaTiktok /></Link>
          </div>
        </div>

        {/* Ứng dụng */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold">Tải ngay ứng dụng nhận nhiều ưu đãi</h3>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link href="#" className="text-blue-600 text-2xl md:text-4xl"><FaFacebookF /></Link>
            <Link href="#" className="text-pink-600 text-2xl md:text-4xl"><FaInstagram /></Link>
            <Link href="#" className="text-red-600 text-2xl md:text-4xl"><FaYoutube /></Link>
            <Link href="#" className="text-black text-2xl md:text-4xl"><FaTiktok /></Link>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="text-center text-xs md:text-sm text-gray-600 pt-4 border-t">
          <p>© 2025 Di Động Việt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
