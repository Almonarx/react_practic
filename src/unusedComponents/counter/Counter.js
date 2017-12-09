import { Mount } from './mount/index';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.value = '';
  }

  clickHandler = () => this.setState({ counter: this.state.counter + 1 });

  componentWillUpdate(nextProps, nextState) {
    if (!(nextState.counter % 3) && !(nextState.counter % 5)) return this.value = 'aqua';
    if (!(nextState.counter % 3)) return this.value = 'green';
    if (!(nextState.counter % 5)) return this.value = 'blue';

    return this.value = 'blank';
  }

  render() {
    const { counter } = this.state;

    return (
      <div className="counter">
        <button onClick={this.clickHandler}>Inc</button>
        &nbsp;
        <span>{counter}</span>
        <br />
        <Mount
          code={counter}
          value={this.value}
        />
      </div>
    );
  }
}
