import React, { useState } from "react";

function TodoItem(props) {
  const [isDone, changeState] = useState(false);

  return (
    <li
      onClick={() => {
        changeState(!isDone);
      }}
      style={{ textDecoration: isDone ? "line-through" : "none" }}
    >
      {props.text}
    </li>
  );
}

export default TodoItem;
