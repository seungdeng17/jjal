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
  body?: any;
};

type RequestResult = {
  isSuccess: boolean;
  resultCode: number;
  data?: any;
};

export const request = async ({ url, method = 'get', params, body }: RequestArgs): Promise<RequestResult> => {
  try {
    const response = await axios({
      baseURL: API_HOST,
      withCredentials: true,
      url,
      method,
      params,
      data: body,
    });
    const { resultCode, data } = response.data;
    return {
      isSuccess: resultCode === RESULT_CODE.SUCCESS,
      resultCode,
      data,
    };
  } catch (e) {
    alert(`통신 에러가 발생했습니다. ${e.message}`);
    return {
      isSuccess: false,
      resultCode: -1,
    };
  }
};
