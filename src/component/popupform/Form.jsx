import React, { useState, useEffect } from "react";
import "../../style/Form/Form.css";
import { ImCross } from "react-icons/im";
import axios from "axios";
import { fetchProducts } from "../../store/features/Apicallpackages";
import { useDispatch, useSelector } from "react-redux";

const Form = ({ show, cross }) => {
  const selectedProduct = useSelector((state) => state.product.productData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
        event.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(selectedProduct);

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
            <div className="form-tag-line-1  bookNowFormInput">
              <input
                type="text"
                onChange={handleInput}
                name="fullName"
                value={bookData?.fullName}
                placeholder="Full Name"
                id="fullName"
                className="bookNowFormInputTag"
              />
              <input
                type="number"
                onChange={handleInput}
                name="phoneNo"
                value={bookData?.phoneNo}
                placeholder="Phone No"
                id="phoneNo"
                className="bookNowFormInputTag"
              />
            </div>
            <div className="form-tag-line-2  bookNowFormInput">
              <input
                type="email"
                onChange={handleInput}
                name="email"
                value={bookData?.email}
                placeholder="E-mail"
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
              />
            </div>
            <div className="form-tag-line-5 bookNowFormInput">
              <div className="journeyDateHeading">
                <label htmlFor="dateofjourney">date of journey</label>
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
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
