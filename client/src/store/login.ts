import { atom } from 'recoil';

export const loginState = atom({
  key: 'isLogin',
  default: false,
});

export const adminState = atom({
  key: 'isAdmin',
  default: false,
});
