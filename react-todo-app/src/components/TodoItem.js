import React from "react";

import React from "react";

function TodoItem(props) {
  return (
    <input
      type="checkbox"
      checked={this.props.todo.completed}
      onChange={() => console.log("clicked")}
    />
  );
}

export default TodoItem;