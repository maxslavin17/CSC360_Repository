import React, { useState } from "react";
import UserBar from './UserBar';
import ToDoList from './ToDoList';
import CreateToDo from './CreateToDo';

function App() {
  const [ user, setUser ] = useState("")
  const [ todos, setToDos ] = useState([])

  return (
    <div>
      <UserBar user={user} setUser={setUser} />
      <br/>
      {user && <CreateToDo user={user} toDos={todos} setToDos={setToDos} />}
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
