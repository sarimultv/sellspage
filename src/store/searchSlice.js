import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchItem",
  initialState: {
    searchedItem: [],
    showDiv: false,
  },
  reducers: {
    addSearchItems: (state, actions) => {
      state.searchedItem = [...state.searchedItem, ...actions.payload];
    },
    showSearchDiv: (state, actions) => {
      state.showDiv = true;
    },
    hideSearchDiv: (state, actions) => {
      state.showDiv = false;
    },
  },
});

export const { addSearchItems, showSearchDiv, hideSearchDiv } =
  searchSlice.actions;
export default searchSlice;
