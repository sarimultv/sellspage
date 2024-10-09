import { configureStore } from "@reduxjs/toolkit";
import ItemSlice from "./ItemSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";

const itemStore = configureStore({
  reducer: {
    items: ItemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default itemStore;
