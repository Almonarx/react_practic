import './main.scss';

import { Persons } from '../../components/persons';
import { TaskList, Tabs, TabLink, Tab, TabContent } from '../../components/taskList';
import { Gallery } from '../../components/gallery';
import { Form } from '../../components/form';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      posts: [],
      /* openModal: false */
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

  /* updateModal(isOpen) {
    this.setState({ openModal: isOpen });
  } */

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

        <TaskList />

        <Form />

        {/* <button onClick={() => this.updateModal(true)}>Open</button>
        <ReactModal
          isOpen={this.state.openModal}
          contentLabel="Minimal Modal Example"
          ariaHideApp={false}
        >
          <p>Hello!</p>
          <button onClick={() => this.updateModal(false)}>Close</button>
        </ReactModal> */}
      </main>
    );
  }
}
