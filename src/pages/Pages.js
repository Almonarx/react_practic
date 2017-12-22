import { Route, Switch, Redirect } from 'react-router-dom';

import { TaskList } from '../components/taskList';
import { Main } from '../partials/main';
import { NotFound } from '../components/notFound';
import { NotAuthPages } from '../components/notAuthPages';

export class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isLoading: false
    };
  }

  onLogin = data => {
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({ isLogin: true });
    }, 2000);
  };

  render() {
    if (!this.state.isLogin) {
      return <NotAuthPages
        login={this.onLogin}
        isLoading={this.state.isLoading}
      />;
    }

    return (
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/home" exact component={Main} />
        <Route path="/tasks" component={TaskList} />

        <Redirect from="/login" to="/" />

        <Route component={NotFound} />
      </Switch>
    );
  }
}

