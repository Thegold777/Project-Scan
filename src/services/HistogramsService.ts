import { instance } from "api/api.config";

export default class HistogramsService {
  static async getHistograms(params: any) {
    return instance.post(
      "/api/v1/objectsearch/histograms",
      JSON.stringify(params)
    );
  }
}
