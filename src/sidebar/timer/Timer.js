export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.date = new Date();
    this.state = { date: new Date() };
    this.intervalId = setInterval(() => this.setState({ date: new Date() }), 500);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        {date.toLocaleDateString()}
        <br />
        {date.toLocaleTimeString()}
      </div>
    );
  }
}
