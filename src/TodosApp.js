import React, { useState, useReducer } from "react";
import Todo from "./Todo";

const initialTodos = [
  { text: "React Hooks in Depth", completed: false },
  { text: "Write Articles @ Medium", completed: true },
  { text: "Share article at Reddit", completed: false }
];

function appReducer(state, action) {
  switch (action.type) {
    case "add": {
      return [...state, { text: action.payload, completed: false }];
    }
    default: {
      return state;
    }
  }
}

export default function TodosApp() {
  const [value, setValue] = useState("");
  const [state, dispatch] = useReducer(appReducer, initialTodos);

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    dispatch({ type: "add", payload: value });
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          onChange={e => setValue(e.target.value)}
          placeholder=" Enter your task"
        />
      </form>
      {state.map((item, index) => (
        <Todo key={index} index={index} todo={item} />
      ))}
    </div>
  );
}
