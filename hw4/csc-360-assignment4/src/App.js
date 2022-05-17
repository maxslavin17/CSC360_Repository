import React, { useState, useReducer, useEffect, useContext } from 'react';
import { useResource } from 'react-request-hook';
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

  const [todos, getTodos] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }))

  useEffect(getTodos, [])

  useEffect(() => {
    if (todos && todos.data) 
      data.dispatch({ type: 'FETCH_TODOS', todos: todos.data.reverse() })
  }, [todos])

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
