import React, { useEffect, useState } from 'react'
import './YourCars.css'
import YourCarCard from './YourCarCard'
import { Link } from 'react-router-dom'

const YourCars = () => {

    const [cars, setCars] = useState([]) 

    useEffect(() => {
        setCars(JSON.parse(window.localStorage.getItem('yourcar')));
    }, []);
    

  return (
    <>
        <div className="your-cars-container">
            <Link to="/login" className="loginbtn-cars">Dashboard</Link>
            <h1 className="your-cars-title">Your Cars</h1>
            <div className="your-cars-sub-container">
                <div className="your-cars-card-container">
                    {
                        cars != null ? (
                        cars.map((car, index) => (
                            <YourCarCard key={index} car={car} />
                        )))
                        :
                        (<p className="no-cars">You have no cars listed</p>)
                    }
                    {/* <YourCarCard /> */}
                </div>
                <div className="your-cars-rent-container">
                    <div className="row1-items1">
                        <h2 className="sub-title" id = "rent-title">Rent your car</h2>
                        <p className="findcars-p">Have a car that's not in use? Put it to work! With our "Rent Your Car" feature, you can easily list your vehicle on our platform and start earning by sharing it with our trusted community.</p>
                        <Link to = "/rentyourcar" className='findcars-btn1'>Rent Your Car</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default YourCars