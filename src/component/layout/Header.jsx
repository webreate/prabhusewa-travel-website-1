import React, { useState, useEffect } from "react";
import "../../style/layout/Header.css";
import { Link } from "react-router-dom";
import headerimg from "../../assest/ContactIcons/Layer_1.png";
import Form from "../popupform/Form";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
// import contactus from "../../pages/ContactUs";
const Header = () => {
  const navigate = useNavigate()
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up or at the top
        setShowNavbar(true);
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const [form, setform] = useState(false);

  const crossClick = () => {
    setform(false);
    const toggelbaar = document.querySelector(".ul-header")
    toggelbaar.classList.remove("toggle")
  };

  /* toggle hame burger menu */
  const HmemenuToggel = () => {
    const toggelbaar = document.querySelector(".ul-header");
    toggelbaar.classList.toggle("toggle")
  }
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <div className={`header ${showNavbar ? 'show' : 'hide'}`}>
        <div className="header-name">
          <Link to="/">
            <img className="H-name" src={headerimg} alt="icon" />
          </Link>
        </div>
        <div className="Header-link-button">

          <ul className="ul-header">
            <li onClick={()=>navigate("/")}>
              <Link to="/" className="a" onClick={() => scrollToTop()}>
                Home
              </Link>
            </li>
            <li onClick={()=>navigate("/AboutUs")}>
              <Link to="/AboutUs" className="a" onClick={() => scrollToTop()}>
                About us
              </Link>
            </li>
            <li onClick={()=>navigate("/Allpackeges")}>
              <Link to="/Allpackeges" className="a" onClick={() => scrollToTop()}>
                Packages
              </Link>
            </li>
            <li onClick={()=>navigate("/Gallery")}>
              <Link to="/Gallery" className="a" onClick={() => scrollToTop()}>
                Gallery
              </Link>
            </li>
            <li onClick={()=>navigate("/contactus")}>
              <Link to="/contactus" className="a" onClick={() => scrollToTop()}>
                Contact Us
              </Link>
            </li>


            <button className="header-button" onClick={() => setform(true)}>
              Book now
            </button>
            <Form show={form} cross={crossClick}></Form>

          </ul>


          <div className="menu-container" onClick={() => HmemenuToggel()}>
            <GiHamburgerMenu className="icon-menu" />
          </div>
        </div>

      </div>
    </>
  );
};
export default Header;
