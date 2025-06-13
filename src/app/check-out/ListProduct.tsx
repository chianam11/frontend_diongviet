"use client";

import React, { useEffect, useState } from "react";
import axiosInstance from "@/axios/axiosInstance";
import { toggleLoader } from "@/redux/loaderSlide/loader.slice";
import Image from "next/image";
import { showCustomToast } from "@/components/toastifyAlert/ShowToast";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeItem, updateItemQuantity } from "@/redux/cartSlice/cart_slice";
import { TrashIcon } from "@heroicons/react/24/outline";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

type Product = {
  slug: string;
  name: string;
  price: number;
  product_image: string;
};

type ProductWithQuantity = Product & {
  quantity: number;
  totalPrice: number;
};

type ProductState = {
  product: ProductWithQuantity[];
  totalOrderPrice: number;
};

const ListProduct = () => {
  const [products, setProducts] = useState<ProductState>({
    product: [],
    totalOrderPrice: 0,
  });

  const [selectedProducts, setSelectedProducts] = useState<{
    [slug: string]: boolean;
  }>({});

  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  // Tính tổng tiền dựa trên sản phẩm được chọn
  const calculateTotalPrice = (
    productList: ProductWithQuantity[],
    selectedMap: { [slug: string]: boolean }
  ) => {
    return productList.reduce((total, prod) => {
      if (selectedMap[prod.slug]) return total + prod.price * prod.quantity;
      return total;
    }, 0);
  };

  // Fetch sản phẩm theo slug + quantity từ redux cart
  const fetchProducts = async () => {
    const productsItems = Object.entries(items).map(([slug, quantity]) => ({
      slug,
      quantity: Number(quantity),
    }));

    if (productsItems.length === 0) {
      setProducts({ product: [], totalOrderPrice: 0 });
      setSelectedProducts({});
      return;
    }

    try {
      dispatch(toggleLoader());
      const res = await axiosInstance.post("/api/v1/products/phones/batch", {
        items: productsItems,
      });

      if (res && res.data) {
        const fetched: ProductWithQuantity[] = res.data.products.map(
          (p: Product) => {
            console.log(p);

            const qty =
              productsItems.find((item) => item.slug === p.slug)?.quantity ?? 1;
            return {
              ...p,
              quantity: qty,
              totalPrice: p.price * qty,
            };
          }
        );

        // Mặc định tất cả sản phẩm được chọn
        const selectedMap: { [slug: string]: boolean } = {};
        fetched.forEach((p) => (selectedMap[p.slug] = true));

        const total = calculateTotalPrice(fetched, selectedMap);

        setSelectedProducts(selectedMap);
        setProducts({ product: fetched, totalOrderPrice: total });

        dispatch(toggleLoader());
      }
    } catch (e) {
      console.error("Error fetching products:", e);
      dispatch(toggleLoader());
    }
  };

  // Cập nhật số lượng sản phẩm trong UI và redux
  const [pendingUpdates, setPendingUpdates] = useState<
    { slug: string; quantity: number }[]
  >([]);

  // Effect để xử lý cập nhật Redux
  useEffect(() => {
    fetchProducts();
    if (pendingUpdates.length > 0) {
      pendingUpdates.forEach((update) => {
        dispatch(updateItemQuantity(update));
      });
      setPendingUpdates([]);
    }
  }, [pendingUpdates, dispatch]);

  const handleQuantityChange = (slug: string, value: number) => {
    const numericValue = Number(value);
    let newValue = isNaN(numericValue) ? 1 : numericValue;

    if (newValue < 1) newValue = 1;
    if (newValue >= 5) {
      console.log(newValue);
      newValue = 5;
      showCustomToast({
        type: "error",
        title: "Xin lỗi:",
        message: " Mỗi sản phẩm chỉ mua được với số lượng nhỏ hơn hoặc bằng 5",
      });
    }

    setProducts((prev) => {
      const newProducts = prev.product.map((prod) => {
        if (prod.slug === slug) {
          return {
            ...prod,
            quantity: newValue,
            totalPrice: prod.price * newValue,
          };
        }
        return prod;
      });

      return {
        product: newProducts,
        totalOrderPrice: calculateTotalPrice(newProducts, selectedProducts),
      };
    });

    setPendingUpdates((prev) => [...prev, { slug, quantity: newValue }]);
  };

  // Tăng số lượng (max 5)
  const incrementQuantity = (slug: string) => {
    const prod = products.product.find((p) => p.slug === slug);
    if (prod && prod.quantity < 5) {
      handleQuantityChange(slug, prod.quantity + 1);
    } else if (prod) {
      handleQuantityChange(slug, 5);
    }
  };

  // Giảm số lượng (min 1)
  const decrementQuantity = (slug: string) => {
    const prod = products.product.find((p) => p.slug === slug);
    if (prod && prod.quantity > 1) {
      handleQuantityChange(slug, prod.quantity - 1);
    } else if (prod) {
      handleQuantityChange(slug, 1);
    }
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const handleRemoveItem = (slug: string) => {
    dispatch(removeItem({ slug }));

    setProducts((prev) => {
      const filtered = prev.product.filter((p) => p.slug !== slug);
      const newTotal = calculateTotalPrice(filtered, selectedProducts);
      return { product: filtered, totalOrderPrice: newTotal };
    });

    setSelectedProducts((prev) => {
      const copy = { ...prev };
      delete copy[slug];
      return copy;
    });

    showCustomToast({
      type: "success",
      title: "Xóa sản phẩm",
      message: "Sản phẩm đã được xóa khỏi giỏ hàng.",
    });
  };

  // Bật/tắt chọn sản phẩm
  const handleToggleSelect = (slug: string) => {
    setSelectedProducts((prev) => {
      const newSelection = { ...prev, [slug]: !prev[slug] };
      const newTotal = calculateTotalPrice(products.product, newSelection);

      // Cập nhật tổng tiền ngay
      setProducts((prevProducts) => ({
        ...prevProducts,
        totalOrderPrice: newTotal,
      }));

      return newSelection;
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">
        Danh sách sản phẩm trong giỏ hàng
      </h2>
      {products.product.length === 0 ? (
        <p>Không có sản phẩm nào trong giỏ hàng.</p>
      ) : (
        <div className="lg:flex justify-around">
          <ul className="w-full lg:w-2/3">
            {products.product.map((p) => (
              <li key={p.slug} className="mb-3 flex gap-5 items-center">
                <input
                  type="checkbox"
                  checked={selectedProducts[p.slug] ?? true}
                  onChange={() => handleToggleSelect(p.slug)}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <div className="flex items-center p-4 border-2 border-solid lg:w-[30rem] rounded-lg">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/images/products/${p.product_image}`}
                    alt={p.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="ml-4 flex flex-col">
                    <h3 className="font-medium">{p.name}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => decrementQuantity(p.slug)}
                        className="p-2 hover:bg-gray-100 rounded-l-lg transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <FaMinusCircle className="text-gray-600" />
                      </button>
                      <input
                        type="number"
                        min={1}
                        max={5}
                        readOnly
                        value={p.quantity}
                        onChange={(e) => {
                          const value = parseInt(e.target.value);

                          if (!isNaN(value)) {
                            handleQuantityChange(p.slug, value);
                          }
                        }}
                        onBlur={(e) => {
                          if (
                            e.target.value === "" ||
                            parseInt(e.target.value) < 1
                          ) {
                            handleQuantityChange(p.slug, 1);
                          }
                        }}
                        className="w-16 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-200"
                        aria-label="Product quantity"
                      />
                      <button
                        onClick={() => incrementQuantity(p.slug)}
                        className="p-2 hover:bg-gray-100 rounded-r-lg transition-colors"
                        aria-label="Increase quantity"
                      >
                        <FaPlusCircle className="text-gray-600" />
                      </button>
                    </div>
                    <p className="mt-1">Giá: {p.price.toLocaleString()}₫</p>
                    <p>Thành tiền: {p.totalPrice.toLocaleString()}₫</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveItem(p.slug)}
                  aria-label="Remove item"
                  className="ml-2"
                >
                  <TrashIcon className="h-6 w-6 text-red-600 hover:text-red-800 cursor-pointer" />
                </button>
              </li>
            ))}
          </ul>

          <div className="lg:max-w-xs w-full mt-6 lg:mt-0">
            <div className="flex flex-col gap-2 p-4 border rounded-lg">
              <p className="font-semibold mb-2">Chi tiết thanh toán</p>
              <div className="flex items-center justify-between">
                <p>Tiền hàng :</p>
                <p className="default-text-color">
                  {products.totalOrderPrice.toLocaleString()} đ
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p>Phí vận chuyển :</p>
                <p>Miễn phí</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Khuyến mãi :</p>
                <p>0đ</p>
              </div>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Nhập mã khuyến mãi"
                  className="p-2 border-yellow-400 border-2 rounded-lg flex-grow"
                />
                <button className="ml-2 px-4 py-2 bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-colors">
                  Áp dụng
                </button>
              </div>
              <div className="flex items-center justify-between mt-2 font-semibold">
                <p>Tổng cộng :</p>
                <p className="default-text-color">
                  {products.totalOrderPrice.toLocaleString()} đ
                </p>
              </div>
            </div>

            <p className="text-xs mt-4">
              <span
                role="img"
                aria-label="check-circle"
                className="inline-block mr-1 text-green-600"
              >
                ✔️
              </span>
              Bằng việc tiến hành đặt mua hàng, bạn đồng ý với{" "}
              <span className="font-medium underline cursor-pointer">
                Điều khoản sử dụng
              </span>{" "}
              và{" "}
              <span className="font-medium underline cursor-pointer">
                Chính sách xử lý dữ liệu cá nhân
              </span>{" "}
              của Di Động Việt.
            </p>

            <button
              className="w-full default-bg-color text-white mt-2 p-3 rounded-lg cursor-pointer"
              onClick={() => {
                if (
                  // ít nhất 1 true
                  Object.values(selectedProducts).some(
                    (value) => value === true
                  )
                ) {
                  //lặp product
                  Object.entries(selectedProducts).forEach(
                    ([key], index: number) => {
                      if (
                        selectedProducts[key] === true &&
                        products.product.find((obj) => obj.slug === key)
                      ) {
                        const data = products.product[index];
                        dispatch(removeItem({ slug: data.slug }));
                        setProducts((prev) => {
                          const updatedProductList = prev.product.filter(
                            (item) => item.slug !== key
                          );

                          const updatedTotal = updatedProductList.reduce(
                            (acc, curr) => acc + (curr.totalPrice ?? 0),
                            0
                          );

                          return {
                            ...prev,
                            product: updatedProductList,
                            totalOrderPrice: updatedTotal,
                          };
                        });
                      }
                      if (selectedProducts[key] === true) {
                        delete selectedProducts[key];
                      }
                    }
                  );
                  return showCustomToast({
                    type: "success",
                    title: "Thanh toán thành công",
                    message: "Đơn hàng sẽ được xử lý trong thời gian sớm nhất.",
                  });
                } else {
                  // Tất cả đều không phải true → không làm gì cả

                  return showCustomToast({
                    type: "error",
                    title: "Vui lòng:",
                    message:
                      "Chọn ít nhất 1 đơn hàng của bạn để tiếp tục thanh toán",
                  });
                }
              }}
            >
              Thanh toán
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListProduct;
