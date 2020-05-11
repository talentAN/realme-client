import * as URL from './EndPoints';
import {User} from '../types/index';
import {GUEST} from './consts/index';

export const getInitRes = (url: string) => {
  switch (url) {
    case URL.POST_GETALLBOOKS:
      return [];
    default:
      return [];
  }
};

export const cloneObject = (obj: any) => {
  return JSON.parse(JSON.stringify(obj));
};

export const namespace = (prefix: string[] = [], name: string) =>
  `${['liflib', ...prefix].join('.')}:${name}`;

export const key_user = namespace(['login'], 'user');
export const genID = () => Math.random().toString(36).substring(2, 16);

export const getCurrUser = (): User => {
  const user = window.localStorage.getItem(key_user);
  if (user && user !== 'undefined') {
    return JSON.parse(user);
  }
  return GUEST;
};

export const debounce = (fn: Function, wait = 0) => {
  let timeout: any;
  return (opts: any) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn(opts);
    }, wait);
  };
};
