"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const AddProduct = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`flex font-[Outfit] px-5 flex-col items-center justify-center -colors duration-300 
        ${
          theme === "light"
            ? "bg-white text-gray-900"
            : "bg-black text-gray-100"
        }`}
    >
     <h1
  className={`text-3xl font-[Outfit] font-bold mt-6 mb-8 transition-colors duration-300 
    ${
      theme === "light"
        ? "text-yellow-600" // golden for light theme
        : "text-yellow-400" // golden shade for dark theme
    }`}
>
  Add your product here for your buyers
</h1>

      <form
        className={`w-full max-w-4xl  space-y-6 transition-colors duration-300
          ${
            theme === "light"
              ? "bg-white/40 backdrop-blur-md"
              : "bg-black/40  backdrop-blur-md"
          }`}
      >
        {/* Product Images */}
        <div>
          <p className="text-base font-semibold">Product Images</p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <label key={index} htmlFor={`image${index}`}>
                  <input
                    accept="image/*"
                    type="file"
                    id={`image${index}`}
                    hidden
                  />
                  <img
                    className="max-w-24 cursor-pointer border-2 border-dashed border-yellow-500"
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
                    alt="uploadArea"
                    width={100}
                    height={100}
                  />
                </label>
              ))}
          </div>
        </div>

        {/* Row 1: Product Name + Category */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col gap-1 w-full">
            <label className="text-base font-medium" htmlFor="product-name">
              Product Name
            </label>
            <input
              id="product-name"
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
          <div className="flex flex-col gap-1 w-full">
            <label className="text-base font-medium" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              className={`outline-none py-2 px-3 border w-full transition-colors duration-200
                ${
                  theme === "light"
                    ? "border-gray-400 bg-white/70 focus:border-yellow-500"
                    : "border-gray-600 bg-black/60 focus:border-yellow-400"
                }`}
            >
              <option value="">Select Category</option>
              {[
                { name: "Electronics" },
                { name: "Clothing" },
                { name: "Accessories" },
              ].map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 2: Product Price + Offer Price */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col gap-1 w-full">
            <label className="text-base font-medium" htmlFor="product-price">
              Product Price
            </label>
            <input
              id="product-price"
              type="number"
              placeholder="0"
              className={`outline-none py-2 px-3 border w-full transition-colors duration-200
                ${
                  theme === "light"
                    ? "border-gray-400 bg-white/70 focus:border-yellow-500"
                    : "border-gray-600 bg-black/60 focus:border-yellow-400"
                }`}
              required
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label className="text-base font-medium" htmlFor="offer-price">
              Offer Price
            </label>
            <input
              id="offer-price"
              type="number"
              placeholder="0"
              className={`outline-none py-2 px-3 border w-full transition-colors duration-200
                ${
                  theme === "light"
                    ? "border-gray-400 bg-white/70 focus:border-yellow-500"
                    : "border-gray-600 bg-black/60 focus:border-yellow-400"
                }`}
              required
            />
          </div>
        </div>

        {/* Row 3: Description + Add button */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col gap-1 w-full">
            <label
              className="text-base font-medium"
              htmlFor="product-description"
            >
              Product Description
            </label>
            <textarea
              id="product-description"
              rows={4}
              placeholder="Type here"
              className={`outline-none py-2 px-3 border w-full resize-none transition-colors duration-200
                ${
                  theme === "light"
                    ? "border-gray-400 bg-white/70 focus:border-yellow-500"
                    : "border-gray-600 bg-black/60 focus:border-yellow-400"
                }`}
            ></textarea>
          </div>
          <div className="flex items-end">
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
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
