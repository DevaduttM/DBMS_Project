import React from 'react'
import './Dashboard.css'

const DashItemsPast = ({details, carIndex}) => {

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
}
  return (
    <>
        <div className="dashitem-past">
            <p>{carIndex + 1}</p>
            <p>{details.Make + ' ' + details.Model}</p>
            {/* <p>3 Days</p> */}
            <p>{formatDate(String(details.ReservationEndDate).slice(0,10))}</p>
            <p>₹ {details.price}</p>
        </div>
    </>
  )
}

export default DashItemsPast