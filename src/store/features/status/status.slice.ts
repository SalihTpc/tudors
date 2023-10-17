import { createSlice } from "@reduxjs/toolkit";
import { getCriteria } from "./status.action";

const initialState = {
  transferStatus: {
    order: 0,
    time: 0,
  },
  stockEqual: {
    time: "",
  },
  error: "",
};
const statusSlice = createSlice({
  name: "status",
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
  extraReducers: (builder) => {
    builder.addCase(getCriteria.fulfilled, (state, action) => {
      const { status } = action.payload;
      state.transferStatus.order = status.transferStatus.siparisDurumu;
      state.transferStatus.time = status.transferStatus.duration;
      state.stockEqual.time = status.stockEqual.startAt;
    });
  },
});

export const { setOrderTransferSave, setStockEqualSave } = statusSlice.actions;

export default statusSlice.reducer;
