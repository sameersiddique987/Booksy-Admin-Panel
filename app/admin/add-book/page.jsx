"use client";
import { useEffect, useState } from "react";
import api from "@/app/components/lib/api";
import { useRouter } from "next/navigation";
import AdminNavbar from "@/app/components/AdminNavbar";

export default function AddBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    price: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please select an image.");
      return;
    }

    console.log("📤 Image ready for upload:", image);

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", image);

      console.log("📦 FormData being sent:", formData.get("image"));

      const imgRes = await api.post("/upload", formData);
      console.log("✅ Upload response:", imgRes?.data);

      const imageUrl = imgRes?.data?.url;

      if (!imageUrl) {
        alert("❌ Image upload failed. Please try again.");
        setLoading(false);
        return;
      }

      await api.post("/books", { ...form, image: imageUrl });
      console.log("📚 Book added successfully.");
      router.push("/admin/book-list");
    } catch (err) {
      console.error("❌ Error while adding book:", err);
      alert("Something went wrong. Please check console.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
    }
  }, []);

  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-md p-8 space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            📚 Add New Book
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Title
              </label>
              <input
                type="text"
                required
                value={form.title}
                className="mt-1 block w-full border rounded-md p-2 outline-blue-500"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, title: e.target.value }))
                }
              />
            </div>

            {/* Author */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Author
              </label>
              <input
                type="text"
                required
                value={form.author}
                className="mt-1 block w-full border rounded-md p-2 outline-blue-500"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, author: e.target.value }))
                }
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Price
              </label>
              <input
                type="number"
                required
                value={form.price}
                className="mt-1 block w-full border rounded-md p-2 outline-blue-500"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, price: e.target.value }))
                }
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Description
              </label>
              <textarea
                rows="4"
                required
                value={form.description}
                className="mt-1 block w-full border rounded-md p-2 outline-blue-500"
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              ></textarea>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Book Cover Image
              </label>
              <input
                type="file"
                accept="image/*"
                required
                className="mt-1 block w-full text-sm"
                onChange={(e) => {
                  const file = e.target.files[0];
                  console.log("📷 Selected image:", file);
                  setImage(file);
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded-lg text-white transition duration-200 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gray-900 text-white shadow-md hover:bg-gray-950"
              }`}
            >
              {loading ? "Uploading..." : "➕ Add Book"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
