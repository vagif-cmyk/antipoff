import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  specialists: [],
  currentPage: 1,
  numberPages: 0,
  specialist: {},
};

export const specialistsSlice = createSlice({
  name: "specialists",
  initialState,
  reducers: {
    setSpecialists: (state, actions) => {
      const array = [...state.specialists, ...actions.payload];
      let newArray = [];

      newArray = array.filter((item) => {
        if (newArray.indexOf(item.id) === -1) {
          newArray.push(item.id);
          return true;
        }
        return false;
      });

      state.specialists = newArray;
    },
    setCurrentPage: (state, actions) => {
      state.currentPage = actions.payload;
    },
    setNumberPages: (state, actions) => {
      state.numberPages = actions.payload;
    },
    setSpecialist: (state, actions) => {
      state.specialist = actions.payload;
    },
  },
});
export const { setSpecialists, setCurrentPage, setNumberPages, setSpecialist } =
  specialistsSlice.actions;

export default specialistsSlice.reducer;
