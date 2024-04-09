import React, { useState } from "react";
import "../../style/Form/Form.css";
import { ImCross } from "react-icons/im";
import axios from "axios";

const Form = ({ show, cross }) => {
  const [bookData, setBookData] = useState({
    fullName: "",
    phoneNo: "",
    email: " ",
    noofpeopletravelling: "",
    packages: "",
    budget: " ",
    message: "",
    dateofjourney: "",
  });

  if (!show) {
    return null;
  }

  const handleInput = (event) => {
    setBookData({ ...bookData, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("https://parbhusewa-travel.onrender.com/user/packageinquiary", {
        bookData,
      })
      .then((res) => {
        console.log(res);
        console.log(res.bookData);
        event.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="globle" onClick={cross}></div>
      <div className="book-form-Container">
        <div className="book-form-heading">
          <div>
            <h1>Write Your Query Here!</h1>
          </div>
          <div className="cut-icon-div">
            <button onClick={cross} className="cross-btn">
              <ImCross />
            </button>
          </div>
        </div>
        <div className="book-form-division">
          <form action="" className="form-tag" onSubmit={submitHandler}>
            <div className="form-tag-line-1  line">
              <input
                type="text"
                onChange={handleInput}
                name="fullName"
                value={bookData?.fullName}
                placeholder="Full Name"
                id="fullName"
              />
              <input
                type="number"
                onChange={handleInput}
                name="phoneNo"
                value={bookData?.phoneNo}
                placeholder="Phone No"
                id="phoneNo"
              />
            </div>
            <div className="form-tag-line-2  line">
              <input
                type="email"
                onChange={handleInput}
                name="email"
                value={bookData?.email}
                placeholder="E-mail"
                id="email"
              />
              <input
                type="number"
                onChange={handleInput}
                name="noofpeopletravelling"
                value={bookData?.noofpeopletravelling}
                id="noofpeopletravelling"
                placeholder="No of People Travelling"
              />
            </div>
            <div className="form-tag-line-3 line">
              <select
                id="Package"
                className="package"
                onChange={handleInput}
                name="packages"
                value={bookData?.packages}
              >
                <option value="volvo">Packages</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <input
                type="number"
                onChange={handleInput}
                placeholder="Budget"
                name="budget"
                value={bookData?.budget}
                id="budget"
                className="Budget"
              />
            </div>
            <div className="form-tag-line-4 line">
              <input
                style={{ background: "transparent" }}
                type="text"
                onChange={handleInput}
                name="message"
                value={bookData?.message}
                id="message"
                placeholder="message"
              />
            </div>
            <div className="form-tag-line-5 line">
              <input
                type="date"
                onChange={handleInput}
                name="dateofjourney"
                value={bookData?.dateofjourney}
                id="dateofjourney"
                placeholder=""
              />
              <button
                type="submit"
                name="button"
                id="button"
                className="Book-btn"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
