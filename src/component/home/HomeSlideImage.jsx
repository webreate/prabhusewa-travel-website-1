import React from "react";
import "../../style/home/HomeSlideImage.css";
import Slider from "react-slick";
import Im1 from "../../Images/im1.png"
import Im2 from "../../Images/im2.png"
import Im3 from "../../Images/im3.png"
import Im4 from "../../Images/im4.png"
import Im5 from "../../Images/im5.png"
// import Im6 from "../../Images/im6.png"
import Im7 from "../../Images/im7 (2).png"
import Im8 from "../../Images/im8.png"
import Im9 from "../../Images/im9.png"
import Im10 from "../../Images/im10.png"
import Im18 from "../../Images/im18.png"
import Im11 from "../../Images/im11.png"
import Im12 from "../../Images/im12.png"
import Im13 from "../../Images/im13.png"
import Im14 from "../../Images/im14.png"
import Im15 from "../../Images/im15.png"
import Im16 from "../../Images/im16.png"
import Im17 from "../../Images/im17.png"
import Im19 from "../../Images/im19.png"
import Im20 from "../../Images/im20.png"

const HomeSlideImage = () => {
  const images = [
    {
      Image:Im1,
    },
    {
      Image:Im2,
    },
    {
      Image:Im3,
    },
    {
      Image:Im4,
    },
    {
      Image:Im5,
    },
    {
      Image:Im7,
    },
    {
      Image:Im8,
    },
    {
      Image:Im9,
    },
    {
      Image:Im10,
    },
    {
      Image:Im11,
    },
    {
      Image:Im12,
    },
    {
      Image:Im13,
    },
    {
      Image:Im14,
    },
    {
      Image:Im15,
    },
    {
      Image:Im16,
    },
    {
      Image:Im17,
    },
    {
      Image:Im18,
    },
    {
      Image:Im19,
    },
    {
      Image:Im20,
    },
  ]

  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    prevArrow: <></>,
    nextArrow: <></>,
    slidesToShow: 5,
    slidesToScroll: 1,
    //  responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };
  return (
    <div className="HomeImageslider-container ">
      <Slider {...settings} style={{width:"100%"}}>
        {images.map((res, index) => (
          <div key={index} className="homeslideimg">
            <img src={res?.Image} alt="img" />
          </div>
        ))}
      </Slider>
    </div>

  );
};

export default HomeSlideImage;
