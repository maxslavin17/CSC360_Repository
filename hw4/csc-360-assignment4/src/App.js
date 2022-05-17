import React, { useState, useReducer, useEffect, useContext } from 'react';
import appReducer from './reducers';
import { StateContext } from './contexts';
import UserBar from './UserBar';
import ToDoList from './ToDoList';
import CreateToDo from './CreateToDo';

function App() {
  const [appState, appDispatch] = useReducer(appReducer, { user: '', todos: [] })
  const data = {
    state: appState,
    dispatch: appDispatch
  };

  useEffect(() => {
    fetch('/api/todos')
      .then(result => result.json())
      .then(todos => data.dispatch({ type: 'FETCH_TODOS', todos }))
  }, [])

  return (
    <div>
      <StateContext.Provider value={data}>
        <UserBar />
        <br/>
        {data.state.user && <CreateToDo />}
        <ToDoList />
      </StateContext.Provider>
    </div>
  );
}

export default App;
