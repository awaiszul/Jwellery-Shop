"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import {
  LayoutDashboard,
  PackagePlus,
  List,
  FolderPlus,
  ShoppingBag,
} from "lucide-react";

const sidebarLinks = [
  { name: "Dashboard", path: "/admin", icon: <LayoutDashboard size={20} /> },
  { name: "Add Product", path: "/admin/add-products", icon: <PackagePlus size={20} /> },
  { name: "Add Category", path: "/admin/category", icon: <FolderPlus size={20} /> },
  { name: "Product List", path: "/admin/products", icon: <List size={20} /> },
  { name: "Orders", path: "/admin/orders", icon: <ShoppingBag size={20} /> },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`md:w-64 w-16 border-r h-screen text-base pt-4 flex flex-col transition-all duration-300
      ${theme === "light" ? "bg-white border-gray-300 text-gray-700" : "bg-gray-900 border-gray-700 text-gray-300"}`}
    >
      {sidebarLinks.map((item, index) => {
        const isActive = pathname === item.path;

        return (
          <Link
            key={index}
            href={item.path}
            className={`flex items-center py-3 px-4 gap-3 transition-colors duration-300
              ${
                isActive
                  ? theme === "light"
                    ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-yellow-500 text-yellow-500"
                    : "border-r-4 md:border-r-[6px] bg-indigo-500/20 border-yellow-400 text-yellow-400"
                  : theme === "light"
                  ? "hover:bg-gray-100/90 text-gray-700 border-white"
                  : "hover:bg-gray-800/80 text-gray-300 border-transparent"
              }`}
          >
            {item.icon}
            <p className="md:block hidden">{item.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
