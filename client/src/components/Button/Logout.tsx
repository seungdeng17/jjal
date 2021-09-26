import { GoogleLogout } from 'react-google-login';
import { ADMIN_SESSION_TOKEN } from '@constant/token';
import { defer } from '@util/util';

export default function Logout() {
  const onLogoutSuccess = async () => {
    sessionStorage.removeItem(ADMIN_SESSION_TOKEN);
    await defer(500);
    window.location.reload();
  };

  return (
    <GoogleLogout
      clientId={process.env.REACT_APP_OAUTH_CLIENT_ID as string}
      render={(renderProps) => <span onClick={renderProps.onClick}>로그아웃</span>}
      onLogoutSuccess={onLogoutSuccess}
    />
  );
}
