import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ toggleTodo, handleUpdateTode, handleRemove, todos }) {
  return (
    <ul className="todolist overflow-y-scroll p-2 pr-7 max-h-[100%]">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          handleRemove={handleRemove}
          handleUpdateTode={handleUpdateTode}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
