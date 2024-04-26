import React, { useState } from "react";
import Axios from "axios";
import "../assest/constant/Constant.css";
import Header from "../component/layout/Header";
import "../style/Contact/ContactUs.css";
import Tel from "../assest/ContactIcons/Tel.png";
import contact from "../assest/ContactIcons/contact.png";
import Footer from "../component/layout/footer";
import mail from "../assest/ContactIcons/mail.png";
import Data from "../component/Shared/HeroSection/HeroData.json";
import HeroSection from "../component/Shared/HeroSection/HeroSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const homeData = Data.find((item) => item.id === 1);
  // console.log(homeData);
  const [data, setData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    comment: "",
  });

  const handleInput = (event) => {
    if (
      event.target.name === "mobileNumber" &&
      event.target.value.length > 10
    ) {
      event.target.value = event.target.value.slice(0, 10);
    }
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    Axios.post("https://parbhusewa-travel.onrender.com/user/contactus", data)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        notify("Submitted successfully !");
        setData({ fullName: "", MobileNumber: "", email: "", comment: "" });
        event.target.reset();
      })
      .catch((err) => {
        notify("Submission failed. Please try again.");
        console.log(err);
      });
  };
  const [placeholder, setPlaceholder] = useState("Email");
  const handleEmailChange = (event) => {
    const email = event.target.value;
    const emailRegex = /^([^\s@]+@[gmail|yahoo]+\.com)$/;
    const isValid = emailRegex.test(email);
    setData({ ...data.email });
    if (!isValid) {
      setPlaceholder(" *Please enter a valid Gmail or Yahoo email address.");
    } else {
      setPlaceholder("Email");
    }
  };
  const handleGmailRedirect = (event) => {
    event.preventDefault();
    // event.stopPropagation();
    const gmailAddress = "surajkumaryadav9749@gmail.com";
    const subject = "Sent";
    window.location.href = `mailto:${gmailAddress}?subject=${subject}`;
  };

  const handleContactNumberRedirect = (event) => {
    event.preventDefault();
    window.location.href = "tel:+917380425524";
  };
  const handleTollFreeNumber = (event) => {
    event.preventDefault();
    window.location.href = "tel:+180000000000";
  };

  const notify = (message) => {
    toast(message);
  };

  return (
    <div className="Globle-Container">
      <div className="header-hero-dynamic-container">
        <Header />
        <HeroSection {...homeData} />;
      </div>
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
            <form
              action="#"
              method="POST"
              className="contact-form-inputs"
              onSubmit={submitHandler}
            >
              <label htmlFor="username">Full Name</label> <br />
              <input
                type="text"
                onChange={handleInput}
                name="fullName"
                value={data?.fullName}
                id="username"
                placeholder="username"
                autoComplete="off"
                className="contactFormPageInp"
                required
              />
              <label htmlFor="number">Mobile Number</label>
              <br />
              <input
                type="number"
                onChange={handleInput}
                name="mobileNumber"
                value={data?.mobileNumber}
                id="number"
                placeholder="Number"
                maxlength="10"
                pattern="[0-9]{10}"
                autoComplete="off"
                className="contactFormPageInp"
                required
              />
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                type="email"
                onChange={handleEmailChange}
                name="email"
                value={data?.email}
                id="email"
                placeholder={placeholder}
                autoComplete="off"
                pattern="^([^\s@]+@[gmail|yahoo]+\.com)$"
                className="contactFormPageInp"
              />
              <label htmlFor="message">Comment/Questions</label>
              <br />
              <textarea
                name="comment"
                onChange={handleInput}
                id="message"
                placeholder="message"
                value={data?.comment}
                cols="30"
                rows="8"
                autoComplete="off"
                className="contactFormPageInp"
                required
              ></textarea>
              <input
                className="contact-form-btn"
                type="submit"
                onClick={notify}
              />
            </form>
            <ToastContainer />
          </div>
          <div className="map-container">
            <div className="map">
              <iframe
                className="mapOfContactUsPage"
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
        <div className="box box-1" onClick={handleContactNumberRedirect}>
          <div className="box-icon">
            <img src={contact} alt="" className="icons-img" />
          </div>
          <p className="box-para">contact number</p>
          <a href="#" className="anchor-box">
            +91-4343434343
          </a>
        </div>
        <div className="box box-2" onClick={handleGmailRedirect}>
          <div className="box-icon">
            <img src={mail} alt="" className="icons-img" />
          </div>
          <p className="box-para">Email Address</p>
          <a
            href="mailto:surajkumaryadav9749@gmail.com"
            className="anchor-box"
            target="_blank"
          >
            surajkumaryadav9749@gmail.com
          </a>
        </div>
        <div className="box box-3" onClick={handleTollFreeNumber}>
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
