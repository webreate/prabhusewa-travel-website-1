import React, { useEffect, useState } from "react";
import "../../style/home/Homepackages.css";
// import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from "../../store/features/Apicallpackages";
// import { FaStar } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import Lodder from "../lodder/Lodder";
import { useNavigate } from "react-router-dom";
const Homepackages = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const selectedProduct = useSelector((state) => state.product.productData);
  const selectstatus = useSelector((state) => state.product.status);

  const [productdata, setProductdata] = useState(8)
  const [isToggled, setIsToggled] = useState(false)
  const movileresponsive = window.innerWidth <= 768;
  // console.log("selectedProduct", selectedProduct, "selectstatus", selectstatus);

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);


  useEffect(() => {
    if (movileresponsive) {
      setProductdata(4)
    }
  }, [movileresponsive])

  const dataaddtoggle = () => {
    if (!isToggled) {
      setProductdata(8)
    } else {
      setProductdata(4)
    }

    setIsToggled(!isToggled)
  }
  if (selectstatus === "loading") {
    return <Lodder />
  }
  if (selectstatus === "failed") {
    alert("something want worng !")
  }


  // const Packagesdeta = [
  //   {
  //     Image:
  //       "https://media.istockphoto.com/id/539105384/photo/kedarnath-in-india.webp?b=1&s=170667a&w=0&k=20&c=LA59WsD06xbcyesdMwYfr8Ou6iaJehgVARU6IIdqdGM=",
  //     Price: "12000",
  //     Name: "Shree Kedarnath",
  //     days: "10 days",
  //     paragraf:
  //       " Around 275 kms has to be covered on the 5th day and the buswill depart from Uttarkashi at 6 am.",
  //     rating: "5",
  //   },
  //   {
  //     Image:
  //       "https://media.istockphoto.com/id/539105384/photo/kedarnath-in-india.webp?b=1&s=170667a&w=0&k=20&c=LA59WsD06xbcyesdMwYfr8Ou6iaJehgVARU6IIdqdGM=",
  //     Price: "12000",
  //     Name: "Shree Kedarnath",
  //     days: "10 days",
  //     paragraf:
  //       " Around 275 kms has to be covered on the 5th day and the buswill depart from Uttarkashi at 6 am.",
  //     rating: "5",
  //   },
  //   {
  //     Image:
  //       "https://media.istockphoto.com/id/539105384/photo/kedarnath-in-india.webp?b=1&s=170667a&w=0&k=20&c=LA59WsD06xbcyesdMwYfr8Ou6iaJehgVARU6IIdqdGM=",
  //     Price: "12000",
  //     Name: "Shree Kedarnath",
  //     days: "10 days",
  //     paragraf:
  //       " Around 275 kms has to be covered on the 5th day and the buswill depart from Uttarkashi at 6 am.",
  //     rating: "5",
  //   },
  //   {
  //     Image:
  //       "https://media.istockphoto.com/id/539105384/photo/kedarnath-in-india.webp?b=1&s=170667a&w=0&k=20&c=LA59WsD06xbcyesdMwYfr8Ou6iaJehgVARU6IIdqdGM=",
  //     Price: "12000",
  //     Name: "Shree Kedarnath",
  //     days: "10 days",
  //     paragraf:
  //       " Around 275 kms has to be covered on the 5th day and the buswill depart from Uttarkashi at 6 am.",
  //     rating: "5",
  //   },
  //   {
  //     Image:
  //       "https://media.istockphoto.com/id/539105384/photo/kedarnath-in-india.webp?b=1&s=170667a&w=0&k=20&c=LA59WsD06xbcyesdMwYfr8Ou6iaJehgVARU6IIdqdGM=",
  //     Price: "12000",
  //     Name: "Shree Kedarnath",
  //     days: "10 days",
  //     paragraf:
  //       " Around 275 kms has to be covered on the 5th day and the buswill depart from Uttarkashi at 6 am.",
  //     rating: "5",
  //   },
  //   {
  //     Image:
  //       "https://media.istockphoto.com/id/539105384/photo/kedarnath-in-india.webp?b=1&s=170667a&w=0&k=20&c=LA59WsD06xbcyesdMwYfr8Ou6iaJehgVARU6IIdqdGM=",
  //     Price: "12000",
  //     Name: "Shree Kedarnath",
  //     days: "10 days",
  //     paragraf:
  //       " Around 275 kms has to be covered on the 5th day and the buswill depart from Uttarkashi at 6 am.",
  //     rating: "5",
  //   },
  //   {
  //     Image:
  //       "https://media.istockphoto.com/id/539105384/photo/kedarnath-in-india.webp?b=1&s=170667a&w=0&k=20&c=LA59WsD06xbcyesdMwYfr8Ou6iaJehgVARU6IIdqdGM=",
  //     Price: "12000",
  //     Name: "Shree Kedarnath",
  //     days: "10 days",
  //     paragraf:
  //       " Around 275 kms has to be covered on the 5th day and the buswill depart from Uttarkashi at 6 am.",
  //     rating: "5",
  //   },
  //   {
  //     Image:
  //       "https://media.istockphoto.com/id/539105384/photo/kedarnath-in-india.webp?b=1&s=170667a&w=0&k=20&c=LA59WsD06xbcyesdMwYfr8Ou6iaJehgVARU6IIdqdGM=",
  //     Price: "12000",
  //     Name: "Shree Kedarnath",
  //     days: "10 days",
  //     paragraf:
  //       " Around 275 kms has to be covered on the 5th day and the buswill depart from Uttarkashi at 6 am.",
  //     rating: "5",
  //   },
  // ];

  return (
    <>
      <div className="home-packages-container">
        <div className="text-container">
          <h1>Our Packages</h1>

        </div>
        <div className="main-container">
          {selectedProduct?.slice(0, productdata).map((res, index) => {
            return (
              <>
                <Slide direction="left">
                  <div className="hpac-card" key={index}>
                    <div className="card-image">
                      <img className="image" src={res?.gallery[0] && res?.gallery[0].galleryImage} alt="temple" />
                      <div className="over-text-icon">
                        <div className="over-box">
                          {
                            res?.budget === "" ? <></> :
                              <>
                                <div className="price-box">
                                  <p className="price">Price-{res?.budget}/-</p>
                                </div>
                              </>
                          }

                          {/* <div className="round-box">
                            <FaRegHeart className="icon-heart" />
                          </div> */}
                        </div>
                      </div>
                    </div>

                    <div className="card-footer-text">
                      <div className="header-text">
                        <p>{res?.packageName.slice(0, 20)}</p>
                        <p>{res?.days.length} days</p>
                      </div>
                      <div className="para-box">
                        <p>{res?.shortDescription.slice(0, 100)}</p>
                      </div>
                      <div className="tar-btn">

                        <button className="btn" onClick={() => navigate(`/packages/${res._id}`)}>Book Now</button>
                      </div>
                    </div>
                  </div>
                </Slide>
              </>
            );
          })}
          <div className="viewmore-resp-btn">
            <button onClick={() => dataaddtoggle()}>{isToggled ? 'Less' : 'View more'}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepackages;
