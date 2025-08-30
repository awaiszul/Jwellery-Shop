"use client";

import { useState, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function AuthForm() {
  const { theme, setUser } = useContext(ThemeContext);
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("buyer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]); // 👉 registered users list

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      validationErrors.email = "Invalid email address";
    }
    if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }
    if (!isLogin && name.trim() === "") {
      validationErrors.name = "Full Name is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setMessage("");

    if (isLogin) {
      // 🔑 LOGIN FLOW
      const existingUser = users.find((u) => u.email === email);

      if (!existingUser) {
        setMessage("❌ Email does not exist. Please sign up.");
        return;
      }

      if (existingUser.password !== password) {
        setMessage("❌ Incorrect password.");
        return;
      }

      // set user in context
      setUser(existingUser);

      if (existingUser.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    } else {
      // 📝 SIGN UP FLOW
      const alreadyUser = users.find((u) => u.email === email);
      if (alreadyUser) {
        setMessage("⚠️ Email already registered. Please login.");
        return;
      }

      const newUser = { name, email, password, role };
      setUsers([...users, newUser]);
      setUser(newUser);

      if (role === "admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    }

    // reset fields
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <div className="flex flex-col md:flex-row my-15 font-['Outfit']">
      {/* Left Side Info */}
      <div className="flex-1 flex items-center justify-center p-8 text-center">
        <div className="space-y-4 max-w-md">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 dark:text-yellow-400">
            Ready to Join Us?
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Discover the finest jewelry collection, crafted with elegance and
            passion. Sign up today and experience true luxury.
          </p>
        </div>
      </div>

      {/* Right Side Form */}
      <div
        className={`flex-1 flex items-center justify-center p-8 transition-colors ${
          theme === "light" ? "text-gray-900" : "text-gray-100"
        } `}
      >
        <div
          className={`w-full max-w-md p-8 shadow-lg transition-colors ${
            theme === "light" ? "bg-gray-50" : "bg-gray-900"
          }  border-yellow-600 border-2`}
        >
          {/* Role buttons */}
          <div className="flex gap-2 justify-center mb-4">
            <button
              type="button"
              onClick={() => setRole("buyer")}
              className={`px-4 py-2 cursor-pointer font-medium transition ${
                role === "buyer"
                  ? "bg-yellow-600 text-white border border-yellow-600"
                  : theme === "light"
                  ? "bg-white text-gray-900 border border-gray-300"
                  : "bg-gray-800 text-gray-100 border border-gray-700"
              }`}
            >
              Buyer
            </button>
            <button
              type="button"
              onClick={() => setRole("admin")}
              className={`px-4 py-2 cursor-pointer font-medium transition ${
                role === "admin"
                  ? "bg-yellow-600 text-white border border-yellow-600"
                  : theme === "light"
                  ? "bg-white text-gray-900 border border-gray-300"
                  : "bg-gray-800 text-gray-100 border border-gray-700"
              }`}
            >
              Admin
            </button>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-center mb-6 text-yellow-600">
            {isLogin ? "Login to Your Account" : "Create New Account"}
          </h2>

          {/* Success/Error message */}
          {message && (
            <div className="mb-4 px-4 py-2 border border-yellow-600 text-yellow-600 font-medium">
              {message}
            </div>
          )}

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-4 py-3 border focus:outline-none focus:ring-2 transition ${
                  theme === "light"
                    ? "border-gray-300 bg-white text-gray-900 focus:ring-yellow-600"
                    : "border-gray-700 bg-gray-800 text-gray-100 focus:ring-yellow-400"
                }`}
              />
            )}
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 border focus:outline-none focus:ring-2 transition ${
                theme === "light"
                  ? "border-gray-300 bg-white text-gray-900 focus:ring-yellow-600"
                  : "border-gray-700 bg-gray-800 text-gray-100 focus:ring-yellow-400"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-3 border focus:outline-none focus:ring-2 transition ${
                  theme === "light"
                    ? "border-gray-300 bg-white text-gray-900 focus:ring-yellow-600"
                    : "border-gray-700 bg-gray-800 text-gray-100 focus:ring-yellow-400"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember Me
              </label>
              <button type="button" className="text-yellow-600 hover:underline">
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-2 bg-yellow-600 text-white font-medium hover:bg-yellow-500 transition"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <p className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              onClick={() => {
                setIsLogin(!isLogin);
                setMessage("");
              }}
              className="text-yellow-600 cursor-pointer hover:underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>

          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-300 dark:border-gray-700" />
            <span className="mx-2 text-gray-400">OR</span>
            <hr className="flex-1 border-gray-300 dark:border-gray-700" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center gap-2 px-4 py-2 border w-full sm:w-auto justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <FcGoogle size={18} />
              <span className="ml-1 text-sm sm:text-base">Google</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border w-full sm:w-auto justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <FaFacebookF size={18} />
              <span className="ml-1 text-sm sm:text-base">Facebook</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border w-full sm:w-auto justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <FaTwitter size={18} />
              <span className="ml-1 text-sm sm:text-base">Twitter</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
