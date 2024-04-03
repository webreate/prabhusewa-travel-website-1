import React from "react";
import "../../style/Allpackeges/Allpackegeshero.css";
import { IoSearchSharp } from "react-icons/io5";
import { Fade, Bounce } from "react-awesome-reveal";
const Allpackegeshero = () => {
  return (
    <>
      <div className="Allpackeges-container">
        <div className="image-container">
          <img
            className="allpackeges-image"
            src="https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=2048x2048&w=is&k=20&c=Pi-Ca0DtIojLjWVcy_-LLMk2ISsSf5kg5NJtAntxGOY="
            alt="people_crowd"
          />
        </div>
        <div className="over-text-container">
          <div className="ser-container">
            <div className="input-container">
              <IoSearchSharp className="ser-icon" />
              <input
                className="ser-inp"
                type="search"
                placeholder="What your want to search"
              />
            </div>
          </div>
          <div className="text-packeges-container">
            <div className="text-packges">
              <Bounce>
                <h1>Packages</h1>
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

export default Allpackegeshero;
