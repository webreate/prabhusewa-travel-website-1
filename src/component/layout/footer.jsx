import React, { useState } from "react";
import "../../style/layout/Footer.css";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Img1 from "../../Images/a.webp"
import Img2 from "../../Images/aaapeg.webp"
import Img3 from "../../Images/c (1).webp"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [inputdata, setInputdata] = useState('')



  const sendemail = (e) => {
    e.preventDefault();
    if (validateEmail(inputdata.toLowerCase())) {
      // notify('Email is valid!');
      // alert('Email is valid!');

      postEmaildata()
    } else {

      notify('Please enter a valid email address.');
    }
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.(com|co\.uk|in|net)$/; // Regex for Gmail and Yahoo domains
    return re.test(email);
  };


  const postEmaildata = () => {
    fetch(`https://parbhusewa-travel.onrender.com/user/postemail`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email: inputdata
      })
    })
      .then(Response => Response.json())
      .then(data => {
        console.log(data)
        notify("email send Sucsessfull !")
        setInputdata('')
        document.getElementById("email").value = ""
      })
  }


  const notify = (message) => {
    toast(message);
  };


  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <div className="footer-container">
        <div className="footer-subcontainer">
          <div className="container1">
            <p className="container1-p">
              PRABHU SEWA
            </p>
            <p className="container-p-white">
              PRABHU SEWA is your gateway to unforgettable adventures around the globe. From pristine beaches to ancient temples, we specialize in crafting personalized travel experiences tailored to your interests and preferences. With our dedication to exceptional service and attention to detail, let us turn your travel dreams into reality. Start planning your next journey with us today!
            </p>
            <div className="footer-images">
              <img
                className="footer-image-img"
                src={Img1}
                alt="tempal"
              />
              <img
                className="footer-image-img"
                src={Img2}
                alt="tempal"
              />
              <img
                className="footer-image-img"
                src={Img3}
                alt="tempal"
              />
            </div>
          </div>

          <div className="container-bond">
            <div className="container2">
              <h3 className="container-name">Main Links</h3>
              <ul>
                <li>
                  <FaArrowRightLong style={{ color: "#ffc436" }} />
                  <Link to="/" className="a" onClick={() => scrollToTop()}>
                    Home
                  </Link>
                </li>
                <li>
                  <FaArrowRightLong style={{ color: "#ffc436" }} />
                  <Link to="/AboutUs" className="a" onClick={() => scrollToTop()}>
                    About Us
                  </Link>
                </li>
                <li>
                  <FaArrowRightLong style={{ color: "#ffc436" }} />
                  <Link to="/Allpackeges" className="a" onClick={() => scrollToTop()}>
                    Packages
                  </Link>
                </li>
                <li>
                  <FaArrowRightLong style={{ color: "#ffc436" }} />
                  <Link to="/Gallery" className="a" onClick={() => scrollToTop()}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <FaArrowRightLong style={{ color: "#ffc436" }} />
                  <Link to="/contactus" className="a" onClick={() => scrollToTop()}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>



            <div className="container3">
              <h3 className="container-name">Quick Links</h3>
              <ul>
                <li>
                  <FaArrowRightLong style={{ color: "#ffc436" }} />
                  <Link to="/Privacypolicy" className="a" onClick={() => scrollToTop()}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <FaArrowRightLong style={{ color: "#ffc436" }} />
                  <Link to="/Termsofconditions" className="a" onClick={() => scrollToTop()}>
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <FaArrowRightLong style={{ color: "#ffc436" }} />
                  <a href="/" className="a">
                    Blog
                  </a>
                </li>

              </ul>
            </div>
          </div>

          <div className="container-sub">
            <h3 className="subscrib-text">Subscribe News Latter</h3>
            <div className="inpute-box-new-latter">
              <div className="in-b">
                <input id="email" className="input-new-latter" type="email" placeholder="Enter you Email " onChange={(e) => setInputdata(e.target.value)} />
              </div>
              <button className="new-latter-button" onClick={(e) => sendemail(e)}>Subscribe</button>
            </div>
            <ToastContainer />
          </div>


        </div>
        <div className="footer-last">
          <p>Copyright to Chardham@2024</p>
          <p>Powered By Webreate</p>
        </div>
      </div>
    </>
  );
};

export default Footer;