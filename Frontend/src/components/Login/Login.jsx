import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle, FaFacebook, FaLongArrowAltRight  } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion'
import '../Signup/Signup.css'
import axios from 'axios';
import {login} from '../API/ApiCalls'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');

  const [loginstatus, setLoginstatus] = useState(0);

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(email, password); 
      if (data.length > 0) {
        const user = {
          name: data[0].FirstName + ' ' + data[0].LastName,
          fname: data[0].FirstName,
          lname: data[0].LastName,
          email: data[0].Email,
          phone: data[0].PhoneNumber
        }
        window.localStorage.setItem('isLoggedIn', true);
        window.localStorage.setItem('user', JSON.stringify(user));
        navigate("/dashboard"); 
      } else {
        setLoginstatus(1);
      }
    } catch (error) {
      console.error("Login failed:", error);
      setLoginstatus(1);
    }
  };
    
  

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
      };
    
      const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            type: 'spring', 
            stiffness: 80,
          },
        },
      };

  return (
    <>
        <AnimatePresence>
        <div className="main-container">
            <motion.div
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1 }}
            transition={{duration: 1}}
            className="signup-container">
                <h1 className="signup-title">Log In</h1>
                <p>Log in with your details to use our full features</p><br></br><br></br>
                {/* <div className="socials-container">
                    <button className="social-btn"><FaGoogle /></button>
                    <button className="social-btn"><FaFacebook /></button>
                </div>
                <div className="or-div">
                    <hr className='or-line'></hr><span className='or-span'>OR</span>
                </div> */}
                <motion.form className="signup-form"  
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                onSubmit={handleSubmit}>
                    <motion.div className="form-group" variants={itemVariants}>
                        <input type="text" placeholder="Email" name='email'required onChange={e => setEmail(e.target.value)} />
                    </motion.div>
                    <motion.div className="form-group" variants={itemVariants}>
                        <input type="password" placeholder="Password" name='password'required onChange={e => setPassword(e.target.value)} />
                    </motion.div>
                    <motion.div className="form-group" variants={itemVariants}>
                        <button className='submit-btn' type="submit" name='submit'>Log In &nbsp; <FaLongArrowAltRight /> </button>
                    </motion.div>
                    <motion.p variants={itemVariants} className="already-account">Don't have an account? <Link className='to-login' to ="/signup">Sign Up</Link></motion.p>
                </motion.form>
                {loginstatus !== 0 ? 
                <motion.div
                initial = {{ x: 0}}
                animate = {{ x: [0,-10, 0, 10, 0]}}
                transition={{duration: 0.2}}
                className='message-container'>
                  <p id='error-p'>Invalid Credentials</p>
                </motion.div>: <></>}
            </motion.div>
        </div>
        </AnimatePresence>
    </>
  )
}

export default Login