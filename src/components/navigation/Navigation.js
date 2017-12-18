import { NavLink } from 'react-router-dom';

import './navigation.scss';

export const Navigation = ({ list }) => (
  <nav className="main-nav">
    <ul>
      {
        list.map((item, i) => (
          <li key={i}>
            <NavLink
              activeClassName="active"
              to={`/${item.toLocaleLowerCase()}`}
            >
              {item}
            </NavLink>
          </li>
        ))
      }
    </ul>
  </nav>
);

Navigation.propTypes = { list: PropTypes.arrayOf(PropTypes.string) };

Navigation.defaultProps = { list: ['Home', 'Products', 'Contacts'] };
