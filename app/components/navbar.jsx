// 'use client';
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faShoppingCart, faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white border-b border-gray-300 shadow-md transition duration-300">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         {/* Logo */}
//         <a href="/" className="flex items-center space-x-3">
//           <img
//             src="https://noirenailandlashbar.com/uploads/fnail0zpqm2is/webp/png/filemanager/logo/Booksy.webp"
//             className="h-20"
//             alt="Booksy Logo"
//           />
//         </a>

//         {/* Hamburger Icon (Mobile) */}
//         <button
//           className="inline-flex items-center p-2 text-gray-700 rounded md:hidden"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle Menu"
//         >
//           <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
//         </button>

//         {/* Icons (Right Side) */}
//         <div className="flex items-center gap-6 md:order-2">
//           <a href="/wishlist" className="text-gray-700 hover:text-red-500 text-2xl md:text-3xl">
//             <FontAwesomeIcon icon={faHeart} />
//           </a>
//           <a href="/cart" className="text-gray-700 hover:text-green-500 text-2xl md:text-3xl">
//             <FontAwesomeIcon icon={faShoppingCart} />
//           </a>
//         </div>

//         {/* Search Bar */}
//         <div
//           className={`w-full md:flex md:w-auto md:order-1 transition-all duration-500 ease-in-out ${
//             menuOpen ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden md:opacity-100 md:max-h-fit'
//           }`}
//         >
//           <form className="flex items-center w-full mt-4 md:mt-0 px-4 md:px-0 justify-center md:justify-start">
//             <div className="relative w-full md:w-[400px]">
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 className="w-full px-4 py-2 pl-10 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//               <FontAwesomeIcon
//                 icon={faSearch}
//                 className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;




'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart as solidHeart,
  faShoppingCart as solidCart,
  faBars,
  faTimes,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart as regularHeart
} from '@fortawesome/free-regular-svg-icons';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const wishlistCount = 2;
  const cartCount = 5;

  return (
    <nav className="bg-white border-b border-gray-300 shadow-md transition duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
<a href="/" className="flex items-center space-x-3">
  <Image
    src="/Logo.png"
    width={80}
    height={80}
    alt="Booksy Logo"
     className="object-contain rounded"
  />
</a>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="inline-flex items-center p-2 text-gray-700 rounded md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
        </button>

        {/* Icons */}
        <div className="flex items-center gap-6 md:order-2">
          {/* Wishlist */}
          <div className="relative">
            <a href="/wishlist" className="text-gray-700 text-2xl md:text-3xl">
              <FontAwesomeIcon icon={regularHeart} />
            </a>
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {wishlistCount}
              </span>
            )}
          </div>

          {/* Cart */}
          <div className="relative">
            <a href="/cart" className="text-gray-700 text-2xl md:text-3xl">
              <FontAwesomeIcon icon={solidCart} />
            </a>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>

        </div>

        {/* Search Bar */}
        <div
          className={`w-full md:flex md:w-auto md:order-1 transition-all duration-500 ease-in-out ${
            menuOpen ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden md:opacity-100 md:max-h-fit'
          }`}
        >
          <form className="flex items-center w-full mt-4 md:mt-0 px-4 md:px-0 justify-center md:justify-start">
            <div className="relative w-full md:w-[400px]">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-3 pl-10 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
