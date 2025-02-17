import React from "react";

const Login = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
      <div className="relative bg-white bg-opacity-10 backdrop-blur-lg shadow-xl rounded-xl p-8 w-96 text-center border border-white border-opacity-30">
        <h2 className="text-3xl font-bold text-white mb-4">Login</h2>
        <p className="text-gray-200 text-sm mb-6">Enter your credentials to continue</p>

        {/* Input Fields */}
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 mb-3 rounded-lg bg-white bg-opacity-20 placeholder-gray-300 text-white focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 mb-4 rounded-lg bg-white bg-opacity-20 placeholder-gray-300 text-white focus:outline-none"
        />

        {/* Login Button */}
        <button className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 text-white font-semibold rounded-lg shadow-md transition hover:scale-105">
          Login
        </button>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white text-xl font-bold hover:text-gray-300"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Login;
