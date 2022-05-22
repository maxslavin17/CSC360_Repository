import React, {useContext, useEffect} from 'react';
import {useResource} from 'react-request-hook';
import {StateContext} from './contexts';
import ToDo from './ToDo';

export default function ToDoList() {
  const stateContext = useContext(StateContext)
  const [toggledTodo, toggleTodo] = useResource(({ id, title, desc, author, dateCreated, dateCompleted, completed }) => ({
    url: `/todos/${encodeURI(id)}`,
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    data: { id, title, desc, author, dateCreated, dateCompleted, completed }
  }))
  const [removedTodo, removeTodo] = useResource(({ id }) => ({
    url: `/todos/${encodeURI(id)}`,
    method: 'delete',
    headers: {'Content-Type': 'application/json'},
    data: { id }
  }))
  
  const updateTodo = (id, updatedTodo) => {
    toggleTodo({id, title: updatedTodo.title, 
	    desc: updatedTodo.desc, 
	    author: updatedTodo.author,
	    dateCreated: updatedTodo.dateCreated, 
	    dateCompleted: updatedTodo.dateCompleted, 
	    completed: updatedTodo.completed })

    stateContext.dispatch({ 
	    type:'TOGGLE_TODO', 
	    todos: stateContext.state.todos, 
	    id, updatedTodo })
  }
  const deleteTodo = (id) => {
    removeTodo({ id })
    stateContext.dispatch({ type:'DELETE_TODO', todos:stateContext.state.todos, id })
  }
	
return (
    <div>
      {stateContext.state.todos.map((t, i) => (
          <ToDo {...t} key={t.id} updateTodo={updateTodo} deleteTodo={deleteTodo} dispatch={stateContext.dispatch}/>
      ))}
    </div>
  );
}
