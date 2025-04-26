import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  user_id: number;
  name: string;
};

type AuthState = {
  isLogin: boolean;
  user?: User;
};

const initialState: AuthState = {
  isLogin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isLogin = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.user = undefined;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice;
