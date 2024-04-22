import React, { useEffect, useState } from 'react';
import "../../style/packages/Dodhamyatra.css";
import { Bounce } from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Lodder from "../lodder/Lodder";

const Dodhamyatra = () => {
    const [days, setDays] = useState(0);
    const [describe, setDescribe] = useState('');
    const [daydata, setDaydata] = useState([]);
    const [visibleTooltipIndex, setVisibleTooltipIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpens, setIsOpens] = useState(false);
    const { _id } = useParams()
    const [packageInclude, setPackageInclude] = useState([''])
    const [packageExclude, setPackageExclude] = useState([''])
    const [exchangedetails, setExchangedetails] = useState(false)
    const [hotels, setHotels] = useState([''])
    const [lodder, setLodder] = useState(false)

    // console.log(_id)

    useEffect(() => {
        setLodder(true)
        fetch(`https://parbhusewa-travel.onrender.com/package/getsingelpackage/${_id}`)
            .then(data => data.json())
            .then(dataid => {
                console.log(dataid)
                setDays(dataid?.packages.days.length);
                setDescribe(dataid?.packages.shortDescription);
                setDaydata(dataid?.packages.days);
                setPackageInclude(dataid?.packages.packageInclude)
                setPackageExclude(dataid?.packages.packageExclude)
                setHotels(dataid.packages.hotelAccommodation)
                setLodder(false)
            });
    }, [_id]);

    const showTooltip = (index) => {
        setVisibleTooltipIndex(index === visibleTooltipIndex ? null : index);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setIsOpens(false)
    };

    const toggleDropdownsecond = () => {
        setIsOpens(!isOpens)
        setIsOpen(false)
    }
    const Hoteldetails = () => {
        setExchangedetails(!exchangedetails)
        setIsOpen(false)
        setIsOpens(false)
    }
    return (

        <div className='dodham-container'>
            {
                lodder ? <><Lodder /></> : <>
                    <div className='textandcatogry-container'>
                        <div className='text-container'>
                            <div className='texts'>
                                <h2>({days - 1}-Night’s/{days}-Day’s Package)</h2>
                                <p >{describe}</p>
                            </div>
                            <div className='line'>
                                <div className='lines'>
                                    <hr className='line1' />
                                    <hr className='line2' />
                                </div>
                            </div>
                        </div>
                        <div className='catogry-container'>
                            <div className='all-catogry'>

                                <div className='Attraction-btn' onClick={() => toggleDropdown()}>
                                    <p>Package Include</p>
                                    {isOpen && (

                                        <ul className='Attraction-ul'>
                                            {
                                                packageInclude.map(res => (
                                                    <>

                                                        <li>{res}</li>

                                                    </>
                                                ))
                                            }


                                        </ul>
                                    )}
                                </div>


                                <div className='Attraction-btn' onClick={() => toggleDropdownsecond()}>
                                    <p>Package Exclude</p>
                                    {isOpens && (


                                        <ul className='Attraction-ul2'>
                                            {
                                                packageExclude.map(res => (
                                                    <>
                                                        <li>{res}</li>
                                                    </>
                                                ))
                                            }


                                        </ul>



                                    )}

                                </div>
                                {/* <button className='cato-btn'>Client’s Required Details</button> */}
                                <button className='cato-btn' onClick={() => Hoteldetails()}>{!exchangedetails ? 'Hotel Details' : "Days Details"}</button>
                                <Link to="/Termsofconditions">

                                    <button className='cato-btn'>Terms And Conditions</button>
                                </Link>
                            </div>
                            {/* mobile view */}
                            {isOpen && (

                                <div className='modal-attraction' onClick={() => setIsOpen(false)}>
                                    <div className='modal2'>

                                        <ul className='mobile-res'>
                                            {
                                                packageExclude.map(res => (
                                                    <>
                                                        <li>{res}</li>
                                                    </>
                                                ))
                                            }


                                        </ul>
                                    </div>
                                </div>


                            )}

                            {/* second modal mobile view */}
                            {isOpens && (

                                <div className='modal-attraction' onClick={() => setIsOpens(false)}>
                                    <div className='modal2'>

                                        <ul className='mobile-res'>
                                            {
                                                packageInclude.map(res => (
                                                    <>
                                                        <li>{res}</li>
                                                    </>
                                                ))
                                            }


                                        </ul>
                                    </div>
                                </div>


                            )}
                        </div>
                    </div>
                    <div className='dodham-packages-container'>
                        <div className='dodham-card-container'>
                            {
                                exchangedetails ? (<>
                                    {/* Hotel details page */}
                                    <div className='HotelsDetails-container'>
                                        {
                                            hotels?.map((hotels) => (

                                                <>
                                                    <Bounce >
                                                        <div className='hoteldetails-card'>
                                                            <div className='hotelnights'>
                                                                <h1> No of Nights : {hotels.nights}</h1>
                                                            </div>
                                                            <div className='image-box'>
                                                                <img className='images-hoteldetails' src={hotels?.image} alt='im' />
                                                            </div>
                                                            <div className='hotelpackagesdetails'>
                                                                <h1 className='hotelpackagescity'><span>City Name</span> : {hotels?.cityName}</h1>
                                                                <h4 className='valuePackage'><span>valuePackage</span> :- {hotels?.valuePackage}</h4>
                                                                <h4 className='comfortPackage'><span>comfortPackage</span> :-  {hotels?.valuePackage}</h4>
                                                            </div>
                                                        </div>
                                                    </Bounce>
                                                </>
                                            ))
                                        }




                                    </div>

                                </>) : (<>
                                    {daydata.map((res, index) => (
                                        <Bounce key={res._id}>
                                            <div className='dodham-card'>
                                                <div className='image-wrapper'>
                                                    <img className='image-dodham' src={res?.image} alt='' />
                                                    <div className='wrapper-container'>
                                                        <div className='day-container'>
                                                            <div className='day-packages-day'>
                                                                <p>Day {res.day}</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='textes-dodhamyatra'>
                                                    <div className='View-Program'>
                                                        <button onClick={() => showTooltip(index)}>View Program</button>
                                                        {visibleTooltipIndex === index && (
                                                            <div className='tool-tip-dodhamyatra'>
                                                                <p>distance :{res.distance}</p>
                                                                <p>timeTaken :{res.timeTaken}</p>
                                                                <p> modeOfTransportDay :{res.modeOfTransportDay}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className='all-text-dodhamyatra'>
                                                        <h2>{res.startingPoint} (To) {res.endpoint}</h2>
                                                        <div className='paratext'>

                                                            <p>
                                                                <ReactTypingEffect
                                                                    speed={50}
                                                                    eraseSpeed={0}
                                                                    typingDelay={false}
                                                                    eraseDelay={1000}
                                                                    text={res.description}
                                                                />
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Bounce>
                                    ))}

                                </>)
                            }



                        </div>
                    </div>

                </>
            }

        </div>
    );
};

export default Dodhamyatra;
