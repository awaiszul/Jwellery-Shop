"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { assets } from "@/assets/assets";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function HeroSection() {
  const { theme } = useContext(ThemeContext);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // Images array
  const slides = [assets.banner, assets.banner1, assets.banner2];

  return (
    <section className="relative w-[90%] mx-auto my-20">
      {/* Text Content */}
      <div className="absolute z-20 top-1/2 left-10 -translate-y-1/2 text-left">
        <h1
          className={`text-4xl md:text-5xl font-bold font-['Ovo'] mb-4 
            ${theme === "dark" ? "text-yellow-300" : "text-yellow-500"}`}
        >
          Welcome to Our <br/> Store
        </h1>

        <p
          className={`text-lg md:text-xl font-['Ovo'] max-w-md mb-6 leading-relaxed
            ${theme === "dark" ? "text-gray-300" : "text-white"}`}
        >
          Discover the best collection with amazing offers. Shop now and style
          your life!
        </p>

        {/* Transparent Outline Button */}
        <button
          className={`px-6 py-3 rounded-full font-['Ovo'] text-lg font-medium border transition
            ${
              theme === "dark"
                ? "border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black"
                : "border-yellow-400 text-yellow-500 hover:bg-yellow-700 hover:text-white"
            }`}
        >
          Explore Now
        </button>
      </div>

      {/* Slider with overlay */}
      <Slider {...settings}>
        {slides.map((img, idx) => (
          <div key={idx} className="relative">
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-[60vh] md:h-[70vh] rounded-2xl object-cover"
            />
            {/* Overlay for opacity */}
            <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
