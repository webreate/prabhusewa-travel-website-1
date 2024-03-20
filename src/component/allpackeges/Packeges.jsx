import React from "react";
import "../../style/Allpackeges/Packeges.css";
import { Slide } from "react-awesome-reveal";
const Packeges = () => {
  const PakageDeta = [
    {
      id: 1,
      Image:
        "https://images.unsplash.com/photo-1522010675502-c7b3888985f6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      PkgName: "Serene Uttarakhand Sojourn",
      Day: "2 Day",
      Paragraf:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, ex!",
      delay: 1,
    },
    {
      id: 2,
      Image:
        "https://plus.unsplash.com/premium_photo-1663088722056-f399c902c6ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      PkgName: "Himalayan Heights Expedition",
      Day: "14 Day",
      Paragraf:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, ex!",
    },
    {
      id: 3,
      Image:
        "https://images.unsplash.com/photo-1522010675502-c7b3888985f6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      PkgName: "Uttarakhand Unveiled Escapade",
      Day: "3 Day",
      Paragraf:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, ex!",
    },
    {
      id: 4,
      Image:
        "https://images.unsplash.com/photo-1522010675502-c7b3888985f6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      PkgName: "Uttarakhand Utopia Tour",
      Day: "10 Day",
      Paragraf:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, ex!",
    },
    {
      id: 5,
      Image:
        "https://images.unsplash.com/photo-1522010675502-c7b3888985f6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      PkgName: "Himalayan Heights Expedition",
      Day: "6 Day",
      Paragraf:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, ex!",
    },
    {
      id: 6,
      Image:
        "https://images.unsplash.com/photo-1522010675502-c7b3888985f6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      PkgName: "Himalayan Heights Expedition",
      Day: "16 Day",
      Paragraf:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, ex!",
    },
  ];

  return (
    <>
      <div className="packeges-container">
        <img
          className="bg-packeges-image"
          src="https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="temple"
        />
        <div className="packeges-container-main">
          <div className="package-text-box">
            <h1>List of all the package for tour</h1>

            <div className="package-des">
              <div className="round"></div>
              <hr className="hr" />
              <div className="round"></div>
            </div>

            <div className="package-des1">
              <div className="round1"></div>
              <hr className="hr1" />
              <div className="round1"></div>
            </div>
          </div>

          <div className="Packages-card-container">
            {PakageDeta.map((res) => {
              return (
                <>
                  <Slide key={res.id}>
                    <div className="packages-card" key={res.id}>
                      <div className="images-box">
                        <img
                          className="image-round"
                          src={res.Image}
                          alt="images"
                        />
                      </div>
                      <div className="text-div">
                        <h1 className="text-1">{res.PkgName}</h1>
                      </div>
                      <h1 className="day">{res.Day}</h1>
                      <p className="packages-para">{res.Paragraf}</p>
                      <div className="packages-button">
                        <button className="button-btn">View Details</button>
                      </div>
                    </div>
                  </Slide>
                </>
              );
            })}
          </div>
          <div className="more-button">
            <div className="sub-button">
              <Slide direction="right">
                <button className="button-btn">View More</button>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packeges;
