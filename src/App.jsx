import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!todo.trim()) return;
    setTodos((prev) => [...prev, todo]);
    setTodo("");
  };

  return (
    <div>
      <input
  type="text"
  placeholder="Enter Todo"
  value={todo}
  onChange={(e) => setTodo(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  }}
/>
      {todos.map((item, index) => (
        <div key={index}>
          <span>{item}</span>

          <button
            onClick={() =>
              setTodos(todos.filter((_, i) => i !== index))
            }
          >
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
