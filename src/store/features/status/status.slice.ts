import { createSlice } from "@reduxjs/toolkit";
import { getCriteria } from "./status.action";

const initialState = {
  transferStatus: {
    order: 0,
    time: 0,
  },
  stockEqual: {
    duration: 0,
    time: "",
  },
  error: "",
  orderSources: [],
  paymentStatus: [],
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
      state.transferStatus.order = status.transferStatus[0].siparisDurumu;
      state.transferStatus.time = status.transferStatus[0].duration;
      state.stockEqual.time = status.stockEqual[0].startAt;
      state.stockEqual.duration = status.stockEqual[0].duration;
      state.orderSources = status.orderSources;
      state.paymentStatus = status.paymentStatus;
    });
  },
});

export const { setOrderTransferSave, setStockEqualSave } = statusSlice.actions;

export default statusSlice.reducer;
