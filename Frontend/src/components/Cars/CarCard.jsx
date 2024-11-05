import React from 'react'
import './Cars.css'
import { Link, useNavigate } from 'react-router-dom'
import CarImg from '../../assets/Car_Image.png'

const CarCard = ({details, carIndex}) => {

  const navigate = useNavigate()

  const dates = JSON.parse(window.localStorage.getItem('dates'));

  const handleBookingClick = () => {
    window.localStorage.setItem('selectedCar', JSON.stringify(details));
    navigate('/booking');
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
}

  return (
    <>
        <div className="carcard-container">
          <div className="carcard-details">
            <img src={ CarImg } alt="" />
            <p className="car-name-p">{details.Make + ' ' + details.Model}</p>
            <p className='transmission-p'>{details.transmission}</p>
            <div className="car-details-container">
              <div className="car-date-container">
                <p>{formatDate(dates.startDate)}</p>
                <p className="to-p">To</p>
                <p>{formatDate(dates.endDate)}</p>
              </div>
            </div>
            <hr className='cars-hr'/>
            <div className="price-container">
              <p>₹ {details.price}</p>
              <button onClick={handleBookingClick} className="book-btn1">Book</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default CarCard