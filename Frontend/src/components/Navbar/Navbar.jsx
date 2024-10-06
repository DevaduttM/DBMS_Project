import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TbMenuDeep } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../../assets/Logo.png';
import './Navbar.css';

const Navbar = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      
      {isMobile && (
        <motion.div className="mobile-nav-container">
          {
            isOpen ? <MdClose className="hamburger-icon" onClick={toggleMenu} /> : <TbMenuDeep className="hamburger-icon" onClick={toggleMenu} />
            
          }
            <motion.div variants={itemVariants}>
              <img src={Logo} alt="Logo" className="logo-img-top"  style={{marginLeft: "20px"}}/>
            </motion.div>
        </motion.div>
      )}
      <AnimatePresence>
      <nav onClick={closeNav} className={`${isMobile && !isOpen ? 'nav-hidden' : 'nav-container-active'}`} >
        <motion.div
          className={`nav-container ${isMobile && !isOpen ? 'nav-hidden' : 'nav-container-active'}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          onClick={(e) => e.stopPropagation()}
          exit= "exit"
        >

          <motion.div variants={itemVariants}>
            <img src={Logo} alt="Logo" className="logo-img" />
          </motion.div>


          <div className="link-container">
            <motion.div variants={itemVariants}>
              <Link className="link-a" to="/" onClick={toggleMenu}>
                Home
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link className="link-a" to="/about" onClick={toggleMenu}>
                About
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link className="link-a" to="/cars" onClick={toggleMenu}>
                Cars
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <a className="link-a" href="#Contact" onClick={toggleMenu}>
                Contact Us
              </a>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <Link to="/login" className="loginbtn">
              Log In
            </Link>
          </motion.div>
        </motion.div>
      </nav>
      </AnimatePresence>
    </>
  );
};

export default Navbar;
