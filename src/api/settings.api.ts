import { baseURL } from "../lib/config";
import { axios as myAxios } from "../lib/axios.lib";

class SettingsApi {
  async generalParams() {
    const response = await myAxios.get(baseURL + "general/generalparameters");
    return response.data;
  }
}

export default new SettingsApi();
