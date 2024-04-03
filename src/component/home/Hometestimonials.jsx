import React from "react";
import "../../style/home/Hometestimonials.css"
import { IoIosStar } from "react-icons/io";
const Hometestimonials = () => {
  return (
    <>
     <div className="Testimonials-container">
        <img className="Testimonials-image" src="https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VkYXJuYXRofGVufDB8fDB8fHww" alt="bg" />
        <div className="testimonials">
            <div className="test-text">
                <h1>What our <span>Traveller</span>  Says!</h1>
            </div>
            <div className="testimonials-cards">
                <div className="sub-testimonials-cards">
                   <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D" alt="user"/>
                   <h1>RoBert Albert</h1>
                   <p className="m-p">Member of the Chardham</p>
                   <p className="p-p"> As a frequent traveler, I can confidently say that Uttarakhand Dekho stands out. The dedication to client satisfaction, coupled with their in-depth knowledge of Uttarakhand, ensures an unmatched travel adventure.Exceptional services!</p>
                   <div className="button-star">
                      <div className="star">
                         <IoIosStar className="star-icon"/>
                         <IoIosStar className="star-icon"/>
                         <IoIosStar className="star-icon"/>
                         <IoIosStar className="star-icon"/>
                         <IoIosStar className="star-icon"/>
                      </div>
                      <button>View Detail</button>
                   </div>
                </div>
            </div>
        </div>
     </div>
    </>
  );
};

export default Hometestimonials;
