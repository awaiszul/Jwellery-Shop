"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);

  const boxIcon =
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/boxIcon.svg";

  const orders = [
    {
      id: 1,
      items: [{ product: { name: "Nike Air Max 270" }, quantity: 1 }],
      address: {
        firstName: "John",
        lastName: "Doe",
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zipcode: "10001",
        country: "USA",
      },
      amount: 320.0,
      paymentType: "Credit Card",
      orderDate: "10/10/2022",
      isPaid: true,
    },
    {
      id: 2,
      items: [{ product: { name: "Nike Air Max 270" }, quantity: 1 }],
      address: {
        firstName: "Jane",
        lastName: "Smith",
        street: "456 Park Ave",
        city: "Chicago",
        state: "IL",
        zipcode: "60601",
        country: "USA",
      },
      amount: 180.0,
      paymentType: "PayPal",
      orderDate: "11/05/2022",
      isPaid: false,
    },
  ];

  return (
    <div className="min-h-screen md:p-10 p-4 font-[Outfit] my-10 flex flex-col items-center space-y-6">
  <h2
  className={`text-2xl mx-20 font-[Outfit] font-bold transition-colors duration-300 
    ${theme === "light" ? "text-yellow-600" : "text-yellow-400"} self-start`}
>
  Orders List
</h2>


    {orders.map((order, index) => (
      <div
        key={index}
        className={`flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-5 w-full max-w-4xl rounded-md transition-colors duration-300
          ${
            theme === "light"
              ? "bg-white border border-gray-300 text-gray-800"
              : "bg-gray-900 border border-gray-700 text-gray-200"
          }`}
      >
          {/* Product Info */}
          <div className="flex gap-5">
            <img
              className="w-12 h-12 object-cover opacity-70"
              src={boxIcon}
              alt="boxIcon"
            />
            <>
              {order.items.map((item, i) => (
                <div key={i} className="flex flex-col justify-center">
                  <p className="font-medium">
                    {item.product.name}{" "}
                    <span
                      className={`${
                        item.quantity < 2
                          ? "hidden"
                          : theme === "light"
                          ? "text-yellow-600"
                          : "text-yellow-400"
                      }`}
                    >
                      x {item.quantity}
                    </span>
                  </p>
                </div>
              ))}
            </>
          </div>

          {/* Address */}
          <div className="text-sm">
            <p
              className={`font-medium mb-1 ${
                theme === "light" ? "text-gray-900" : "text-gray-100"
              }`}
            >
              {order.address.firstName} {order.address.lastName}
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              {order.address.street}, {order.address.city},{" "}
              {order.address.state}, {order.address.zipcode},{" "}
              {order.address.country}
            </p>
          </div>

          {/* Amount */}
          <p
            className={`font-semibold text-base my-auto ${
              theme === "light" ? "text-yellow-600" : "text-yellow-400"
            }`}
          >
            ${order.amount}
          </p>

          {/* Payment Info */}
          <div className="flex flex-col text-sm">
            <p>Method: {order.paymentType}</p>
            <p>Date: {order.orderDate}</p>
            <p>
              Payment:{" "}
              <span
                className={`font-semibold ${
                  order.isPaid
                    ? theme === "light"
                      ? "text-green-600"
                      : "text-green-400"
                    : theme === "light"
                    ? "text-red-600"
                    : "text-red-400"
                }`}
              >
                {order.isPaid ? "Paid" : "Pending"}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
