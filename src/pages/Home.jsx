import React from "react";
import Header from "../component/layout/Header";
import HomeHero from "../component/home/HomeHero";
import HomeSlideImage from "../component/home/HomeSlideImage";
import Homebestvalue from "../component/home/Homebestvalue";
import Homepackages from "../component/home/Homepackages";
import Trip from "../component/home/Trip";
import Hometestimonials from "../component/home/Hometestimonials";
import Footer from "../component/layout/footer";
const Home = () => {
  return (
    <>
      <Header />
      <HomeHero />
      <HomeSlideImage />
      <Homebestvalue />
      <Homepackages />
      <Trip />
      <Hometestimonials/>
      <Footer/>
    </>
  );
};

export default Home;
