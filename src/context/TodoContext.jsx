import React, { createContext, useContext, useEffect, useState } from "react";

// Buat Context untuk Todo List
const TodoContext = createContext();

// Provider Component untuk Todo List
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    // Coba ambil data dari localStorage jika ada
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Simpan todos ke localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Tambah todo baru
  const addTodo = (text) => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
    }
  };

  // Hapus todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle status completed todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Edit todo
  const editTodo = (id, newText) => {
    if (newText.trim()) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: newText } : todo
        )
      );
    }
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, toggleTodo, editTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

// Hook untuk menggunakan TodoContext
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo harus digunakan di dalam TodoProvider");
  }
  return context;
};
