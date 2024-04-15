import React from "react";
import Header from "../component/layout/Header";
import Termsofconditionscontent from "../component/Termsofcondtions/Termsofconditionscontent";
import Footer from "../component/layout/footer";
import HeroSection from "../component/Shared/HeroSection/HeroSection";
import data from "../component/Shared/HeroSection/HeroData.json";

const Termsofconditions = () => {
  const homeData = data.find((item) => item.id === 6);
  return (
    <>
      <Header />
      <HeroSection {...homeData} />
      <Termsofconditionscontent />
      <Footer />
    </>
  );
};

export default Termsofconditions;
