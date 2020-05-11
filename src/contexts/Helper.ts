import axios, {AxiosRequestConfig} from 'axios';
export const request = axios.create();

export const axiosConfigGetter = (auth: any): AxiosRequestConfig => {
  return {
    headers: {
      authorization: `Bearer ${auth.token}`,
    },
  };
};
