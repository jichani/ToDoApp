import react from "react";

function TodoItem({ item, onDelete }) {
  return (
    <div className="todo_item">
      {item}
      <button onClick={() => onDelete(item)}>X</button>
    </div>
  );
}

export default TodoItem;
