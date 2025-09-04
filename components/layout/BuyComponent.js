"use client";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { useSearchParams } from "next/navigation";
export default function BuyNowPage() {
  const { theme, cart, cartTotal, selectedAddress } = useContext(ThemeContext); // 🟢 cart & total
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    province: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  useEffect(() => {
    if (selectedAddress) {
      setFormData((prev) => ({
        ...prev,
        name: selectedAddress.fullName || "",
        email: selectedAddress.email || "",
        address: selectedAddress.address || "",
        city: selectedAddress.city || "",
        province: selectedAddress.province || "",
        zip: selectedAddress.zip || "",
      }));
    }
  }, [selectedAddress]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const params = useSearchParams();
 const productId = params.get("productId");

const itemsToCheckout = productId
  ? cart.filter(
      (item) =>
        item?.id && productId && item.id.toString() === productId.toString()
    )
  : cart;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("⚠️ Your cart is empty. Please add items first.");
      return;
    }
    alert("✅ Order Placed Successfully!");
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
          <h1 className="text-3xl font-bold mb-4 text-amber-500 text-center md:text-left">
            Checkout
          </h1>

          <h2 className="text-xl font-semibold text-amber-400 mb-2">
            Billing & Shipping
          </h2>
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
              name="province"
              placeholder="Province"
              value={formData.province}
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
          <h2 className="text-xl font-semibold text-amber-400 mt-4 mb-2">
            Payment Details
          </h2>
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
            className="mt-4 w-full py-3 bg-amber-500 text-white font-semibold hover:bg-yellow-400 transition"
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
          <h2 className="text-xl text-amber-500 font-semibold mb-4">
            Order Summary
          </h2>

          {/* Cart Items List */}
          {itemsToCheckout.length > 0 ? (
            itemsToCheckout.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 border-b border-gray-300 pb-2 mb-2"
              >
                <img
                  src={
                    Array.isArray(item.image)
                      ? item.image[0]
                      : item.image || "/fallback.jpg"
                  }
                  alt={item.name || "Product"}
                  className="w-16 h-16 object-cover"
                />

                <div>
                  <p className="font-medium text-yellow-500">{item.name}</p>
                  <p className="text-gray-400 text-sm">
                    {item.quantity} × ${item.offerPrice}
                  </p>
                </div>
                <p className="ml-auto font-semibold text-yellow-600">
                  ${(item.quantity * item.offerPrice).toFixed(2)}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No items in cart</p>
          )}

          {/* Totals */}
          <div className="flex justify-between text-gray-500">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span>Shipping</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between font-semibold text-yellow-500 text-lg mt-2">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>

          <p className="text-gray-400 text-sm mt-4">
            Your payment information is secure and encrypted.
          </p>
        </div>
      </div>
    </section>
  );
}
