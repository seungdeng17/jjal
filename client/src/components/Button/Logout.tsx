import { useSetRecoilState } from 'recoil';
import { GoogleLogout } from 'react-google-login';
import { loginState, adminState } from '@/store/login';
import { ADMIN_SESSION_TOKEN } from '@constant/token';

export default function Logout() {
  const setIsLogin = useSetRecoilState(loginState);
  const setIsAdmin = useSetRecoilState(adminState);

  const onLogoutSuccess = async () => {
    setIsLogin(false);
    setIsAdmin(false);
    sessionStorage.removeItem(ADMIN_SESSION_TOKEN);
    window.location.reload();
  };

  return (
    <GoogleLogout
      clientId={process.env.REACT_APP_OAUTH_CLIENT_ID as string}
      render={(renderProps) => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
          Logout
        </button>
      )}
      buttonText="Logout"
      onLogoutSuccess={onLogoutSuccess}
    />
  );
}
