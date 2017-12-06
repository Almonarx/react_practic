import './numbers.scss';

export class Numbers extends React.Component {
  getNumbers() {
    const arr = [];

    for (let i = +this.props.from; i <= +this.props.to; i++) {
      arr.push(i);
    }

    if (this.props.odd) return arr.filter(val => val % 2);
    if (this.props.even) return arr.filter(val => !(val % 2));

    return arr;
  }

  render() {
    return (
      <ul className="numbers">
        {
          this.getNumbers().map((item, i) => (
            <li key={i}>
              {item}
            </li>
          ))
        }
      </ul>
    );
  }
}

Numbers.propTypes = {
  from: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
};
