"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`px-6 md:px-16 lg:px-24 xl:px-32 w-full transition-colors duration-500
        ${theme === "dark" ? "bg-black text-gray-300" : "bg-white text-gray-700"}
      `}
    >
      <div
        className={`flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b
          ${theme === "dark" ? "border-yellow-500/20" : "border-yellow-600/20"}
        `}
      >
        {/* Logo + description */}
        <div className="max-w-96">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={theme === "light" ? assets.lightLogo : assets.darkLogo}
              alt="Logo"
              width={85}
              height={80}
              priority
            />
          </Link>

          <p
            className={`mt-6 text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Exclusive jewelry crafted with elegance. Discover timeless designs
            and luxury pieces for every occasion.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-4">
            <Link href="#">
              {/* Twitter/X */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.167 2.5a9.1 9.1 0 0 1-2.617 1.275 3.733 3.733 0 0 0-6.55 2.5v.833a8.88 8.88 0 0 1-7.5-3.775s-3.333 7.5 4.167 10.833a9.7 9.7 0 0 1-5.834 1.667C8.333 20 17.5 15.833 17.5 6.25q0-.35-.067-.692A6.43 6.43 0 0 0 19.167 2.5"
                  stroke={theme === "dark" ? "#FACC15" : "#B45309"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link href="#">
              {/* Github */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15.833c-4.167 1.25-4.167-2.084-5.833-2.5m11.666 5v-3.225a2.8 2.8 0 0 0-.783-2.175c2.616-.292 5.366-1.283 5.366-5.833a4.53 4.53 0 0 0-1.25-3.125 4.22 4.22 0 0 0-.075-3.142s-.983-.292-3.258 1.233a11.15 11.15 0 0 0-5.833 0C5.225.541 4.242.833 4.242.833a4.22 4.22 0 0 0-.075 3.142 4.53 4.53 0 0 0-1.25 3.15c0 4.516 2.75 5.508 5.366 5.833a2.8 2.8 0 0 0-.783 2.15v3.225"
                  stroke={theme === "dark" ? "#FACC15" : "#B45309"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link href="#">
              {/* LinkedIn */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.333 6.667a5 5 0 0 1 5 5V17.5H15v-5.833a1.667 1.667 0 0 0-3.334 0V17.5H8.333v-5.833a5 5 0 0 1 5-5M5 7.5H1.667v10H5zM3.333 5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333"
                  stroke={theme === "dark" ? "#FACC15" : "#B45309"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="w-1/2 flex flex-wrap md:flex-nowrap justify-between">
          <div>
            <h2
              className={`font-semibold mb-5 ${
                theme === "dark" ? "text-yellow-400" : "text-yellow-700"
              }`}
            >
              RESOURCES
            </h2>
            <ul
              className={`text-sm space-y-2 list-none ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              <li><Link href="#">Documentation</Link></li>
              <li><Link href="#">Tutorials</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Community</Link></li>
            </ul>
          </div>

          <div>
            <h2
              className={`font-semibold mb-5 ${
                theme === "dark" ? "text-yellow-400" : "text-yellow-700"
              }`}
            >
              COMPANY
            </h2>
            <ul
              className={`text-sm space-y-2 list-none ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Privacy</Link></li>
              <li><Link href="#">Terms</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <p
        className={`py-4 text-center text-xs md:text-sm ${
          theme === "dark" ? "text-gray-500" : "text-gray-500"
        }`}
      >
        Copyright 2025 ©{" "}
        <Link
          href="/"
          className={`${
            theme === "dark" ? "text-yellow-400" : "text-yellow-700"
          }`}
        >
          Muhammad Awais
        </Link>
        . All Rights Reserved.
      </p>
    </footer>
  );
}
