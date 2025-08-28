"use client";
import { createContext, useState, useEffect, useMemo } from "react";
import { products, categories, topCategories, assets } from "@/assets/assets";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true); // ✅ loader state
  const [theme, setTheme] = useState("light");
  const [searchQuery, setSearchQuery] = useState("");

  // filters
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedGender, setSelectedGender] = useState([]);

  // cart
  const [counts, setCounts] = useState({});
  const handleAdd = (id) =>
    setCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  const handleIncrement = (id) =>
    setCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  const handleDecrement = (id) =>
    setCounts((prev) => ({ ...prev, [id]: Math.max((prev[id] || 0) - 1, 0) }));

  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((p) => p.id === product.id);
      if (exist) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };
  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((p) => p.id !== id));
  const updateQuantity = (id, qty) =>
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: parseInt(qty) } : p))
    );
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.offerPrice * item.quantity,
    0
  );

  // price ranges
  const priceRanges = [
    { label: "Under $50", min: 0, max: 50 },
    { label: "$50 - $100", min: 50, max: 100 },
    { label: "Above $100", min: 100, max: Infinity },
  ];

  // get filtered products function
  const getFilteredProducts = (category = "") => {
    let filtered = [...products];

    if (category) filtered = filtered.filter((p) => p.category === category);

    if (selectedCategory)
      filtered = filtered.filter((p) => p.category === selectedCategory);

    if (selectedPrice) {
      const range = priceRanges.find((r) => r.label === selectedPrice);
      if (range)
        filtered = filtered.filter(
          (p) => p.offerPrice >= range.min && p.offerPrice <= range.max
        );
    }

    if (selectedGender.length > 0)
      filtered = filtered.filter((p) => selectedGender.includes(p.gender));

    if (searchQuery)
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return filtered;
  };

  // memoized filtered products
  const filteredProducts = useMemo(
    () => getFilteredProducts(selectedCategory),
    [products, selectedCategory, selectedPrice, selectedGender, searchQuery]
  );

  // featured products
  const featuredProducts = categories.map((cat) =>
    products.find((p) => p.category === cat.name)
  );

  // theme effect
  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#000";
      document.body.style.color = "#fff";
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    }
  }, [theme]);

  const logout = () => {
    setUser(null); // user state clear
    localStorage.removeItem("user"); // storage clear
  };

  // persist user
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoadingUser(false); // ✅ user loading finished
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const value = {
    theme,
    setTheme,
    toggleTheme: () =>
      setTheme((prev) => (prev === "light" ? "dark" : "light")),

    counts,
    handleAdd,
    handleIncrement,
    handleDecrement,
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartTotal,

    products,
    categories,
    topCategories,
    assets,

    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedPrice,
    setSelectedPrice,
    selectedGender,
    setSelectedGender,
    priceRanges,

    filteredProducts,
    getFilteredProducts,
    featuredProducts,

    user,
    setUser,
    loadingUser, // ✅ export loading flag
    logout,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
