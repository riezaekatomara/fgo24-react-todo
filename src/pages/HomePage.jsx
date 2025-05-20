import React from "react";
import { Link } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import TodoStats from "../components/TodoStats";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-lg px-4 py-8 mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Todo List App</h1>
          <Link
            to="/about"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            About
          </Link>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <TodoForm />
          <TodoList />
          <TodoStats />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
