import { Route, Switch } from 'react-router-dom';
import GlobalStyles from '@style/GlobalStyles';

import Header from '@components/Header/Header';
import Main from '@page/Main/Main';
import Confirm from '@page/Confirm/Confirm';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/confirm" component={Confirm} />
      </Switch>
    </>
  );
}
