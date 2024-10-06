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
            </div>
        </div>
    </>
  )
}

export default About