import React from "react";
import "../../style/home/Homebestvalue.css";
import { Slide, Bounce } from "react-awesome-reveal";
const Homebestvalue = () => {
  return (
    <>
      <div className="bestValue-container">
        {/* <img
          className="bestvalue-image"
          src="https://images.unsplash.com/photo-1611659934318-06fd70ced53c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="bestvalue"
        /> */}

        {/* <div className="bestValue-text-container"> */}
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
                  Explore our exceptional range of services tailored to create a personalized and worry-free travel experience. Our travel website provides customized itineraries crafted to match individual preferences and styles, supported by round-the-clock concierge assistance for any trip-related needs. Immerse yourself in local cultures with unique experiences, indulge in luxury accommodations, and opt for eco-friendly travel options. Count on us for seamless transportation arrangements and assistance with travel insurance for added security.
                  </p>
                </div>
              </Slide>

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
                  Our travel website prioritizes your safety, providing detailed pre-trip safety guidelines and 24/7 emergency support. Stay informed through real-time updates on local conditions, and travel with confidence knowing that all our service providers meet stringent health and safety standards. We offer a comprehensive range of services to ensure a secure and hassle-free journey, backed by our dedicated support team. Experience peace of mind from start to finish.
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
                  Enjoy a seamless booking experience with our travel website, featuring robust safety measures. Easily select destinations, dates, and customize your experience while benefiting from flexible booking options. Rest assured with our secure payment gateway, utilizing advanced encryption technology to safeguard your personal information. Begin planning your journey today, confident in a safe and enjoyable travel experience from start to finish.
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
                  Our team ensures travelers enjoy a worry-free journey with personalized assistance available 24/7. Count on our dedicated team as your reliable travel companion, offering expert problem-solving and local insights. From trip planning to post-travel follow-up, we're committed to ensuring your satisfaction. Travel confidently, knowing our support care team is always ready to assist, allowing you to focus on creating unforgettable memories.
                  </p>
                </div>
              </Slide>
            </div>
          </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Homebestvalue;