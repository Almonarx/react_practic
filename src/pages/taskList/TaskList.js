import { Task, Tabs, Tab, TabLink, TabContent } from './index';

export class TaskList extends Component {
  constructor(props) {
    super(props);
    this.day = new Date().getDay();
    this.days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    this.state = { tasks: [] };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(tasks => this.setState({ tasks }));
  }

  render() {
    return (
      <Tabs selectedIndex={this.day}>
        {this.days.map((day, i) => (
          <Tab key={i}>
            <TabLink title={day} />
            <TabContent>
              <Task tasks={this.state.tasks.filter(val => val.userId === i + 1)} />
            </TabContent>
          </Tab>
        ))}
      </Tabs>
    );
  }
}
