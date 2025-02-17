import React from "react";

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-700 via-purple-600 to-pink-500 text-white p-6 overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-24 h-24 bg-yellow-400 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-16 right-28 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-40 animate-bounce"></div>
        <div className="absolute top-32 right-10 w-20 h-20 bg-green-400 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-2xl p-10 text-center max-w-xl border border-white border-opacity-30">
        {/* Title with Glow */}
        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
          🍽️ Welcome to Food App
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-200 leading-relaxed">
          Discover, save, and explore delicious recipes with ease.  
          <span className="text-yellow-300 font-semibold"> Start cooking today! </span>
        </p>

        {/* Get Started Button with Glow */}
        <button className="mt-6 px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 text-white font-semibold rounded-lg shadow-lg transition transform hover:scale-110 hover:shadow-[0_0_15px_rgba(255,200,0,0.8)]">
          Get Started 🚀
        </button>

        {/* Decorative Colored Circles */}
        <div className="mt-6 flex justify-center space-x-4 opacity-90">
          <span className="w-4 h-4 bg-red-500 rounded-full shadow-lg"></span>
          <span className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></span>
          <span className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></span>
        </div>
      </div>
    </div>
  );
};

export default Home;
