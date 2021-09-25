import axios from 'axios';
import { API_HOST, RESULT_CODE } from '@constant/fetch';
import { ADMIN_SESSION_TOKEN } from '@constant/token';

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
  headers?: { [key: string]: string };
  params?: { [key: string]: string };
  body?: { [key: string]: any };
};

type RequestResult = {
  isSuccess: boolean;
  resultCode: number;
  data?: any;
};

export const request = async ({
  url,
  method = 'get',
  headers = {},
  params,
  body,
}: RequestArgs): Promise<RequestResult> => {
  const token = sessionStorage.getItem(ADMIN_SESSION_TOKEN);
  if (token) headers['x-access-token'] = token;

  try {
    const res = await axios({
      baseURL: API_HOST,
      withCredentials: true,
      url,
      method,
      headers,
      params,
      data: body,
    });
    const { resultCode, data } = res.data;
    return {
      isSuccess: resultCode === RESULT_CODE.SUCCESS,
      resultCode,
      data,
    };
  } catch (e) {
    alert(`http error: ${e.message}`);
    return {
      isSuccess: false,
      resultCode: -1,
    };
  }
};
