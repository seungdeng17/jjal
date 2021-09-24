import { atom } from 'recoil';

export const loginState = atom<boolean>({
  key: 'isLogin',
  default: false,
});

export const adminState = atom<boolean>({
  key: 'isAdmin',
  default: false,
});
