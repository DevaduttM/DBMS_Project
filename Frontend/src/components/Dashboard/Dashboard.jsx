import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import { AnimatePresence, motion } from 'framer-motion'
import { FaUserCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Dashboard = () => {

    const [dropdown, setDropdown] = useState(false);

    const handleDropdown = () => {
        setDropdown(!dropdown);
        console.log(dropdown);
    }

  return (
    <>
        <div className="main-container1" >
            <div className="top-container">
                <h1 className="welcome">Welcome User</h1>
                <div className="account" onClick={handleDropdown}>
                    <FaUserCircle />
                    <FaChevronDown />
                    <AnimatePresence>
                    {dropdown && <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{opacity: 0, y:-10}}
                    className="account-dropdown">
                        <Link to="/profile">Profile</Link>
                        <hr></hr>
                        <Link to = "/login">Logout</Link>
                    </motion.div>}
                    </AnimatePresence>
                    
                </div>
            </div>
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
            <div className="dash-row2">
                <div className="row2-item1">
                    <h2 className="sub-title">col 1</h2>
                </div>
                <div className="row1-items">
                    <h2 className="sub-title">col 2</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard