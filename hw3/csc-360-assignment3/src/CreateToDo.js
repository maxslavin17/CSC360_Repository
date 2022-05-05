import React, {useState} from "react";

export default function CreateToDo({ user, todos, dispatch }) {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  function handleTitle (evt) { setTitle(evt.target.value); }
  function handleDesc (evt) { setDesc(evt.target.value); }
  function handleCreate () {
    dispatch({ type: 'CREATE_TODO', title, desc, author: user, dateCreated: Date.now() })
  }

  return (
    <>
    <h2>Create a Task</h2>
    <form onSubmit={ (e) => {e.preventDefault(); handleCreate()} }>
      <div>
        Author: <b>{user}</b>
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
