"use client";
import React, { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaCreditCard,
  FaTimes,
} from "react-icons/fa";

import { useRouter } from "next/navigation";

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    theme,
  } = useContext(ThemeContext);
  const [showAddress, setShowAddress] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [address, setAddress] = useState(""); // default empty
  const router = useRouter();

 

  const handleAddressChange = () => {
    router.push("/user/address"); // open address page
  };
    const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items before placing an order.");
      return;
    }
     if (!address) {
      alert("⚠️ Please select or add an address before placing order!");
      return;
    }
    if (paymentMethod === "COD") {
      alert("✅ Your order has been placed!");
    } else {
      router.push("/user/buy"); // Online payment page
    }
    
  };

  // 🎨 Theme colors
  const isLight = theme === "light";
  const bgColor = isLight ? "bg-white text-gray-900" : "bg-black text-gray-100";
  const borderColor = isLight ? "border-yellow-600/50" : "border-yellow-500/50";

  return (
    <div
      className={`flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto ${bgColor} font-ovo my-20`}
    >
      {/* Left: Cart Items */}
      <div className="flex-1 max-w-4xl">
        <h1 className="text-3xl text-yellow-500 font-bold mb-6 flex items-center gap-2">
          Shopping Cart{" "}
          <span className="text-sm text-yellow-600">{cart.length} Items</span>
        </h1>

        {/* Header Row */}
        <div
          className={`grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3 mx-5 border-b ${borderColor}`}
        >
          <p className="text-left">Product Details</p>
          <p className="text-center">Subtotal</p>
          <p className="text-center">Action</p>
        </div>

        {/* Cart Items */}
        {cart.map((product, index) => (
          <div
            key={product.id || index}
            className={`grid grid-cols-[2fr_1fr_1fr] items-center text-sm md:text-base font-medium py-4 mx-5 border-b ${borderColor}`}
          >
            {/* Product Info */}
            <div className="flex items-center md:gap-6 gap-3">
              <div
                className={`cursor-pointer w-24 h-24 flex items-center justify-center border ${borderColor} overflow-hidden`}
              >
                <img
                  className="max-w-full h-full object-cover"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div>
                <p className="hidden md:block font-semibold">{product.name}</p>
                <div className="font-normal text-gray-500/70">
                  <p>
                    Size: <span>{product.size || "N/A"}</span>
                  </p>
                  <div className="flex items-center">
                    <p>Qty:</p>
                    <select
                      className={`outline-none ml-2 border ${borderColor} px-2 py-1 bg-transparent text-current`}
                      value={product.quantity}
                      onChange={(e) =>
                        updateQuantity(product.id, e.target.value)
                      }
                    >
                      {Array(10)
                        .fill("")
                        .map((_, index) => (
                          <option
                            key={index}
                            value={index + 1}
                            className="text-black dark:text-white bg-white dark:bg-gray-900"
                          >
                            {index + 1}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Price */}
            <p className="text-center text-yellow-600 font-semibold">
              ${product.offerPrice * product.quantity}
            </p>

            {/* Remove */}
            <button
              onClick={() => removeFromCart(product.id)}
              className="cursor-pointer mx-auto text-red-400 hover:text-red-600 transition text-sm"
            >
              <FaTimes />
            </button>
          </div>
        ))}

        {/* Continue Shopping */}
        <button className="group cursor-pointer flex items-center mt-8 gap-2 text-yellow-600 font-medium hover:underline">
          <FaArrowLeft /> Continue Shopping
        </button>
      </div>

      {/* Right: Order Summary */}
      <div
        className={`max-w-[360px] w-full p-6 shadow-md max-md:mt-16 border border-amber-500`}
      >
        <h2 className="text-xl text-yellow-600 font-semibold flex items-center gap-2">
          Order Summary
        </h2>
        <hr className="my-4 border-t-1 border-yellow-500" />

        {/* Address */}
        <div className="mb-6">
          <p className="text-sm font-medium uppercase flex items-center gap-2">
            <FaMapMarkerAlt /> Delivery Address
          </p>
          <div className="relative flex justify-between items-start mt-2">
            <p className="text-gray-500">
              {address ? address : "No address found"}
            </p>
            <button
              onClick={() => setShowAddress(!showAddress)}
              className="text-yellow-500 hover:underline cursor-pointer"
            >
              Change
            </button>
            {showAddress && (
              <div className="absolute top-6 bg-white border border-gray-300 text-sm w-full">
                <p
                  onClick={() => {
                    setAddress("New York, USA");
                    setShowAddress(false);
                  }}
                  className="text-gray-500 p-2 hover:bg-gray-100 cursor-pointer"
                >
                  New York, USA
                </p>
                <p
                  onClick={handleAddressChange}
                  className="text-yellow-500 text-center cursor-pointer p-2 hover:bg-yellow-500/10"
                >
                  Add address
                </p>
              </div>
            )}
          </div>

          {/* Payment Method */}
          <p className="text-sm font-medium uppercase mt-6 flex items-center gap-2">
            <FaCreditCard /> Payment Method
          </p>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border px-3 py-2 mt-2 outline-none bg-transparent text-current"
          >
            <option
              value="COD"
              className="text-black dark:text-white bg-white dark:bg-gray-900"
            >
              Cash On Delivery
            </option>
            <option
              value="Online"
              className="text-black dark:text-white bg-white dark:bg-gray-900"
            >
              Online Payment
            </option>
          </select>
        </div>

        <hr className="border-t-1 border-yellow-500" />

        {/* Totals */}
        <div className="text-gray-500 mt-4 space-y-2">
          <p className="flex justify-between">
            <span>Price</span>
            <span className="text-gray-600 dark:text-gray-200">
              ${cartTotal.toFixed(2)}
            </span>
          </p>
          <p className="flex justify-between">
            <span>Shipping Fee</span>
            <span className="text-green-600">Free</span>
          </p>
          <p className="flex justify-between">
            <span>Tax (2%)</span>
            <span className="text-gray-600 dark:text-gray-200">
              ${(cartTotal * 0.02).toFixed(2)}
            </span>
          </p>
          <p className="flex justify-between text-lg font-semibold mt-3">
            <span>Total Amount:</span>
            <span className="text-yellow-600">
              ${(cartTotal * 1.02).toFixed(2)}
            </span>
          </p>
        </div>

        {/* Button */}
        <button
          onClick={()=>{ handlePlaceOrder();}}
          className="w-full py-3 mt-6 cursor-pointer bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition border border-yellow-700"
        >
          {paymentMethod === "COD" ? "Place Order" : "Proceed to Checkout"}
        </button>
      </div>
    </div>
  );
};

export default CartPage;
