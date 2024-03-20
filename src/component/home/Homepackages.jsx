import React from "react";
import "../../style/home/Homepackages.css";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
const Homepackages = () => {
  const Packagesdeta = [
    {
      Image:
        "https://media.istockphoto.com/id/539105384/photo/kedarnath-in-india.webp?b=1&s=170667a&w=0&k=20&c=LA59WsD06xbcyesdMwYfr8Ou6iaJehgVARU6IIdqdGM=",
      Price: "12000",
      Name: "Shree Kedarnath",
      days: "10 days",
      paragraf:
        " Around 275 kms has to be covered on the 5th day and the buswill depart from Uttarkashi at 6 am.",
      rating: "5",
      animation_direction: "left",
    },
    {
      Image:
        "https://media.istockphoto.com/id/539105384/photo/kedarnath-in-india.webp?b=1&s=170667a&w=0&k=20&c=LA59WsD06xbcyesdMwYfr8Ou6iaJehgVARU6IIdqdGM=",
      Price: "12000",
      Name: "Shree Kedarnath",
      days: "10 days",
      paragraf:
        " Around 275 kms has to be covered on the 5th day and the buswill depart from Uttarkashi at 6 am.",
      rating: "5",
      animation_direction: "left",
    },
    {
      Image:
        "https://media.istockphoto.com/id/539105384/photo/kedarnath-in-india.webp?b=1&s=170667a&w=0&k=20&c=LA59WsD06xbcyesdMwYfr8Ou6iaJehgVARU6IIdqdGM=",
      Price: "12000",
      Name: "Shree Kedarnath",
      days: "10 days",
      paragraf:
        " Around 275 kms has to be covered on the 5th day and the buswill depart from Uttarkashi at 6 am.",
      rating: "5",
      animation_direction: "left",
    },
    {
      Image:
        "https://media.istockphoto.com/id/539105384/photo/kedarnath-in-india.webp?b=1&s=170667a&w=0&k=20&c=LA59WsD06xbcyesdMwYfr8Ou6iaJehgVARU6IIdqdGM=",
      Price: "12000",
      Name: "Shree Kedarnath",
      days: "10 days",
      paragraf:
        " Around 275 kms has to be covered on the 5th day and the buswill depart from Uttarkashi at 6 am.",
      rating: "5",
      animation_direction: "left",
    },
    {
      Image:
        "https://media.istockphoto.com/id/539105384/photo/kedarnath-in-india.webp?b=1&s=170667a&w=0&k=20&c=LA59WsD06xbcyesdMwYfr8Ou6iaJehgVARU6IIdqdGM=",
      Price: "12000",
      Name: "Shree Kedarnath",
      days: "10 days",
      paragraf:
        " Around 275 kms has to be covered on the 5th day and the buswill depart from Uttarkashi at 6 am.",
      rating: "5",
      animation_direction: "right",
    },
    {
      Image:
        "https://media.istockphoto.com/id/539105384/photo/kedarnath-in-india.webp?b=1&s=170667a&w=0&k=20&c=LA59WsD06xbcyesdMwYfr8Ou6iaJehgVARU6IIdqdGM=",
      Price: "12000",
      Name: "Shree Kedarnath",
      days: "10 days",
      paragraf:
        " Around 275 kms has to be covered on the 5th day and the buswill depart from Uttarkashi at 6 am.",
      rating: "5",
      animation_direction: "right",
    },
    {
      Image:
        "https://media.istockphoto.com/id/539105384/photo/kedarnath-in-india.webp?b=1&s=170667a&w=0&k=20&c=LA59WsD06xbcyesdMwYfr8Ou6iaJehgVARU6IIdqdGM=",
      Price: "12000",
      Name: "Shree Kedarnath",
      days: "10 days",
      paragraf:
        " Around 275 kms has to be covered on the 5th day and the buswill depart from Uttarkashi at 6 am.",
      rating: "5",
      animation_direction: "right",
    },
    {
      Image:
        "https://media.istockphoto.com/id/539105384/photo/kedarnath-in-india.webp?b=1&s=170667a&w=0&k=20&c=LA59WsD06xbcyesdMwYfr8Ou6iaJehgVARU6IIdqdGM=",
      Price: "12000",
      Name: "Shree Kedarnath",
      days: "10 days",
      paragraf:
        " Around 275 kms has to be covered on the 5th day and the buswill depart from Uttarkashi at 6 am.",
      rating: "5",
      animation_direction: "right",
    },
  ];

  return (
    <>
      <div className="home-packages-container">
        <div className="text-container">
          <h1>Chardham Tour Packages</h1>
          <p>
            We are one of the best tour companies in India where we only think
            for your comfort. Since we are there in the market for a longer time
            we no need to prove our service. We have many different types of
          </p>
        </div>
        <div className="main-container">
          {Packagesdeta.map((res, index) => {
            return (
              <>
                <Slide direction={res.animation_direction}>
                  <div className="hpac-card" key={index}>
                    <div className="card-image">
                      <img className="image" src={res.Image} alt="temple" />
                      <div className="over-text-icon">
                        <div className="over-box">
                          <div className="price-box">
                            <p className="price">Price-{res.Price}/-</p>
                          </div>
                          <div className="round-box">
                            <FaRegHeart className="icon-heart" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer-text">
                      <div className="header-text">
                        <p>{res.Name}</p>
                        <p>{res.days}</p>
                      </div>
                      <div className="para-box">
                        <p>{res.paragraf}</p>
                      </div>
                      <div className="tar-btn">
                        <div className="star">
                          <p>Rating {res.rating}</p>
                          <FaStar style={{ color: "yellow" }} />
                        </div>
                        <button className="btn">Book Now</button>
                      </div>
                    </div>
                  </div>
                </Slide>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Homepackages;
