import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTodo } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleTodo, editTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const editInputRef = useRef(null);

  useEffect(() => {
    if (isEditing && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [isEditing]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="w-5 h-5 mr-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />

        {isEditing ? (
          <input
            ref={editInputRef}
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
            className="p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        ) : (
          <span
            className={`${
              todo.completed ? "line-through text-gray-500" : "text-gray-800"
            }`}
            onDoubleClick={handleEdit}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex space-x-2">
        <Link
          to={`/todo/${todo.id}`}
          className="px-2 py-1 text-xs text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none"
        >
          Detail
        </Link>
        {!isEditing && (
          <button
            onClick={handleEdit}
            className="px-2 py-1 text-xs text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => deleteTodo(todo.id)}
          className="px-2 py-1 text-xs text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
        >
          Hapus
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
