import React, { useEffect, useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import './Dashboard.css';
import { AnimatePresence, motion } from 'framer-motion';
import { FaUserCircle, FaChevronDown } from "react-icons/fa";
import DashItems from './DashItems';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import DashItemsPast from './DashItemsPast';

const Dashboard = () => {
    const [dropdown, setDropdown] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    const handleDropdown = () => {
        setDropdown(!dropdown);
    };

    const handleLogout = () => {
        window.localStorage.removeItem('isLoggedIn');
        window.localStorage.removeItem('user');
        setUser(null);
        // navigate('/login');
        <Navigate to = "/login" />
    };

    return (
        <>
            <div className="main-container1">
                <div className="top-container">
                    <h1 className="welcome">
                        {`Welcome ${user ? user.fname + ' ' + user.lname : 'Guest'}`}
                    </h1>
                    <div className="account" onClick={handleDropdown}>
                        <FaUserCircle />
                        <FaChevronDown />
                        <AnimatePresence>
                            {dropdown && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="account-dropdown"
                                >
                                    <Link to = "/">Home</Link>
                                    <hr></hr>
                                    <Link to="/profile">Profile</Link>
                                    <hr />
                                    <Link to="/login" onClick={handleLogout}>Logout</Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="dash-row1">
                    <div className="row1-items">
                        <h2 className="sub-title">Upcoming Rentals</h2>
                        <DashItems />
                        <DashItems />
                    </div>
                    <div className="row1-items">
                        <h2 className="sub-title">Find Cars</h2>
                        <p className='findcars-p'>Ready to explore our extensive collection of rental cars? Click "Find Your Car" to discover a wide range of vehicles suited to every style and need. From compact cars to luxurious SUVs, our selection is designed to make your journey comfortable, convenient, and enjoyable.</p>
                        <Link to="/cars" className="findcars-btn">Find Your Car</Link>
                    </div>
                    <div className="row1-items">
                        <h2 className="sub-title" id = "rent-title">Rent your car</h2>
                        <p className="findcars-p">Have a car that’s not in use? Put it to work! With our "Rent Your Car" feature, you can easily list your vehicle on our platform and start earning by sharing it with our trusted community.</p>
                        <Link to = "/rentyourcar" className='findcars-btn'>Rent Your Car</Link>
                    </div>
                </div>
                <div className="dash-row2">
                    <div className="row2-item1">
                        <h2 className="sub-title1">Rental History</h2>
                        <DashItemsPast />
                        <DashItemsPast />
                        <DashItemsPast />
                        <DashItemsPast />
                    </div>
                    <div className="row1-items">
                        <h2 className="sub-title">Rewards</h2>
                        <div className="progress">
                            <CircularProgressbar value={4} maxValue={5} text={'4/5'} styles={buildStyles({
                                pathColor: '#5be271',
                                strokeLineCap: 'butt',
                                trailColor: '#3f3d3d',
                                textColor: '#5be271'
                            })} />
                        </div>
                        <p className='reward-p'>Complete 5 rental transactions to unlock your first reward !</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
