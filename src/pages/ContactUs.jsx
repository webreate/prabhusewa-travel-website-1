import React from "react";
import "../assest/constant/Constant.css";
import Header from "../component/layout/Header";
import "../style/Contact/ContactUs.css";
import Tel from "../assest/ContactIcons/Tel.png";
import contact from "../assest/ContactIcons/contact.png";
import Footer from "../component/layout/footer";
import mail from "../assest/ContactIcons/mail.png";
// import CoverImg from "../assest/CoverPageImg/Cover.png";
import Data from "../component/Shared/HeroSection/HeroData.json";
import HeroSection from "../component/Shared/HeroSection/HeroSection";
// import { Fade, Bounce } from "react-awesome-reveal";

const ContactPage = () => {
  const homeData = Data.find((item) => item.id === 1);
  // console.log(homeData);
  return (
    <div className="Globle-Container">
      <Header />
      <HeroSection {...homeData} />;
      <div className="contact-container">
        <div className="contact-heading">
          <h2>Leave Us Your Info</h2>
        </div>

        <div className="Container">
          <div className="form-container">
            <p className="form-para">
              Have questions or need assistance? Feel free to reach out through
              our "Contact Us" page. We're here to provide prompt and friendly
              support to enhance your travel experience.
            </p>
            <form action="#" method="POST" className="form-inputs">
              <label htmlFor="Full Name">Full Name</label> <br />
              <input
                type="text"
                name="username"
                id="Full Name"
                placeholder="username"
                autoComplete="off"
                required
              />
              <label htmlFor="number">Mobile Number</label>
              <br />
              <input
                type="number"
                name="Number"
                id="number"
                placeholder="Number"
                autoComplete="off"
                required
              />
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                type="email"
                name="Email"
                id="email"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <label htmlFor="textarea">Comment/Questions</label>
              <br />
              <textarea
                name="message"
                id="textarea"
                cols="30"
                rows="8"
                autoComplete="off"
                required
              ></textarea>
              <input className="form-btn" type="submit" value="send" />
            </form>
          </div>
          <div className="map-container">
            <div className="map">
              <iframe
                className="map-1"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.5936754184027!2d78.008421!3d30.305626999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b0dc5b66fdf%3A0xe66e55ad8e0609a8!2sWEBREATE!5e0!3m2!1sen!2sin!4v1711856491594!5m2!1sen!2sin"
                width="550"
                height="430"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="boxes">
        <div className="box box-1">
          <div className="box-icon">
            <img src={contact} alt="" className="icons-img" />
          </div>
          <p className="box-para">contact number</p>
          <a href="#" className="anchor-box">
            +91-4343434343
          </a>
        </div>
        <div className="box box-2">
          <div className="box-icon">
            <img src={mail} alt="" className="icons-img" />
          </div>
          <p className="box-para">Email Address</p>
          <a href="#" className="anchor-box">
            Chardham.12@gmail.com
          </a>
        </div>
        <div className="box box-3">
          <div className="box-icon">
            <img src={Tel} alt="" className="icons-img" />
          </div>
          <p className="box-para">Toll Free Number</p>
          <a href="#" className="anchor-box">
            1800 0000 0000
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
