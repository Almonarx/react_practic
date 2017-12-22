import { Route, Switch, Redirect } from 'react-router-dom';

import { Login } from '../login/index';

export const NotAuthPages = ({ login, isLoading }) => (
  <Switch>
    <Route
      path="/login"
      render={() => <Login login={login} isLoading={isLoading} />}
    />
    <Redirect to="/login" />
  </Switch>
);
