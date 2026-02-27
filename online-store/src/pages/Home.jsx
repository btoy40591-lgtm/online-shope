import React from "react";
import { useState } from "react";
import Hero from "../components/Hero";
import FashionSection from "../components/FashionSection";
import RecommendForm from "../components/RecommendForm";
import ProductSlider from "../components/ProductSlider";

const Home = () => {
  return (
    <div>
      <Hero />
       <ProductSlider/>
      <FashionSection />
      <RecommendForm/>
    </div>
  );
};

export default Home;



