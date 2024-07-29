// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { loadTodos, saveTodos } from './localStorage';

function App() {
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  useEffect(() => {
    const { todos, doneTodos } = loadTodos();
    setTodos(todos);
    setDoneTodos(doneTodos);
  }, []);

  useEffect(() => {
    saveTodos(todos, doneTodos);
  }, [todos, doneTodos]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index, isCompleted) => {
    if (isCompleted) {
      const todo = todos[index];
      setDoneTodos([...doneTodos, { ...todo, completed: true }]);
      setTodos(todos.filter((_, i) => i !== index));
    } else {
      const doneTodo = doneTodos[index];
      setTodos([...todos, { ...doneTodo, completed: false }]);
      setDoneTodos(doneTodos.filter((_, i) => i !== index));
    }
  };

  const removeTodo = (index, isCompleted) => {
    if (isCompleted) {
      setTodos(todos.filter((_, i) => i !== index));
    } else {
      setDoneTodos(doneTodos.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto p-4">
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={(index) => toggleTodo(index, true)} removeTodo={(index) => removeTodo(index, true)} title="Things to do" />
        <TodoList todos={doneTodos} toggleTodo={(index) => toggleTodo(index, false)} removeTodo={(index) => removeTodo(index, false)} title="Things done" />
      </div>
    </div>
  );
}

export default App;
