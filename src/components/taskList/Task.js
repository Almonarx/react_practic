export const Task = ({ tasks }) =>
  (
    <div>
      <ul>{tasks.map(task => (
        <li
          key={task.id}
          className={task.completed ? 'done' : ''}
        >
          {task.title}
        </li>
      ))}
      </ul>
    </div>
  );

Task.propTypes = { tasks: PropTypes.array.isRequired };
