import React from "react";
import { Link, useParams } from "react-router-dom";
import { useTodo } from "../context/TodoContext";

const DetailPage = () => {
  const { id } = useParams();
  const { todos } = useTodo();

  // Mencari todo berdasarkan ID
  const todo = todos.find((item) => item.id === Number(id));

  if (!todo) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-lg px-4 py-8 mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-lg text-center">
            <h2 className="mb-4 text-xl font-semibold text-red-500">
              Tugas tidak ditemukan
            </h2>
            <Link
              to="/"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Kembali ke Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-lg px-4 py-8 mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Detail Tugas</h1>
          <Link
            to="/"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Home
          </Link>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Tugas:</h2>
            <p className="p-4 mt-2 border-l-4 border-blue-500 bg-blue-50">
              {todo.text}
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium">Status:</h3>
            <p
              className={`mt-2 font-medium ${
                todo.completed ? "text-green-600" : "text-yellow-600"
              }`}
            >
              {todo.completed ? "✅ Selesai" : "⏳ Belum Selesai"}
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium">ID Tugas:</h3>
            <p className="mt-2 text-gray-600">{todo.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
