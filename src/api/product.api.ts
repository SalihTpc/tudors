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
}

export default new ProductApi();
