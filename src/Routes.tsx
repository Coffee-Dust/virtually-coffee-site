import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/home';
import Support from './pages/support';
import Virt8bitPage from './pages/virtually8bit';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/virtually8bit">
        <Virt8bitPage />
      </Route>
      <Route path="/support">
        <Support />
      </Route>
      <Redirect from='*' to='/' />
    </Switch>
  );
}

export default Routes;
