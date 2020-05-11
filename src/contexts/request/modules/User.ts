import * as URL from '../../../utils/EndPoints';
import {AxiosInstance} from 'axios';
const genUserReq = (request: AxiosInstance) => {
  const login = async (params: any) => {
    const url = URL.POST_USER;
    params = {...params, type: 'login'};
    const res = await request.post(url, params);
    return res && res.data && res.data.data;
  };
  const register = async (params: any) => {
    const url = URL.POST_USER;
    params = {...params, type: 'register'};
    const res = await request.post(url, params);
    return res && res.data && res.data.data;
  };
  return {
    login,
    register,
  };
};

export default genUserReq;
