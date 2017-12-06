export const TabNav = ({ list, select }) => {
  const onClick = (e, id) => {
    select(id);
    e.preventDefault();
  };

  return (
    <nav className="nav-tab">
      <ul>
        {list.map(el => (<li key={el.id}><button onClick={e => onClick(e, el.id)}>{el.title}</button></li>))}
      </ul>
    </nav>
  );
};

TabNav.propTypes = {
  select: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired
};
