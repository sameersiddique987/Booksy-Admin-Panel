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
     <AdminNavbar/>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">📚 Book List</h2>
        {books.length === 0 ? (
          <p className="text-center text-gray-500">No books found.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {books.map((book) => (
              <div
                key={book._id}
                className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {book.image && (
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-64 object-cover"
                  />
                )}
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-semibold text-gray-800">{book.title}</h3>
                  <p className="text-lg text-gray-600">👤 {book.author}</p>
                  <p className="text-lg text-green-700 font-semibold">💰 ${book.price}</p>
                  <p className="text-gray-500 text-base line-clamp-3">{book.description}</p>
                  <div className="flex justify-between pt-4">
                    <Link
                      href={`/admin/edit-book/${book._id}`}
                      className="text-blue-600 hover:underline font-medium text-base"
                    >
                      ✏️ Edit
                    </Link>
                    <button
                      onClick={() => deleteBook(book._id)}
                      className="text-red-600 hover:underline font-medium text-base"
                    >
                      🗑️ Delete
                    </button>
                  </div>
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
