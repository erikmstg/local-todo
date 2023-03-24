import { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "./Provider";

const TodoList = () => {
  const { todos, filteredTodo, setTodos } = useContext(TodoContext);

  console.log(filteredTodo, "<<<<");

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodo?.map((value) => (
          <Todo
            key={value.id}
            value={value}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
