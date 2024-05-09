import React, { useEffect, useState } from "react";
import "../../style/home/Hometestimonials.css";
import { IoIosStar } from "react-icons/io";

const Hometestimonials = () => {
  const [changeitem, setChangeitem] = useState(0);


 
  // const selectMaxstatus = useSelector((state) => state.product.status);



  const Testimonials = [
    {
      Image:
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
      Name: " Anjali Kalra",
      Member: "Member of the PrabhuSewa",
      Testimonials:
        "My spiritual journey in Rishikesh was elevated by Prabhu Seva's guidance. Their expertise in arranging Ganga Aarti experiences and yoga retreats made it an unforgettable pilgrimage.",
      star: 4,
    },
    {
      Image:
        "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VkYXJuYXRofGVufDB8fDB8fHww",
      Name: " Amit Dagar ",
      Member: "Member of the  PrabhuSewa",
      Testimonials:
        "Highly recommend for their seamless arrangements in Haridwar. Their assistance during the Ganga Aarti ceremony ensured a deeply spiritual experience. ",
      star: 5,
    },
    {
      Image:
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
      Name: "Ravi Gupta",
      Member: "Member of the PrabhuSewa",
      Testimonials:
        " Thanks to Prabhu Seva, my Kedarnath pilgrimage was smooth and hassle-free. Their support with accommodation and transport allowed me to focus on the divine journey.",
      star: 3,
    },
    {
      Image:
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
      Name: "Deepak Pal",
      Member: "Member of the PrabhuSewa",
      Testimonials:
      "An enriching experience in Badrinath, all thanks to Prabhu Sewa. Their local guides provided insights into the temple's significance, enhancing the spiritual journey.",
      star: 5,
    },
    {
      Image:
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
      Name: " Neha Garg",
      Member: "Member of the PrabhuSewa",
      Testimonials:
      "Gratitude to Prabhu Seva for organizing a memorable trip to Yamunotri. Their assistance with darshan and exploring nearby attractions made the pilgrimage truly special.",
      star: 4,
    },
    {
      Image:
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
      Name: "Rahul Mehta ",
      Member: "Member of the PrabhuSewa",
      Testimonials:
      "My pilgrimage to Gangotri was made seamless. Their support with accommodation and transportation ensured a fulfilling spiritual experience.",
      star: 5,
    },
    {
      Image:
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
      Name: "Priya Shastri ",
      Member: "Member of the PrabhuSewa",
      Testimonials:
      "Thank you for arranging a peaceful retreat in Uttarkashi. Their guidance in exploring local temples and spiritual sites was invaluable.",
      star: 4,
    },
    {
      Image:
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
      Name: "Ananya Bhatt  ",
      Member: "Member of the PrabhuSewa",
      Testimonials:
      "Exceptional service from Prabhu Seva during my visit to Joshimath. Their assistance with accommodation and exploring nearby attractions made the trip memorable.",
      star: 5,
    },
    {
      Image:
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
      Name: "Sunita Rai ",
      Member: "Member of the PrabhuSewa",
      Testimonials:
      "Effortless journey to Hemkund Sahib, thanks to the team. Their support with trekking arrangements and accommodation made the pilgrimage spiritually fulfilling.",
      star: 4,
    },
    {
      Image:
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
      Name: "Vivek Sinha ",
      Member: "Member of the PrabhuSewa",
      Testimonials:
      "Grateful for assistance during my Uttarkashi pilgrimage. Their local insights and logistical support ensured a smooth and meaningful journey.",
      star: 4,
    },
  ];

 

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setChangeitem((prevItem) => (prevItem + 1) % Testimonials.length);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [changeitem, Testimonials.length]);

  return (
    <>
      <div className="Testimonials-container">

        <div className="testimonials">
          <div className="test-text">
            <h1>
              What our <span>Traveller</span> Says!
            </h1>
          </div>
          <div className="testimonials-cards">
            <div className="sub-testimonials-cards">
              {/* <img src={Testimonials[changeitem]?.Image} alt="user" /> */}
              <h1>{Testimonials[changeitem].Name}</h1>
              <p className="m-p">{Testimonials[changeitem].Member}</p>
              <p className="p-p">{Testimonials[changeitem].Testimonials}</p>
              <div className="button-star">
                <div className="star">
                {[...Array(Testimonials[changeitem].star)].map((_, index) => (
                    <IoIosStar key={index} className="star-icon" />
                  ))}
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hometestimonials;
