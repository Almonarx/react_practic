import './main.scss';

export class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      posts: [],
      openModal: false
    };
  }

  updateModal(isOpen) {
    this.setState({ openModal: isOpen });
  };

  render() {
    return (
      <main className="main">
        <h1>Main</h1>

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
