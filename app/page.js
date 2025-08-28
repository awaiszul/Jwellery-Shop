import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/layout/HeroSection";
import TopCategories from "@/components/layout/TopCategories";
import FeaturedProducts from "@/components/layout/FeaturedProducts";
import JewelryFAQs from "@/components/layout/JewelryFAQs ";
import NewsLetter from "@/components/layout/NewsLetter";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TopCategories />
      <FeaturedProducts/>
      <JewelryFAQs/>
      <NewsLetter/>
    </>
  );
}
