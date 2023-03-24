import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { TodoContext } from "./components/Provider";

function App() {
  const [inputFiled, setInputField] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodo, setFilteredTodo] = useState([]);

  const TodoProvider = TodoContext.Provider;

  useEffect(() => {
    getLocal();
  }, []); // eslint-disable-next-line

  useEffect(() => {
    saveLocal();
    filterHandlerTodo();
  }, [todos, status]);

  const filterHandlerTodo = () => {
    switch (status) {
      case "completed":
        setFilteredTodo(todos.filter((item) => item.completed === true));
        break;
      case "uncompleted":
        setFilteredTodo(todos.filter((item) => item.completed === false));
        break;
      default:
        setFilteredTodo(todos);
        break;
    }
  };

  const saveLocal = () => {
    window.localStorage.setItem("todo", JSON.stringify(todos));
  };

  const getLocal = () => {
    if (window.localStorage.getItem("todo") === null) {
      window.localStorage.setItem("todo", JSON.stringify([]));
    } else {
      let local = JSON.parse(window.localStorage.getItem("todo"));
      if (local.length) {
        setTodos(local);
      }
    }
  };

  return (
    <div className="App">
      <TodoProvider
        value={{
          todos,
          setTodos,
          status,
          inputFiled,
          setInputField,
          filteredTodo,
          setStatus,
        }}
      >
        <header>
          <h1>Todo's</h1>
        </header>
        <Form
          inputFiled={inputFiled}
          setInputField={setInputField}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
        />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
