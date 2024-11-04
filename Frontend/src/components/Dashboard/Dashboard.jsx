import React, { useEffect, useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import './Dashboard.css';
import { AnimatePresence, motion } from 'framer-motion';
import { FaUserCircle, FaChevronDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import DashItems from './DashItems';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import DashItemsPast from './DashItemsPast';
import CarSearch from '../CarSearch/CarSearch';
import Trophy from '../../assets/Trophy.png'
 
const Dashboard = () => {
    const [dropdown, setDropdown] = useState(false);
    const [user, setUser] = useState(null);
    const [showSearch, setShowSearch] = useState(false);
    const [rewardValue, setRewardValue] = useState(4);
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

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };
    showSearch ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

    return (
        <>
            <div className="main-container1" onClick={() => setDropdown(false)}>
                <div className="top-container">
                    <h1 className="welcome">
                        {`Welcome ${user ? user.fname + ' ' + user.lname : 'Guest'}`}
                    </h1>
                    
                </div>
                <motion.div 
                initial={{ opacity: 0, scale: 0.98}}
                animate = {{ opacity: 1, scale: 1}}
                transition={{duration: 0.7}}
                className="dash-row1">
                    <div className="row1-items">
                        <h2 className="sub-title">Upcoming Rentals</h2>
                        <DashItems />
                        <DashItems />
                    </div>
                    <div className="row1-items">
                        <h2 className="sub-title">Find Cars</h2>
                        <p className='findcars-p'>Ready to explore our extensive collection of rental cars? Click "Find Your Car" to discover a wide range of vehicles suited to every style and need. From compact cars to luxurious SUVs, our selection is designed to make your journey comfortable, convenient, and enjoyable.</p>
                        <button onClick={toggleSearch} className="findcars-btn">Find Your Car</button>
                    </div>
                    <div className="row1-items">
                        <h2 className="sub-title" id = "rent-title">Rent your car</h2>
                        <p className="findcars-p">Have a car that’s not in use? Put it to work! With our "Rent Your Car" feature, you can easily list your vehicle on our platform and start earning by sharing it with our trusted community.</p>
                        <Link to = "/rentyourcar" className='findcars-btn'>Rent Your Car</Link>
                    </div>
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, scale: 0.98}}
                animate = {{ opacity: 1, scale: 1}}
                transition={{duration: 0.7 }}
                className="dash-row2">
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
                            {
                                rewardValue >= 5 && rewardValue < 10 ? ( <div className='progress-content'> <img src={ Trophy } className='trophy-img' alt="" /> 
                                <p className='reward-p'>Congratulations</p>
                                </div> )

                                : (
                                <div className='progress-content'>
                                <CircularProgressbar value={rewardValue} maxValue={5} text={`${rewardValue}/5`} className='progress-circle' styles={buildStyles({
                                    pathColor: '#5be271',
                                    strokeLineCap: 'butt',
                                    trailColor: '#3f3d3d',
                                    textColor: '#5be271',
                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                })} />
                                <p className='reward-p'>Complete 5 rental transactions to unlock your first reward !</p>
                                </div>
                            )
                                }
                        </div>
                        
                    </div>
                </motion.div>
            <AnimatePresence>
            {
                showSearch && (
                    <motion.div
                    initial={{ opacity: 0}}
                    animate = {{ opacity: 1}}
                    exit={{opacity: 0}}
                    className="car-search-container">
                        <IoMdClose className='close-icon' onClick={toggleSearch} />
                        <CarSearch onClick={(e) => e.stopPropagation()} />
                    </motion.div>
                )
            }
            </AnimatePresence>
            </div>

            <div className="account" onClick={handleDropdown}>
                <FaUserCircle />
                <FaChevronDown />
                <AnimatePresence>
                    {dropdown && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="account-dropdown">
                            <Link to = "/">Home</Link>
                            <hr></hr>
                            <Link to="/profile">Profile</Link>
                            <hr />
                            <Link to="/login" onClick={handleLogout}>Logout</Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </>
    );
};

export default Dashboard;
