import React from "react";
import ToDo from "./ToDo";

export default function ToDoList({ todos = [] }) {
  return (
    <div>
      {todos.map((t, i) => (
        <ToDo {...t} key={"todo-" + i} />
      ))}
    </div>
  );
}
