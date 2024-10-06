import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle, FaFacebook, FaLongArrowAltRight  } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion'
import '../Signup/Signup.css'
import axios from 'axios';

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');

  const [loginstatus, setLoginstatus] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/login', {email: email, password: password})
    .then(res => {
      res.data.length > 0 ? navigate("/dashboard") : setLoginstatus(1)
    })
    
    .catch(err => {
      console.error(err);
    })
    
  }

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

export default Signup