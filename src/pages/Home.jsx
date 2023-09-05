import React from "react";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-gray-800">
          Selamat datang di MyLaw
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Platform hukum terpercaya untuk Anda.
        </p>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full mt-6 hover:bg-blue-600 transition-colors duration-300 ease-in-out">
          Mulai
        </button>
      </div>
    </div>
  );
}

export default Home;
