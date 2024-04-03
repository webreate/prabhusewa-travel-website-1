import React from "react";
import "../../style/home/HomeHero.css";
// import { IoSearchSharp } from "react-icons/io5";
import { Fade, Bounce } from "react-awesome-reveal";
const HomeHero = () => {
  return (
    <>
      <div className="homehero-Container">
        <img
          className="Homehro-image"
          src="https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VkYXJuYXRofGVufDB8fDB8fHww"
          alt="kedarnath"
        />

        <div className="Homehero-text-container">
          {/* <div className="homehero-ser">
            <div className="homehero-input-container">
              <IoSearchSharp className="hh-ser-icon" />
              <input
                className="herohome-ser-inp"
                type="search"
                placeholder="What your want to search"
              />
            </div>
          </div> */}

          <div className="homehero-text-c">
            <div className="text-h">
              <Fade>
                <p className="homehero-first-p">Check offer on pre Booking</p>
              </Fade>

              <Bounce>
                <h1 className="text-h1">The Yatra To MahaDev</h1>
              </Bounce>

              <Fade>
                <p className="homehero-last-p">
                  ChardhamYtra 2024 Tour Packages
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
