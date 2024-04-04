import React from "react";
import "../../style/Form/Form.css";

const Form = () => {
  return (
    <>
      <div className="globle">
        <div className="book-form-Container">
          <div className="book-form-heading">
            <h1>Write Your Query Here!</h1>
          </div>
          <div className="book-form-division">
            <form action="" className="form-tag">
              <div className="form-tag-line-1  line">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="Full Name"
                  id="full name"
                />
                <input
                  type="number"
                  placeholder="Phone No"
                  name="Phone No"
                  id="number"
                />
              </div>
              <div className="form-tag-line-2  line">
                <input
                  type="email"
                  placeholder="E-mail"
                  name="Email"
                  id="email"
                />
                <input
                  type="number"
                  name="Travelling no"
                  id="TravelingNo"
                  placeholder="No of People Travelling"
                />
              </div>
              <div className="form-tag-line-3 line">
                <select id="Package" className="package">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
                <select id="Budge" className="budge">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <div className="form-tag-line-4 line">
                <input
                  style={{ background: "transparent" }}
                  type="text"
                  name=""
                  id=""
                  placeholder="message"
                />
              </div>
              <div className="form-tag-line-5 line">
                <input type="date" name="" id="" />
                <input type="submit" name="button" id="book-btn" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
