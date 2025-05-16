"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminNavbar() {
  const pathname = usePathname();

  const links = [
    { href: "/admin/book-list", label: "📚 All Books" },
    { href: "/admin/add-book", label: "➕ Add Book" },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* <div className="text-xl font-bold tracking-wide">📘 Admin Panel</div> */}
        <a href="/" className="flex items-center space-x-3">
  <Image
    src="/Logo2.png"
    width={60}
    height={50}
    alt="Booksy Logo"
     className="object-contain rounded"
  />
</a>
        <div className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-md text-xl font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "text-gray-300 hover:bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
