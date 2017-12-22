import { Route, Switch, Redirect } from 'react-router-dom';

import { TaskList } from '../taskList';
import { Main } from '../../partials/main';
import { NotFound } from '../../components/notFound';
import { Task } from '../task';

const Main1 = () => <Main name={t}/>;

export const AuthPages = () => (
  <Switch>
    <Route path="/" exact render={Main1()} />
    <Route path="/home" exact render={Main1()} />
    <Route path="/tasks" component={TaskList} />
    <Route path="/tasks/:task" component={Task} />
    <Redirect from="/login" to="/" />

    <Route component={NotFound} />
  </Switch>
);

