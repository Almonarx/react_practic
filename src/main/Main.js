import './main.scss';

import { Numbers } from './numbers';
import { Counter } from './counter';
import { Persons } from './persons';

export class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: false
    };
  }

  getUsers = () => {
    this.setState({
      loading: true,
      users: []
    });

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users, loading: false }));
  };

  showUserInfo = (user) => {
    alert(`${user.email}: ${user.phone}`);
  };

  render() {
    const { users, loading } = this.state;

    return (
      <main className="main">
        <p>Main</p>
        <Numbers from="2" to="9" even />
        <Counter />
        <button onClick={this.getUsers}>
          Get users
        </button>
        <Persons
          users={users}
          clickHandler={this.showUserInfo}
        />

        {loading && <span>Loading...</span>}
      </main>
    );
  }
}
