import React, { useState, useReducer, useEffect, createContext } from 'react';
import appReducer from './reducers'
import UserBar from './UserBar';
import Header from './Header';
import ToDoList from './ToDoList';
import CreateToDo from './CreateToDo';

function App() {
  const [state, dispatch] = useReducer(appReducer, { user: '', todos: [] })
  const { user, todos } = state

  useEffect(() => {
    if (user) 
      document.title = `${user}'s Blog`
    else
      document.title = 'Blog'
  }, [user])

  return (
    <div>
      <ThemeContext.Provider value={{primary:'yellow'}}>
        <Header text='My Blog' />
      </ThemeContext.Provider>
      <UserBar user={user} dispatch={dispatch} />
      <br/>
      {user && <CreateToDo user={user} todos={todos} dispatch={dispatch} />}
      <ToDoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export const ThemeContext = createContext({primary:'red'});
export default App;
