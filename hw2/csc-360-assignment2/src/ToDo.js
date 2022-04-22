import React, {useState} from "react";

export default function ToDo({ title, desc, dateCreated }) {
  const [complete, setComplete] = useState(false);
  let dateCompleted = Date.now();
  
  function handleComplete() {
    setComplete(!complete);
    if (complete === true) { dateCompleted = Date.now(); }
  }

  return (
    <div>
      <h3>{title}</h3>
      <div>{desc}</div>
      <p></p>Date Created: {dateCreated}
      <br />
      <div>
        <input type="checkbox" id="complete" value={complete} onChange={handleComplete} />{complete ? "Done" : "Note done"}
      </div>
      <p></p>Date Completed: {complete ? dateCompleted : "N/A"}
    </div>
  );
}
