import React from 'react'
import "../../style/privacypolicy/Privacycontent.css"
import { Slide} from "react-awesome-reveal";


const Privacycontent = () => {
  return (
    <>
    <div className="main-content">
    <h4 id='p-head'>Welcome to Prabhu Sewa!</h4>
    <ul className='Sub-content'>
    <Slide>
        <li>
            <p id='p-para'>Introduction</p>
      <p id='p-para2'>This Privacy Policy outlines how we collect, use, maintain, and disclose information obtained from visitors ("Users") of our Website. We are committed to protecting your privacy and ensuring the security of your personal information. By using our Website, you agree to the terms of this Privacy Policy.</p>
      </li>
      <hr/>
      </Slide>
      <Slide>
        <li>
            <p id='p-para'>Information We Collect</p>
      <p id='p-para2'>We may collect personal identification information from Users in various ways, including when they visit our Website, register on the Website, place an order, subscribe to the newsletter, respond to a survey, fill out a form, or engage with other activities, services, features, or resources we make available on our Website. Users may be asked for their name, email address, mailing address, phone number, or payment information. Users may, however, visit our Website anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personal identification information, except that it may prevent them from engaging in certain Website-related activities.</p>
      </li>
      <hr/>
      </Slide>
      <Slide>
        <li>
            <p id='p-para'>How We Use Collected Information</p>
      <p id='p-para2'>We may collect and use Users' personal information for the following purposes:
- To personalize user experience: We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Website.
- To improve our Website: We continually strive to improve our Website offerings based on the information and feedback we receive from you.
- To process transactions: We may use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.
- To send periodic emails: We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or User may contact us via our Website.</p>
      </li>
      <hr/>
      </Slide>
      <Slide>
        <li>
            <p id='p-para'>How We Protect Your Information</p>
      <p id='p-para2'>We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Website.</p>
      </li>
      </Slide>
      
      
      </ul>
    </div>
    </>
    )
}

export default Privacycontent
