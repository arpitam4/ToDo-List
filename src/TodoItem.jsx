// src/TodoItem.jsx
import React from 'react';
import { RxCross1 } from "react-icons/rx";
import { ImCross } from "react-icons/im";


function TodoItem({ todo, index, toggleTodo, removeTodo }) {
  return (
    <li className="flex items-center mt-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(index)}
        className="mr-2"
      />
      <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
      <button onClick={() => removeTodo(index)}>
        <ImCross className="ml-3 font-bold hover:text-red-500" />
      </button>
    </li>
  );
}

export default TodoItem;
