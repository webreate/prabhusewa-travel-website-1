import React from "react";
import Allpackegeshero from "../component/allpackeges/Allpackegeshero";
import Header from "../component/layout/Header";
import Footer from "../component/layout/footer";
import Packeges from "../component/allpackeges/Packeges";
const Allpackeges = () => {
  return (
    <>
      <Header />
      <Allpackegeshero />
      <Packeges/>
      <Footer />
    </>
  );
};

export default Allpackeges;
