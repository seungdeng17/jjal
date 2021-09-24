import { useRecoilState, useSetRecoilState } from 'recoil';
import { GoogleLogout } from 'react-google-login';
import { loginState, adminState, AdminInfo } from '@/store/login';
import { request } from '@util/api';
import { ADMIN_SESSION_TOKEN } from '@constant/token';

export default function Logout() {
  const setIsLogin = useSetRecoilState(loginState);
  const [adminInfo, setAdminInfo] = useRecoilState(adminState);

  const onLogoutSuccess = async () => {
    if (adminInfo) {
      const { email } = adminInfo as AdminInfo;
      const { isSuccess } = await request({
        url: '/admin/logout',
        method: 'POST',
        body: { email },
      });
      if (!isSuccess) return alert('로그아웃을 다시 시도해주세요.');
      sessionStorage.removeItem(ADMIN_SESSION_TOKEN);
    }

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
