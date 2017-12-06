import './sidebar.scss';

import { Greet } from '../../components/greet';
import { UsersList } from '../../components/usersList';
import { ShowHide } from '../../components/showHide';
import { Timer } from '../../components/timer';

export class Sidebar extends React.Component {
  constructor() {
    super();

    this.users = [
      { id: 123, name: 'Patrik', age: 42 },
      { id: 46, name: 'Teresa', age: 24 },
      { id: 789, name: 'John', age: 12 }
    ];
  }

  render() {
    return (
      <aside className="sidebar">
        <p>Sidebar</p>
        <Greet name="Taras" />
        <Timer />
        <UsersList list={this.users} />
        <ShowHide />
      </aside>
    );
  }
}
