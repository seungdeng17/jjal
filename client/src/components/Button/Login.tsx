import { useSetRecoilState } from 'recoil';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { loginState, adminState } from '@/store/login';
import { ADMIN_SESSION_TOKEN } from '@constant/token';

export default function Login() {
  const setIsLogin = useSetRecoilState(loginState);
  const setIsAdmin = useSetRecoilState(adminState);

  const onSuccess = async (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const { profileObj, tokenId } = res as GoogleLoginResponse;
    if (!profileObj || !tokenId) return alert(`로그인 실패! ${res.code}`);
    setIsLogin(true);

    const { email } = profileObj;
    const admins = process.env.REACT_APP_ADMINS?.split(',');
    if (!admins?.includes(email)) return;
    sessionStorage.setItem(ADMIN_SESSION_TOKEN, tokenId);
    setIsAdmin(true);
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
