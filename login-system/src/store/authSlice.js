import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
       // Save to localStorage
       localStorage.setItem("user", JSON.stringify(action.payload.user));
       localStorage.setItem("isAuthenticated", "true");
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
        // Clear from localStorage
        localStorage.removeItem("user");
        localStorage.removeItem("isAuthenticated");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;

