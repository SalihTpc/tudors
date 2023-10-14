import { baseURL } from "../lib/config";
import { axios as myAxios } from "../lib/axios.lib";

class GeneralsApi {
  async getServiceStates() {
    const response = await myAxios.get(baseURL + "general/getservicestates");
    return response.data;
  }
}

export default new GeneralsApi();
