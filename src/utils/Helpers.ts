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
export const contentToString = (content: string) => {
  const regex = new RegExp(/<\/?.+?>/, 'ig');
  return content.replace(regex, '');
};
const _second = 1000;
const _min = _second * 60;
const _hour = _min * 60;
const _day = _hour * 24;
const _week = _day * 7;
const _month = _day * 30;
const _year = _day * 365;

const _showSeconds = (period: number) => period < _min;
const _showMinutes = (period: number) => period < _hour;
const _showHours = (period: number) => period < _day;
const _showDays = (period: number) => period < _week;
const _showWeeks = (period: number) => period < _month;
const _showMonths = (period: number) => period < _year;

export const timestampToTimePassed = (timestamp: string) => {
  const period: number = new Date().getTime() - new Date(timestamp).getTime();
  let res;
  if (_showSeconds(period)) {
    res = Math.floor(period / _second);
  } else if (_showMinutes(period)) {
    res = Math.floor(period / _min);
  } else if (_showHours(period)) {
    res = Math.floor(period / _hour);
  } else if (_showDays(period)) {
    res = Math.floor(period / _day);
  } else if (_showWeeks(period)) {
    res = Math.floor(period / _week);
  } else if (_showMonths(period)) {
    res = Math.floor(period / _month);
  } else {
    res = Math.floor(period / _year);
  }
  return `${res}前`;
};
