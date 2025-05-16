// import React from 'react'

// function found() {
//   return (
//     <div className=' text-white rounded bg-slate-500 border border-none mx-48  mt-60 shadow-xl' >
//         <h1 className=' p-10  text-5xl text-center font-normal'>Not found</h1>
//     </div>
//   )
// }

// export default found




import React from 'react';

function found() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white border border-gray-300 shadow-2xl rounded-2xl px-10 py-16 text-center max-w-xl w-full">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default found;
