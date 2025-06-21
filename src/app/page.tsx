import ProductCategory from "../components/products/ProductCard";
// import BestSeller from "@/components/sale/BestSeller";
export default function Home() {
  return (
    <div>
      {/* <BestSeller /> */}
      <ProductCategory
        title="iPhone Chính Hãng (Apple Authorized Reseller)"
        brand="apple"
      />
      <ProductCategory title="Samsung Chính Hãng" brand="samsung" />
      <ProductCategory
        title="OPPO | Xiaomi | TECNO | realme | HONOR Chính Hãng"
        brand="Realme"
      />
    </div>
  );
}
