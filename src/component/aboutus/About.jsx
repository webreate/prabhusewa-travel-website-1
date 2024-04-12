import React, {useState ,useEffect} from 'react'
import "../../style/aboutus/About.css"
import { Slide} from "react-awesome-reveal";


const About = () => {
  const [isMobileView, setIsMobileView] = useState(false);


  useEffect(() =>{
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768)
    }
  
    window.addEventListener("resize", handleResize);
  
    handleResize();
  
    return() => window.removeEventListener("resize", handleResize)
  },[]);

  return (
    <>
      <div className="about-container">
      {!isMobileView?(
        <>
        <div className="about-img">
        <Slide>
            <img className='img' src='https://media.istockphoto.com/id/1069264514/photo/spectacular-view-of-the-lakshman-temple-bathed-by-the-sacred-river-ganges-at-sunset.jpg?s=2048x2048&w=is&k=20&c=poQSlrVegA6IRKTEQNl2t-1Oor9y8CIM7qN1ERhw_50='  alt='about'/>
        </Slide>
        </div>
        <div className="para">
          <Slide direction='right'>
          <p>Welcome to Uttarakhand Dekho, where adventure meets serenity! We are a premier travel company dedicated to unlocking the enchanting beauty of Uttarakhand, India. Our passion lies in curating immersive journeys that showcase the rich cultural tapestry, diverse landscapes, and hidden gems of this Himalayan state. Uttarakhand Dekho is your gateway to unforgettable experiences, whether you seek thrilling mountain adventures, spiritual retreats, or tranquil escapes. Our expert team ensures seamless travel arrangements, personalized itineraries, and a commitment to sustainable tourism, allowing you to discover the soul-stirring magic of Uttarakhand with confidence and joy. Come, let Uttarakhand Dekho be your trusted companion on a journey of discovery and wonder!</p>
          </Slide>
        </div>
        </>
      ):( 
        <>
         <div className="para">
          <Slide direction='right'>
      <p>Welcome to Uttarakhand Dekho, where adventure meets serenity! We are a premier travel company dedicated to unlocking the enchanting beauty of Uttarakhand, India. Our passion lies in curating immersive journeys that showcase the rich cultural tapestry, diverse landscapes, and hidden gems of this Himalayan state. Uttarakhand Dekho is your gateway to unforgettable experiences, whether you seek thrilling mountain adventures, spiritual retreats, or tranquil escapes. Our expert team ensures seamless travel arrangements, personalized itineraries, and a commitment to sustainable tourism, allowing you to discover the soul-stirring magic of Uttarakhand with confidence and joy. Come, let Uttarakhand Dekho be your trusted companion on a journey of discovery and wonder!</p>
      </Slide>
    </div>
     <div className="about-img">
      <Slide>
     <img className='img' src='https://media.istockphoto.com/id/1069264514/photo/spectacular-view-of-the-lakshman-temple-bathed-by-the-sacred-river-ganges-at-sunset.jpg?s=2048x2048&w=is&k=20&c=poQSlrVegA6IRKTEQNl2t-1Oor9y8CIM7qN1ERhw_50='  alt='about'/>
     </Slide>
 </div>
</> 
)};  

      </div>
    </>
  )
}

export default About;
