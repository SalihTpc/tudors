import { createAsyncThunk } from "@reduxjs/toolkit";
import generalsApi from "../../../api/generals.api";
import settingsApi from "../../../api/settings.api";
import { removeDuplicates } from "../../../lib/functions";

const getCriteria: any = createAsyncThunk("status/getCriteria", async () => {
  const responses = [
    {
      name: "transferStatus",
      promise: generalsApi.getServiceCriteria({ servisId: 1 }),
    },
    {
      name: "stockEqual",
      promise: generalsApi.getServiceCriteria({ servisId: 2 }),
    },
    {
      name: "orderSources",
      promise: settingsApi.getOrderSources(),
    },
    {
      name: "paymentStatus",
      promise: settingsApi.getPaymentStatus(),
    },
  ];
  const results = await Promise.allSettled(
    responses.map((response) => response.promise)
  );

  const errors: { [key: string]: string }[] = [];
  const status: any = {};
  results.forEach((result, index) => {
    const { name } = responses[index];
    if (result.status === "fulfilled") {
      if (name == "orderSources" || "paymentStatus") {
        status[name] = removeDuplicates(result.value);
      } else {
        status[name] = result.value[0];
      }
    } else {
      errors.push({ name, message: result.reason });
    }
  });

  // console.log(status);
  return { status };
});

export { getCriteria };
