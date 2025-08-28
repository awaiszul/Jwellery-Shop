"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function ContactPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`min-h-screen px-5  md:px-20 py-12 font-[Outfit] ${
        theme === "light"
          ? "bg-gray-50  text-gray-900"
          : "bg-gray-950 text-gray-100"
      } my-10`}
    >
      <div className="max-w-6xl align-middle justify-center mx-auto grid md:grid-cols-2 gap-20">
        {/* Left: Contact Info */}
        <div className="flex flex-col justify-center space-y-6 min-h-full">
          <h2 className="text-4xl font-bold text-yellow-600">Get in Touch</h2>
          <p className="text-lg leading-relaxed">
            We'd love to hear from you! Whether you have a question about
            services, pricing, or anything else, our team is ready to answer all
            your questions.
          </p>

          <div className="space-y-1 flex flex-wrap gap-10">
            <div>
              <h4 className="text-xl font-semibold text-yellow-600">Phone</h4>
              <p>+92 300 1234567</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-yellow-600">Email</h4>
              <p>info@example.com</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-yellow-600">Address</h4>
              <p>Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div
          className={`p-8 shadow-lg ${
            theme === "light" ? "bg-white border-2 border-amber-600" : "bg-gray-900 border-2 border-amber-600"
          }`}
        >
          <form className="space-y-2">
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-3 border border-yellow-600 bg-transparent focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-yellow-600 bg-transparent focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-yellow-600 bg-transparent focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 border border-yellow-600 bg-transparent focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-3 font-semibold hover:bg-yellow-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
