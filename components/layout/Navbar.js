"use client";
import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { ThemeContext } from "@/context/ThemeContext";
import { assets } from "@/assets/assets";
import { useRef } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  ShoppingCart,
  Search,
  Home,
  Info,
  Package,
  Phone,
  UserCircle,
} from "lucide-react";
import { useRouter } from "next/navigation"; // ✅ correct import
import AdminNavbar from "./AdminNavbar";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const profileRef = useRef(null);
  const searchRef = useRef(null);
  const menuRef = useRef(null);

  // 🟢 Outside click handler
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const {
    user,
    logout,
    setUser,
    theme,
    toggleTheme,
    searchQuery,
    cart,
    setSearchQuery,
    loadingUser,
  } = useContext(ThemeContext);

  const router = useRouter();
  const logoutAndRedirect = () => {
    logout();
    router.push("/");
  };
  // ✅ window check inside useEffect

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // agar current page /product nahi hai, to redirect
    if (window.location.pathname !== "/user/product") {
      router.push("/user/product");
    }
  };

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "About", href: "/user/about", icon: <Info size={18} /> },
    {
      name: "All Products",
      href: "/user/product",
      icon: <Package size={18} />,
    },
    { name: "Contact", href: "/user/contact", icon: <Phone size={18} /> },
  ];
  if (loadingUser) {
    return null; // ya <div>Loading...</div>
  }
  return !user || user.role === "buyer" ? (
    <div className="w-full fixed top-0 z-50 text-sm">
      <nav
        className={`relative h-[60px] flex items-center justify-between px-4 md:px-12 lg:px-20 transition-all duration-300
      ${
        theme === "light"
          ? " text-gray-900 backdrop-blur-md "
          : " text-gray-100 backdrop-blur-md "
      }
    `}
      >
        {/* Navbar Content Here */}

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={theme === "light" ? assets.lightLogo : assets.darkLogo}
            alt="Logo"
            width={65}
            height={40}
            priority
          />
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className={`transition-colors hover:text-yellow-600 dark:hover:text-yellow-400`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* ✅ Desktop Search (LIVE Search) */}
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className={`pl-9 pr-3 py-1.5 rounded-full border text-xs focus:ring-1 focus:outline-none transition
                ${
                  theme === "light"
                    ? "border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-yellow-600"
                    : "border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-400 focus:ring-yellow-400"
                }`}
            />
            <Search
              size={16}
              className={`absolute left-3 top-1/2 -translate-y-1/2 
                ${theme === "light" ? "text-gray-400" : "text-gray-500"}`}
            />
          </div>

          {/* Cart */}
          <Link href="/user/cart">
            <button className="relative p-2 cursor-pointer rounded-full transition text-yellow-600">
              <ShoppingCart size={22} />
              {cart?.length > 0 && (
                <span
                  className="absolute -top-1 -right-1 
                   bg-yellow-600 text-white text-[10px] 
                   min-w-[16px] h-[16px] flex items-center justify-center 
                   rounded-full shadow-md"
                >
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </button>
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`rounded-full cursor-pointer transition text-yellow-600`}
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Mobile Search Button */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="md:hidden text-yellow-600"
          >
            <Search size={22} />
          </button>

          {/* Get Started */}
          {/* User Auth Buttons */}
          {!user ? (
            <Link
              href="/user/Login"
              className={`hidden md:inline-block px-5 py-1.5 rounded-full font-medium transition
          ${
            theme === "light"
              ? "bg-yellow-600 text-white hover:bg-yellow-700"
              : "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
          }`}
            >
              Get Started
            </Link>
          ) : user.role === "buyer" ? (
            <div className="relative">
              {/* Profile Icon */}
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center text-2xl"
              >
                <UserCircle
                  className={`cursor-pointer ${
                    theme === "light" ? "text-yellow-600" : "text-yellow-200"
                  }`}
                  size={40}
                  strokeWidth={1.5}
                />
              </button>

              {/* Dropdown */}
              {open && (
                <div
                  className={`absolute right-0 mt-2 w-40 rounded-lg shadow-lg p-2 z-50
              ${
                theme === "light"
                  ? "bg-white text-gray-800"
                  : "bg-gray-900 text-gray-200"
              }`}
                  ref={profileRef}
                >
                  <Link
                    href="/user/buyer_orders"
                    className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClickCapture={() => setOpen(false)}
                  >
                    My Orders
                  </Link>
                  <button
                    onClick={logoutAndRedirect}
                    className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/admin"></Link>
          )}

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* 📱 Mobile Search Dropdown */}
      {searchOpen && (
        <div
          className={`md:hidden px-4 py-3 shadow transition-all duration-300
          ${theme === "light" ? "bg-white" : "bg-gray-950"}
        `}
          ref={searchRef}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className={`w-full pl-9 pr-3 py-2 rounded-lg border text-sm focus:ring-1 focus:outline-none transition
                ${
                  theme === "light"
                    ? "border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-yellow-600"
                    : "border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-400 focus:ring-yellow-400"
                }`}
            />
            <Search
              size={16}
              className={`absolute left-3 top-1/2 -translate-y-1/2
                ${theme === "light" ? "text-gray-400" : "text-gray-500"}`}
            />
          </div>
        </div>
      )}

      {/* 📱 Mobile Dropdown */}
      {menuOpen && (
        <div
          className={`md:hidden shadow p-6 space-y-6 transition-all duration-300
            ${
              theme === "light"
                ? "bg-white text-gray-900"
                : "bg-gray-950 text-gray-100"
            }`}
          ref={menuRef}
        >
          <ul className="flex flex-col space-y-4 text-base font-medium">
            {navLinks.map((link, idx) => (
              <li key={idx} className="flex items-center gap-2">
                {link.icon}
                <Link
                  href={link.href}
                  className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/user/Login"
            className={`block w-full text-center px-5 py-2 rounded-full font-medium transition
              ${
                theme === "light"
                  ? "bg-yellow-600 text-white hover:bg-yellow-700"
                  : "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
              }`}
          >
            Get Started
          </Link>
        </div>
      )}
    </div>
  ) : (
    <AdminNavbar />
  );
}
