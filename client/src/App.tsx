import { Route, Switch } from 'react-router-dom';
import GlobalStyles from '@style/GlobalStyles';

import Header from '@components/Header/Header';
import Main from '@page/Main';
import Confirm from '@page/Confirm';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/admin/confirm" component={Confirm} />
      </Switch>
    </>
  );
}
