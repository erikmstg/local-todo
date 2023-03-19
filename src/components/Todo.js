const Todo = ({ value, todos, setTodos, className }) => {
  const handleDelete = () => {
    const todoId = todos.filter((item) => item.id !== value.id);

    setTodos(todoId);
  };

  const handleComplete = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === value.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div className={`todo ${className}`}>
      <li className={`todo-item ${value.completed && "completed"} `}>
        {value.text}
      </li>
      <button className="complete-btn" onClick={handleComplete}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
