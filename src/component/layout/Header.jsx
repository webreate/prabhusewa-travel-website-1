import React from "react";
import "../../style/layout/Header.css";
import { Link } from "react-router-dom";
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

  return (
    <>
      <div className="header-container" id="navbar">
        <div className="header-name">
          <h1>Chardham Yatra</h1>
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
                <a href="/" className="a">
                  About us
                </a>
              </li>
              <li>
                <Link to="/Allpackeges" className="a">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/" className="a">
                 Gallery
                </Link>
              </li>
              <li>
                <Link to="/" className="a">
                  Contact us
                </Link>
              </li>
              {/* <li>
                <Link to="/" className="a">
                  Signup
                </Link>
              </li> */}
              <li>
                <button className="header-button">Book now</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
