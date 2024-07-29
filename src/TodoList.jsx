// src/TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, removeTodo, title }) {
  return (
    <div className="mt-4 mx-6">
      <h2 className="text-xl font-bold">{title}</h2>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
