import { IUserInfo } from "../types";
import { instance } from "../api/api.config";
import { AxiosResponse } from "axios";

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUserInfo>> {
    return instance.get<IUserInfo>("/api/v1/account/info");
  }

  static fetchData = async () => {
    const response = await fetch('/api/data'); 
    if (!response.ok) {
      throw new Error('Ошибка при получении данных');
    }
    return response.json();
  };
}
