import React from 'react'
import NotFoundImg from '../../assets/NotFound1.png'
import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <div className="not-found-container">
      <div className="not-found-title">
        <h1>404</h1>
        <h2>Oops! Wrong Turn 🚗💨</h2>
        <p>Looks like you've taken a detour! This page is off the map, maybe parked somewhere else or in the shop.<br></br>Here's what you can do instead:</p>
        <ul>
          <li>🏠 Return to the starting line: <Link to = "/" className='home-link1'>Head Home</Link></li>
          <li>🔍 Check your route: Double-check that link, and maybe you'll find the right road!</li>
        </ul>
        <p>No worries - every great journey has a few detours!</p>
      </div>
      <img src={ NotFoundImg } alt="" />

    </div>
    </>
  )
}

export default NotFound