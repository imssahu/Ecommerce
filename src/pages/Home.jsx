import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Bottom/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
