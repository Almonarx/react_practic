import './main.scss';

import { Numbers } from '../../components/numbers';
import { Counter } from '../../components/counter';
import { Persons } from '../../components/persons';
import { Tabs, TabLink, Tab, TabContent } from '../../components/tabs';

const tabs = [
  { id: 0, title: 'Tab 1', content: 'Some text is here' },
  { id: 1, title: 'Tab 2', content: 'Another content' },
  { id: 2, title: 'Tab 3', content: 'Third text' }
];

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

        <Tabs>

          <Tab>
            <TabLink title="Link 1" />
            <TabContent>
              <h1>I am tab 1</h1>
              <p>Lorem ipsum</p>
            </TabContent>
          </Tab>

          <Tab>
            <TabLink title="Link 2" />
            <TabContent>
              <h1>I am tab 2</h1>
              <p>Lorem ipsum</p>
            </TabContent>
          </Tab>

        </Tabs>
      </main>
    );
  }
}
