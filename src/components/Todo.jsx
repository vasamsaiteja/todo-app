import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Todo = ({
  id,
  task,
  completed,
  toggleComplete,
  deleteTodo,
  editTodo,
}) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(id)}
        className={`${completed ? `completed` : ""}`}
      >
        {task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(id)} />
      </div>
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.string,
  task: PropTypes.string,
  completed: PropTypes.bool,
  toggleComplete: PropTypes.func,
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func,
};

export default Todo;
