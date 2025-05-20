import React, { useEffect, useRef, useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoForm = () => {
  const { addTodo } = useTodo();
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus pada input saat komponen dimuat
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
      inputRef.current.focus();
    }
  };

  return (
    <div className="mb-6">
      <div className="flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tambahkan tugas baru..."
          className="flex-grow p-3 mr-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Tambah
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
