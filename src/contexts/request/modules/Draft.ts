import * as URL from '../../../utils/EndPoints';
import {AxiosInstance} from 'axios';

enum Type {
  Add = 'add',
  Update = 'update',
  Delete = 'delete',
  Query = 'query',
  Publish = 'publish',
  Count = 'count',
}
const genDraftReq = (request: AxiosInstance) => {
  const url = URL.DRAFT;
  const add = async (params: any) => {
    const res = await request.post(url, {...params, type: Type.Add});
    return res && res.data && res.data.data;
  };
  const update = async (data: any) => {
    const params = {...data, type: 'update'};
    return await request.post(url, params);
  };
  const del = async (params: any) => {
    params = {...params, type: 'delete'};
    return await request.post(url, params);
  };
  const query = async (params: any) => {
    return await request.post(url, params);
  };
  const publish = async (id: string) => {
    const res = await request.post(url, {type: Type.Publish, id});
    return res && res.data && res.data.data;
  };
  const getTotalNum = async () => {
    const res = await request.post(url, {type: Type.Count});
    return res && res.data && res.data.data;
  };
  return {add, update, del, query, publish, getTotalNum};
};

export default genDraftReq;
