"use client";

import { useContext, useState } from "react";
import { useParams } from "next/navigation";
import { products } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";

export default function ProductDetailPage() {
  const { theme, addToCart } = useContext(ThemeContext);
  const params = useParams();
  const productId = params.id;

  const product = products.find((p) => p.id.toString() === productId);

  if (!product) {
    return <p className="text-center mt-10 text-red-500">Product not found!</p>;
  }

  const images = Array.isArray(product.image) ? product.image : [product.image];
  const [thumbnail, setThumbnail] = useState(images[0]);

  return (
    <section
      className={`py-16 mt-16 px-6 md:px-20 ${
        theme === "dark" ? "bg-black text-gray-100" : "bg-white text-gray-900"
      } font-outfit flex justify-center`}
    >
      <div className="w-full max-w-6xl">
        {/* Breadcrumb */}
        <p className="mb-4 text-sm font-medium text-center md:text-left">
          <Link href="/">
            <span
              className={`cursor-pointer ${
                theme === "dark"
                  ? "text-gray-400 hover:text-yellow-400"
                  : "text-gray-600 hover:text-yellow-500"
              }`}
            >
              Home
            </span>
          </Link>{" "}
          /{" "}
          <span
            className={theme === "dark" ? "text-gray-400" : "text-gray-600"}
          >
            Products
          </span>{" "}
          / <span className="text-yellow-500">{product.category}</span> /{" "}
          <span className="text-red-500">{product.name}</span>
        </p>

        <div className="flex flex-col md:flex-row gap-12 mt-6 justify-center items-start">
          {/* Image Gallery */}
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-1/2 justify-center items-center">
            {/* Main Image */}
            <div
              className={`border rounded overflow-hidden w-full sm:w-[320px] md:w-[350px] h-[320px] md:h-[360px] ${
                theme === "dark" ? "border-gray-700" : "border-gray-300"
              }`}
            >
              <Image
                src={thumbnail}
                alt={product.name}
                width={350}
                height={360}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-2 mt-4 md:mt-0">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setThumbnail(img)}
                  className={`border rounded cursor-pointer overflow-hidden transition ${
                    thumbnail === img
                      ? "border-yellow-400"
                      : theme === "dark"
                      ? "border-gray-700"
                      : "border-gray-300"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 flex flex-col gap-4 font-ovo text-center md:text-left">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-sm text-gray-500">
              Category:{" "}
              <span className="text-yellow-500">{product.category}</span>
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-1 justify-center md:justify-start">
              {Array(5)
                .fill("")
                .map((_, i) =>
                  product.rating > i ? (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z"
                        fill="#FFD700"
                      />
                    </svg>
                  ) : (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.04894 0.927049C8.3483 0.00573802 9.6517 0.00574017 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z"
                        fill="#FFD700"
                        fillOpacity="0.35"
                      />
                    </svg>
                  )
                )}
              <p className="ml-2 text-gray-500/70">({product.rating})</p>
            </div>

            {/* Price */}
            <div className="mt-4">
              <p className="line-through text-gray-500/70">${product.price}</p>
              <p className="text-2xl font-semibold text-yellow-500">
                ${product.offerPrice}
              </p>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-600">{product.description}</p>

            {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full">
  <button onClick={addToCart} className="w-full cursor-pointer sm:w-1/2 py-3 font-medium border border-yellow-400 text-yellow-400 hover:bg-yellow-50 transition">
    Add to Cart
  </button>
  <button className="w-full cursor-pointer sm:w-1/2 py-3 font-medium bg-yellow-500 text-white hover:bg-yellow-400 transition">
  <Link href={"/buy"}>
    Buy Now
  </Link>
  </button>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}
