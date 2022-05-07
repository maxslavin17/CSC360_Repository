import React, {useState} from 'react';

export default function ToDo({ title, desc, author, dateCreated, complete, dispatch }) {
  let dateCompleted = Date.now();

  function handleComplete() {
    dispatch({ type: 'TOGGLE_TODO', dateCreated });
  }
  function handleDelete() {
    dispatch({ type: 'DELETE_TODO', dateCreated });
  }
  return (
    <div>
      <h3>{title}</h3>
      <div>{desc}</div>
      <p></p>Date Created: {dateCreated}
      <div>
        <input type='checkbox' id='complete' value={complete} onChange={handleComplete} />{complete ? 'Done' : 'Note done'}
        <p></p>Date Completed: {complete ? dateCompleted : "N/A"}
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
