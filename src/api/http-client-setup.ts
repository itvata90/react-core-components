import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { BaseService } from 'src/core/interfaces/service';

const instance = axios.create({
  baseURL: 'https://62f4b65a535c0c50e760a266.mockapi.io/api',
  timeout: 15000,
});

export interface ResponseListDataType<DataType> {
  list: Array<DataType>;
  total: number | string;
}
export interface Service<DataType>
  extends BaseService<DataType, AxiosRequestConfig, AxiosResponse<DataType | ResponseListDataType<DataType>>> {}
class HTTPClient {
  get<DataType>(url: string, config?: any) {
    return instance.get<DataType>(url, config);
  }
  put<DataType>(url: string, data?: any, config?: any) {
    return instance.put<DataType>(url, data, config);
  }
  post<DataType>(url: string, data?: any, config?: any) {
    return instance.post<DataType>(url, data, config);
  }
  delete<DataType>(url: string, config?: any) {
    return instance.delete<DataType>(url, config);
  }
}

export default new HTTPClient();
