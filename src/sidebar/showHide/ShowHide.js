import './showHide.scss';

export class ShowHide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: 'SHOW',
      className: null,
      textClass: 'hidden',
      longitude: 0,
      latitude: 0
    };
  }

  clickHandler = () => {
    if (this.state.textClass && 'geolocation' in navigator) {
      return navigator.geolocation.getCurrentPosition(position => this.setState({
        button: 'HIDE',
        className: 'active',
        textClass: null,
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      }));
    }

    return this.setState({
      button: 'SHOW',
      className: null,
      textClass: 'hidden'
    });
  };

  render() {
    return (
      <div>
        <button
          className={this.state.className}
          onClick={this.clickHandler}
        >
          {this.state.button}
        </button>
        <br />
        <span
          className={this.state.textClass}
        >
          Longitude is: {this.state.longitude}.<br />Latitude is: {this.state.latitude}.
        </span>
      </div>
    );
  }
}
