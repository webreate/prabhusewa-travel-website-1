import React from 'react'
import Privacypolicyhero from '../component/privacypolicy/Privacypolicyhero'
import Header from '../component/layout/Header';
import Privacycontent from '../component/privacypolicy/Privacycontent'
 import Footer from "../component/layout/footer";

const Privacypolicy = () => {
  return (
    <>
    <Header />
      <Privacypolicyhero />
      <Privacycontent />
      <Footer/>
    </>
  )
}

export default Privacypolicy
