import type { Metadata } from "next";
import "./globals.css";
import Nav from "../components/Nav/Nav";
import Providers from "../redux/Providers";
import Footer from "../components/Footer";
import Support from "../components/support/Support";
import NavMobile from "@/components/Navigation/NavMobile";
import Loader from "@/components/loader/Loader";
import { ToastContainer } from "react-toastify";
export const metadata: Metadata = {
  title: "Didongviet.vn - Siêu thị di động chính hãng",
  description:
    "Didongviet.vn - Siêu thị di động chính hãng, cung cấp các sản phẩm điện thoại, máy tính bảng, phụ kiện chính hãng với giá tốt nhất. Đặt hàng online giao hàng tận nơi.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans text-base bg-white text-gray-900">
        <Providers>
          <Nav />
          <ToastContainer
            limit={1}
            position="top-right"
            autoClose={3000}
            hideProgressBar
            closeOnClick
            pauseOnHover
            draggable
          />
          <main className="bg-[#F7FAFC] p-2 text-sm min-h-screen">
            {children}
            <Support />
            <Loader />
          </main>
          <Footer />
          <NavMobile />
        </Providers>
      </body>
    </html>
  );
}
