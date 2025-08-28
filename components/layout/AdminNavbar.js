"use client";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";



const AdminNavbar = () => {
  const { theme, logout, setUser, toggleTheme } = useContext(ThemeContext);



  return (
    <div
      className={`font-[Outfit] ${
        theme === "dark" ? "bg-black text-yellow-200" : "bg-white text-gray-800"
      }`}
    >
      {/* Navbar */}
      <div
        className={`flex items-center justify-between px-4 md:px-18 border-b border-amber-400 transition-all duration-300`}
      >
        <Link href="/" onClick={()=>setUser(null)} className="flex items-center">
          <Image
            src={theme === "light" ? assets.lightLogo : assets.darkLogo}
            alt="Logo"
            width={65}
            height={30}
            priority
          />
        </Link>
        <div className="flex items-center gap-2">
          <p className="font-semibold">Hi! Admin</p>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full cursor-pointer transition text-yellow-600"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={logout} className="border rounded-full text-sm px-4 py-1 bg-yellow-600 hover:bg-yellow-700 text-white">
            Logout
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default AdminNavbar;
