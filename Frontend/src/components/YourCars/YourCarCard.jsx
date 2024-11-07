import React, { useState } from 'react';
import CarImg1 from '../../assets/Car_Image.png';
import { AnimatePresence, motion } from 'framer-motion';
import BookingDetails from './BookingDetails';
import { carbookings } from '../API/ApiCalls';

const YourCarCard = ({ car }) => {
  const [bookings, setBookings] = useState(false);
  const [bookingdetails, setBookingDetails] = useState([]);

  const handleclick = async (vehicleID) => {
    setBookings(true);
    try {
      const bookingsData = await carbookings({VehicleID: vehicleID});
      setBookingDetails(bookingsData.data);
    } catch (error) {
      console.error(error);
    }
  };

  function addSpace(str) {
    return str.replace(/([a-zA-Z])(?=[^a-zA-Z\s])|(\d)(?=[^\d\s])/g, '$& ');
  }
  
  

  return (
    <>
      <div className="carcard-container">
        <div className="carcard-details">
          <img src={CarImg1} alt="" />
          <p className="car-name-p">{car.Make + ' ' + car.Model}</p>
          <p className="transmission-p">{car.transmission}</p>
          <p className="transmission-p">{addSpace(car.LicensePlate)}</p>
          <hr className="cars-hr" />
          <div className="price-container1">
            <p>Pickup: {car.PickUpLocation}</p>
            <button className="book-btn1" onClick={() => handleclick(car.VehicleID)}>Bookings</button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {bookings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bookings-container"
            onClick={() => setBookings(false)}
          >
            <div className="bookings-sub-container" onClick={(e) => e.stopPropagation()}>
              <h3>Bookings</h3>
              <div className="bookings-list">
                {bookingdetails.length > 0 ? (
                  bookingdetails.map((booking, index) => (
                    <BookingDetails key={index} booking={booking} indexval={index} />
                  ))
                ) : (
                  <p className='no-bookings'>No bookings available.</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default YourCarCard;
