import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Cars.css'
import { AiTwotoneHome } from "react-icons/ai";
import { LuFilter } from "react-icons/lu";
import { AnimatePresence, motion } from 'framer-motion'
import CarCard from './CarCard';

const Cars = () => {

const [btnsel, setBtnsel] = useState(0);
const [dropdwn, setDropdwn] = useState(0);

const handlebtnsel1 = () => {
    setBtnsel(1);
}

const handlebtnsel2 = () => {
    setBtnsel(2);
}

const handledropdwn = () => {
    setDropdwn(!dropdwn);
}

  return (
    <>
        <div className="cars-container">
            <h1 className="cars-title">Our Cars</h1>
            <div className="cars-nav">
                <Link to = "/" className='home-link'><AiTwotoneHome />Go to Home</Link>
                <div className="sort-div">
                    <p>Sort by:</p>
                    <button className={btnsel === 1 ?'sort-btn active' : 'sort-btn'} onClick={handlebtnsel1}>Price: Low to High</button>
                    <button className={btnsel === 2 ?'sort-btn active' : 'sort-btn'} onClick={handlebtnsel2}>Price: High to Low</button>
                </div>
                <div className="filter-div">
                    <p onClick={handledropdwn}><LuFilter />Filter</p>

                    <AnimatePresence>
                    {
                        dropdwn &&
                        <motion.div 
                        initial = {{opacity: 0, y: -10}}
                        animate = {{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -10}}
                        className="filter-dropdown">
                            <h4>Filter By</h4>
                            <hr />
                            <p>Seating Capacity :</p>
                            <div className="checkbox-div1">
                                <input type="checkbox" id = "checkbox1" />
                                <label htmlFor="checkbox1">Hatchback</label>
                                <input type="checkbox" id = "checkbox2" />
                                <label htmlFor="checkbox2">Sedan</label>
                                <input type="checkbox" id = "checkbox3" />
                                <label htmlFor="checkbox3">SUV</label>
                            </div>
                            <p>Transmission :</p>
                            <div className="checkbox-div2">
                                <input type="checkbox" id = "checkbox4" />
                                <label htmlFor="checkbox4">Automatic</label>
                                <input type="checkbox" id = "checkbox5" />
                                <label htmlFor="checkbox5">Manual</label>
                            </div>
                        </motion.div>
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