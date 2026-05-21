import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center bg-white shadow-xl rounded-2xl p-10 max-w-md w-full">
        
        
        <h1 className="text-7xl font-bold text-red-500 mb-4">
          404
        </h1>

        
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-600 mb-6">
          The page you are looking for does not exist or has been moved.
        </p>

        
        <Link href="/">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition duration-300">
            Back Home
          </button>
        </Link>
      </div>
    </div>
    );
};

export default NotFoundPage;