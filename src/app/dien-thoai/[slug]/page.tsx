import type { Metadata } from "next";
import PhoneSlide from "../phoneSlide/PhoneSlide";
import ProductDetails from "../productDetails/ProductDetails";
import PayingOrAddToCard from "../PayingOrAddToCard";
import Test from "../productDetails/Test";
import OtherPhoneInfo from "../productDetails/OtherPhoneIf";
import Promotion from "../productDetails/Promotion";
import BreadcrumbAuto from "@/components/BreadcrumbAuto";
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params

  const { slug } = await params;
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  // fetch data
  const product = await fetch(`${apiUrl}/api/v1/products/phones/${slug}`).then(
    (res) => res.json()
  );

  return {
    title: product.name,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const product = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/products/phones/${slug}`
  ).then((res) => res.json());
  const productName = product.name;
  console.log(productName);

  return (
    <div className="lg:p-10">
      <h1 className="font-bold text-[1.05rem] border-b py-2 mb-3  border-gray-300 ">
        {product.name}
      </h1>
      <BreadcrumbAuto name={productName} />
      <div className="lg:flex gap-4">
        <div className="shadow-2xl rounded-xl lg:p-5">
          <PhoneSlide image_arr={product.images} />
        </div>

        <div className="shadow-2xl rounded-xl lg:p-5">
          <div className="mt-3">
            <div className="mt-5">
              <p className="text-lg font-semibold">{product.name}</p>
              <p className="p-2 default-text-color font-bold">
                <span>Giá bán:</span>
                {product?.price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
              <PayingOrAddToCard slug={product.slug} />
            </div>

            <div className="lg:hidden">
              <OtherPhoneInfo />
            </div>
            <div className="hidden lg:block">
              <Promotion />
            </div>
          </div>

          <Test>
            <ProductDetails />{" "}
          </Test>
        </div>
      </div>
    </div>
  );
}
