"use client";
import { useEffect, useState } from "react";
import api from "@/app/components/lib/api";
import { useParams, useRouter } from "next/navigation";
import AdminNavbar from "@/app/components/AdminNavbar";

export default function EditBook() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    author: "",
    price: "",
    description: "",
    image: "",
  });
  const [newImage, setNewImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await api.get(`/books/${id}`);
        setForm(res.data);
      } catch (err) {
        console.error("Error fetching book:", err);
      }
    };
    fetchBook();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = form.image;

      if (newImage) {
        const formData = new FormData();
        formData.append("image", newImage);
        const imgRes = await api.post("/upload", formData);
        imageUrl = imgRes.data.url;
      }

      await api.put(`/books/${id}`, {
        ...form,
        image: imageUrl,
      });

      router.push("/admin/book-list");
    } catch (err) {
      console.error("Error updating book:", err);
      alert("❌ Update failed. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
<>
 <AdminNavbar/>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">✏️ Edit Book</h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Title</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
              className="mt-1 block w-full border rounded-md p-2 outline-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Author</label>
            <input
              type="text"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              required
              className="mt-1 block w-full border rounded-md p-2 outline-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Price</label>
            <input
              type="number"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              required
              className="mt-1 block w-full border rounded-md p-2 outline-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Description</label>
            <textarea
              rows="4"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              required
              className="mt-1 block w-full border rounded-md p-2 outline-blue-500"
            ></textarea>
          </div>

          {form.image && (
            <div>
              <p className="text-sm text-gray-600">Current Image:</p>
              <img src={form.image} alt="Current" className="h-32 w-auto object-cover rounded-md border" />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-600">Change Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setNewImage(e.target.files[0])}
              className="mt-1 block w-full text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-lg text-white transition duration-200 ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "Updating..." : "✅ Update Book"}
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
