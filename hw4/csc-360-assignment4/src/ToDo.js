import React, {useState} from 'react';

export default function ToDo({ title, desc, author, dateCreated, dateCompleted, completed, updateTodo, deleteTodo }) {

  const [checked, updateChecked] = useState(false) 

  const handleToggle = (event) => {
    updateChecked(event.target.checked)
    const updatedTodo = { 
	    title, 
	    desc, 
	    author, 
	    dateCreated, 
	    dateCompleted: Date.now(), 
	    completed: !completed 
    }
    updateTodo(dateCompleted, updatedTodo)
  }
  const handleDelete = (event) => {
    deleteTodo(dateCreated)
  }

  return (
    <div>
      <h3>{title}</h3>
      <div>{desc}</div>
      <p></p>Date Created: {new Date(dateCreated).toDateString()}
      <div>
        <input type='checkbox' id='complete' value={checked} onChange={handleToggle} />{checked ? 'Done' : 'Note done'}
        <p></p>Date Completed: {completed ? new Date(dateCompleted).toDateString() : "N/A"}
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
