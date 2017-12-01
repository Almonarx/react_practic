import './main.scss';

import { Numbers } from './numbers';
import { Counter } from './counter';
import { Persons } from './persons';

export class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: false,
      posts: []
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
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  };

  render() {
    const { users, loading, posts } = this.state;

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
        <div>
          <h2>Posts</h2>
          {posts.map(post => <p key={post.id}>{post.body}</p>)}
        </div>

        {loading && <span>Loading...</span>}
      </main>
    );
  }
}
