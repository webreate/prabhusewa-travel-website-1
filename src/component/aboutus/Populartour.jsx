  import React, { useEffect } from 'react';
  import "../../style/aboutus/Populartour.css";
  import { useDispatch, useSelector } from 'react-redux';
  import { fetchmaxvisit } from "../../store/features/Maxvisitapi";
  import Lodder from '../lodder/Lodder';
  import Slider from "react-slick";

  const Populartour = () => {
    const dispatch = useDispatch();
    const selectedMaxvisit = useSelector((state) => state.maxvisit.maxproduct);
    const selectMaxstatus = useSelector((state) => state.maxvisit.status);

    useEffect(() => {
      dispatch(fetchmaxvisit());
    }, [dispatch]);

    if (selectMaxstatus === "loading") {
      return <Lodder />;
    }
    
    if (selectMaxstatus === "failed") {
      alert("Something went wrong!");
    }

    // Slider settings
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, // Adjust autoplay speed in milliseconds
      speed: 2000,
      cssEase: "linear",
      arrows: false, // Hide arrow navigation
      draggable: false, // Disable dragging the slider with mouse/touch
      pauseOnHover: false, // Pause autoplay on hover
      pauseOnFocus: false ,// Pause autoplay on focus
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.9,
            slidesToScroll: 1,
          }
        }
      ]
    };

    return (
      <div className="tour-main">
        <div className="tour-head">
          <h1 id='head'>Popular Tours</h1>
          <h2 id='head2'>View All</h2>
        </div>
        <div className="img-section">
          <Slider {...settings}>
            {selectedMaxvisit?.map((res) => (
              <div className="img-div" key={res.id}>
                <img className='tour-img' src={res?.gallery[0]&&res?.gallery[0].galleryImage} alt='Tour' />
                <div className='text-box'>
                  <h3 className='img-head'>{res?.packageName.slice(0,10)}</h3>
                  <p className='img-p'>{res?.shortDescription.slice(0, 150)}</p>
                </div>
                <div className='btn-box'>
                  <button id='img-btn'>Book Now</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  };

  export default Populartour;
