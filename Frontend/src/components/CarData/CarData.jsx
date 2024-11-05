import React from 'react'
import './CarData.css'
import Navbar from '../Navbar/Navbar'
import CarImage from '../../assets/Car_Image.png'
import { useNavigate } from 'react-router-dom'

const CarData = () => {

    const navigate = useNavigate()

  return (
    <>
        <div className="main-container3">
            <Navbar />
            <div className="cardata-title-section">
                <h1 className="cardata-title">McLaren<br></br><span>P1</span></h1>
            </div>

            <div className="cardata-body">
                <img className='car-img' src={CarImage} alt="" />
                <div className="cardata-info">
                    <h2 className="info-title">STATS</h2>
                    <div className="cardata-info-table">
                        <div className="info">
                            <p>Distance Travelled</p>
                            <p>300Km</p>
                        </div>
                        <div className="info">
                            <p>Fuel</p>
                            <p>Petrol</p>
                        </div>
                        <div className="info">
                            <p>Insurance Valid Till</p>
                            <p>10/27</p>
                        </div>
                        <div className="info">
                            <p>Distance Travelled</p>
                            <p>300Km</p>
                        </div>
                    </div>
                    <button className="book-btn" onClick={(e) => navigate('/booking')}>Book Now</button>
                </div>
            </div>

        </div>
    </>
  )
}

export default CarData