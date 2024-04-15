import React, { useEffect } from "react";
import "../../style/home/Trip.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux'
import { fetchmaxvisit } from "../../store/features/Maxvisitapi";
import Lodder from "../lodder/Lodder";
const Trip = () => {
  const dispatch = useDispatch()
  const selectedMaxvisit = useSelector((state) => state.maxvisit.maxproduct);
  const selectMaxstatus = useSelector((state) => state.maxvisit.status);
  // console.log(selectedMaxvisit)


  useEffect(() => {
    dispatch(fetchmaxvisit())
  }, [dispatch])


  if (selectMaxstatus === "loading") {
    return <Lodder />
  }
  if (selectMaxstatus === "failed") {
    alert("something want worng !")
  }


// Slider settings
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000, // Adjust autoplay speed in milliseconds
  speed: 2000,
  cssEase: "linear",
  arrows: false, // Hide arrow navigation
  draggable: false, // Disable dragging the slider with mouse/touch
  pauseOnHover: true, // Pause autoplay on hover
  pauseOnFocus: false // Pause autoplay on focus
};

  return (
    <>
     
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
          {/* <div className="trip-slide-cards"> */}
          <Slider {...settings}>

              {selectedMaxvisit?.map((TripData, index) => (
                <div className="trip-card " >
                  <div className="sub-card">
                    <div className="card-text-card">
                      <a href="/">{TripData?.packageName}</a>
                      <div className="para-trip">
                        <p>{TripData?.shortDescription}</p>
                      </div>
                      <div className="image-trip">
                        <img src={TripData?.gallery[0].galleryImage} alt="trip" />
                      </div>
                      <div className="trip-button">
                        <button>View Detail</button>
                      </div>
                    </div>
                  </div>
                </div>

              ))}
            </Slider>
          {/* </div> */}


        </div>
    
    </>
  );
};

export default Trip;
