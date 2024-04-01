import React from "react";
import "../../style/aboutus/Hero.css"
import { IoSearchSharp } from "react-icons/io5";
import { Fade, Bounce } from "react-awesome-reveal";
const Aboutus = () => {
  return (
    <>
      <div className="Aboutus-container">
        <div className="Image-container">
          <img
            className="Aboutus-image"
            src="https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=2048x2048&w=is&k=20&c=Pi-Ca0DtIojLjWVcy_-LLMk2ISsSf5kg5NJtAntxGOY="
            alt="people_crowd"
          />
        </div>
        <div className="overtext-container">
          <div className="serch-container">
            <div className="Input-container">
              <IoSearchSharp className="serch-icon" />
              <input
                className="serch-input"
                type="search"
                placeholder="What your want to search"
              />
            </div>
          </div>
          <div className="text-aboutus-container">
            <div className="text-aboutus">
              <Bounce>
                <h1>About Us</h1>
              </Bounce>

              <Fade>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  dolorum vel facilis non at, accusantium, necessitatibus
                  doloribus perferendis similique recusandae earum consectetur
                  est enim temporibus.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
