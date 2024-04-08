import React from "react";
import "../../../style/HeroSection/HeroSection.css";
const HeroSection = ({ heading, paragraph, background_image }) => {
  // console.log(background_image);
  return (
    <div
      className="section"
      style={{ backgroundImage: `url(${background_image})` }}
    >
      <h2 className="data-heading">{heading}</h2>
      <p className="data-para">{paragraph}</p>
    </div>
  );
};

export default HeroSection;
