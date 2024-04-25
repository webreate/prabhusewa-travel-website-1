import React from 'react'
import '../../style/Termsandconditions/Termsofconditionscontent.css'
import { Slide} from "react-awesome-reveal";

const Termsofconditionscontent = () => {
  return (
    <>
      <div className="main-content">
        <div className="t-head">
            <h4 id='text'>Terms and conditions</h4>
            </div>
            <div className="sub-content">
                <ul>
                    <Slide>
                    <li>
                        <p>Booking and Payment: All bookings are subject to availability and must be confirmed with full payment. Payment methods and deadlines will be provided upon booking confirmation.</p>
                    </li>
                    <li>
                        <p>Cancellation and Refunds: Cancellation policies vary depending on the service provider and may incur cancellation fees. Refunds, if applicable, will be processed according to the cancellation policy.</p>
                    </li>
                    <li>
                        <p>Travel Documents: Travelers are responsible for ensuring they possess valid passports, visas, and any other necessary travel documents required for entry into India or specific destinations within India.</p>
                    </li>
                    <li>
                        <p>Health and Safety: Travelers should comply with all health and safety guidelines provided by the Indian government and local authorities. It is recommended to obtain appropriate travel insurance coverage.</p>
                    </li>
                    <li>
                        <p>Tour Itineraries: While every effort is made to adhere to published itineraries, the Indian tourism ministry and its affiliates reserve the right to modify or cancel tours due to unforeseen circumstances or events beyond their control.</p>
                    </li>
                    <li>
                        <p>Liability: The Indian tourism ministry and its affiliates are not liable for any loss, damage, injury, or inconvenience incurred during travel. Travelers are responsible for their own safety and well-being.</p>
                    </li>
                    <li>
                        <p>Code of Conduct: Travelers are expected to adhere to local customs, laws, and regulations while visiting India. Any behavior deemed offensive, disruptive, or illegal may result in removal from the tour without refund.</p>
                    </li>
                    <li>
                        <p>Complaints and Disputes: Any complaints or disputes should be addressed promptly to the tour operator or relevant authority for resolution. Failure to resolve issues on-site should be reported to the Indian tourism ministry for further assistance.</p>
                    </li>
                    <li>
                        <p>Force Majeure: The Indian tourism ministry and its affiliates shall not be liable for any failure or delay in performance due to circumstances beyond their reasonable control, including but not limited to natural disasters, acts of terrorism, or governmental actions.</p>
                    </li> 
                    <li>
                        <p>Governing Law: These terms and conditions are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in India.</p>
                    </li>
                    </Slide>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Termsofconditionscontent
