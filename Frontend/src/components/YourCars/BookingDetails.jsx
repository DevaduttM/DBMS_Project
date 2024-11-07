import React from 'react'

const BookingDetails = ({ booking, indexval }) => {

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
    }

  return (
    <>
        <div className="dashitem-past1">
            <p className='booking-details-p'>{indexval + 1}</p>
            <p className='booking-details-p'>{booking.FirstName + ' ' + booking.LastName}</p>
            {/* <p>3 Days</p> */}
            <div className="booking-dates">
                <p className='booking-details-p'>{formatDate(String(booking.ReservationStartDate).slice(0,10))}</p>
                <p className='booking-details-p'>to</p>
                <p className='booking-details-p'>{formatDate(String(booking.ReservationEndDate).slice(0,10))}</p>
            </div>
        </div>
    </>
  )
}

export default BookingDetails