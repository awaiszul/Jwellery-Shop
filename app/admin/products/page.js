"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);

  const products = [
    {
      name: "Nike Pegasus 41 shoes",
      category: "Shoes",
      offerPrice: 999,
      inStock: true,
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
    },
    {
      name: "Nike Pegasus 41 shoes",
      category: "Shoes",
      offerPrice: 999,
      inStock: false,
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png",
    },
    {
      name: "Nike Pegasus 41 shoes",
      category: "Shoes",
      offerPrice: 999,
      inStock: true,
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png",
    },
  ];

  return (
    <div
      className={`flex-1 py-10 flex flex-col justify-between transition-colors duration-300 
        ${theme === "light" ? "bg-white text-gray-900" : "bg-black text-gray-100"}`}
    >
      <div className="w-full md:p-10 p-4">
        <h2
          className={`pb-4 text-2xl font-ovo font-bold transition-colors duration-300 
            ${theme === "light" ? "text-yellow-600" : "text-yellow-400"}`}
        >
          All Products
        </h2>
        <div
          className={`flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md border transition-colors duration-300 
            ${theme === "light" ? "bg-white border-gray-300" : "bg-gray-900 border-gray-700"}`}
        >
          <table className="md:table-auto table-fixed w-full overflow-hidden">
            <thead
              className={`text-sm text-left transition-colors duration-300 
                ${theme === "light" ? "text-gray-800" : "text-gray-100"}`}
            >
              <tr>
                <th className="px-4 py-3 font-semibold truncate">Product</th>
                <th className="px-4 py-3 font-semibold truncate">Category</th>
                <th className="px-4 py-3 font-semibold truncate hidden md:block">
                  Selling Price
                </th>
                <th className="px-4 py-3 font-semibold truncate">In Stock</th>
              </tr>
            </thead>
            <tbody
              className={`text-sm transition-colors duration-300 
                ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}
            >
              {products.map((product, index) => (
                <tr
                  key={index}
                  className={`border-t transition-colors duration-300 
                    ${theme === "light" ? "border-gray-200" : "border-gray-700"}`}
                >
                  <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                    <div
                      className={`border rounded overflow-hidden transition-colors duration-300 
                        ${theme === "light" ? "border-gray-300" : "border-gray-600"}`}
                    >
                      <img src={product.image} alt="Product" className="w-16" />
                    </div>
                    <span className="truncate max-sm:hidden w-full">
                      {product.name}
                    </span>
                  </td>
                  <td className="px-4 py-3">{product.category}</td>
                  <td className="px-4 py-3 max-sm:hidden">
                    ${product.offerPrice}
                  </td>
                  <td className="px-4 py-3">
                    <label className="relative inline-flex items-center cursor-pointer gap-3">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked={product.inStock}
                      />
                      <div
                        className={`w-12 h-7 rounded-full transition-colors duration-200 
                          ${
                            theme === "light"
                              ? "bg-gray-300 peer-checked:bg-yellow-500"
                              : "bg-gray-700 peer-checked:bg-yellow-400"
                          }`}
                      ></div>
                      <span
                        className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full 
                          transition-transform duration-200 ease-in-out peer-checked:translate-x-5"
                      ></span>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
