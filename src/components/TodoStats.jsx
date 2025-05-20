import React from "react";
import { useTodo } from "../context/TodoContext";

const TodoStats = () => {
  const { todos } = useTodo();
  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="mt-4 text-sm text-gray-600">
      <p>Total Tugas: {totalCount}</p>
      <p>Selesai: {completedCount}</p>
      <p>Belum Selesai: {totalCount - completedCount}</p>
    </div>
  );
};

export default TodoStats;
