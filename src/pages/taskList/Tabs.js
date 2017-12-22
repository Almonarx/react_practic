import { TabContent, Tab, TabLink, TabNav } from './index';

import './tabs.scss';

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { id: this.props.selectedIndex || 0 };
  }

  clickTab = id => this.setState({ id });

  render() {
    const tabs = this.props.children
      .filter(child => child.type === Tab)
      .reduce((prev, next) => [...prev, ...next.props.children], []);

    const navList = tabs.filter(tab => tab.type === TabLink);
    const tabContents = tabs.filter(tab => tab.type === TabContent);

    return (
      <section className="tab">
        <TabNav
          activeIndex={this.state.id}
          select={this.clickTab}
        >
          {navList}
        </TabNav>

        {tabContents[this.state.id]}
      </section>
    );
  }
}
