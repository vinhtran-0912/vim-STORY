// @flow
import axios, { AxiosRequestConfig } from 'axios';

const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: 'http://localhost:3001',
  timeout: 30000,
  params: {},
};

export default class AxiosService {
  config: any;

  constructor() {
    this.config = Object.assign({}, DEFAULT_API_CONFIG);
  }

  post({ url, data = {} }) {
    return this.executeRequest(url, {
      method: 'POST',
      data,
    });
  }

  executeRequest(url: any, config: any) {
    const finalConfig = Object.assign({}, this.config, { url, ...config });
    return axios.request(finalConfig)
      .then(successfulRes => Promise.resolve(successfulRes))
      .catch(errorRes => Promise.reject(errorRes));
  }
}
