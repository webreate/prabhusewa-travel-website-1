import React from 'react'
import Header from '../component/layout/Header'
import Galleryhero from '../component/gallery/Galleryhero'
import Gallerycontent from '../component/gallery/Gallerycontent'
import Footer from "../component/layout/footer";

const Gallery = () => {
  return (
    <>
      <Header />
      <Galleryhero />
      <Gallerycontent />
      <Footer />
    </>
  )
}

export default Gallery
