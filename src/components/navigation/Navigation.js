import './navigation.scss';

export const Navigation = ({ list }) => (
  <nav className="main-nav">
    <ul>
      {
        list.map((item, i) => (
          <li key={i}>
            <a href={`/${item.toLocaleLowerCase()}`}>{item}</a>
          </li>
        ))
      }
    </ul>
  </nav>
);

Navigation.propTypes = { list: PropTypes.arrayOf(PropTypes.string) };

Navigation.defaultProps = { list: ['Home', 'Products', 'Contacts'] };
