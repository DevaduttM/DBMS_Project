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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cum minima perferendis quia, recusandae voluptas quo sapiente totam dolorum dolor vero eum ipsum eos reprehenderit voluptatibus tempore fugiat sit, molestias deleniti debitis veritatis. Facere nisi fuga aperiam dolorum est corporis et dolorem labore iste rerum tempore quo eligendi eveniet, culpa aliquid ullam sapiente minus adipisci exercitationem aut magni voluptatem. Veritatis, enim id repudiandae amet sequi rem! Ratione magnam sequi voluptatibus!</p>
            </div>
        </div>
    </>
  )
}

export default About