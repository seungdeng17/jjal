import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { loginState, loginInfoState } from '@/store/login';
import { ADMIN_SESSION_TOKEN } from '@constant/token';
import { request } from '@util/api';

export default function useLogin() {
  const setIsLogin = useSetRecoilState(loginState);
  const setLoginInfo = useSetRecoilState(loginInfoState);

  useEffect(() => {
    const token = sessionStorage.getItem(ADMIN_SESSION_TOKEN);
    if (!token) return;

    (async () => {
      const {
        isSuccess,
        data: { name, isAdmin },
      } = await request({ url: '/login', method: 'post' });
      if (!isSuccess) return alert('로그인 실패! 다시 시도해주세요.');

      setIsLogin(true);
      setLoginInfo((prev) => ({ ...prev, name, isAdmin }));
    })();
  }, []);
}
