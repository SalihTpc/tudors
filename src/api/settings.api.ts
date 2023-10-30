import { baseURL } from "../lib/config";
import { axios as myAxios } from "../lib/axios.lib";

class SettingsApi {
  async getGeneralParams() {
    const response = await myAxios.get(baseURL + "general/generalparameters");
    return response.data;
  }

  async updateGeneralParams(params: {}) {
    const response = await myAxios.post(
      baseURL + "general/updategeneralgarameters",
      params
    );
    return response.data;
  }

  async getPaymentParams() {
    const response = await myAxios.get(baseURL + "general/paymentparameters");
    return response.data;
  }

  async updatePaymentParams(params: {}) {
    const response = await myAxios.post(
      baseURL + "general/updatepaymentparameter",
      params
    );
    return response.data;
  }

  async getSpecialParams() {
    const response = await myAxios.get(baseURL + "general/specialparameters");
    return response.data;
  }

  async updateSpecialParams(params: {}) {
    const response = await myAxios.post(
      baseURL + "general/updatespecialparameter",
      params
    );
    return response.data;
  }

  async getSmtpParams() {
    const response = await myAxios.get(baseURL + "general/smtpparameters");
    return response.data;
  }

  async updateSmtpParams(params: {}) {
    const response = await myAxios.post(
      baseURL + "general/updatesmtpparameter",
      params
    );
    return response.data;
  }

  async getOrderSources() {
    const response = await myAxios.post(baseURL + "general/getsipariskaynagi");
    return response.data;
  }

  async getPaymentStatus() {
    const response = await myAxios.post(
      baseURL + "general/getticimacodemetipi"
    );
    return response.data;
  }
}

export default new SettingsApi();
