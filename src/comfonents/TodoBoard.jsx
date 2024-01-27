import react from "react";
import TodoItem from "./TodoItem";

function TodoBoard({ todoList, onDelete }) {
  return (
    <div>
      <h1>Todo List</h1>
      {todoList.map((item, index) => (
        <TodoItem key={index} item={item} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TodoBoard;
