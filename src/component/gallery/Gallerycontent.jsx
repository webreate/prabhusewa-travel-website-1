import React from "react";
import { useState, useEffect } from "react";
import "../../style/gallery/Gallerycontent.css";

const Gallerycontent = () => {
  const [gdata, setGdata] = useState([]);
  const [showCount, setShowCount] = useState(8);
  useEffect(() => {
    fetch("https://parbhusewa-travel.onrender.com/package/getpackagegallery")
      .then((res) => res.json())
      .then((data) => {
        setGdata(data.gallery);
        console.log(data);
      });
  }, []);

  const handleLoadMore = () => {
    setShowCount(8);
    setTimeout(() => setShowCount((prevCount) => prevCount + 8), 0);
  };
  return (
    <>
      <div className="main-gallery">
        <div className="head-gallery">
          <h1 id="g-head">From Our Gallery</h1>
        </div>

        <div className="gallery-section">
          {gdata.slice(0, showCount).map((res, index) => (
            <div key={index} className="gallery-img">
              <img
                className="g-img row-2"
                src={res.galleryImage}
                alt={res.title}
              />{" "}
            </div>
          ))}
        </div>
        <br />
        <div className="btn-section">
          <button id="g1-btn" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default Gallerycontent;
