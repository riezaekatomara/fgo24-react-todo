import React from "react";
import { useTodo } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodo();

  return (
    <div className="mt-4">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">
          Belum ada tugas. Tambahkan tugas baru!
        </p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
};

export default TodoList;
