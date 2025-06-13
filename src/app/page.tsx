import ProductCategory from "../components/products/ProductCard";
export default function Home() {
  return (
    <div className="lg:px-10">
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
