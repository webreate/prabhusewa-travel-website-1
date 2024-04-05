import React from "react";
import Header from "../component/layout/Header";
// import Galleryhero from "../component/gallery/Galleryhero";
import HeroSection from "../component/HeroSection/HeroSection";
import Data from "../component/HeroSection/HeroData.json";
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
