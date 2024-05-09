import React, { useState, useEffect } from 'react'
import "../../style/aboutus/About.css"
import { Slide } from "react-awesome-reveal";
import Blog from "../../Images/blog.jpeg"


const About = () => {
  const [isMobileView, setIsMobileView] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize)
  }, []);

  return (
    <>
      <div className="about-container">
        {!isMobileView ? (
          <>
            <div className="about-img">
              <Slide>
                <img className='img' src={Blog} alt='about' />
              </Slide>
            </div>
            <div className="para">
              <Slide direction='right'>
                <p>Welcome to PRABHU SEWA TOUR & TRAVELS, your premier partner for exploring the enchanting beauty and rich culture of Uttarakhand, India's Devbhoomi (Land of the Gods).
                  Passionate about showcasing the diverse landscapes, spiritual sites, and adventurous experiences that make Uttarakhand a must-visit destination for travelers from around the world, we curate bespoke journeys tailored to your every desire.
                  With years of experience and a deep-rooted connection to the region, our team of travel experts is dedicated to providing unparalleled service, personalized attention, and authentic experiences that leave a lasting impression.
                  Discover the magic of Uttarakhand with us and embark on a journey that will captivate your senses, nourish your soul, and create memories to last a lifetime. Let us be your trusted companion as you explore the unparalleled beauty and spiritual essence of Uttarakhand.</p>
              </Slide>
            </div>
          </>
        ) : (
          <>
            <div className="para">
              <Slide direction='right'>
                <p>Welcome to PRABHU SEWA TOUR & TRAVELS, your premier partner for exploring the enchanting beauty and rich culture of Uttarakhand, India's Devbhoomi (Land of the Gods).
                  Passionate about showcasing the diverse landscapes, spiritual sites, and adventurous experiences that make Uttarakhand a must-visit destination for travelers from around the world, we curate bespoke journeys tailored to your every desire.
                  With years of experience and a deep-rooted connection to the region, our team of travel experts is dedicated to providing unparalleled service, personalized attention, and authentic experiences that leave a lasting impression.
                  Discover the magic of Uttarakhand with us and embark on a journey that will captivate your senses, nourish your soul, and create memories to last a lifetime. Let us be your trusted companion as you explore the unparalleled beauty and spiritual essence of Uttarakhand.</p>
              </Slide>
            </div>
            <div className="about-img">
              <Slide>
                <img className='img' src='https://media.istockphoto.com/id/1069264514/photo/spectacular-view-of-the-lakshman-temple-bathed-by-the-sacred-river-ganges-at-sunset.jpg?s=2048x2048&w=is&k=20&c=poQSlrVegA6IRKTEQNl2t-1Oor9y8CIM7qN1ERhw_50=' alt='about' />
              </Slide>
            </div>
          </>
        )};

      </div>
    </>
  )
}

export default About;
