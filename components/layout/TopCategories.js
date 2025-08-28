"use client";
import { topCategories } from "@/assets/assets";
import Link from "next/link";

export default function TopCategories() {
  if (!topCategories) return null;

  return (
    <section className="my-10 px-6 md:px-20">
      <div className="flex flex-col items-center my-10">
        <h2 className="text-3xl md:text-4xl font-ovo font-bold mb-4 text-center relative inline-block">
          Top Categories
        </h2>
      </div>
    
      <div className="flex flex-wrap gap-8 justify-center">
        {topCategories.map((cat, idx) => (
          <Link
            key={idx}
            href={`/categories/${cat?.name}`} // ✅ slug me category name bhej do
            className="flex flex-col items-center cursor-pointer"
          >
            <img
              src={cat?.image}
              alt={cat?.name}
              className="w-24 h-24 border-2 border-amber-300 md:w-32 md:h-32 rounded-full object-cover shadow-lg hover:scale-105 transition"
            />
            <span className="mt-2 text-lg font-medium font-outfit">
              {cat?.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
