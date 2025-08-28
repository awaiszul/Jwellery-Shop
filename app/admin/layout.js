"use client";
import AdminSidebar from "@/components/layout/AdminSidebar";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { useRouter } from "next/navigation"; // ✅ correct import
export default function AdminLayout({ children }) {
  const { user, loadingUser } = useContext(ThemeContext);
  const router = useRouter();

  useEffect(() => {
    if (!loadingUser) {
      if (!user) {
        router.push("/Login"); // agar user null hai to login pe bhej do
      }
    }
  }, [user, loadingUser, router]);
  return (
    <div className="flex font-[Outfit] min-h-screen">
      {/* Sidebar */}
      <aside className=" bg-yellow-100 border-r border-yellow-300">
        <AdminSidebar />
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
       

        {/* Children Pages */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
