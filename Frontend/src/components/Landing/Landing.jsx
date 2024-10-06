import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Switch } from 'antd'
import { motion, AnimatePresence } from 'framer-motion'
import './Landing.css'
import Navbar from '../Navbar/Navbar'

const Landing = () => {

  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle)
  }

  const [selectedPickup, setSelectedPickup] = useState("");
  const [selectedDropoff, setSelectedDropoff] = useState("");

  const handleChange = (e) => {
    setSelectedPickup(e.target.value);
  };


  const handleChange1 = (e) => {
    setSelectedDropoff(e.target.value);
  };

  return (
    <>
      <div className="landing-container">
        <Navbar />
        <motion.h1 
        initial = {{opacity: 0, y: 0}}
        animate = {{opacity: 1, y: 0}}
        transition={{duration: 2}}
        className="landing-title">TorqHub</motion.h1>
        <motion.div 
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        transition={{ease: 'easeInOut', duration: 0.7}}
        className="search-container">
          <h2 className="search-title">Search For Your Car</h2>
          <form className='search-form' action="#">
            <div className="switch-container">
              <Switch onClick={handleToggle} defaultChecked/>
              <p>Return to same location</p>
            </div>
            <div className="pickup-input">
              <select value={selectedPickup} onChange={handleChange} id = "pickup_loc_list">
                <option value="" disabled>
                  Select Pickup Location
                </option>
                <option value="Kochi">Kochi</option>
                <option value="Trivandrum" placeholder = "Choose Pickup Location">Trivandrum</option>
              </select>
            </div>
            <AnimatePresence>
            {
              toggle?
              <motion.div 
              initial = {{opacity: 0, y: -10}}
              animate = {{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -10}}
              transition={{type: "spring", stiffness: 100}}
              className="dropoff-input">
                <select value={selectedDropoff} onChange={handleChange1} id = "pickup_loc_list">
                <option value="" disabled>
                  Select Dropoff Location
                </option>
                <option value="Kochi">Kochi</option>
                <option value="Trivandrum" placeholder = "Choose Pickup Location">Trivandrum</option>
              </select>
              </motion.div>
              :
              null
            }
            </AnimatePresence>
            <div className="date-container">
              <div className="date-div">
                <input className='date-input' type="date" />
                {/* <span className='date-placeholder'>Start Date</span> */}
              </div>
              <div className="date-div1">
                <input className='date-input' type="date" />
                {/* <span className='date-placeholder'>End Date</span> */}
              </div>
            </div>
            <button className="search-btn">Search</button>
          </form>
        </motion.div>
      </div>
    </>
  )
}

export default Landing