import React from "react";
export default function Todo({ todo, index }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button>{todo.isCompleted ? "Not done" : "Done"}</button>
      </div>
    </div>
  );
}
