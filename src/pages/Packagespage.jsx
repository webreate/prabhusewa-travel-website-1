import React from "react";
// import Galleryhero from '../component/gallery/Galleryhero'
import Dodhamyatra from "../component/packages/Dodhamyatra";
import Header from "../component/layout/Header";
import Footer from "../component/layout/footer";

import  Herododham from "../component/packages/Herododham"
const Packages = () => {

  return (
    <>
      <Header />
      <Herododham />

      <Dodhamyatra />
      <Footer />
    </>
  );
};

export default Packages;
