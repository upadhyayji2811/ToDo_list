import React from "react";
import { VscRemove } from "react-icons/vsc";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

function ToDoItem({ toggleTodo, handleUpdateTode, handleRemove, todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updateTodo, setUpdateTodo] = useState(todo.text);

  const handleSave = () => {
    if (isEditing) {
      handleUpdateTode(todo.id, updateTodo);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="text-xs py-3 sm:px-4 font-semibold capitalize flex justify-between items-center pr-6 animate-fade-in">
      {isEditing ? (
        <>
          <input
            type="text"
            value={updateTodo}
            onChange={(e) => setUpdateTodo(e.target.value)}
            className="w-[60%] p-2 border border-bg rounded-xl outline-none"
          />
          <div className="flex gap-x-2">
            <FaSave className="icon " onClick={() => handleSave(todo.id)} />
            <MdCancel className="icon" onClick={() => setIsEditing(false)} />
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="hidden"
              id={`checkbox-${todo.id}`}
            />
            <label
              htmlFor={`checkbox-${todo.id}`}
              className={`w-6 h-6 mr-2 flex items-center justify-center border-2 rounded-full cursor-pointer transition-all ${
                todo.completed
                  ? "bg-bg border-bg text-white"
                  : "border-gray-400"
              }`}
            >
              {todo.completed && "✔"}
            </label>
            <p
              className={`animate-fade-in cursor-pointer ${
                todo.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {todo.text}
            </p>
          </div>
          <div className="flex gap-x-2">
            <CiEdit className="icon" onClick={() => setIsEditing(true)} />
            <VscRemove onClick={() => handleRemove(todo.id)} className="icon" />
          </div>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
