"use client";
import { useEffect, useState } from "react";
import api from "@/app/components/lib/api";
import Link from "next/link";
import AdminNavbar from "@/app/components/AdminNavbar";

export default function BookList() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await api.get("/books");
    setBooks(res.data);
  };

  const deleteBook = async (id) => {
    if (confirm("Are you sure you want to delete this book?")) {
      await api.delete(`/books/${id}`);
      fetchBooks();
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            📚 Book List
          </h2>
          {books.length === 0 ? (
            <p className="text-center text-gray-500">No books found.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {books.map((book) => (
                <div
                  key={book._id}
                  className="flex flex-col justify-between bg-white border border-gray-300 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 relative overflow-hidden"
                >
                  <div>
                    {book.image && (
                      <img
                        src={book.image}
                        alt={book.title}
                        className="h-72 w-full object-contain transition-all duration-500 hover:scale-110"
                      />
                    )}
                    <div className="p-4">
                      <p className="text-center font-semibold text-gray-800 text-lg">
                        {book.title}
                      </p>
                      <p className="text-sm text-gray-600 text-center">
                        👤 {book.author}
                      </p>
                      <p className="text-center text-green-700 font-semibold">
                        💰 ${book.price}
                      </p>
                      <p className="text-gray-500 text-sm mt-2 text-center line-clamp-3">
                        {book.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto p-4 flex justify-between">
                    <Link
                      href={`/admin/edit-book/${book._id}`}
                      className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition text-sm font-medium"
                    >
                      ✏️ Edit
                    </Link>
                    <button
                      onClick={() => deleteBook(book._id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm font-medium"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
