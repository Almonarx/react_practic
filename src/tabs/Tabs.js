import { TabNav } from './TabNav';
import { TabContent } from './TabContent';

export class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
  }

  componentDidMount() {
    this.clickTab(0);
  }

  clickTab = (id) => {
    this.setState({
      content: this.props.tabs[id].content
    });
  };

  render() {
    return (
      <section className="tab">
        <TabNav
          list={this.props.tabs.map(({ id, title }) => ({ id, title }))}
          select={this.clickTab}
        />
        <TabContent content={this.state.content} />
      </section>
    );
  }
}

Tabs.propTypes = { tabs: PropTypes.arrayOf(PropTypes.object).isRequired };
