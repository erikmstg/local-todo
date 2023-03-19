import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodo }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodo?.map((value) => (
          <Todo
            value={value}
            key={value.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
