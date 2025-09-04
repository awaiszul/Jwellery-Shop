"use client";

import { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { useRouter } from "next/navigation";
export default function AddAddressPage() {
  const { theme, addAddress  } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    province: "",
    zip: "",
    country: "",
  });
const router = useRouter();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAddress(formData);
    alert("Address Saved Successfully!");
    router.push("/user/cart");
  };

  const placeholderColor =
    theme === "dark" ? "placeholder-gray-400" : "placeholder-gray-500";

  return (
    <section
      className={`min-h-screen flex items-center justify-center py-5 px-4 md:px-20 font-outfit transition-colors duration-300 mt-10 ${
        theme === "dark" ? "bg-black text-gray-100" : "text-gray-900"
      }`}
    >
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-10">
        {/* Address Form */}
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col gap-4 p-6   transition-colors duration-300 $`}
        >
          <h1 className="text-3xl font-bold text-amber-400 text-center md:text-left">
            Add New Address
          </h1>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className={`w-full p-3  border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-transparent ${placeholderColor}`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className={`w-full p-3  border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-transparent ${placeholderColor}`}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full p-3  border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-transparent ${placeholderColor}`}
            />
          </div>

          <input
            type="text"
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleChange}
            required
            className={`w-full p-3  border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-transparent ${placeholderColor}`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className={`w-full p-3  border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-transparent ${placeholderColor}`}
            />
            <input
              type="text"
              name="province"
              placeholder="Province/State"
              value={formData.province}
              onChange={handleChange}
              required
              className={`w-full p-3  border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-transparent ${placeholderColor}`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              value={formData.zip}
              onChange={handleChange}
              required
              className={`w-full p-3  border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-transparent ${placeholderColor}`}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
              className={`w-full p-3  border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-transparent ${placeholderColor}`}
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full py-3  bg-yellow-500 text-white font-semibold hover:bg-yellow-400 transition"
          >
            Save Address
          </button>
        </form>

        {/* Address Preview */}
        <div
          className={`p-6   transition-colors duration-300 overflow-x-auto `}
        >
          <h2 className="text-xl font-semibold my-4 text-amber-400">
            Address Preview
          </h2>
          <table className="w-full border border-gray-300">
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="p-2 font-medium">Name</td>
                <td className="p-2 text-gray-500">
                  {formData.fullName || "Not provided"}
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-2 font-medium">Phone</td>
                <td className="p-2 text-gray-500">
                  {formData.phone || "Not provided"}
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-2 font-medium">Email</td>
                <td className="p-2 text-gray-500">
                  {formData.email || "Not provided"}
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-2 font-medium">Address</td>
                <td className="p-2 text-gray-500">
                  {formData.address || "Not provided"}
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-2 font-medium">City</td>
                <td className="p-2 text-gray-500">
                  {formData.city || "Not provided"}
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-2 font-medium">Province</td>
                <td className="p-2 text-gray-500">
                  {formData.province || "Not provided"}
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-2 font-medium">ZIP</td>
                <td className="p-2 text-gray-500">
                  {formData.zip || "Not provided"}
                </td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Country</td>
                <td className="p-2 text-gray-500">
                  {formData.country || "Not provided"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
