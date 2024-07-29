import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 mx-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a new todo"
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="mt-2 bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-400">
        Add a todo
      </button>
    </form>
  );
}

export default AddTodo;
