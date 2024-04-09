import React, { useEffect } from "react";
import "../../style/home/Trip.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux'
import { fetchmaxvisit } from "../../store/features/Maxvisitapi";
const Trip = () => {
  const dispatch = useDispatch()
  const selectedMaxvisit = useSelector((state) => state.maxvisit.maxproduct);
  const selectMaxstatus = useSelector((state) => state.maxvisit.status);
  // console.log(selectedMaxvisit)


  useEffect(() => {
    dispatch(fetchmaxvisit())
  }, [dispatch])


  if (selectMaxstatus === "loading") {
    return <h1>Lodding....</h1>
  }
  if (selectMaxstatus === "failed") {
    alert("something want worng !")
  }


  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <></>, // Hides the previous arrow
    nextArrow: <></>, // Hides the next arrow
    slidesToShow: 0, // Set to 1 to ensure only one column
  }
  return (
    <>
      <div className="trip-container">
        <div className="trip-text-container">
          <div className="tript-text-box">
            <h1>We Create the Trip You Love</h1>
            <p>
              We are one of the best tour companies in India where we only think
              for your comfort. Since we are there in the market for a longer
              time we no need to prove our service. We have many different types
              of
            </p>
          </div>
        </div>
        <div className="trip-card-container">
          <div className="trip-slide-cards">
            {selectedMaxvisit?.map((TripData, index) => {
              // const { Name, Paragraf, Image } = TripData;
              return (
                <Slider {...settings} key={index}>
                  <>
                    <div className="trip-card" >
                      <div className="sub-card">
                        <div className="card-text-card">
                          <a href="/">{TripData?.packageName}</a>
                          <p>{TripData?.shortDescription}</p>
                          <div className="image-trip">
                            <img src={TripData?.gallery[0].galleryImage} alt="trip" />
                          </div>
                          <div className="trip-button">
                            <button>View Detail</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                </Slider>

              )

            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trip;
