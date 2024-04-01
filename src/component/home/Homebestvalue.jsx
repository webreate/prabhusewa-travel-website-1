import React from "react";
import "../../style/home/Homebestvalue.css";
import { Slide, Bounce } from "react-awesome-reveal";
const Homebestvalue = () => {
  return (
    <>
      <div className="bestValue-container">
        <img
          className="bestvalue-image"
          src="https://images.unsplash.com/photo-1611659934318-06fd70ced53c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="bestvalue"
        />

        <div className="bestValue-text-container">
          <div className="text-main">
            <Bounce>
              <h1 className="text-h1-bv">Why We have Best Value</h1>
            </Bounce>

            <div className="bestvalue-card">
              <Slide>
                <div className="card">
                  <div className="image-box">
                    <img
                      className="bv-logo"
                      src="https://cdn-icons-png.flaticon.com/128/10620/10620387.png"
                      alt="logo"
                    />
                  </div>
                  <p className="card-heading">Amazing Service</p>
                  <p className="para-card">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </p>
                </div>
              </Slide>
//ss
              <Slide>
                <div className="card">
                  <div className="image-box">
                    <img
                      className="bv-logo"
                      src="https://cdn-icons-png.flaticon.com/128/2345/2345470.png"
                      alt="logo"
                    />
                  </div>
                  <p className="card-heading">Safety</p>
                  <p className="para-card">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </p>
                </div>
              </Slide>

              <Slide direction="right">
                <div className="card">
                  <div className="image-box">
                    <img
                      className="bv-logo"
                      src="https://cdn-icons-png.flaticon.com/128/1314/1314529.png"
                      alt="logo"
                    />
                  </div>
                  <p className="card-heading">Book Your Trip</p>
                  <p className="para-card">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </p>
                </div>
              </Slide>

              <Slide direction="right">
                <div className="card">
                  <div className="image-box">
                    <img
                      className="bv-logo"
                      src="https://cdn-icons-png.flaticon.com/128/4961/4961759.png"
                      alt="logo"
                    />
                  </div>
                  <p className="card-heading">Nice Support Care</p>
                  <p className="para-card">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </p>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homebestvalue;
