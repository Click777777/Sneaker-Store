import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(sessionStorage.getItem("authUser")) || {
    userName: "",
    password: "",
    image: "",
    auth: false,
  },
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      const formDataObj = action.payload;
      state.user = formDataObj;
      const emailRegularExpressionPattern =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const passwordRegularExpressionPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      if (
        emailRegularExpressionPattern.test(formDataObj.email) &&
        passwordRegularExpressionPattern.test(formDataObj.password)
      ) {
        state.user.auth = true;
        sessionStorage.setItem("authUser", JSON.stringify(formDataObj));
      } else {
        state.user.auth = false;
      }
    },
    logout: (state) => {
      state.user = {
        userName: "",
        password: "",
        image: "",
        auth: false,
      };
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
