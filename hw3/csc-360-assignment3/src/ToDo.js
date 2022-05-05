import React, {useState} from "react";

export default function ToDo({ title, desc, author, dateCreated, dispatch }) {
  const [complete, setComplete] = useState(false);
  let dateCompleted = Date.now();
  
  function handleComplete() {
    setComplete(!complete)
    dispatch({ type: 'TOGGLE_TODO', dateCreated, completed: complete });
  }

  return (
    <div>
      <h3>{title}</h3>
      <div>{desc}</div>
      <p></p>Date Created: {dateCreated}
      <div>
        <input type="checkbox" id="complete" value={complete} onChange={handleComplete} />{complete ? "Done" : "Note done"}
        <p></p>Date Completed: {complete ? dateCompleted : "N/A"}
      </div>
      <form onSubmit={ (e) => { e.preventDefault(); dispatch({ type: 'DELETE_TODO', completed: complete, dateCreated }) }}>
	<input type='submit' id='delete' value='Delete' />
      </form>
    </div>
  );
}
