import React, { useState } from "react";
import "../../style/layout/Header.css";
import { Link } from "react-router-dom";
import headerimg from "../../assest/ContactIcons/Layer_1.png";
import Form from "../popupform/Form";
import { GiHamburgerMenu } from "react-icons/gi";
// import contactus from "../../pages/ContactUs";
const Header = () => {
  // let lastScrollTop = 0;
  // const header = document.querySelector('.header');
  
  // window.addEventListener('scroll', function() {
  //     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     if (scrollTop > lastScrollTop) {
  //         // Scrolling down
  //         header.style.transform = 'translateY(-100%)'; // Hides the header by moving it above the viewport
  //     } else {
  //         // Scrolling up
  //         header.style.transform = 'translateY(0)'; // Shows the header by resetting its position
  //     }
  //     lastScrollTop = scrollTop;
  // });

  const [form, setform] = useState(false);

  const crossClick = () => {
    setform(false);
  };


  /* toggle hame burger menu */
const HmemenuToggel = ()=>{
  const toggelbaar = document.querySelector(".ul-header")
  toggelbaar.classList.toggle("toggle")
  // alert("hii")
}

  return (
    <>
      <div className="header" >
        <div className="header-name">
          <Link to="/">
            <img className="H-name" src={headerimg} alt="icon" />
          </Link>
        </div>
        <div className="Header-link-button">
        
            <ul className="ul-header">
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
           
          
                <button className="header-button" onClick={() => setform(true)}>
                  Book now
                </button>
                <Form show={form} cross={crossClick}></Form>
            
            </ul>
           
      
          <div className="menu-container" onClick={()=>HmemenuToggel()}>
                <GiHamburgerMenu className="icon-menu"/>
            </div>
        </div>
        
      </div>
    </>
  );
};
export default Header;
