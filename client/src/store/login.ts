import { atom } from 'recoil';

type LoginInfo = {
  name: string;
  isAdmin: boolean;
};

export const loginState = atom<boolean>({
  key: 'isLogin',
  default: false,
});

export const loginInfoState = atom<LoginInfo>({
  key: 'loginInfo',
  default: {
    name: '',
    isAdmin: false,
  },
});
