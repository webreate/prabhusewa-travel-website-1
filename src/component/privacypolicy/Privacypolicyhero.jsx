import React from "react";
import "../../style/privacypolicy/Privacypolicyhero.css"
import { IoSearchSharp } from "react-icons/io5";
import { Fade, Bounce } from "react-awesome-reveal";
const Privacypolicyhero = () => {
  return (
    <>
      <div className="Privacypolicy-container">
        <div className="Img-container">
          <img
            className="Privacypolicy-image"
            src="https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=2048x2048&w=is&k=20&c=Pi-Ca0DtIojLjWVcy_-LLMk2ISsSf5kg5NJtAntxGOY="
            alt="people_crowd"
          />
        </div>
        <div className="privacy-container">
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
          <div className="text-privacypolicy-container">
            <div className="text-privacypolicy">
              <Bounce>
                <h1>Privacy policy</h1>
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

export default Privacypolicyhero;
