import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      {/* 404 Number */}
      <h1 className="text-7xl font-extrabold text-violet-600">404</h1>

      {/* Message */}
      <h2 className="mt-4 text-2xl font-bold text-gray-900">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-6 px-6 py-3 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;