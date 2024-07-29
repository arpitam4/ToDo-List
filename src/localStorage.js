// src/utils/localStorage.js
export const loadTodos = () => {
  const todos = localStorage.getItem('todos');
  const doneTodos = localStorage.getItem('doneTodos');
  return {
    todos: todos ? JSON.parse(todos) : [],
    doneTodos: doneTodos ? JSON.parse(doneTodos) : [],
  };
};

export const saveTodos = (todos, doneTodos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
  localStorage.setItem('doneTodos', JSON.stringify(doneTodos));
};
