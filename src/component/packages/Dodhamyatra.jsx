import React, { useEffect, useState } from 'react';
import "../../style/packages/Dodhamyatra.css";
import { Bounce } from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
    console.log(_id)

    useEffect(() => {
        fetch(`https://parbhusewa-travel.onrender.com/package/getsingelpackage/${_id}`)
            .then(data => data.json())
            .then(dataid => {
                console.log(dataid)
                setDays(dataid?.packages.days.length);
                setDescribe(dataid?.packages.shortDescription);
                setDaydata(dataid?.packages.days);
                setPackageInclude(dataid?.packages.packageInclude)
                setPackageExclude(dataid?.packages.packageExclude)
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

    return (
        <div className='dodham-container'>
            <div className='textandcatogry-container'>
                <div className='text-container'>
                    <div className='texts'>
                        <h2>({days - 1}-Night’s/{days}-Day’s Package)</h2>
                        <p>{describe}</p>
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
                            <p>packageInclude</p>
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
                            <p>packageExclude</p>
                            {isOpens && (

                                <ul className='Attraction-ul'>
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
                        <button className='cato-btn'>Client’s Required Details</button>
                        <button className='cato-btn'>Hotel Details</button>
                        <Link to="/Termsofconditions">

                            <button className='cato-btn'>Terms And Conditions</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='dodham-packages-container'>
                <div className='dodham-card-container'>
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
                                        {/* <div className='images-related'>
                                            <div className='images-dodham'>
                                                <img className='images-dodham-all' src='https://media.istockphoto.com/id/1223306508/photo/close-up-of-hindu-god-rama-idol.webp?b=1&s=170667a&w=0&k=20&c=NXRw174cY564HbRGwrfvLbOoBR3Gv-PhKnzOSaxg72M=' alt='' />
                                                <img className='images-dodham-all' src='https://media.istockphoto.com/id/1223306508/photo/close-up-of-hindu-god-rama-idol.webp?b=1&s=170667a&w=0&k=20&c=NXRw174cY564HbRGwrfvLbOoBR3Gv-PhKnzOSaxg72M=' alt='' />
                                                <img className='images-dodham-all' src='https://media.istockphoto.com/id/1223306508/photo/close-up-of-hindu-god-rama-idol.webp?b=1&s=170667a&w=0&k=20&c=NXRw174cY564HbRGwrfvLbOoBR3Gv-PhKnzOSaxg72M=' alt='' />
                                            </div>
                                        </div> */}
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
                        </Bounce>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dodhamyatra;
