import React from "react";
import "../../style/layout/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header-container">
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
                <Link to="/AboutUs" className="a">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/Allpackeges" className="a">
                  pakage
                </Link>
              </li>
              <li>
                <a href="/" className="a">
                  Helicopter Ticket
                </a>
              </li>
              <li>
                <a href="/" className="a">
                  login
                </a>
              </li>
              <li>
                <a href="/" className="a">
                  Signup
                </a>
              </li>
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
