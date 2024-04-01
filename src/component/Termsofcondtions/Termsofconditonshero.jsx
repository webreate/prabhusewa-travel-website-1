import React from "react";
import '../../style/Termsandconditions/Termsofconditionshero.css'
import { IoSearchSharp } from "react-icons/io5";
import { Fade, Bounce } from "react-awesome-reveal";
const Termsofconditionshero = () => {
  return (
    <>
      <div className="termsofconditions-container">
        <div className="Img-container">
          <img
            className="termsofconditions-image"
            src="https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=2048x2048&w=is&k=20&c=Pi-Ca0DtIojLjWVcy_-LLMk2ISsSf5kg5NJtAntxGOY="
            alt="people_crowd"
          />
        </div>
        <div className="terms-container">
          <div className="search-container">
            <div className="Input-container">
              <IoSearchSharp className="search-icon" />
              <input
                className="search-input"
                type="search"
                placeholder="What your want to search"
              />
            </div>
          </div>
          <div className="text-termsofconditions-container">
            <div className="text-termsofconditions">
              <Bounce>
                <h1>Terms And conditions</h1>
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

export default Termsofconditionshero;
