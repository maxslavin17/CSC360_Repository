import React, { useState, useReducer } from 'react';
import appReducer from './reducers'
import UserBar from './UserBar';
import ToDoList from './ToDoList';
import CreateToDo from './CreateToDo';

function App() {
  const [state, dispatch] = useReducer(appReducer, { user: '', todos: [] })
  const { user, todos } = state

  return (
    <div>
      <UserBar user={user} dispatch={dispatch} />
      <br/>
      {user && <CreateToDo user={user} todos={todos} dispatch={dispatch} />}
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
