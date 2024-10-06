import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle, FaFacebook, FaLongArrowAltRight  } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion'
import './Signup.css'
import axios from 'axios';

const Signup = () => {

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

      const navigate = useNavigate();

      const [validLength, setValidLength] = useState(false);
      const [firstname, setFirstname] = useState("");
      const [lastname, setLastname] = useState("");
      // const [username, setUsername] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      const handleUserChange = (e) => {
        setUsername(e.target.value);
        // e.target.value.length > 2 || e.target.value.length == 0 ? setValidLength(false) : setValidLength(true)
        // console.log(e.target.value.length)
        // console.log(validLength)
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password };
        console.log(newUser);
        axios.post('http://localhost:8081/signup', newUser)

       .then(res => {
          console.log(res.data)
          if(res.data === 2){
            setEmail("");
            alert("Email already Exists");
          }
          else{
            alert("Signup Succesful. Please login"); 
            navigate('/login');
          }
        })

       .catch(err => {
          console.log(err);
        });

      }


  return (
    <>
        <AnimatePresence>
        <div className="main-container">
            <motion.div
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1 }}
            transition={{duration: 1}}
            className="signup-container">
                <h1 className="signup-title">Sign Up Account</h1>
                <p>Enter your personal details to create your account</p><br></br><br></br>
                {/* <div className="socials-container">
                    <button className="social-btn"><FaGoogle /></button>
                    <button className="social-btn"><FaFacebook /></button>
                </div>
                <div className="or-div">
                    <hr className='or-line'></hr><span className='or-span'>OR</span>
                </div> */}
                <motion.form 
                className="signup-form"  
                onSubmit={handleSubmit}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                >
                    
                    <motion.div className="form-group" variants={itemVariants}>
                        <input type="text" placeholder="First Name" name='firstname'required onChange={e => setFirstname(e.target.value)}/>
                    </motion.div>
                    <motion.div className="form-group" variants={itemVariants}>
                        <input type="text" placeholder="Last Name" name='lastname'required onChange={e => setLastname(e.target.value)}/>
                    </motion.div>
                    {/* <motion.div className="form-group" variants={itemVariants}>
                        <input type="text" placeholder="Username" onChange = {handleUserChange} name='username'required  value={username}/>
                        <AnimatePresence>
                        {
                            validLength &&
                            <motion.p
                            initial = {{opacity: 0, y: -10}}
                            animate = {{ opacity: 1, y: 0}}
                            exit = {{opacity: 0, y: -10}}
                            transition={{ease: 'easeInOut', duration: 0.2}}
                            className="validlength">Username should be at least 3 characters long</motion.p>
                        }
                        </AnimatePresence>
                    </motion.div> */}
                    <motion.div className="form-group" variants={itemVariants}>
                        <input type="email" placeholder="Email" name='email'required onChange={e => setEmail(e.target.value)} value={email} />
                    </motion.div>
                    <motion.div className="form-group" variants={itemVariants}>
                        <input type="password" placeholder="Password" name='password'required onChange={e => setPassword(e.target.value)} />
                    </motion.div>
                    <motion.div className="form-group" variants={itemVariants}>
                        <button className='submit-btn' type="submit" name='submit'>Sign Up &nbsp; <FaLongArrowAltRight /> </button>
                    </motion.div>
                    <motion.p variants={itemVariants} className="already-account">Already have an account? <Link className='to-login' to ="/login">Login</Link></motion.p>
                </motion.form>

            </motion.div>
        </div>
        </AnimatePresence>
    </>
  )
}

export default Signup