import React, { useState } from "react";
import "../../style/layout/Header.css";
import { Link } from "react-router-dom";
import headerimg from "../../assest/ContactIcons/Layer_1.png";
import Form from "../popupform/Form";
// import contactus from "../../pages/ContactUs";
const Header = () => {
  // let lastScrolltop = 0;
  // let navbaar = document.getElementsByClassName(".header-container");

  // window.addEventListener("scroll", () => {
  //   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //   if (scrollTop > lastScrolltop) {
  //     navbaar.style.marginTop = "-3.125rem";
  //   } else {
  //     navbaar.style.marginTop = "0rem";
  //   }
  //   lastScrolltop = scrollTop;
  //   console.log(scrollTop)
  // });

  const [form, setform] = useState(false);

  const crossClick = () => {
    setform(false);
  };

  return (
    <>
      <div className="header-container" id="navbar">
        <div className="header-name">
          <Link to="/">
            <img className="H-name" src={headerimg} alt="icon" />
          </Link>
        </div>

        <div className="Header-link-button">
          <nav>
            <ul>
              <li>
                <Link to="/" className="a">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/AboutUs" className="a">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/Allpackeges" className="a">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/Gallery" className="a">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="a">
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <a href="/" className="a">
                  login
                </a>
              </li>
              {/* <li>
                <Link to="/" className="a">
                  Signup
                </a>
              </li> */}
              <li>
                <button className="header-button" onClick={() => setform(true)}>
                  Book now
                </button>
                <Form show={form} cross={crossClick}></Form>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
