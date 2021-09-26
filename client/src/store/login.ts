import { atom } from 'recoil';

type LoginInfo = {
  name: string;
};

export const loginState = atom<boolean>({
  key: 'isLogin',
  default: false,
});

export const loginInfoState = atom<LoginInfo>({
  key: 'loginInfo',
  default: {
    name: '',
  },
});

export const adminState = atom<boolean>({
  key: 'isAdmin',
  default: false,
});
