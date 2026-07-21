import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function editTodo(id, newText) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, text: newText }
          : todo
      )
    );
  }

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  const completed = todos.filter((todo) => todo.completed).length;
  const pending = todos.length - completed;

  return (
    <div className="app">
      <Header
        total={todos.length}
        completed={completed}
        pending={pending}
      />

      <TodoForm addTodo={addTodo} />

      <input
        className="search-box"
        type="text"
        placeholder="🔍 Search Todo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredTodos.length === 0 ? (
        <h2 className="empty">No Todo Found</h2>
      ) : (
        <div className="todo-list">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={() => toggleTodo(todo.id)}
              deleteTodo={() => deleteTodo(todo.id)}
              editTodo={editTodo}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;