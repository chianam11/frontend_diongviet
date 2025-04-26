// redux/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { counterSlice } from './counterSlice'
import sidebarSlice from './isSiderbar/OpenSiderbarSlice'
import authSlice from './user/userSlice'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // default: localStorage

// Gộp tất cả các slice lại
const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  sidebar: sidebarSlice.reducer,
  authSlice: authSlice.reducer,
})

// Cấu hình redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authSlice'], // chỉ lưu slice bạn cần
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Tạo store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

// Tạo persistor để bọc Redux Provider
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
