import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface IRequestConfig extends AxiosRequestConfig {
  accessType?: 'public' | 'private';
}

export const ResponseCodes = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTH: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
} as const;

const httpClient: AxiosInstance = axios.create({
  baseURL: 'https://example.com',
  headers: {
    'X-Api-Version': 1,
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
  },
});

httpClient.interceptors.request.use((config) => {
  if ('accessType' in config && config.accessType === 'public') {
    return config;
  }

  // TODO: добавить проверку токенов
  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // TODO: добавить обратботку ошибок, используя ResponseCodes
    return Promise.reject(error);
  },
);

export default httpClient;
