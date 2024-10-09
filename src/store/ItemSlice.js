import { createSlice } from "@reduxjs/toolkit";

const ItemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (store, action) => {
      return action.payload;
    },
  },
});

export const itemSliceActions = ItemSlice.actions;
export default ItemSlice;
