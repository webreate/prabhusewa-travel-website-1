import React from "react";
import "../../style/home/Trip.css";
import Slider from "react-slick";
const Trip = () => {
  const Trips = [
    {
      Name: "Shree Kedarnath",
      Paragraf:
        "Around 275 kms has to be covered on the 5th day and the bus will depart from Uttarkashi at 6 am. Breakfast will be at the GMVN tourist rest house at Chinyalisaur. You will arrive at Chamba/NewTehri at around 12. You can explore New Tehri and visit the Tehri Dam. You will leave New Tehri at around 1 pm. Lunch halt will be at the GMVN tourist rest house at Srinagar. The bus will reach Guptkashi at around5.30 pm. Check into your accommodation and rest.",
      Image:
        "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VkYXJuYXRofGVufDB8fDB8fHww",
    },
    {
      Name: "Shree Kedarnath",
      Paragraf:
        "Around 275 kms has to be covered on the 5th day and the bus will depart from Uttarkashi at 6 am. Breakfast will be at the GMVN tourist rest house at Chinyalisaur. You will arrive at Chamba/NewTehri at around 12. You can explore New Tehri and visit the Tehri Dam. You will leave New Tehri at around 1 pm. Lunch halt will be at the GMVN tourist rest house at Srinagar. The bus will reach Guptkashi at around5.30 pm. Check into your accommodation and rest.",
      Image:
        "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VkYXJuYXRofGVufDB8fDB8fHww",
    },
    {
      Name: "Shree Kedarnath",
      Paragraf:
        "Around 275 kms has to be covered on the 5th day and the bus will depart from Uttarkashi at 6 am. Breakfast will be at the GMVN tourist rest house at Chinyalisaur. You will arrive at Chamba/NewTehri at around 12. You can explore New Tehri and visit the Tehri Dam. You will leave New Tehri at around 1 pm. Lunch halt will be at the GMVN tourist rest house at Srinagar. The bus will reach Guptkashi at around5.30 pm. Check into your accommodation and rest.",
      Image:
        "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VkYXJuYXRofGVufDB8fDB8fHww",
    },
    {
      Name: "Shree Kedarnath",
      Paragraf:
        "Around 275 kms has to be covered on the 5th day and the bus will depart from Uttarkashi at 6 am. Breakfast will be at the GMVN tourist rest house at Chinyalisaur. You will arrive at Chamba/NewTehri at around 12. You can explore New Tehri and visit the Tehri Dam. You will leave New Tehri at around 1 pm. Lunch halt will be at the GMVN tourist rest house at Srinagar. The bus will reach Guptkashi at around5.30 pm. Check into your accommodation and rest.",
      Image:
        "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VkYXJuYXRofGVufDB8fDB8fHww",
    },
    {
      Name: "Shree Kedarnath",
      Paragraf:
        "Around 275 kms has to be covered on the 5th day and the bus will depart from Uttarkashi at 6 am. Breakfast will be at the GMVN tourist rest house at Chinyalisaur. You will arrive at Chamba/NewTehri at around 12. You can explore New Tehri and visit the Tehri Dam. You will leave New Tehri at around 1 pm. Lunch halt will be at the GMVN tourist rest house at Srinagar. The bus will reach Guptkashi at around5.30 pm. Check into your accommodation and rest.",
      Image:
        "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VkYXJuYXRofGVufDB8fDB8fHww",
    },
    {
      Name: "Shree Kedarnath",
      Paragraf:
        "Around 275 kms has to be covered on the 5th day and the bus will depart from Uttarkashi at 6 am. Breakfast will be at the GMVN tourist rest house at Chinyalisaur. You will arrive at Chamba/NewTehri at around 12. You can explore New Tehri and visit the Tehri Dam. You will leave New Tehri at around 1 pm. Lunch halt will be at the GMVN tourist rest house at Srinagar. The bus will reach Guptkashi at around5.30 pm. Check into your accommodation and rest.",
      Image:
        "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VkYXJuYXRofGVufDB8fDB8fHww",
    },
    {
      Name: "Shree Kedarnath",
      Paragraf:
        "Around 275 kms has to be covered on the 5th day and the bus will depart from Uttarkashi at 6 am. Breakfast will be at the GMVN tourist rest house at Chinyalisaur. You will arrive at Chamba/NewTehri at around 12. You can explore New Tehri and visit the Tehri Dam. You will leave New Tehri at around 1 pm. Lunch halt will be at the GMVN tourist rest house at Srinagar. The bus will reach Guptkashi at around5.30 pm. Check into your accommodation and rest.",
      Image:
        "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VkYXJuYXRofGVufDB8fDB8fHww",
    },
    {
      Name: "Shree Kedarnath",
      Paragraf:
        "Around 275 kms has to be covered on the 5th day and the bus will depart from Uttarkashi at 6 am. Breakfast will be at the GMVN tourist rest house at Chinyalisaur. You will arrive at Chamba/NewTehri at around 12. You can explore New Tehri and visit the Tehri Dam. You will leave New Tehri at around 1 pm. Lunch halt will be at the GMVN tourist rest house at Srinagar. The bus will reach Guptkashi at around5.30 pm. Check into your accommodation and rest.",
      Image:
        "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VkYXJuYXRofGVufDB8fDB8fHww",
    },
    {
      Name: "Shree Kedarnath",
      Paragraf:
        "Around 275 kms has to be covered on the 5th day and the bus will depart from Uttarkashi at 6 am. Breakfast will be at the GMVN tourist rest house at Chinyalisaur. You will arrive at Chamba/NewTehri at around 12. You can explore New Tehri and visit the Tehri Dam. You will leave New Tehri at around 1 pm. Lunch halt will be at the GMVN tourist rest house at Srinagar. The bus will reach Guptkashi at around5.30 pm. Check into your accommodation and rest.",
      Image:
        "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VkYXJuYXRofGVufDB8fDB8fHww",
    },
    {
      Name: "Shree Kedarnath",
      Paragraf:
        "Around 275 kms has to be covered on the 5th day and the bus will depart from Uttarkashi at 6 am. Breakfast will be at the GMVN tourist rest house at Chinyalisaur. You will arrive at Chamba/NewTehri at around 12. You can explore New Tehri and visit the Tehri Dam. You will leave New Tehri at around 1 pm. Lunch halt will be at the GMVN tourist rest house at Srinagar. The bus will reach Guptkashi at around5.30 pm. Check into your accommodation and rest.",
      Image:
        "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VkYXJuYXRofGVufDB8fDB8fHww",
    },
    {
      Name: "Shree Kedarnath",
      Paragraf:
        "Around 275 kms has to be covered on the 5th day and the bus will depart from Uttarkashi at 6 am. Breakfast will be at the GMVN tourist rest house at Chinyalisaur. You will arrive at Chamba/NewTehri at around 12. You can explore New Tehri and visit the Tehri Dam. You will leave New Tehri at around 1 pm. Lunch halt will be at the GMVN tourist rest house at Srinagar. The bus will reach Guptkashi at around5.30 pm. Check into your accommodation and rest.",
      Image:
        "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VkYXJuYXRofGVufDB8fDB8fHww",
    },
    {
      Name: "Shree Kedarnath",
      Paragraf:
        "Around 275 kms has to be covered on the 5th day and the bus will depart from Uttarkashi at 6 am. Breakfast will be at the GMVN tourist rest house at Chinyalisaur. You will arrive at Chamba/NewTehri at around 12. You can explore New Tehri and visit the Tehri Dam. You will leave New Tehri at around 1 pm. Lunch halt will be at the GMVN tourist rest house at Srinagar. The bus will reach Guptkashi at around5.30 pm. Check into your accommodation and rest.",
      Image:
        "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VkYXJuYXRofGVufDB8fDB8fHww",
    },
    {
      Name: "Shree Kedarnath",
      Paragraf:
        "Around 275 kms has to be covered on the 5th day and the bus will depart from Uttarkashi at 6 am. Breakfast will be at the GMVN tourist rest house at Chinyalisaur. You will arrive at Chamba/NewTehri at around 12. You can explore New Tehri and visit the Tehri Dam. You will leave New Tehri at around 1 pm. Lunch halt will be at the GMVN tourist rest house at Srinagar. The bus will reach Guptkashi at around5.30 pm. Check into your accommodation and rest.",
      Image:
        "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VkYXJuYXRofGVufDB8fDB8fHww",
    },

  ];

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
            {Trips.map((TripData, index) => {
              const { Name, Paragraf, Image } = TripData;
              return (
                <Slider {...settings} key={index}>
                  <>
                    <div className="trip-card" >
                      <div className="sub-card">
                        <div className="card-text-card">
                          <a href="/">{Name}</a>
                          <p>{Paragraf}</p>
                          <div className="image-trip">
                            <img src={Image} alt="trip" />
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
