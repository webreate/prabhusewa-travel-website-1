import React from "react";
// import Galleryhero from '../component/gallery/Galleryhero'
import Dodhamyatra from "../component/packages/Dodhamyatra";
import Header from "../component/layout/Header";
import Footer from "../component/layout/footer";
import data from "../component/Shared/HeroSection/HeroData.json";
import HeroSection from "../component/Shared/HeroSection/HeroSection";
const Packages = () => {
  const homeData = data.find((item) => item.id === 7);
  return (
    <>
      <Header />
      <HeroSection {...homeData} />
      <Dodhamyatra />
      <Footer />
    </>
  );
};

export default Packages;
