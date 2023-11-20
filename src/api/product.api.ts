import { baseURL } from "../lib/config";
import { axios as myAxios } from "../lib/axios.lib";

class ProductApi {
  async startProductJob(params: {}) {
    const response = await myAxios.post(
      baseURL + "product/startproductjob",
      params
    );
    return response.data;
  }
  async stopProductJob() {
    const response = await myAxios.post(baseURL + "product/stopproductjob");
    return response.data;
  }
  async getStockLastExecuteTime() {
    const response = await myAxios.post(
      baseURL + "product/getstoklastexecutetime",
      {}
    );
    return response.data;
  }

  async getStockServiceReport(params: {}) {
    const response = await myAxios.post(
      baseURL + "product/stokservicestate",
      params
    );
    return response.data;
  }

  async getStockServiceLog(params: {}) {
    const response = await myAxios.post(
      baseURL + "product/stokservicelog",
      params
    );
    return response.data;
  }

  async startJobNov(params: {}) {
    const response = await myAxios.post(
      baseURL + "product/startproductjobnow",
      params
    );
    return response.data;
  }
}

export default new ProductApi();
