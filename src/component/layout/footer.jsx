import React from "react";
import "../../style/layout/Footer.css";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
const footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-subcontainer">
          <div className="container1">
            <p className="container1-p">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <p className="container-p-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              voluptatum numquam fuga repellendus totam, repudiandae tenetur
              facilis earum ipsa iste incidunt cupiditate impedit recusandae nam
              culpa dolore sunt alias ad. impedit recusandae nam culpa dolore
              sunt alias ad. impedit recusandae nam culpa dolore sunt alias ad.
            </p>
            <div className="footer-images">
              <img
                className="footer-image-img"
                src="https://media.istockphoto.com/id/1069137628/photo/top-of-the-jagannath-temple-puri-odisha-india.jpg?s=2048x2048&w=is&k=20&c=hsHY2ifaJtsllX5YqG6czbzgVeGoPD6u85sT03eHMSk="
                alt="tempal"
              />
              <img
                className="footer-image-img"
                src="https://media.istockphoto.com/id/1069137628/photo/top-of-the-jagannath-temple-puri-odisha-india.jpg?s=2048x2048&w=is&k=20&c=hsHY2ifaJtsllX5YqG6czbzgVeGoPD6u85sT03eHMSk="
                alt="tempal"
              />
              <img
                className="footer-image-img"
                src="https://media.istockphoto.com/id/1069137628/photo/top-of-the-jagannath-temple-puri-odisha-india.jpg?s=2048x2048&w=is&k=20&c=hsHY2ifaJtsllX5YqG6czbzgVeGoPD6u85sT03eHMSk="
                alt="tempal"
              />
            </div>
          </div>

          <div className="container2">
            <h3 className="container-name">Main Links</h3>
            <ul>
              <li>
                <FaArrowRightLong style={{ color: "#ffc436" }} />
                <Link to="/" className="a">
                  Home
                </Link>
              </li>
              <li>
                <FaArrowRightLong style={{ color: "#ffc436" }} />
                <Link to="/AboutUs" className="a">
                  About Us
                </Link>
              </li>
              <li>
                <FaArrowRightLong style={{ color: "#ffc436" }} />
                <Link to="/Allpackeges" className="a">
                  Packages
                </Link>
              </li>
              <li>
                <FaArrowRightLong style={{ color: "#ffc436" }} />
                <Link to="/Gallery" className="a">
                  Gallery
                </Link>
              </li>
              <li>
                <FaArrowRightLong style={{ color: "#ffc436" }} />
                <Link to="/contactus" className="a">
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
                <Link to ="/Privacypolicy" className="a">
                  Privacy
                </Link>
              </li>
              <li>
                <FaArrowRightLong style={{ color: "#ffc436" }} />
                <Link to="/Termsofconditions" className="a">
                  Term of Conditions
                </Link>
              </li>
              <li>
                <FaArrowRightLong style={{ color: "#ffc436" }} />
                <a href="/" className="a">
                  Blog
                </a>
              </li>
              {/* <li>
                <FaArrowRightLong style={{ color: "#ffc436" }} />
                <a href="/" className="a">
                  Content and Guidelines reporting Content
                </a>
              </li>
              <li>
                <FaArrowRightLong style={{ color: "#ffc436" }} />
                <a href="/" className="a">
                  Help
                </a>
              </li> */}
            </ul>
          </div>

          <div className="container-sub">
            <h3 className="subscrib-text">Subscribe News Latter</h3>
             <div className="inpute-box">
                <input className="input-new-latter" type="email" placeholder="Enter you Email "/>
                <button className="new-latter-button">Subscribe</button>
             </div>
           
          </div>
          {/* <div className="container-gradients">
              <div className="gradients"></div>
              <div className="gradients"></div>
              <div className="gradients"></div>
              <div className="gradients"></div>
          </div> */}

        </div>
        <div className="footer-last">
            <p>Copyright to Chardham@2024</p>
            <p>Powered By Webreate</p>
        </div>
      </div>
    </>
  );
};

export default footer;