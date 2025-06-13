// store/productSlice.ts
import axiosInstance from "@/axios/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// store/productSlice.ts
type Product = {
   id: number;
  name: string;
  price: number;
  product_image: string;
  slug?: string;
  stock?: number;
  description?: string;
  createdAt?: string;
  discount?: number;
};

type ProductState = {
  productsByBrand: {
    [brand: string]: {
      data: Product[];
      lastFetched: number | null;
    };
  };
  loading: boolean;
  error: string | null;
};

const initialState: ProductState = {
  productsByBrand: {},
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async ({ brand }: { brand: string }) => {
    const response = await axiosInstance.get(
      `/api/v1/products/phones?page=1&limit=5&brand=${brand}`
    );
    return { brand, products: response.data.results };
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const { brand, products } = action.payload;
        state.productsByBrand[brand] = {
          data: products,
          lastFetched: Date.now(),
        };
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch";
      });
  },
});

export default productSlice;
