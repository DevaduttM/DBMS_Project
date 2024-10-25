import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <>
        <div className="main-container">
            <h1 className="welcome">Welcome User</h1>
            <div className="dash-row1">
                <div className="row1-items">
                    <h2 className="sub-title">Upcoming Rentals</h2>
                </div>
                <div className="row1-items">
                <h2 className="sub-title">Find Cars</h2>
                </div>
                <div className="row1-items">
                    <h2 className="sub-title">col 3</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard