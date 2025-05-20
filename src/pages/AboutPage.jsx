import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-lg px-4 py-8 mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">About Todo App</h1>
          <Link
            to="/"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Home
          </Link>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-xl font-semibold">Tentang Aplikasi</h2>
          <p className="mb-3 text-gray-700">
            Aplikasi Todo List ini dibuat menggunakan React dengan memanfaatkan
            fitur:
          </p>
          <ul className="pl-5 mb-4 list-disc">
            <li className="mb-1">Context API untuk manajemen state</li>
            <li className="mb-1">
              useRef hook untuk manipulasi DOM dan auto-focus
            </li>
            <li className="mb-1">Tailwind CSS untuk styling</li>
            <li className="mb-1">React Router untuk navigasi</li>
            <li className="mb-1">LocalStorage untuk menyimpan data</li>
          </ul>
          <p className="text-gray-700">
            Aplikasi ini memungkinkan pengguna untuk menambah, mengedit,
            menandai selesai, dan menghapus tugas dengan antarmuka yang
            sederhana dan menarik.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
