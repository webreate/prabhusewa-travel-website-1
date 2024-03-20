import React from "react";
import "../../style/layout/Footer.css";
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
            <h3 className="container-name">Company</h3>
            <ul>
              <li>
                <FaArrowRightLong style={{ color: "#ffc436" }} />
                <a href="/" className="a">
                  About us
                </a>
              </li>
              <li>
                <FaArrowRightLong style={{ color: "#ffc436" }} />
                <a href="/" className="a">
                  Hotels
                </a>
              </li>
              <li>
                <FaArrowRightLong style={{ color: "#ffc436" }} />
                <a href="/" className="a">
                  List of property
                </a>
              </li>
              <li>
                <FaArrowRightLong style={{ color: "#ffc436" }} />
                <a href="/" className="a">
                  jobs
                </a>
              </li>
              <li>
                <FaArrowRightLong style={{ color: "#ffc436" }} />
                <a href="/" className="a">
                  Partnership
                </a>
              </li>
            </ul>
          </div>
          <div className="container2">
            <h3 className="container-name">Explor</h3>
            <ul>
              <li>
                <FaArrowRightLong style={{ color: "#ffc436" }} />
                <a href="/" className="a">
                  Explore Travel
                </a>
              </li>
              <li>
                <FaArrowRightLong style={{ color: "#ffc436" }} />
                <a href="/" className="a">
                  Hotels
                </a>
              </li>
              <li>
                <FaArrowRightLong style={{ color: "#ffc436" }} />
                <a href="/" className="a">
                  Holiday Packages
                </a>
              </li>
              <li>
                <FaArrowRightLong style={{ color: "#ffc436" }} />
                <a href="/" className="a">
                  All Accommdations Type
                </a>
              </li>
              <li>
                <FaArrowRightLong style={{ color: "#ffc436" }} />
                <a href="/" className="a">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="container">
            <h3 className="container-name">policies</h3>
            <ul>
              <li>
                <FaArrowRightLong style={{ color: "#ffc436" }} />
                <a href="/" className="a">
                  Privacy
                </a>
              </li>
              <li>
                <FaArrowRightLong style={{ color: "#ffc436" }} />
                <a href="/" className="a">
                  Term of Conditions
                </a>
              </li>
              <li>
                <FaArrowRightLong style={{ color: "#ffc436" }} />
                <a href="/" className="a">
                  cookies
                </a>
              </li>
              <li>
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
              </li>
            </ul>
          </div>

          <div className="container-gradients">
              <div className="gradients"></div>
              <div className="gradients"></div>
              <div className="gradients"></div>
              <div className="gradients"></div>
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

export default footer;
