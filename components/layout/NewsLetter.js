"use client";
import React from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import { useContext } from 'react'
const NewsLetter = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <>
<div className="flex justify-center mb-10 items-center px-4">
  <div
    className={`flex md:flex-row flex-col border rounded-lg items-start md:items-center justify-between gap-8 text-sm p-8 transition-colors duration-500
      ${theme === "dark" 
        ? "bg-gray-900 border-yellow-500/30 text-gray-200" 
        : "bg-white border-yellow-600/30 text-gray-700"
      }`}
  >
  {/* Left side */}
  <div className=" w-full">
    <h1
      className={`text-3xl font-ovo font-semibold ${
        theme === "dark" ? "text-yellow-400" : "text-yellow-700"
      }`}
    >
      Subscribe to our newsletter
    </h1>
    <p
      className={`mt-2 ${
        theme === "dark" ? "text-gray-400" : "text-gray-600"
      }`}
    >
      Get the latest updates on new arrivals, exclusive collections, and jewelry care tips.
    </p>

    <div className="flex items-center gap-4 mt-8">
      <input
        className={`py-2 px-3 w-full outline-none transition rounded-md max-w-64
          ${theme === "dark"
            ? "bg-gray-800 border border-yellow-500/40 focus:border-yellow-400 text-gray-200 placeholder-gray-500"
            : "bg-white border border-yellow-600/40 focus:border-yellow-600 text-gray-700 placeholder-gray-400"
          }`}
        type="email"
        placeholder="Enter your email"
      />
      <button
        className={`transition-all px-6 py-2 rounded font-medium shadow-md
          ${theme === "dark"
            ? "bg-yellow-500 hover:bg-yellow-400 text-gray-900"
            : "bg-yellow-600 hover:bg-yellow-700 text-white"
          }`}
      >
        Subscribe
      </button>
    </div>
  </div>

  {/* Feature 1 */}
  <div className="space-y-3 md:max-w-48">
    <div className="flex items-center gap-3">
      <div
        className={`w-max p-2.5 rounded shadow-sm
          ${theme === "dark" ? "bg-yellow-500/10" : "bg-yellow-600/10"}`}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.834 20.167H9.167c-3.457 0-5.186 0-6.26-1.074s-1.074-2.802-1.074-6.26V11c0-3.457 0-5.185 1.074-6.26 1.074-1.073 2.803-1.073 6.26-1.073h3.667c3.456 0 5.185 0 6.259 1.074s1.074 2.802 1.074 6.26v1.833c0 3.457 0 5.185-1.074 6.259-.599.599-1.401.864-2.593.981"
            stroke={theme === "dark" ? "#FACC15" : "#B45309"}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <h3
        className={`text-base font-medium ${
          theme === "dark" ? "text-gray-100" : "text-gray-800"
        }`}
      >
        Weekly articles
      </h3>
    </div>
    <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
      Expert tips and inspiration for your jewelry collection.
    </p>
  </div>

  {/* Feature 2 */}
  <div className="space-y-3 md:max-w-48">
    <div className="flex items-center gap-3">
      <div
        className={`w-max p-2.5 rounded shadow-sm
          ${theme === "dark" ? "bg-yellow-500/10" : "bg-yellow-600/10"}`}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.834 3.208v6.875-5.958a1.375 1.375 0 1 1 2.75 0v5.958-3.208a1.375 1.375 0 1 1 2.75 0v7.791a5.5 5.5 0 0 1-5.5 5.5H11.8a5.5 5.5 0 0 1-3.76-1.486l-4.546-4.261a1.594 1.594 0 1 1 2.218-2.291l1.623 1.623V5.958a1.375 1.375 0 1 1 2.75 0v4.125-6.875a1.375 1.375 0 1 1 2.75 0"
            stroke={theme === "dark" ? "#FACC15" : "#B45309"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3
        className={`text-base font-medium ${
          theme === "dark" ? "text-gray-100" : "text-gray-800"
        }`}
      >
        No spam
      </h3>
    </div>
    <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
      Only valuable updates — no unnecessary emails.
    </p>
  </div>
</div>
</div>

    </>
  )
}

export default NewsLetter
