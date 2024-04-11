import React,{useEffect, useState} from "react";
import "../../style/home/Homepackages.css";
import { FaRegHeart } from "react-icons/fa";
// import { FaStar } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
const Homepackages = () => {
  const [productdata,setProductdata] =useState(8)
  const [isToggled,setIsToggled] = useState(false)
const movileresponsive = window.innerWidth <= 768;

const dataaddtoggle = (e)=>{
  if(!isToggled){
    setProductdata(8)
  }else{
    setProductdata(4)
  }
  
  setIsToggled(!isToggled)
}


useEffect(()=>{
 if(movileresponsive){
  setProductdata(4)
 }
},[movileresponsive])
    
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
    },
  ];

  return (
    <>
      <div className="home-packages-container">
        <div className="text-container">
          <h1>Our Packages</h1>
        
        </div>
        <div className="main-container">
          {Packagesdeta.slice(0,productdata).map((res, index) => {
            return (
              <>
                <Slide direction="left">
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
                    
                        <button className="btn">Book Now</button>
                      </div>
                    </div>
                  </div>
                </Slide>
              </>
            );
          })}
          <div className="viewmore-resp-btn">
            <button onClick={(e)=>dataaddtoggle(e)}>{isToggled ? 'Less' : 'View more'}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepackages;
