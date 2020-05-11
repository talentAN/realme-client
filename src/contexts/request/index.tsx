import React, {useContext, createContext} from 'react';
import axios, {AxiosRequestConfig} from 'axios';
import {rootContext} from '../RootContext';
import genDraftReq from './modules/Draft';
import genChapterReq from './modules/Chapter';
import genUserReq from './modules/User';

export const requestContext = createContext<any>({});
const {Provider} = requestContext;
const AxiosInstance = axios.create();
const RequestProvider = ({children}: any) => {
  const {user, setDiaLog, setGuest} = useContext(rootContext);
  const errorParser = (error: any) => {
    const statusCode = error.response.data.statusCode;
    if (statusCode === 401) {
      setGuest();
    } else {
      setDiaLog({
        open: true,
        content: error.response.data.message,
        onConfirm: () => {
          window.location.reload();
        },
      });
    }
    return Object.assign(
      {
        isError: true,
        timestamp: Date.now(),
      },
      error.response.data
    );
  };
  AxiosInstance.interceptors.request.use(
    (config: any): AxiosRequestConfig => {
      if (user.token) {
        config.headers.authorization = `Bearer ${user.token}`;
      }
      return config;
    }
  );
  AxiosInstance.interceptors.response.use((res: any) => res, errorParser);

  return (
    <Provider
      value={{
        Draft: genDraftReq(AxiosInstance),
        Chapter: genChapterReq(AxiosInstance),
        User: genUserReq(AxiosInstance),
      }}
    >
      {children}
    </Provider>
  );
};

export default RequestProvider;
