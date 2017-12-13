class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  handleName = (event) => this.setState({ name: e.target.value });

  render() {
    return (
      <form>
        <input
          value={this.state.name}
          onChange={this.handleName}
        />
        <p>{this.state.name.toUpperCase()}</p>
      </form>
    );
  }
}
