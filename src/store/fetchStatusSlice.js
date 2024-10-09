import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchingDone: false,
    fetching: false,
  },
  reducers: {
    markFetchingDone: (state) => {
      state.fetchingDone = true;
    },
    markFetchingStarted: (state) => {
      state.fetching = true;
    },
    markFetchingFinished: (state) => {
      state.fetching = false;
    },
  },
});

export const fetchStatusSliceActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
