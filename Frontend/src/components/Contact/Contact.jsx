import React from 'react'
import Logo from '../../assets/Logo.png'
import { FaRegPaperPlane } from "react-icons/fa6";
import './Contact.css'
import { AnimatePresence, motion } from 'framer-motion'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "59b5cd08-aa68-4c57-bf5a-99190e045413");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
        <div className="contact-container">
          <motion.div
          className="sub-container"
          initial = {{scale: 0.8, opacity: 0.5}}
          whileInView={{scale: 1, opacity: 1}}
          transition={{duration: 0.5}}>
              <img src= {Logo} alt="" className='contact-logo'/>
              <h1 className='contact-title'>Contact Us</h1>
                  <form className="form-container" onSubmit={onSubmit}>
                      <div className="contact-row">
                        <input className='contact-input' type="text" placeholder="First Name" name='firstname' />
                        <input className='contact-input' type="text" placeholder="Last Name" name='lastname' />
                      </div>
                      <div className="contact-row">
                        <input className='contact-input' type="email" placeholder="Email Id"  name = "email"/>
                        <input className='contact-input' type="text" placeholder="Phone Number" name='phone' />
                      </div>
                      <div className="contact-row3">
                        <textarea placeholder="Message" name='message' />
                      </div>
                      <div className="contact-row">
                        <button type="submit" className='send-btn'>Send <FaRegPaperPlane /></button>
                      </div>
                  </form>
            </motion.div>
        </div>
    </>
  )
}

export default Contact