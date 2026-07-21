import { useState } from "react";

function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
  editTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  function handleSave() {
    if (editText.trim() === "") return;

    editTodo(todo.id, editText.trim());
    setIsEditing(false);
  }

  return (
    <div className="todo-item">

      <div className="todo-left">

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleTodo}
        />

        {isEditing ? (
          <input
            className="edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSave();
              }
            }}
            autoFocus
          />
        ) : (
          <span
            onDoubleClick={() => setIsEditing(true)}
            style={{
              textDecoration: todo.completed
                ? "line-through"
                : "none",
              opacity: todo.completed ? 0.6 : 1,
            }}
          >
            {todo.text}
          </span>
        )}

      </div>

      <div className="todo-buttons">

        {isEditing ? (
          <button
            className="save-btn"
            onClick={handleSave}
          >
            Save
          </button>
        ) : (
          <button
            className="edit-btn"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}

        <button
          className="delete-btn"
          onClick={deleteTodo}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TodoItem;