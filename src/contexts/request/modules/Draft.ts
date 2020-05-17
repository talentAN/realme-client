import * as URL from '../../../utils/EndPoints';
import {AxiosInstance} from 'axios';

enum Type {
  Add = 'add',
  Update = 'update',
  Delete = 'delete',
  Publish = 'publish',
  Count = 'count',
  QueryList = 'query_ist',
  QueryItem = 'query_item',
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
  const del = async (id: string) => {
    const params = {id, type: Type.Delete};
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
  const queryList = async (params: any) => {
    params = {...params, type: Type.QueryList};
    const res = await request.post(url, params);
    return res.data.data.data;
  };
  const queryItem = async (id: string) => {
    const params = {type: Type.QueryItem, id};
    const res = await request.post(url, params);
    return res && res.data && res.data.data;
  };
  return {add, update, del, queryList, queryItem, publish, getTotalNum};
};

export default genDraftReq;
