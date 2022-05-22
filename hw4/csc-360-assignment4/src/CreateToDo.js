import React, {useState, useContext} from "react";
import { useResource } from 'react-request-hook'
import {StateContext} from './contexts';

var UUID = require('uuid-js');

export default function CreateToDo() {
  const stateContext = useContext(StateContext)
  const state = stateContext.state
  const dispatch = stateContext.dispatch
  
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  function handleTitle (evt) { setTitle(evt.target.value); }
  function handleDesc (evt) { setDesc(evt.target.value); }

  const [todo, createTodo] = useResource(({ title, desc, author, dateCreated, dateCompleted, completed }) => ({
    url: '/todos',
    method: 'post',
    data: { title, desc, author, dateCreated, dateCompleted, completed }
  }))

  function handleCreate () {
    createTodo({ 
	    title, desc, 
	    author: state.user, 
	    dateCreated: Date.now(), 
	    dateCompleted: undefined, 
	    completed: false })

    dispatch({ 
	    type: 'CREATE_TODO', 
	    title, desc, 
	    author: state.user, 
	    dateCreated: Date.now(), 
	    dateCompleted: undefined, 
	    completed: false })
  }

  return (
    <>
    <h2>Create a Task</h2>
    <form onSubmit={ (e) => {e.preventDefault(); handleCreate()} }>
      <div>
        Author: <b>{state.user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
      </div>
      <textarea value={desc} onChange={handleDesc} />
      <input type="submit" value="Create" disabled={title.length === 0} />
    </form>
    </>
  );
}
