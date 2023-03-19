const Form = ({ setInputField, todos, setTodos, inputFiled, setStatus }) => {
  const handleInput = (e) => {
    setInputField(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      { text: inputFiled, completed: false, id: Date.now() },
    ]);

    setInputField("");
  };

  const handleStatus = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        onChange={handleInput}
        value={inputFiled}
      />
      <button
        className="todo-button"
        type="submit"
        disabled={inputFiled.length < 1}
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={handleStatus}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
