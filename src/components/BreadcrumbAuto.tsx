"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const capitalize = (str: string) => {
  return str.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};
type Product = {
  name: string;
};
const BreadcrumbAuto = ({ name }: Product) => {
  const pathname = usePathname(); // vd: "/dien-thoai/samsung/galaxy-a"
  console.log(name);

  const segments = pathname.split("/").filter((seg) => seg !== "");

  const breadcrumbItems = segments.map((seg, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    return { label: capitalize(seg), href };
  });

  return (
    <nav className="text-sm text-gray-700 mb-4 flex flex-wrap items-center">
      <Link href="/" className="text-blue-700 hover:underline">
        Trang chủ
      </Link>

      {breadcrumbItems.map((item, index) => {
        console.log(item, index);

        return (
          <Fragment key={index}>
            <span className="mx-2">/</span>
            {index === breadcrumbItems.length - 1 ? (
              <span className="text-red-600 font-semibold">{name}</span>
            ) : (
              <Link
                href={`${item.href}.html`}
                className="text-blue-700 hover:underline"
              >
                {item.label}
              </Link>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
};

export default BreadcrumbAuto;
