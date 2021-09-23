import { atom } from 'recoil';

export type AdminInfo = {
  email: string;
  token: string;
};

export const loginState = atom<boolean>({
  key: 'isLogin',
  default: false,
});

export const adminState = atom<null | AdminInfo>({
  key: 'adminInfo',
  default: null,
});
