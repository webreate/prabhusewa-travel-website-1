import React from 'react'
import "../../style/packages/Dodhamyatra.css"
const Dodhamyatra = () => {



    const showtooltip = () => {
        let ToolTip = document.querySelector(".tool-tip-dodhamyatra");
        if (ToolTip.style.display === "none") {
            ToolTip.style.display = "block";
        } else {
            ToolTip.style.display = "none";
        }
    }







    return (
        <>
            <div className='dodham-container'>
                <div className='textandcatogry-container'>
                    <div className='text-container'>
                        <div className='texts'>
                            <h2>(3-Night’s/4-Day’s Package)</h2>
                            <p>Do dham yatra comprise of god’s abodes of Kedarnath Ji Devoted To Lord Shiva & Badrinath Ji devoted to lord vishnu as going for this yatra a we enter high altitude places and remote areas of Beautiful Uttarakhand where this sector is open only for 6 months in a year knowing the sector deeply all aspects are taken care of offering our Pilgrims Safety Comfort And Warmth of human touch with our extended services..Read More</p>
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
                            <select className='our-packages'>
                                <option value="volvo">Our Package Inclusions:</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                            <select className='Attraction'>
                                <option value="volvo">Attraction</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                            <button className='cato-btn'>Client’s Required Details</button>
                            <button className='cato-btn'>Terms And Conditions</button>
                        </div>

                    </div>
                </div>
                {/* product packages items */}


                <div className='dodham-packages-container'>
                    <div className='dodham-card-container'>

                        < div className='dodham-card'>
                            <div className='image-wrapper'>
                                <img className='image-dodham' src='https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvbWV8ZW58MHx8MHx8fDA%3D' alt='' />
                                <div className='wrapper-container'>
                                    <div className='day-container'>
                                        <div className='day'>
                                            <p>Day 1</p>
                                        </div>

                                    </div>
                                    <div className='images-related'>
                                        <div className='images-dodham'>
                                            <img className='images-dodham-all' src='https://media.istockphoto.com/id/1223306508/photo/close-up-of-hindu-god-rama-idol.webp?b=1&s=170667a&w=0&k=20&c=NXRw174cY564HbRGwrfvLbOoBR3Gv-PhKnzOSaxg72M=' alt='' />
                                            <img className='images-dodham-all' src='https://media.istockphoto.com/id/1223306508/photo/close-up-of-hindu-god-rama-idol.webp?b=1&s=170667a&w=0&k=20&c=NXRw174cY564HbRGwrfvLbOoBR3Gv-PhKnzOSaxg72M=' alt='' />
                                            <img className='images-dodham-all' src='https://media.istockphoto.com/id/1223306508/photo/close-up-of-hindu-god-rama-idol.webp?b=1&s=170667a&w=0&k=20&c=NXRw174cY564HbRGwrfvLbOoBR3Gv-PhKnzOSaxg72M=' alt='' />
                                            {/* <img className='images-dodham-all' src='https://media.istockphoto.com/id/1223306508/photo/close-up-of-hindu-god-rama-idol.webp?b=1&s=170667a&w=0&k=20&c=NXRw174cY564HbRGwrfvLbOoBR3Gv-PhKnzOSaxg72M=' alt=''/> */}
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className='textes-dodhamyatra'>
                                <div className='View-Program'>
                                    <button onClick={() => showtooltip()}>View Program</button>
                                    <div className='tool-tip-dodhamyatra'>

                                        <div className='tool-radio'>
                                            <input type="radio" id="1" name="fav_language" value="HTML" />
                                            <label for="1">Sahastradhara helipad to sersi helipad</label>
                                        </div>
                                        <div className='tool-radio'>
                                            <input type="radio" id="2" name="fav_language" value="HTML" />
                                            <label for="2">Sersi to kedarnath</label>
                                        </div>
                                        <div className='tool-radio'>
                                            <input type="radio" id="3" name="fav_language" value="HTML" />
                                            <label for="3">Kedarnath darshan</label>
                                        </div>
                                        <div className='tool-radio'>
                                            <input type="radio" id="4" name="fav_language" value="HTML" />
                                            <label for="4">In afternoon come back to gupt kashi for an overnight stay</label>
                                        </div>


                                    </div>
                                </div>


                                <div className='all-text-dodhamyatra'>
                                    <h2>VISIT KEDARNATH (DEHRADUN)</h2>
                                    <p>We have include every detail comfort & charges applicable from dehradun helipad to back dehradun helipad that you will encounter on your do dham yatra after booking with us you are ready to move on a journey of a lifetime..</p>
                                </div>
                            </div>
                        </div>

                        < div className='dodham-card'>
                            <div className='image-wrapper'>
                                <img className='image-dodham' src='https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvbWV8ZW58MHx8MHx8fDA%3D' alt='' />
                                <div className='wrapper-container'>
                                    <div className='day-container'>
                                        <div className='day'>
                                            <p>Day 1</p>
                                        </div>

                                    </div>
                                    <div className='images-related'>
                                        <div className='images-dodham'>
                                            <img className='images-dodham-all' src='https://media.istockphoto.com/id/1223306508/photo/close-up-of-hindu-god-rama-idol.webp?b=1&s=170667a&w=0&k=20&c=NXRw174cY564HbRGwrfvLbOoBR3Gv-PhKnzOSaxg72M=' alt='' />
                                            <img className='images-dodham-all' src='https://media.istockphoto.com/id/1223306508/photo/close-up-of-hindu-god-rama-idol.webp?b=1&s=170667a&w=0&k=20&c=NXRw174cY564HbRGwrfvLbOoBR3Gv-PhKnzOSaxg72M=' alt='' />
                                            <img className='images-dodham-all' src='https://media.istockphoto.com/id/1223306508/photo/close-up-of-hindu-god-rama-idol.webp?b=1&s=170667a&w=0&k=20&c=NXRw174cY564HbRGwrfvLbOoBR3Gv-PhKnzOSaxg72M=' alt='' />
                                            {/* <img className='images-dodham-all' src='https://media.istockphoto.com/id/1223306508/photo/close-up-of-hindu-god-rama-idol.webp?b=1&s=170667a&w=0&k=20&c=NXRw174cY564HbRGwrfvLbOoBR3Gv-PhKnzOSaxg72M=' alt=''/> */}
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className='textes-dodhamyatra'>
                                <div className='View-Program'>
                                    <button onClick={() => showtooltip()}>View Program</button>
                                    <div className='tool-tip-dodhamyatra'>

                                        <div className='tool-radio'>
                                            <input type="radio" id="1" name="fav_language" value="HTML" />
                                            <label for="1">Sahastradhara helipad to sersi helipad</label>
                                        </div>
                                        <div className='tool-radio'>
                                            <input type="radio" id="2" name="fav_language" value="HTML" />
                                            <label for="2">Sersi to kedarnath</label>
                                        </div>
                                        <div className='tool-radio'>
                                            <input type="radio" id="3" name="fav_language" value="HTML" />
                                            <label for="3">Kedarnath darshan</label>
                                        </div>
                                        <div className='tool-radio'>
                                            <input type="radio" id="4" name="fav_language" value="HTML" />
                                            <label for="4">In afternoon come back to gupt kashi for an overnight stay</label>
                                        </div>


                                    </div>
                                </div>


                                <div className='all-text-dodhamyatra'>
                                    <h2>VISIT KEDARNATH (DEHRADUN)</h2>
                                    <p>We have include every detail comfort & charges applicable from dehradun helipad to back dehradun helipad that you will encounter on your do dham yatra after booking with us you are ready to move on a journey of a lifetime..</p>
                                </div>
                            </div>
                        </div>
                        < div className='dodham-card'>
                            <div className='image-wrapper'>
                                <img className='image-dodham' src='https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvbWV8ZW58MHx8MHx8fDA%3D' alt='' />
                                <div className='wrapper-container'>
                                    <div className='day-container'>
                                        <div className='day'>
                                            <p>Day 1</p>
                                        </div>

                                    </div>
                                    <div className='images-related'>
                                        <div className='images-dodham'>
                                            <img className='images-dodham-all' src='https://media.istockphoto.com/id/1223306508/photo/close-up-of-hindu-god-rama-idol.webp?b=1&s=170667a&w=0&k=20&c=NXRw174cY564HbRGwrfvLbOoBR3Gv-PhKnzOSaxg72M=' alt='' />
                                            <img className='images-dodham-all' src='https://media.istockphoto.com/id/1223306508/photo/close-up-of-hindu-god-rama-idol.webp?b=1&s=170667a&w=0&k=20&c=NXRw174cY564HbRGwrfvLbOoBR3Gv-PhKnzOSaxg72M=' alt='' />
                                            <img className='images-dodham-all' src='https://media.istockphoto.com/id/1223306508/photo/close-up-of-hindu-god-rama-idol.webp?b=1&s=170667a&w=0&k=20&c=NXRw174cY564HbRGwrfvLbOoBR3Gv-PhKnzOSaxg72M=' alt='' />
                                            {/* <img className='images-dodham-all' src='https://media.istockphoto.com/id/1223306508/photo/close-up-of-hindu-god-rama-idol.webp?b=1&s=170667a&w=0&k=20&c=NXRw174cY564HbRGwrfvLbOoBR3Gv-PhKnzOSaxg72M=' alt=''/> */}
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className='textes-dodhamyatra'>
                                <div className='View-Program'>
                                    <button onClick={() => showtooltip()}>View Program</button>
                                    <div className='tool-tip-dodhamyatra'>

                                        <div className='tool-radio'>
                                            <input type="radio" id="1" name="fav_language" value="HTML" />
                                            <label for="1">Sahastradhara helipad to sersi helipad</label>
                                        </div>
                                        <div className='tool-radio'>
                                            <input type="radio" id="2" name="fav_language" value="HTML" />
                                            <label for="2">Sersi to kedarnath</label>
                                        </div>
                                        <div className='tool-radio'>
                                            <input type="radio" id="3" name="fav_language" value="HTML" />
                                            <label for="3">Kedarnath darshan</label>
                                        </div>
                                        <div className='tool-radio'>
                                            <input type="radio" id="4" name="fav_language" value="HTML" />
                                            <label for="4">In afternoon come back to gupt kashi for an overnight stay</label>
                                        </div>


                                    </div>
                                </div>


                                <div className='all-text-dodhamyatra'>
                                    <h2>VISIT KEDARNATH (DEHRADUN)</h2>
                                    <p>We have include every detail comfort & charges applicable from dehradun helipad to back dehradun helipad that you will encounter on your do dham yatra after booking with us you are ready to move on a journey of a lifetime..</p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default Dodhamyatra
