import axios from 'axios';
import { API_HOST, RESULT_CODE } from '@constant/fetch';

type RequestArgs = {
  url: string;
  method?:
    | 'get'
    | 'GET'
    | 'delete'
    | 'DELETE'
    | 'head'
    | 'HEAD'
    | 'options'
    | 'OPTIONS'
    | 'post'
    | 'POST'
    | 'put'
    | 'PUT'
    | 'patch'
    | 'PATCH'
    | 'purge'
    | 'PURGE'
    | 'link'
    | 'LINK'
    | 'unlink'
    | 'UNLINK'
    | undefined;
  params?: { [key: string]: string };
  data?: any;
};

type Result = {
  isSuccess: boolean;
  resultCode: number;
  data?: any;
};

type RequestResult = Promise<Result> | Result;

export function request({ url, method = 'get', params, data }: RequestArgs): RequestResult {
  try {
    return axios({
      baseURL: API_HOST,
      withCredentials: true,
      url,
      method,
      params,
      data,
    }).then((response) => {
      const { resultCode, data } = response.data;
      return {
        isSuccess: resultCode === RESULT_CODE.SUCCESS,
        resultCode,
        data,
      };
    });
  } catch (e) {
    alert(`에러가 발생했습니다. ${e.message}`);
    return {
      isSuccess: false,
      resultCode: -1,
    };
  }
}
