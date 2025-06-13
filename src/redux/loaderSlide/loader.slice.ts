import { createSlice } from '@reduxjs/toolkit'

export interface SidebarState {
  value: boolean
}

const initialState: SidebarState = {
  value: false,
}

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    onLoader: (state) => {
      state.value = true
    },
    offLoader: (state) => {
      state.value = false
    },
    toggleLoader: (state) => {
      state.value = !state.value
    },
  },
})

// Export actions
export const { onLoader, offLoader, toggleLoader } = loaderSlice.actions

// Export reducer
export default loaderSlice
