export const Persons = ({ users, clickHandler }) => (
  <ul>{users.map(user => (
    <li
      key={user.id}
      onClick={() => clickHandler(user)}
    >
      {user.name}
    </li>
  ))}
  </ul>
);

Persons.propTypes = {
  users: PropTypes.array.isRequired,
  clickHandler: PropTypes.func.isRequired
};
