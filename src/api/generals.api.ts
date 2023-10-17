import { baseURL } from "../lib/config";
import { axios as myAxios } from "../lib/axios.lib";

class GeneralsApi {
  async getServiceStates() {
    const response = await myAxios.get(baseURL + "general/getservicestates");
    return response.data;
  }
  async saveServiceCriteria(params: {}) {
    const response = await myAxios.post(
      baseURL + "general/saveservicecriteria",
      params
    );
    return response.data;
  }
  async startSiparisJob(params: {}) {
    const response = await myAxios.post(
      baseURL + "general/startsiparisjob",
      params
    );
    return response.data;
  }
  async getSiparisler(params: {}) {
    const response = await myAxios.post(baseURL + "general/siparisler", params);
    return response.data;
  }
  async stopSiparisJob() {
    const response = await myAxios.post(baseURL + "general/stopsiparisjob");
    return response.data;
  }
}

export default new GeneralsApi();
