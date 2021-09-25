import { Route, Switch } from 'react-router-dom';
import GlobalStyles from '@style/GlobalStyles';

import Header from '@components/Header/Header';
import Main from '@page/Main';
import TempImage from '@page/TempImage';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/temp-image" component={TempImage} />
      </Switch>
    </>
  );
}
