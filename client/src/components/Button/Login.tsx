import { useSetRecoilState } from 'recoil';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { loginState, loginInfoState } from '@/store/login';
import { ADMIN_SESSION_TOKEN } from '@constant/token';
import { request } from '@util/api';

export default function Login() {
  const setIsLogin = useSetRecoilState(loginState);
  const setLoginInfo = useSetRecoilState(loginInfoState);

  const onSuccess = async (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const { profileObj, tokenId } = res as GoogleLoginResponse;
    if (!profileObj || !tokenId) return alert(`로그인 실패! ${res.code}`);
    sessionStorage.setItem(ADMIN_SESSION_TOKEN, tokenId);

    const {
      isSuccess,
      data: { name, isAdmin },
    } = await request({ url: '/login', method: 'post' });
    if (!isSuccess) return alert('로그인 실패! 다시 시도해주세요.');

    setIsLogin(true);
    setLoginInfo((prev) => ({ ...prev, name, isAdmin }));
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_OAUTH_CLIENT_ID as string}
      render={(renderProps) => <span onClick={renderProps.onClick}>로그인</span>}
      onSuccess={onSuccess}
      cookiePolicy={'single_host_origin'}
    />
  );
}
