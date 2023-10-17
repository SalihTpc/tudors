import { createAsyncThunk } from "@reduxjs/toolkit";
import generalsApi from "../../../api/generals.api";

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
  ];
  const results = await Promise.allSettled(
    responses.map((response) => response.promise)
  );

  const errors: { [key: string]: string }[] = [];
  const status: any = {};
  results.forEach((result, index) => {
    const { name } = responses[index];
    if (result.status === "fulfilled") {
      status[name] = result.value[0];
    } else {
      errors.push({ name, message: result.reason });
    }
  });

  //   console.log(status, errors);
  return { status };
});

export { getCriteria };
