export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  clickHandler = () => this.setState({ counter: this.state.counter + 1 });

  render() {
    return (
      <div className="counter">
        <button onClick={this.clickHandler}>Inc</button>
        &nbsp;
        <span>{this.state.counter}</span>
      </div>
    );
  }
}
