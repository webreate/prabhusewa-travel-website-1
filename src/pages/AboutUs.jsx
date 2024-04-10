import React from "react";
import Header from "../component/layout/Header";
// import Hero from '../component/aboutus/Hero'
import About from "../component/aboutus/About";
import Aboutvid from "../component/aboutus/Aboutvid";
import Populartour from "../component/aboutus/Populartour";
import Review from "../component/aboutus/Review";
import Footer from "../component/layout/footer";
import HeroSection from "../component/Shared/HeroSection/HeroSection";
import Data from "../component/Shared/HeroSection/HeroData.json";
const AboutUs = () => {
  const homeData = Data.find((item) => item.id === 4);

  return (
    <>
      <Header />
      <HeroSection {...homeData} />
      <About />
      <Aboutvid />
      <Populartour />
      <Review />
      <Footer />
    </>
  );
};

export default AboutUs;
