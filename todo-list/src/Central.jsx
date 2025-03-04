import { useState } from "react";

function Central() {
  const [task, setTask] = useState("");

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        placeholder="Enter task"
      />
      <ul>
        <li>{task}</li>
      </ul>
    </div>
  );
}

export default Central;