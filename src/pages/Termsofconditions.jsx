import React from 'react'
import Header from '../component/layout/Header';
import Termsofconditionshero from '../component/Termsofcondtions/Termsofconditonshero'
import Termsofconditionscontent from '../component/Termsofcondtions/Termsofconditionscontent'
import Footer from "../component/layout/footer";

const Termsofconditions = () => {
  return (
    <>
      <Header />
      <Termsofconditionshero />
      <Termsofconditionscontent />
      <Footer />
    </>
  )
}

export default Termsofconditions
