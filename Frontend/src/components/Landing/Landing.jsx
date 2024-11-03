import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Switch } from 'antd'
import { motion, AnimatePresence } from 'framer-motion'
import './Landing.css'
import Navbar from '../Navbar/Navbar'
import CarSearch from '../CarSearch/CarSearch'

const Landing = () => {


  return (
    <>
      <div className="landing-container">
        <Navbar />
        <motion.h1 
        initial = {{opacity: 0, y: 0}}
        animate = {{opacity: 1, y: 0}}
        transition={{duration: 2}}
        className="landing-title">TorqHub</motion.h1>
        <CarSearch />
      </div>
    </>
  )
}

export default Landing