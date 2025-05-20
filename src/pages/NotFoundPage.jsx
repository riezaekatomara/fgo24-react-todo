import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 text-center bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-6xl font-bold text-red-500">404</h1>
        <h2 className="mb-6 text-2xl font-semibold text-gray-700">
          Halaman Tidak Ditemukan
        </h2>
        <p className="mb-6 text-gray-600">
          Maaf, halaman yang Anda cari tidak tersedia.
        </p>
        <Link
          to="/"
          className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Kembali ke Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
