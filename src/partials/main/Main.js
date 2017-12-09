import './main.scss';

import { Persons } from '../../components/persons';
import { Tabs, TabLink, Tab, TabContent } from '../../components/tabs';
import { Gallery } from '../../components/gallery';

export class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      posts: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  showUserInfo = (user) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  };

  render() {
    const { users, posts } = this.state;

    return (
      <main className="main">
        <Tabs selectedIndex="0">

          <Tab>
            <TabLink title="Link 1" />
            <TabContent>
              <Persons
                users={users}
                clickHandler={this.showUserInfo}
              />
              <div>
                <h3>Posts</h3>
                {posts.map(post => <p key={post.id}>{post.body}</p>)}
              </div>
            </TabContent>
          </Tab>

          <Tab>
            <TabLink title="Link 2" />
            <TabContent>
              <Gallery />
            </TabContent>
          </Tab>

        </Tabs>
      </main>
    );
  }
}
