import React, {useContext} from "react";
import {StateContext} from './contexts';
import ToDo from "./ToDo";

export default function ToDoList() {
  const stateContext = useContext(StateContext)

  const updateTodo = (dateCompleted, updatedTodo) => {
    stateContext.dispatch({ type:'TOGGLE_TODO', todos:stateContext.state.todos, dateCompleted, updatedTodo })
  }
  const deleteTodo = (dateCreated) => {
    stateContext.dispatch({ type:'DELETE_TODO', todos:stateContext.state.todos, dateCreated })
  }
	
return (
    <div>
      {stateContext.state.todos.map((t, i) => (
          <ToDo {...t} key={t.dateCreated} updateTodo={updateTodo} deleteTodo={deleteTodo} dispatch={stateContext.dispatch}/>
      ))}
    </div>
  );
}
