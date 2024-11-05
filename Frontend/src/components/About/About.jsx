import React from 'react'
import './About.css'
import Navbar from '../Navbar/Navbar'

const About = () => {
  return (
    <>
        <div className="about-container">
            <Navbar />
            <div className="box-container">
                <h1 className='about-title'>About Us</h1>
                <p>Welcome to TorqHub, your trusted partner in flexible and convenient car rental and sharing. We believe in providing not only transportation solutions but also experiences that enable freedom, flexibility, and empowerment. Our platform is tailored for everyone—from the occasional traveler looking for a weekend getaway vehicle, to city dwellers needing a convenient daily commute, to car owners seeking to earn extra income by sharing their vehicle.!</p>
            </div>
        </div>
    </>
  )
}

export default About