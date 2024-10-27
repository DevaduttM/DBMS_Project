import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import userImg from '../../assets/shrek.jpg'
import './Profile.css'
import { IoMdExit } from "react-icons/io";

const Profile = () => {

    const[fname, setFname] = useState("John");
    const[lname, setLname] = useState("Doe");
    const[email, setEmail] = useState("johndoe@gmail.com");
    const[phone, setPhone] = useState("");
    const[dob, setDob] = useState("");
    const [user, setUser] = useState(null);
    
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            const parsedUser = JSON.parse(userData);
            setUser(parsedUser);
            setFname(parsedUser.fname);
            setLname(parsedUser.lname);
            setEmail(parsedUser.email);
            setPhone(parsedUser.phone);
            setDob(parsedUser.dob);
        }
    }, []);

    const handleNavigate = () => {
        navigate('/dashboard');
    }

  return (
    <>
            <div className="profile-container">
                <div className="header-section">
                    <div className="back-btn" onClick={handleNavigate}>
                        <IoMdExit style={{ transform: 'scaleX(-1)' }} />
                        <p>Dashboard</p>
                    </div>
                    <h1 className="profile-title">My Profile</h1>
                </div>
                <div className="profile-info">
                    <div className="img-container">
                        <img className='user-img' src={userImg} alt="" />
                    </div>
                    <div className="info-section">
                        <div className="info-section-div">
                            <p className='info-p'> First Name</p>
                            <input className="info-text" value={fname} onChange={e => setFname(e.target.value)} placeholder='NA'/>
                        </div>
                        <div className="info-section-div">  
                            <p className="info-p">Last Name</p>
                            <input className="info-text" value={lname} onChange={e => setLname(e.target.value)} placeholder='NA'/>
                        </div>

                        <div className="info-section-div">
                            <p className="info-p">Email</p>
                            <input className="info-text" value={email} onChange={e => setEmail(e.target.value)} placeholder='NA' />
                        </div>

                        <div className="info-section-div">
                            <p className="info-p">Phone</p>
                            <input className="info-text" value={phone} onChange={e => setPhone(e.target.value)} placeholder='NA'/>
                        </div>

                        <div className="info-section-div">
                            <p className="info-p">Date Of Birth</p>
                            <input className="info-text" value={dob} onChange={e => setDob(e.target.value)} placeholder='NA' />
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Profile