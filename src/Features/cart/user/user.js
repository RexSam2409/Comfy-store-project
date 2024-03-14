import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const themes = {
  winter: "winter",
  dracula: "dracula",
};
const getuser = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};
const gettheme = () => {
  const theme = JSON.parse(localStorage.getItem("theme")) || themes.winter;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: getuser,
  theme: gettheme,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      // console.log(action.payload);
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
    },
    toggleTheme: (state) => {
      const { winter, dracula } = themes;
      state.theme = state.theme === dracula ? winter : dracula;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", JSON.stringify(state.theme));
    },
  },
});

export default userSlice.reducer;
export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
