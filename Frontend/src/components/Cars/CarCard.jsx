import React from 'react'
import './Cars.css'
import { Link } from 'react-router-dom'
import CarImg from '../../assets/Car_Image.png'

const CarCard = () => {
  return (
    <>
        <div className="carcard-container">
          <div className="carcard-details">
            <img src={ CarImg } alt="" />
            <p className="car-name-p">McLaren P1</p>
            <p className='transmission-p'>Manual</p>
            <div className="car-details-container">
              <div className="car-date-container">
                <p>2 Oct 2024</p>
                <p className="to-p">To</p>
                <p>3 Oct 2024</p>
              </div>
            </div>
            <hr className='cars-hr'/>
            <div className="price-container">
              <p>₹ 4000</p>
              <Link to = "/cardata" className="book-btn1">Details</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default CarCard