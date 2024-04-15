import React from "react";
import Header from "../component/layout/Header";
import HeroSection from "../component/Shared/HeroSection/HeroSection";
import Data from "../component/Shared/HeroSection/HeroData.json";
import Gallerycontent from "../component/gallery/Gallerycontent";
import Footer from "../component/layout/footer";

const Gallery = () => {
  const homeData = Data.find((item) => item.id === 3);
  return (
    <>
      <Header />
      <HeroSection {...homeData} />;
      <Gallerycontent />
      <Footer />
    </>
  );
};

export default Gallery;
