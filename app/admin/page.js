"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { ShoppingBag, Package, Users, DollarSign } from "lucide-react";

export default function AdminDashboard() {
  const { theme } = useContext(ThemeContext);

  const cardStyle =
    theme === "light"
      ? "bg-white text-gray-800 border border-gray-200"
      : "bg-gray-900 text-gray-100 border border-gray-700";

  const sectionStyle = theme === "light" ? "bg-gray-50" : "bg-gray-950";

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-300 ${sectionStyle}`}
    >
      {/* Header */}
      <h1
        className={`text-3xl font-[Outfit] font-bold mb-8 ${
          theme === "light" ? "text-yellow-600" : "text-yellow-400"
        }`}
        
      >
        Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className={`p-6  shadow ${cardStyle}`}>
          <div className="flex items-center gap-3">
            <Package className="text-yellow-500" />
            <div>
              <h2 className="text-lg font-semibold">Products</h2>
              <p className="text-2xl font-bold">120</p>
            </div>
          </div>
        </div>
        <div className={`p-6  shadow ${cardStyle}`}>
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-yellow-500" />
            <div>
              <h2 className="text-lg font-semibold">Orders</h2>
              <p className="text-2xl font-bold">85</p>
            </div>
          </div>
        </div>
        <div className={`p-6  shadow ${cardStyle}`}>
          <div className="flex items-center gap-3">
            <DollarSign className="text-yellow-500" />
            <div>
              <h2 className="text-lg font-semibold">Revenue</h2>
              <p className="text-2xl font-bold">$12,450</p>
            </div>
          </div>
        </div>
        <div className={`p-6  shadow ${cardStyle}`}>
          <div className="flex items-center gap-3">
            <Users className="text-yellow-500" />
            <div>
              <h2 className="text-lg font-semibold">Users</h2>
              <p className="text-2xl font-bold">450</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className={`p-6 shadow col-span-2 ${cardStyle}`}>
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <div className="overflow-x-auto scrollbar-hide">
            {" "}
            {/* wrapper */}
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="text-left border-b border-gray-300">
                  <th className="py-2">Order ID</th>
                  <th>Customer</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: "#1001",
                    customer: "Ali Khan",
                    status: "Pending",
                    amount: "$120",
                  },
                  {
                    id: "#1002",
                    customer: "Sara Ahmed",
                    status: "Completed",
                    amount: "$75",
                  },
                  {
                    id: "#1003",
                    customer: "John Doe",
                    status: "Processing",
                    amount: "$200",
                  },
                ].map((order, idx) => (
                  <tr key={idx} className="border-b border-gray-200">
                    <td className="py-2">{order.id}</td>
                    <td>{order.customer}</td>
                    <td>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : order.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td>{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className={`p-6  shadow ${cardStyle}`}>
          <h2 className="text-xl font-semibold mb-4">Top Selling Products</h2>
          <ul className="space-y-3">
            {["Watch", "Headphones", "Shoes", "Laptop"].map((item, i) => (
              <li key={i} className="flex justify-between">
                <span>{item}</span>
                <span className="font-semibold">
                  {Math.floor(Math.random() * 100)} sold
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
