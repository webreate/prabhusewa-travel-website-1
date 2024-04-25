import React, { useState, useEffect } from "react";
import "../../style/Form/Form.css";
import { ImCross } from "react-icons/im";
import Axios from "axios";
import { fetchProducts } from "../../store/features/Apicallpackages";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ show, cross }) => {
  const selectedProduct = useSelector((state) => state.product.productData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const [placeholder, setPlaceholder] = useState("Email");

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
    if (event.target.name == "phoneNo" && event.target.value.length > 10) {
      event.target.value = event.target.value.slice(0, 10);
    }
    setBookData({ ...bookData, [event.target.name]: event.target.value });
  };
  // console.log(bookData);
  const submitHandler = (event) => {
    event.preventDefault();
    const emailRegex = /^([^\s@]+@(gmail|yahoo)\.com)$/; // Updated regex pattern
    // Check if email is valid
    if (!emailRegex.test(bookData.email)) {
      notify(
        "Form not submitted. Please enter a valid Gmail or Yahoo email address."
      );
      setBookData({ email: "" });
      return; // Exit function if email is not valid
    }
    Axios.post(
      "https://parbhusewa-travel.onrender.com/user/packageinquiary",
      bookData
    )
      .then((res) => {
        console.log(res);
        console.log(res.bookData);
        notify("Submitted successfully!");
        setBookData({
          fullName: "",
          phoneNo: "",
          email: " ",
          noofpeopletravelling: "",
          packages: "",
          budget: " ",
          message: "",
          dateofjourney: "",
        });
        // event.target.reset();
      })
      .catch((err) => {
        notify("Submission failed. Please try again.");
        console.log(err);
      });
  };
  // console.log(selectedProduct);
  const handleEmailCHANGE = (event) => {
    event.preventDefault();
    const email = event.target.value;
    const emailRegex = /^([^\s@]+@[gmail|yahoo]+\.com)$/;
    const isValid = emailRegex.test(email);
    setBookData({ ...bookData, email: email });
    if (!isValid) {
      setPlaceholder("Please enter a valid Gmail or Yahoo email address.");
    } else {
      setPlaceholder("Email");
    }
  };
  const notify = (message) => {
    toast(message);
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
          <form
            action=""
            className="book-now-form-popup"
            onSubmit={submitHandler}
          >
            <div className="form-tag-line-1  bookNowFormInput">
              <input
                type="text"
                onChange={handleInput}
                name="fullName"
                value={bookData?.fullName}
                placeholder="Full Name"
                id="fullName"
                minLength={3}
                maxLength={20}
                pattern="[A-Za-z ]{3,20}"
                title="Full name should contain only letters and be between 3 and 20 characters long"
                className="bookNowFormInputTag"
                required
              />
              <input
                type="number"
                onChange={handleInput}
                name="phoneNo"
                value={bookData?.phoneNo}
                placeholder="Phone No"
                id="phoneNo"
                maxlength="10"
                pattern="[0-9]{10}"
                className="bookNowFormInputTag phoneNo"
                required
              />
            </div>
            <div className="form-tag-line-2  bookNowFormInput">
              <input
                type="email"
                onChange={handleEmailCHANGE}
                name="email"
                value={bookData?.email}
                placeholder={placeholder}
                pattern="^([^\s@]+@[gmail|yahoo]+\.com)$"
                id="email"
                className="bookNowFormInputTag"
              />
              <input
                type="number"
                onChange={handleInput}
                name="noofpeopletravelling"
                value={bookData?.noofpeopletravelling}
                id="noofpeopletravelling"
                placeholder="No of People Travelling"
                className="bookNowFormInputTag"
                required
              />
            </div>
            <div className="form-tag-line-3 bookNowFormInput">
              <select
                id="Package"
                className="packageBookNowForm"
                onChange={handleInput}
                name="packages"
                value={bookData?.packages}
              >
                {selectedProduct.map((ele) => (
                  <option value="volvo">{ele.packageName}</option>
                ))}
              </select>
              <input
                type="number"
                onChange={handleInput}
                placeholder="Budget"
                name="budget"
                value={bookData?.budget}
                id="budget"
                className="Budget"
                required
              />
            </div>
            <div className="form-tag-line-4 bookNowFormInput">
              <input
                style={{ background: "transparent" }}
                type="text"
                onChange={handleInput}
                name="message"
                value={bookData?.message}
                id="message"
                placeholder="message"
                className="bookNowFormInputTag"
                required
              />
            </div>
            <div className="form-tag-line-5 bookNowFormInput">
              <div className="journeyDateHeading">
                <label
                  classname="journeyDateHeadingLabel"
                  htmlFor="dateofjourney"
                >
                  Date of journey
                </label>
              </div>
              <div className="journeyDate">
                <input
                  type="date"
                  onChange={handleInput}
                  name="dateofjourney"
                  value={bookData?.dateofjourney}
                  id="dateofjourney"
                  placeholder=""
                  className="bookNowFormInputTag"
                  required
                />

                <button
                  type="submit"
                  id="bookNowSubmitBtn"
                  name="button"
                  onClick={notify}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Form;
