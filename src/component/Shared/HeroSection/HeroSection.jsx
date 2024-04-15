import React from "react";
import { Fade, Bounce } from "react-awesome-reveal";
import "../../../style/HeroSection/HeroSection.css";
const HeroSection = ({ heading, paragraph }) => {
  // console.log(background_image);
  return (
    <div className="heroSectionDynamicParent">
      <div className="heroSectionDynamictext">
        <Bounce>
          <h2 className="data-heading">{heading}</h2>
        </Bounce>
        <Fade>
          <p className="data-para">{paragraph}</p>
        </Fade>
      </div>
    </div>
  );
};

export default HeroSection;
