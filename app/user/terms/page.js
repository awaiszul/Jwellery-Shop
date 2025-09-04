"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function Terms() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen px-6 md:px-16 lg:px-32 py-12 mt-20 transition-colors duration-500 ${
        theme === "light"
          ? "bg-white text-gray-900"
          : "bg-gray-900 text-gray-100"
      }`}
    >
      <h1 className="text-4xl font-bold mb-6 text-yellow-500">
        Terms & Conditions
      </h1>

      <p className="mb-4 text-lg">
        Welcome to <strong>Luxury Jewelry</strong>. By accessing and using our
        website, you agree to comply with and be bound by the following terms
        and conditions. Please read them carefully before making any purchase.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl text-yellow-500 font-semibold mt-8 mb-3">1. General</h2>
      <p className="mb-4">
        These terms govern your use of our website and services. By visiting
        <strong> Luxury Jewelry</strong>, you accept these terms in full. If you
        disagree with any part, you should refrain from using our website.
      </p>

      {/* Section 2 */}
      <h2 className="text-2xl text-yellow-500 font-semibold mt-8 mb-3">2. Products</h2>
      <p className="mb-4">
        Our jewelry is carefully designed and crafted. Due to the handmade
        nature of certain items, slight variations in size, color, or design may
        occur. Product images are for reference only and may not perfectly
        reflect the actual item.
      </p>

      {/* Section 3 */}
      <h2 className="text-2xl text-yellow-500 font-semibold mt-8 mb-3">
        3. Orders & Payments
      </h2>
      <p className="mb-4">
        Orders are processed only after successful payment confirmation. We
        accept major credit/debit cards and secure online payment methods. All
        prices are listed in PKR (or USD for international orders) and include
        applicable taxes unless stated otherwise.
      </p>

      {/* Section 4 */}
      <h2 className="text-2xl text-yellow-500 font-semibold mt-8 mb-3">4. Shipping</h2>
      <p className="mb-4">
        We offer nationwide and international shipping. Estimated delivery times
        will be provided at checkout. However, delivery timelines may vary due
        to customs, weather, or unforeseen circumstances beyond our control.
      </p>

      {/* Section 5 */}
      <h2 className="text-2xl text-yellow-500 font-semibold mt-8 mb-3">5. Returns & Refunds</h2>
      <p className="mb-4">
        If you are unsatisfied with your purchase, returns are accepted within
        <strong> 7 days</strong> of delivery, provided the item is unused,
        undamaged, and in its original packaging. Refunds will be processed to
        the original payment method, excluding shipping charges.
      </p>

      {/* Section 6 */}
      <h2 className="text-2xl text-yellow-500 font-semibold mt-8 mb-3">6. Privacy Policy</h2>
      <p className="mb-4">
        Your privacy is important to us. All personal information collected is
        kept secure and will never be shared with third parties without your
        consent, except where required by law. For more details, refer to our{" "}
        <a href="/user/terms" className="text-yellow-500 underline">
          Privacy Policy
        </a>
        .
      </p>

      {/* Section 7 */}
      <h2 className="text-2xl text-yellow-500 font-semibold mt-8 mb-3">
        7. Intellectual Property
      </h2>
      <p className="mb-4">
        All content, including logos, designs, text, and images, is the property
        of <strong>Luxury Jewelry</strong>. Unauthorized use, reproduction, or
        distribution of any materials is strictly prohibited.
      </p>

      {/* Section 8 */}
      <h2 className="text-2xl text-yellow-500 font-semibold mt-8 mb-3">8. Contact Us</h2>
      <p className="mb-4">
        For inquiries or support, please reach out to us at{" "}
        <a
          href="mailto:freelancermawais@gmail.com"
          className="text-yellow-500 underline"
        >
          freelancermawais@gmail.com
        </a>
        . We aim to respond within 24–48 hours.
      </p>

      <p className="mt-10 text-sm text-gray-400">
        Last updated: January 2025
      </p>
    </div>
  );
}
