import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Cars.css'
import { AiTwotoneHome } from "react-icons/ai";
import { LuFilter } from "react-icons/lu";
import { AnimatePresence, motion } from 'framer-motion'
import CarCard from './CarCard';
import Navbar from '../Navbar/Navbar';
import Logo from '../../assets/Logo.png';

const Cars = () => {

const [btnsel, setBtnsel] = useState(0);
const [dropdwn, setDropdwn] = useState(0);
const [hatchback, setHatchback] = useState(false);
const [sedan, setSedan] = useState(false);
const [suv, setSuv] = useState(false);
const [automatic, setAutomatic] = useState(false);
const [manual, setManual] = useState(false);
const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


const loggedIn = window.localStorage.getItem('isLoggedIn');

const handlebtnsel1 = () => {
    setBtnsel(1);
}

const handlebtnsel2 = () => {
    setBtnsel(2);
}

const handledropdwn = () => {
    setDropdwn(!dropdwn);
}

const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  window.scrollTo(0,0);

  return (
    <>
        <div className="cars-container">
            <img className = "logo-img1" src={Logo} alt="" />
            <Link to="/login" className="loginbtn-cars">
                {
                loggedIn? 'Dashboard' : 'Log In'
                }
            </Link>
            <h1 className="cars-title">Find Your Car</h1>
            <div className="cars-nav">
                {
                    isMobile ? <Link to = "/" className='home-link'><AiTwotoneHome />Home</Link> : <Link to = "/" className='home-link'><AiTwotoneHome />Go to Home</Link> 
                                
                }
                <div className="sort-div">
                    <p>Sort by:</p>
                    <button className={btnsel === 1 ?'sort-btn active' : 'sort-btn'} onClick={handlebtnsel1}>Price: Low to High</button>
                    <button className={btnsel === 2 ?'sort-btn active' : 'sort-btn'} onClick={handlebtnsel2}>Price: High to Low</button>
                </div>
                <div className="filter-div">
                    <p onClick={handledropdwn} className='filter-p'><LuFilter />Filter</p>

                    <AnimatePresence>
                    {
                        dropdwn &&
                        <div className="dropdwn-container" onClick={(e) => setDropdwn(false)}>
                        <motion.div 
                        initial = {{opacity: 0, y: -10}}
                        animate = {{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -10}}
                        className="filter-dropdown" onClick={(e) => e.stopPropagation()}>
                            <h4>Filter By</h4>
                            <hr />
                            <p>Seating Capacity :</p>
                            <div className="checkbox-div1">
                                <input type="checkbox" id = "checkbox1" checked = {hatchback} onChange={() => setHatchback(!hatchback)} />
                                <label htmlFor="checkbox1">Hatchback</label>
                                <input type="checkbox" id = "checkbox2" checked = {sedan} onChange={() => setSedan(!sedan)}/>
                                <label htmlFor="checkbox2">Sedan</label>
                                <input type="checkbox" id = "checkbox3" checked = {suv} onChange={() => setSuv(!suv)} />
                                <label htmlFor="checkbox3">SUV</label>
                            </div>
                            <p>Transmission :</p>
                            <div className="checkbox-div2">
                                <input type="checkbox" id = "checkbox4" checked = {automatic} onChange={() => setAutomatic(!automatic)} />
                                <label htmlFor="checkbox4">Automatic</label>
                                <input type="checkbox" id = "checkbox5" checked = {manual} onChange={() => setManual(!manual)} />
                                <label htmlFor="checkbox5">Manual</label>
                            </div>
                        </motion.div>
                        </div>
                    }
                    </AnimatePresence>
                </div>
            </div>
            <div className="cars-list-container">
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
            </div>
        </div>
    </>
  )
}

export default Cars