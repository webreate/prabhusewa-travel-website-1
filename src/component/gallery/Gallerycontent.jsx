import React from "react";
import { useState, useEffect } from "react";
import "../../style/gallery/Gallerycontent.css";

const Gallerycontent = () => {
  const [gdata, setGdata] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setGdata(data);
      });
  });
  return (
    <>
      <div className="main-gallery">
        <div className="head-gallery">
          <h1 id="g-head">From Our Gallery</h1>
        </div>

        <div className="gallery-section">
          <div className="gallery-img">
            {gdata.map((res) => (
              <img className="g-img row-2" src={res.image} alt={res.title} />
            ))}
          </div>
        </div>
        <br />
        <div className="btn-section">
          <button id="g1-btn">Load More</button>
        </div>
      </div>
    </>
  );
};

export default Gallerycontent;
