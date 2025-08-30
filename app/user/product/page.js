"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";

export default function ProductsPage() {
  const {
    theme,
    counts,
    handleAdd,
    handleIncrement,
    handleDecrement,
    addToCart,
    filteredProducts,
    selectedCategory,
    setSelectedCategory,
    products,
  } = useContext(ThemeContext);

  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  // Set selectedCategory from URL if exists
  useEffect(() => {
    if (category) setSelectedCategory(category);
  }, [category, setSelectedCategory]);

  return (
    <section
      className={`py-16 px-20 ${
        theme === "light"
          ? "bg-white text-gray-900"
          : "bg-gray-950 text-gray-100"
      } font-ovo font-outfit`} // 👈 dono fonts apply kiye
    >
      <h2 className="text-3xl font-bold text-center my-4">
        {selectedCategory ? `${selectedCategory} Products` : "All Products"}
      </h2>
      {/* 👇 All Products ke neeche paragraph */}
      <p className="mb-10 text-center text-gray-500 text-sm w-[80%] mx-auto leading-relaxed">
        Browse through our wide range of high-quality products carefully curated
        to match your style and needs. Add items to your cart and continue
        shopping with ease. Your satisfaction is our priority.
      </p>
      {/* Products Grid */}
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`border rounded-xl shadow-md p-4 flex flex-col h-full transition ${
                theme === "dark"
                  ? "bg-black border-yellow-700 text-gray-100"
                  : "bg-white border-yellow-400 text-gray-900"
              }`}
            >
              <Link href={`/user/product/${product.id}`}>
                <div className="flex items-center justify-center">
                  <Image
                    className="max-h-[150px] group-hover:scale-105 transition"
                    src={product?.image[0] || assets.poster}
                    alt={product?.name}
                    width={150}
                    height={150}
                  />
                </div>
              </Link>

              <div className="flex flex-col flex-2 justify-between mt-3">
                <div>
                  <p className="text-gray-500">{product?.category}</p>
                  <p className="font-semibold text-lg truncate w-full text-yellow-700">
                    {product?.name}
                  </p>

                  <p className="text-sm mt-1 line-clamp-2">
                    {product?.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-0.5 mt-1">
                    {Array(5)
                      .fill("")
                      .map((_, i) =>
                        product?.rating > i ? (
                          <svg
                            key={i}
                            width="14"
                            height="13"
                            viewBox="0 0 18 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z"
                              fill="#d4af37"
                            />
                          </svg>
                        ) : (
                          <svg
                            key={i}
                            width="14"
                            height="13"
                            viewBox="0 0 18 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.04894 0.927049C8.3483 0.00573802 9.6517 0.00574017 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z"
                              fill="#d4af37"
                              fillOpacity="0.35"
                            />
                          </svg>
                        )
                      )}
                    <p className="text-sm ml-1">({product?.rating})</p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <p className="md:text-lg text-base font-medium text-yellow-600">
                      ${product?.offerPrice}
                    </p>
                    <span className="text-gray-500/60 md:text-sm text-xs line-through">
                      ${product?.price}
                    </span>
                  </div>
                </div>

                {/* Add to Cart / Quantity buttons */}
                <div className="flex flex-col gap-2 mt-2">
                  {!counts[product.id] || counts[product.id] === 0 ? (
                    <button
                      className="flex items-center justify-center gap-1 bg-yellow-100 border border-yellow-400 px-3 h-[34px] rounded text-yellow-700 font-medium hover:bg-yellow-200"
                      onClick={() => {
                        handleAdd(product.id);
                        addToCart(product); // 👈 cart mein add hoga
                        // ❌ router.push("/cart") hata diya
                      }}
                    >
                      + Add
                    </button>
                  ) : (
                    <div className="flex items-center justify-center gap-2 px-3 h-[34px] bg-yellow-500/20 rounded select-none">
                      <button
                        onClick={() => handleDecrement(product.id)}
                        className="cursor-pointer text-md px-2"
                      >
                        -
                      </button>
                      <span className="w-5 text-center">
                        {counts[product.id]}
                      </span>
                      <button
                        onClick={() => handleIncrement(product.id)}
                        className="cursor-pointer text-md px-2"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
}
