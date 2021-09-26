import { Route, Switch } from 'react-router-dom';
import GlobalStyles from '@style/GlobalStyles';
import { ToastContainer } from 'react-toastify';
import useLogin from '@hook/useLogin';

import Header from '@components/Header/Header';
import Main from '@page/Main/Main';
import Confirm from '@page/Confirm/Confirm';

export default function App() {
  useLogin();

  return (
    <>
      <GlobalStyles />
      <ToastContainer position="top-center" autoClose={1500} hideProgressBar={true} theme="colored" />
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/confirm" component={Confirm} />
      </Switch>
    </>
  );
}
