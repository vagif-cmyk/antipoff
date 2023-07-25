import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegistered: false,
  info: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
};

export const registeredSlice = createSlice({
  name: "isRegistered",
  initialState,
  reducers: {
    setRegistered: (state, actions) => {
      state.isRegistered = actions.payload;
    },
    setName: (state, actions) => {
      state.info.name = actions.payload;
    },

    setEmail: (state, actions) => {
      state.info.email = actions.payload;
    },
    setPassword: (state, actions) => {
      state.info.password = actions.payload;
    },
    setConfirmPassword: (state, actions) => {
      state.info.confirmPassword = actions.payload;
    },
  },
});
export const {
  setRegistered,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
} = registeredSlice.actions;

export default registeredSlice.reducer;
