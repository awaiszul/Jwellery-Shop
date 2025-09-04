"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`min-h-screen font-[Outfit] py-16 px-6 md:px-20 mt-20 ${
        theme === "light"
          ? "bg-white text-gray-900"
          : "bg-gray-950 text-gray-100"
      }`}
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-yellow-600">
        About Us
      </h1>

      {/* Intro */}
      <p className="max-w-3xl mx-auto text-center text-base md:text-lg leading-relaxed mb-12 font-outfit">
        We are committed to delivering high-quality products with a seamless
        shopping experience. Our goal is to bring you the best selection with
        trust, transparency, and care.
      </p>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div
          className={`p-6 border-2 border-yellow-600 ${
            theme === "light" ? "bg-gray-50" : "bg-gray-900"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4 text-yellow-600">
            Our Mission
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            To provide an exceptional e-commerce experience where customers can
            discover premium products with convenience and confidence.
          </p>
        </div>

        <div
          className={`p-6 border-2 border-yellow-600 ${
            theme === "light" ? "bg-gray-50" : "bg-gray-900"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4 text-yellow-600">
            Our Vision
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            To become a trusted global brand recognized for quality, innovation,
            and customer satisfaction.
          </p>
        </div>
      </div>
       {/* Heading */}
      <h1 className="text-3xl font-bold text-center mx-auto mt-10 text-yellow-600">
        Powerful Features
      </h1>
      <p className="text-sm md:text-base text-center mt-2 max-w-md mx-auto text-white">
        Everything you need to manage, track, and grow your finances, securely
        and efficiently.
      </p>

      {/* Feature Cards */}
      <div className="flex items-center justify-center flex-wrap gap-6 mt-16 px-4 md:px-0">
        {/* Card 1 */}
        <div
          className={`flex flex-col text-center items-center justify-center p-6 border-2 gap-6 max-w-sm 
            ${
              theme === "light"
                ? "bg-gray-50 border-yellow-600"
                : "bg-gray-900 border-yellow-600"
            }`}
        >
          <div className="p-6 aspect-square  flex items-center justify-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 18.667V24.5m4.668-8.167V24.5m4.664-12.833V24.5m2.333-21L15.578 13.587a.584.584 0 0 1-.826 0l-3.84-3.84a.583.583 0 0 0-.825 0L2.332 17.5M4.668 21v3.5m4.664-8.167V24.5"
                stroke="#d4af37"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-yellow-600">
              Real-Time Analytics
            </h3>
            <p className="text-sm text-white">
              Get instant insights into your finances with live dashboards.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className={`flex flex-col text-center items-center justify-center p-6 border-2 gap-6 max-w-sm 
            ${
              theme === "light"
                ? "bg-gray-50 border-yellow-600"
                : "bg-gray-900 border-yellow-600"
            }`}
        >
          <div className="p-6 aspect-square flex items-center justify-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 11.667A2.333 2.333 0 0 0 11.667 14c0 1.19-.117 2.929-.304 4.667m4.972-3.36c0 2.776 0 7.443-1.167 10.36m5.004-1.144c.14-.7.502-2.683.583-3.523M2.332 14a11.667 11.667 0 0 1 21-7m-21 11.667h.01m23.092 0c.233-2.333.152-6.246 0-7"
                stroke="#d4af37"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-yellow-600">
              Bank-Grade Security
            </h3>
            <p className="text-sm text-white">
              End-to-end encryption, 2FA, compliance with GDPR standards.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className={`flex flex-col text-center items-center justify-center p-6 border-2 gap-6 max-w-sm 
            ${
              theme === "light"
                ? "bg-gray-50 border-yellow-600"
                : "bg-gray-900 border-yellow-600"
            }`}
        >
          <div className="p-6 aspect-square flex items-center justify-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.668 25.666h16.333a2.333 2.333 0 0 0 2.334-2.333V8.166L17.5 2.333H7a2.333 2.333 0 0 0-2.333 2.333v4.667"
                stroke="#d4af37"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.332 2.333V7a2.334 2.334 0 0 0 2.333 2.333h4.667m-21 8.167h11.667M10.5 21l3.5-3.5-3.5-3.5"
                stroke="#d4af37"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-yellow-600">
              Customizable Reports
            </h3>
            <p className="text-sm text-white">
              Export professional, audit-ready financial reports for tax or
              internal review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
