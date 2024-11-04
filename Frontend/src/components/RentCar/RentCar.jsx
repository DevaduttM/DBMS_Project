import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './RentCar.css'
import Logo from '../../assets/Logo.png';
import { rentInsert } from '../API/ApiCalls'

const RentCar = () => {

const [make, setMake] = useState("");
const [model, setModel] = useState("");
const [licensePlate, setLicensePlate] = useState("");
const [year, setYear] = useState("");
const [transmission, setTransmission] = useState("");
const [vehicleType, setVehicleType] = useState("");

const userdata = JSON.parse(window.localStorage.getItem('user'));

const rentData = { LicensePlate: licensePlate, Make: make, Model: model, Year: parseInt(year), CustomerID: userdata.id, transmission: transmission, VehicleType: vehicleType}

const handlerentSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await rentInsert(rentData);
        if (response === 'Duplicate Entry') {
            alert('This car is already rented. Please choose another one.')
        }

        // else{
        //     window.localStorage.setItem('')
        // }
    }
    catch(error){
        console.log(error);
    }
}

const handlepickup = (e) => {
    setVehicleType(e.target.value);
}


const handletransmission = (e) => {
    setTransmission(e.target.value);
}

  return (
    <>
        <div className="rentcar-container">
            <img className = "logo-img1" src={Logo} alt="" />
            <Link to="/dashboard" className="loginbtn-cars">Dashboard</Link>
            <h1 className="rentcar-title">Rent Your Car</h1>
            <form className = "rent-form" onSubmit={handlerentSubmit}>
                <div className="input-group">
                    <label className='rent-label' htmlFor="car-make">Car Make</label>
                    <input type="text" className='rent-input' id="car-make" name="car-make" required value = {make} onChange={(e) => setMake(e.target.value)} />
                </div>
                <div className="input-group">
                    <label className='rent-label' htmlFor="car-model">Car Model</label>
                    <input type="text" className='rent-input' id="car-model" name="car-model" required value = {model} onChange={(e) => setModel(e.target.value)} />
                </div>
                <div className="input-group">
                    <label className='rent-label' htmlFor="licence-plate">License Plate</label>
                    <input type="text" className='rent-input' id="license-plate" name="license-plate" required value = {licensePlate} onChange={(e) => setLicensePlate(e.target.value)} />
                </div>
                <div className="input-group">
                    <label className='rent-label' htmlFor="year">Year</label>
                    <input type="text" className='rent-input' id="year" name="year" required value = {year} onChange={(e) => setYear(e.target.value)} />
                </div>
                <div className="input-group">
                    <label className='rent-label' htmlFor="Transmission-Type">Transmission Type</label>
                    <select value={transmission} onChange={handletransmission} className='vehicle-type-dropdown' required>
                        <option className='rent-option' value="" disabled>Select Transmission Type</option>
                        <option className='rent-option' value="Automatic">Automatic</option>
                        <option className='rent-option' value="Manual">Manual</option>
                    </select>
                </div>
                <div className="input-group">
                    <label className='rent-label' htmlFor="Vehicle-Type">Vehicle Type</label>
                    <select value={vehicleType} onChange={handlepickup} className='vehicle-type-dropdown' required>
                        <option className='rent-option' value="" disabled>Select Vehicle Type</option>
                        <option className='rent-option' value="Hatchback">Hatchback</option>
                        <option className='rent-option' value="Sedan">Sedan</option>
                        <option className='rent-option' value="SUV">SUV</option>
                    </select>
                </div>
                <input className='book-btn2' type="submit" />
            </form>
        </div>
    </>
  )
}

export default RentCar
