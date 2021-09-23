import { useSetRecoilState } from 'recoil';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { loginState, adminState } from '@/store/login';

export default function Login() {
  const setIsLogin = useSetRecoilState(loginState);
  const setIsAdmin = useSetRecoilState(adminState);

  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const { profileObj } = res as GoogleLoginResponse;
    if (!profileObj) return alert(`로그인 실패! ${res.code}`);
    setIsLogin(true);

    const admins = process.env.REACT_APP_ADMINS;
    if (!admins?.split(',').includes(profileObj.email)) return;
    setIsAdmin(true);
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_OAUTH_CLIENT_ID as string}
      render={(renderProps) => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
          Login
        </button>
      )}
      buttonText="Login"
      onSuccess={onSuccess}
      cookiePolicy={'single_host_origin'}
    />
  );
}
