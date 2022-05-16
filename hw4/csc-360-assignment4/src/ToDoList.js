import React from "react";
import ToDo from "./ToDo";

export default function ToDoList({ todos=[], dispatch }) {

  return (
    <div>
      {todos.map((t, i) => (
          <ToDo {...t} key={"todo-" + i} dispatch={dispatch}/>
      ))}
    </div>
  );
}
