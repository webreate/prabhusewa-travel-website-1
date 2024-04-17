import React, { useEffect, useState } from "react";
import "../../style/packages/Herododham.css";
import { IoSearchSharp } from "react-icons/io5";
import { Fade, Bounce } from "react-awesome-reveal";
import { useParams } from 'react-router-dom';

const Allpackegeshero = () => {
  const [packagesname, setPackagesname] = useState([''])
  const [describe, setDescribe] = useState(['']);
  const { _id } = useParams()
  console.log(_id)

  useEffect(() => {

    fetch(`https://parbhusewa-travel.onrender.com/package/getsingelpackage/${_id}`)
      .then(data => data.json())
      .then(dataid => {
        console.log(dataid.packages.packageName)
        setPackagesname(dataid.packages.packageName)
        setDescribe(dataid?.packages.shortDescription);

      });
  }, [_id]);
  return (
    <>
      <div className="Allpackeges-container">
        <div className="image-container">
          {/* <img
            className="allpackeges-image"
            src="https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=2048x2048&w=is&k=20&c=Pi-Ca0DtIojLjWVcy_-LLMk2ISsSf5kg5NJtAntxGOY="
            alt="people_crowd"
          /> */}
        </div>
        <div className="over-text-container">
          <div className="ser-container">
            <div className="input-container">
              <IoSearchSharp className="ser-icon" />
              <input
                className="ser-inp"
                type="search"
                placeholder="What your want to search"
              />
            </div>
          </div>
          <div className="text-packeges-container">
            <div className="text-packges">
              <Bounce>
                <h1>{packagesname}</h1>
              </Bounce>

              <Fade>
                <p>
                  {describe}
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allpackegeshero;
