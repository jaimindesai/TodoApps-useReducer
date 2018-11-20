import React from "react";
import ReactDOM from "react-dom";
import TodosApp from "./TodosApp";

import "./styles.css";

function Apps() {
  return (
    <div className="app">
      <div className="todo-list">
        <h1 className="title">Create a Todo with React Hooks</h1>
        <TodosApp />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Apps />, rootElement);
