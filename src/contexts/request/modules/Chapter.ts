import * as URL from '../../../utils/EndPoints';
import {AxiosInstance} from 'axios';

const url = URL.CHAPTER;

export enum Type {
  Latest = 'Latest',
  Detail = 'Detail',
  Hug = 'Hug',
  CancelHug = 'CancelHug',
  Like = 'Like',
  CancelLike = 'CancelLike',
  Collect = 'Collect',
  CancelCollect = 'CancelCollect',
}

export type ListParams = {
  limit: number;
  offset: number;
  type: Type;
};
const genChapterReq = (request: AxiosInstance) => {
  const add = async (params: any) => {
    return await request.post(url, params);
  };
  const queryList = async (params: ListParams) => {
    params = {...params, type: Type.Latest};
    const res = await request.post(url, params);
    if (res && res.data && res.data.data) {
      return res.data.data;
    }
  };
  const queryItem = async (chapterID: string) => {
    return await request.post(url, {type: Type.Detail, id: chapterID});
  };
  const hug = async (chapterID: string) => {
    return await request.post(url, {type: Type.Hug, id: chapterID});
  };
  const cancelHug = async (chapterID: string) => {
    return await request.post(url, {type: Type.CancelHug, id: chapterID});
  };
  const like = async (chapterID: string) => {
    return await request.post(url, {type: Type.Like, id: chapterID});
  };
  const cancelLike = async (chapterID: string) => {
    return await request.post(url, {type: Type.CancelLike, id: chapterID});
  };
  const collect = async (chapterID: string) => {
    return await request.post(url, {type: Type.Collect, id: chapterID});
  };
  const cancelCollect = async (chapterID: string) => {
    return await request.post(url, {type: Type.CancelCollect, id: chapterID});
  };
  return {add, queryList, queryItem, hug, cancelHug, like, cancelLike, collect, cancelCollect};
};

export default genChapterReq;
