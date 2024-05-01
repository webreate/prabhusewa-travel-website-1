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
  const [activePage, setActivePage] = useState("");

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


  useEffect(() => {
    const currentPath = window.location.pathname;
    switch (currentPath) {
      case "/":
        setActivePage("HOME");
        break;
      case "/AboutUs":
        setActivePage("AboutUs");
        break;
      case "/Allpackeges":
        setActivePage("Allpackeges");
        break;
      case "/Gallery":
        setActivePage("Gallery");
        break;
      case "/contactus":
        setActivePage("contactus");
        break;
      default:
        setActivePage("");
    }
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
            <li onClick={() => {
              navigate("/");
              setActivePage("HOME");

            }}>
              <Link to="/" className="a" style={{
                color:
                  activePage === "HOME"
                    ? "#ffc436"
                    : "",
              }} onClick={() => scrollToTop()}>
                Home
              </Link>
            </li>
            <li onClick={() => {
              navigate("/AboutUs");
              setActivePage("AboutUs");

            }}>
              <Link to="/AboutUs" className="a" style={{
                color:
                  activePage === "AboutUs"
                    ? "#ffc436"
                    : "",
              }} onClick={() => scrollToTop()}>
                About us
              </Link>
            </li>
            <li onClick={() => {
              navigate("/Allpackeges");
              setActivePage("Allpackeges");

            }}>
              <Link to="/Allpackeges" className="a" style={{
                color:
                  activePage === "Allpackeges"
                    ? "#ffc436"
                    : "",
              }} onClick={() => scrollToTop()}>
                Packages
              </Link>
            </li>
            <li onClick={() => {
              navigate("/Gallery");
              setActivePage("Gallery");

            }}>
              <Link to="/Gallery" className="a" style={{
                color:
                  activePage === "Gallery"
                    ? "#ffc436"
                    : "",
              }} onClick={() => scrollToTop()}>
                Gallery
              </Link>
            </li>
            <li onClick={() => {
              navigate("/contactus");
              setActivePage("contactus");

            }}>
              <Link to="/contactus" className="a" style={{
                color:
                  activePage === "contactus"
                    ? "#ffc436"
                    : "",
              }} onClick={() => scrollToTop()}>
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
