import { createSlice } from '@reduxjs/toolkit'

export interface SidebarState {
  value: boolean
}

const initialState: SidebarState = {
  value: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.value = true
    },
    closeSidebar: (state) => {
      state.value = false
    },
    toggleSidebar: (state) => {
      state.value = !state.value
    },
  },
})

// Export actions
export const { openSidebar, closeSidebar, toggleSidebar } = sidebarSlice.actions

// Export reducer
export default sidebarSlice
