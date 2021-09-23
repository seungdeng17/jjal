import { useSetRecoilState } from 'recoil';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { loginState, adminState } from '@/store/login';
import { request } from '@util/api';

export default function Login() {
  const setIsLogin = useSetRecoilState(loginState);
  const setAdminInfo = useSetRecoilState(adminState);

  const onSuccess = async (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const { profileObj, tokenObj } = res as GoogleLoginResponse;
    if (!profileObj || !tokenObj) return alert(`로그인 실패! ${res.code}`);
    setIsLogin(true);

    const { email } = profileObj;
    const { access_token } = tokenObj;
    const admins = process.env.REACT_APP_ADMINS?.split(',');
    if (!admins?.includes(email)) return;

    const { isSuccess } = await request({
      url: '/admin/login',
      method: 'PUT',
      body: { email, token: access_token },
    });
    if (!isSuccess) return alert('어드민 권한 획득에 실패했습니다.');

    setAdminInfo({ email, token: access_token });
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
