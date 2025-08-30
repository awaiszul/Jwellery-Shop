"use client";
import Image from "next/image";
import React, { useState, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { assets, faqs } from "@/assets/assets";

const JewelryFAQs = () => {
  const [openIndex, setOpenIndex] = useState({});
  const { theme } = useContext(ThemeContext);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-30 py-10">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Ovo&display=swap');
        * {
          font-family: 'Outfit', sans-serif;
        }
        h2, h3 {
          font-family: 'Ovo', serif;
        }
      `}</style>

      {/* Heading */}
      <div className="text-center mb-14">
        <p
          className={`text-sm font-semibold uppercase tracking-wide ${
            theme === "dark" ? "text-yellow-400" : "text-yellow-700"
          }`}
        >
          FAQ &apos; s
        </p>
        <h2
          className={`text-4xl font-bold ${
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Frequently Asked Questions
        </h2>
        <p
          className={`mt-3 text-base ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Get answers about purity, design, services and more.
        </p>
      </div>

      {/* FAQs Section */}
      <div className="flex flex-col md:flex-row gap-10 items-stretch">
        {/* Image */}
        <div className="w-full md:w-[35%] flex">
          <Image
            className="rounded-xl  object-cover w-full h-full"
            src={assets.poster}
            alt="Jewelry display"
            width={400}
            height={400}
            priority
          />
        </div>

        {/* FAQ List */}
        <div className="w-full md:w-[70%] flex flex-col justify-center">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`border-b cursor-pointer transition-colors duration-300 py-5 ${
                theme === "dark"
                  ? "border-gray-700 hover:border-yellow-500"
                  : "border-gray-300 hover:border-yellow-600"
              }`}
            >
              {/* Question */}
              <div className="flex items-center justify-between">
                <h3
                  className={`text-md font-semibold ${
                    theme === "dark" ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </h3>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-500 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke={theme === "dark" ? "#FACC15" : "#B45309"}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Answer */}
              <p
                className={`text-base leading-relaxed transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "opacity-100 max-h-[300px] translate-y-0 pt-3"
                    : "opacity-0 max-h-0 -translate-y-2"
                } ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JewelryFAQs;
