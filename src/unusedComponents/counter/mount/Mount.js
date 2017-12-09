import './mount.scss';

export class Mount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: 'init' };
  }

  render() {
    return (
      <code className={this.props.value} id="mount">
        <span>
          The code from props is {this.props.code}<br />
          The code from state is {this.state.status}
        </span>
      </code>
    );
  }
}
