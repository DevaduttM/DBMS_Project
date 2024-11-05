import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Switch } from 'antd'
import '../Landing/Landing.css'
import { Link, useNavigate } from 'react-router-dom'
import { searchCar } from '../API/ApiCalls'

const CarSearch = () => {

    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
      setToggle(!toggle);
      console.log(toggle)
    }
  
    const [selectedPickup, setSelectedPickup] = useState("");
    const [selectedDropoff, setSelectedDropoff] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const navigate = useNavigate();

    const carData = {ReservationEndDate: endDate, ReservationStartDate: startDate, pickupLocation: selectedPickup}

    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        const result = await searchCar(carData)
        console.log(result)
        if(result.length === 0){
          alert("No cars available on given date")
        }
        navigate('/cars')

        const dates = {endDate: endDate, startDate: startDate, dropoff: selectedDropoff, pickup: selectedPickup}


        window.localStorage.setItem('cars', JSON.stringify(result))
        window.localStorage.setItem('dates', JSON.stringify(dates))
      }
      
      catch(error){
        console.log(error)
      }
    }

    console.log(startDate)
    console.log(endDate)

  
    const handleChange = (e) => {
      setSelectedPickup(e.target.value);
    };
  
  
    const handleChange1 = (e) => {
      setSelectedDropoff(e.target.value);
    };

    const handlescroll = () => {
        document.body.style.overflow = 'scroll'
    }


  return (
    <>
        <motion.div 
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        transition={{ease: 'easeInOut', duration: 0.7}}
        className="search-container">
          <h2 className="search-title">Search For Your Car</h2>
          <form className='search-form' action="#">
            <div className="switch-container">
              <Switch onClick={handleToggle}/>
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
            {
                toggle && (
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
                )
            }
            <div className="date-container">
              <div className="date-div">
                <input className='date-input' type="date" onChange={(e) => setStartDate(e.target.value)} />
                {/* <span className='date-placeholder'>Start Date</span> */}
              </div>
              <div className="date-div1">
                <input className='date-input' type="date" onChange={(e) => setEndDate(e.target.value)} />
                {/* <span className='date-placeholder'>End Date</span> */}
              </div>
            </div>
            <Link className="search-btn" to = "/cars" onClick={(e) => {handlescroll, handleSubmit(e)}} >Search</Link>
          </form>
        </motion.div>
    </>
  )
}

export default CarSearch