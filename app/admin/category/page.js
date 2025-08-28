"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const AddCategory = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`flex font-[Outfit] px-5 flex-col items-center justify-center  transition-colors duration-300 
        ${
          theme === "light"
            ? "bg-white text-gray-900"
            : "bg-black text-gray-100"
        }`}
    >
      <h1
        className={`text-3xl font-ovo font-bold mt-6 mb-8 transition-colors duration-300 
    ${
      theme === "light"
        ? "text-yellow-600" // golden for light theme
        : "text-yellow-400" // golden shade for dark theme
    }`}
      >
        Add a category of your products
      </h1>
      <form
        className={`w-full max-w-lg space-y-6 p-6 rounded-md transition-colors duration-300
          ${
            theme === "light"
              ? "bg-white/40 backdrop-blur-md"
              : "bg-black/40 backdrop-blur-md"
          }`}
      >
        {/* Category Image */}
        <div>
          <p className="text-base font-semibold">Category Image</p>
          <div className="flex items-center gap-3 mt-2">
            <label htmlFor="category-image">
              <input accept="image/*" type="file" id="category-image" hidden />
              <img
                className="max-w-24 cursor-pointer border-2 border-dashed border-yellow-500"
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
                alt="uploadArea"
                width={100}
                height={100}
              />
            </label>
          </div>
        </div>

        {/* Category Title */}
        <div className="flex flex-col gap-1 w-full">
          <label className="text-base font-medium" htmlFor="category-title">
            Category Title
          </label>
          <input
            id="category-title"
            type="text"
            placeholder="Type here"
            className={`outline-none py-2 px-3 border w-full transition-colors duration-200
              ${
                theme === "light"
                  ? "border-gray-400 bg-white/70 focus:border-yellow-500"
                  : "border-gray-600 bg-black/60 focus:border-yellow-400"
              }`}
            required
          />
        </div>

        {/* Add Button */}
        <div className="flex justify-end">
          <button
            className={`px-8 py-3 font-semibold w-full md:w-auto transition duration-300 shadow
              ${
                theme === "light"
                  ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                  : "bg-yellow-300 hover:bg-yellow-400 text-black"
              }`}
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
