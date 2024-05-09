import React, { useEffect, useState } from "react";
import "../../style/Allpackeges/Packeges.css";
import { Slide } from "react-awesome-reveal";
import { HiArrowSmRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/features/Apicallpackages";
import { HiArrowSmLeft } from "react-icons/hi";
import Lodder from "../lodder/Lodder";
import { useNavigate } from "react-router-dom";

const Packeges = () => {
  const navigate = useNavigate();
  // const [images,setimages] =useState([""])
  const [startindex, setStartindex] = useState(0);
  const itemsPerPage = 6;

  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.product.productData);
  const selectstatus = useSelector((state) => state.product.status);

  // console.log("selectedProduct", selectedProduct, "selectstatus", selectstatus);
//test
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (selectstatus === "loading") {
    return <Lodder />;
  }
  if (selectstatus === "failed") {
    alert("something went worng !");
  }

  /* click button change data  */

  const visibleData = selectedProduct.slice(
    startindex,
    startindex + itemsPerPage
  ); // products all deta here
  const hasMoreItems = startindex + itemsPerPage < selectedProduct.length;
  const showNextButton = hasMoreItems && visibleData.length > 0;
  const showPreviewButton = startindex > 0;
  const Next = () => {
    setStartindex((prevIndex) => prevIndex + itemsPerPage);
  };

  const Priview = (e) => {
    setStartindex((prevIndex) => Math.max(0, prevIndex - itemsPerPage));
  };


  return (
    <>
      <div className="packeges-container">
        {/* <img
          className="bg-packeges-image"
          src="https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="temple"
        /> */}
        <div className="packeges-container-main">
          <div className="package-text-box">
            <h1>List of all the package for tour</h1>

            <div className="package-des">
              <div className="round"></div>
              <hr className="hr" />
              <div className="round1-round"></div>
            </div>

            <div className="package-des1">
              <div className="round1"></div>
              <hr className="hr1" />
              <div className="round1-round"></div>
            </div>
          </div>

          <div className="Packages-card-container">
            {visibleData?.map((res) => {
              console.log(res);
              return (
                <>
                  <Slide key={res._id}>
                    <div className="packages-card" key={res._id}>
                      <div className="images-box">
                        <img
                          className="image-round"
                          src={res?.gallery[0] && res?.gallery[0].galleryImage}
                          alt="images"
                        />
                      </div>
                      <div className="text-div">
                        <h1 className="text-1">{res?.packageName}</h1>
                      </div>
                      {/* <h1 className="day">{res.Day}</h1> */}
                      <div className="p-bx">
                        <p className="packages-para">
                          {res?.shortDescription.slice(0, 145)}
                        </p>
                      </div>
                      <div className="packages-button">
                        <button
                          className="button-btn"
                          onClick={() => navigate(`/packages/${res._id}`)}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </Slide>
                </>
              );
            })}
          </div>
          <div className="more-button">
            <div className="sub-button">
              <Slide direction="right">
                {showPreviewButton && (
                  <button className="button-btn1" onClick={(e) => Priview(e)}>
                    {" "}
                    <HiArrowSmLeft className="icon-btn" />
                  </button>
                )}

                {showNextButton && (
                  <button className="button-btn1" onClick={Next}>
                    <HiArrowSmRight className="icon-btn" />
                  </button>
                )}
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packeges;

//https://prabhusewa-travel.fly.dev/package/getpackageweb?type=RELIGIOUS%20TRAVEL
