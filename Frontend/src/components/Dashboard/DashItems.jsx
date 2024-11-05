import React from 'react'
import './Dashboard.css'

const DashItems = ({details, carIndex}) => {

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
}

  return (
    <>
        <div className="dashitem">
            <p>{carIndex + 1}</p>
            <p>{details.Make + ' ' +  details.Model}</p>
            <p>{formatDate(String(details.ReservationStartDate).slice(0,-14))}</p>
        </div>
    </>
  )
}

export default DashItems