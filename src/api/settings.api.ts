import axios from "axios";
import { baseURL } from "../lib/config";
// import { axios as authAxios } from "../lib/axios.lib";

class SettingsApi {
  async generalParams() {
    const response = await axios.get(baseURL + "general/generalparameters");
    return response.data;
  }
}

export default new SettingsApi();
