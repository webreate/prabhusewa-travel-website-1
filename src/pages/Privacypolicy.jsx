import React from "react";
import Header from "../component/layout/Header";
import Privacycontent from "../component/privacypolicy/Privacycontent";
import Footer from "../component/layout/footer";
import data from "../component/Shared/HeroSection/HeroData.json";
import HeroSection from "../component/Shared/HeroSection/HeroSection";

const Privacypolicy = () => {
  const homeData = data.find((item) => item.id == 5);
  return (
    <>
      <Header />
      <HeroSection {...homeData} />
      <Privacycontent />
      <Footer />
    </>
  );
};

export default Privacypolicy;
