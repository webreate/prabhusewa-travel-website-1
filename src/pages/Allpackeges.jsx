import React from "react";
// import Allpackegeshero from "../component/allpackeges/Allpackegeshero";
import Data from "../component/Shared/HeroSection/HeroData.json";
import HeroSection from "../component/Shared/HeroSection/HeroSection";
import Header from "../component/layout/Header";
import Footer from "../component/layout/footer";
import Packeges from "../component/allpackeges/Packeges";
const Allpackeges = () => {
  const homeData = Data.find((item) => item.id === 2);
  return (
    <>
      <Header />
      <HeroSection {...homeData} />;
      <Packeges />
      <Footer />
    </>
  );
};
export default Allpackeges;
