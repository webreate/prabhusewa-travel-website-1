import React from "react";
import "../../style/gallery/Galleryhero.css"
import { IoSearchSharp } from "react-icons/io5";
import { Fade, Bounce } from "react-awesome-reveal";
const Galleryhero = () => {
  return (
    <>
      <div className="gallery-container">
        <div className="image-container">
          <img
            className="gallery-image"
            src="https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=2048x2048&w=is&k=20&c=Pi-Ca0DtIojLjWVcy_-LLMk2ISsSf5kg5NJtAntxGOY="
            alt="people_crowd"
          />
        </div>
        <div className="searchbox-container">
          <div className="search-container">
            <div className="Int-container">
              <IoSearchSharp className="search-icon" />
              <input
                className="search-input"
                type="search"
                placeholder="What your want to search"
              />
            </div>
          </div>
          <div className="text-gallery-container">
            <div className="text-gallery">
              <Bounce>
                <h1>Gallery</h1>
              </Bounce>

              <Fade>
                <p>
                Uncover the myriad wonders of Uttarakhand with us—where every peak tells a story, every valley whispers tranquility, and every corner holds an adventure. Join us in exploring the soul-stirring landscapes, vibrant cultures, and untamed beauty that make every visit an unforgettable journey. Your Uttarakhand odyssey begins here!
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Galleryhero;