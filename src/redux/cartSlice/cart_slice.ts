import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState = {
  items: Record<string, number>; // slug -> quantity
};

const initialState: CartState = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Thêm sản phẩm vào giỏ hàng
    addToCart: (
      state,
      action: PayloadAction<{ slug: string; quantity?: number }>
    ) => {
      const { slug, quantity = 1 } = action.payload;
      const currentQuantity = state.items[slug] || 0;
      
      // Giới hạn số lượng tối đa là 99
      const newQuantity = Math.min(currentQuantity + quantity, 99);
      
      state.items[slug] = newQuantity;
    },

    // Giảm số lượng sản phẩm
    decreaseItem: (
      state,
      action: PayloadAction<{ slug: string; quantity?: number }>
    ) => {
      const { slug, quantity = 1 } = action.payload;
      if (!state.items[slug]) return;
      
      const newQuantity = state.items[slug] - quantity;
      
      // Nếu số lượng <= 0 thì xóa sản phẩm khỏi giỏ hàng
      if (newQuantity <= 0) {
        delete state.items[slug];
      } else {
        state.items[slug] = newQuantity;
      }
    },

    // Xóa sản phẩm khỏi giỏ hàng
    removeItem: (state, action: PayloadAction<{ slug: string }>) => {
      delete state.items[action.payload.slug];
    },

    // Xóa toàn bộ giỏ hàng
    clearCart: (state) => {
      state.items = {};
    },

    // Cập nhật số lượng sản phẩm (dùng cho thay đổi trực tiếp từ input)
    updateItemQuantity: (
      state,
      action: PayloadAction<{ slug: string; quantity: number }>
    ) => {
      const { slug, quantity } = action.payload;
      
      const validatedQuantity = Math.max(1, Math.min(quantity, 5));
      
      if (validatedQuantity <= 0) {
        delete state.items[slug];
      } else {
        state.items[slug] = validatedQuantity;
      }
    },

    // Cập nhật toàn bộ giỏ hàng (dùng khi đồng bộ từ server)
    setCart: (state, action: PayloadAction<Record<string, number>>) => {
      state.items = action.payload;
    },
  },
});

// Selectors
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectCartItemCount = (state: { cart: CartState }) => 
  Object.values(state.cart.items).reduce((total, qty) => total + qty, 0);
export const selectCartTotal = (products: { slug: string; price: number }[]) => (state: { cart: CartState }) => {
  return products.reduce((total, product) => {
    const quantity = state.cart.items[product.slug] || 0;
    return total + (product.price * quantity);
  }, 0);
};

export const {
  addToCart,
  decreaseItem,
  removeItem,
  clearCart,
  updateItemQuantity,
  setCart,
} = cartSlice.actions;

export default cartSlice;