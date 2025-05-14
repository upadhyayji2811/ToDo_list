import React from "react";
import { useState } from "react";
import ToDoList from "./components/ToDoList";

import Header from "./components/Header";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    todos.unshift({ id: Date.now(), text: inputValue, completed: false });
    setInputValue("");
  };

  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleUpdateTode = (id, updateTodo) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: updateTodo } : todo
      )
    );
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="min-h-screen mx-auto mt-1 p-4">
      <div className="h-[80vh] w-[95%] sm:w-[600px] absolute left-1/2 top-[10%] -translate-x-1/2 bg-white overflow-hidden p-2 sm:p-4">
        <Header />
        <form onSubmit={addTodo} className="w-full sm:p-2">
          <label
            htmlFor="title"
            className="block text-xs font-medium text-gray-700 relative"
          ></label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="title"
            className="mt-1 p-3 rounded-sm min-w-[55%] sm:max-w-[70%] border border-bg shadow-xs sm:text-sm outline-none"
          />

          <button
            type="submit"
            className="inline-block ml-2 rounded-sm border border-current px-8 py-3 text-sm font-medium hover:bg-bg hover:text-white text-bg transition hover:scale-110 hover:rotate-2 focus:ring-4 focus:outline-hidden cursor-pointer outline-none"
          >
            Add
          </button>
        </form>

        <ToDoList
          todos={todos}
          handleRemove={handleRemove}
          handleUpdateTode={handleUpdateTode}
          toggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
}
export default App;
