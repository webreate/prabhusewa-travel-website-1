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

export default Allpackegeshero;
