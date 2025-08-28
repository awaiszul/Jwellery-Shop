"use client";

import { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function BuyNowPage() {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
  };

  // Placeholder color based on theme
  const placeholderColor =
    theme === "dark" ? "placeholder-gray-400" : "placeholder-gray-500";

  return (
    <section
      className={`min-h-screen flex items-center justify-center py-5 px-4 md:px-20 font-outfit transition-colors duration-300 mt-10 ${
        theme === "dark" ? "bg-black text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">
        {/* Billing & Shipping Form */}
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col gap-2 p-5 transition-colors duration-300 overflow-hidden ${
            theme === "dark" ? "bg-black" : "bg-white"
          }`}
        >
          <h1 className="text-3xl font-bold mb-4 text-amber-400 text-center md:text-left">
            Checkout
          </h1>

          <h2 className="text-xl font-semibold text-amber-300
           mb-2">Billing & Shipping</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full p-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-transparent ${placeholderColor}`}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full p-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-transparent ${placeholderColor}`}
            />
          </div>

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className={`w-full p-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-transparent ${placeholderColor}`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className={`w-full p-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-transparent ${placeholderColor}`}
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
              className={`w-full p-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-transparent ${placeholderColor}`}
            />
          </div>

          <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            value={formData.zip}
            onChange={handleChange}
            required
            className={`w-full p-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-transparent ${placeholderColor}`}
          />

          {/* Payment Section */}
          <h2 className="text-xl font-semibold text-amber-300 mt-4 mb-2">Payment Details</h2>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            className={`w-full p-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-transparent ${placeholderColor}`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="expiry"
              placeholder="Expiry MM/YY"
              value={formData.expiry}
              onChange={handleChange}
              required
              className={`w-full p-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-transparent ${placeholderColor}`}
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleChange}
              required
              className={`w-full p-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-transparent ${placeholderColor}`}
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full py-3 bg-yellow-500 text-white font-semibold hover:bg-yellow-400 transition"
          >
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div
          className={`p-6 transition-colors duration-300 flex flex-col gap-4 ${
            theme === "dark" ? "bg-black" : "bg-white"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between text-gray-500">
            <span>Subtotal</span>
            <span>$159</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span>Shipping</span>
            <span>$10</span>
          </div>
          <div className="flex justify-between font-semibold text-yellow-500 text-lg mt-2">
            <span>Total</span>
            <span>$169</span>
          </div>

          <p className="text-gray-400 text-sm mt-4">
            Your payment information is secure and encrypted.
          </p>

          {/* Product Preview */}
          <div className="mt-4 flex items-center gap-3">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png"
              alt="Product"
              className="w-16 h-16 object-cover"
            />
            <div>
              <p className="font-medium text-yellow-500">Nike Pegasus 41</p>
              <p className="text-gray-400 text-sm">1 Item</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
