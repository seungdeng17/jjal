import { GoogleLogout } from 'react-google-login';
import { useSetRecoilState } from 'recoil';
import { useHistory } from 'react-router';
import { loginState, loginInfoState } from '@/store/login';
import { ADMIN_SESSION_TOKEN } from '@constant/token';
import { defer } from '@util/util';

export default function Logout() {
  const history = useHistory();
  const setIsLogin = useSetRecoilState(loginState);
  const setLoginInfo = useSetRecoilState(loginInfoState);

  const onLogoutSuccess = async () => {
    sessionStorage.removeItem(ADMIN_SESSION_TOKEN);
    await defer(300);
    setIsLogin(false);
    setLoginInfo((prev) => ({ ...prev, name: '', isAdmin: false }));
    history.push('/');
  };

  return (
    <GoogleLogout
      clientId={process.env.REACT_APP_OAUTH_CLIENT_ID as string}
      render={(renderProps) => <span onClick={renderProps.onClick}>로그아웃</span>}
      onLogoutSuccess={onLogoutSuccess}
    />
  );
}
