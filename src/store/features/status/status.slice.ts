import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transferStatus: {
    order: 0,
    time: 0,
  },
  stockEqual: {
    time: "",
  },
};
const statusSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    setOrderTransferSave: (state, action) => {
      state.transferStatus.order = action.payload.orderStatus;
      state.transferStatus.time = action.payload.orderTimeStatus;
    },
    setStockEqualSave: (state, action) => {
      state.stockEqual.time = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { setOrderTransferSave, setStockEqualSave } = statusSlice.actions;

export default statusSlice.reducer;
