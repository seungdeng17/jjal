import { useSetRecoilState } from 'recoil';
import { GoogleLogout } from 'react-google-login';
import { loginState, adminState } from '@/store/login';

export default function Logout() {
  const setIsLogin = useSetRecoilState(loginState);
  const setAdminInfo = useSetRecoilState(adminState);

  const onLogoutSuccess = () => {
    setIsLogin(false);
    setAdminInfo(null);
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
