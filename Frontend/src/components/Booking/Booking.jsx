import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Booking.css'
import Img from '../../assets/Car_Image.png'
import ThanksImg from '../../assets/Thanks.png'

const Booking = () => {

    const navigate = useNavigate();

    const [showThanks, setShowThanks] = useState(false);

    useEffect(() => {
        if (showThanks) {
            document.body.style.overflow = "hidden"
            setTimeout(() => {setShowThanks(false), navigate('/dashboard')}, 3000)
        }
    })

  return (
    <>
        <div className="booking-container">
            <h1 className="booking-title">Book Your Ride</h1>
            <div className="booking-card-container">
                <div className="summary-card">
                    <h2 className="summary-title">SUMMARY</h2>
                    <div className="summary-sub-container">
                        <div className="summary-img-container">
                            <img className='summary-img' src={ Img } alt="" />
                        </div>
                        <div className="summary-data-container">
                            <div className="summary-date-container">
                                <p>03 Nov 2024</p>
                                <p className='summary-to'>To</p>
                                <p>05 Nov 2024</p>
                            </div>
                            <hr />
                            <p>Pickup Location: Kollam</p>
                            <p>Dropoff Location: Ernakulam</p>
                            <div className="price-container1">
                                <h2>Price</h2>
                                <p>4000.00</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="checkout-card">
                <h2 className="summary-title">CHECKOUT</h2>
                <div className="checkout-data-container">
                    <div className="checkout-data">
                        <p>Booking Fee:</p>
                        <p>4000</p>
                    </div>
                    <div className="checkout-data">
                        <p>CGST (14%)</p>
                        <p>500</p>
                    </div>
                    <div className="checkout-data">
                        <p>SGST (14%)</p>
                        <p>500</p>
                    </div>
                    <div className="checkout-data">
                        <p>Refundable Deposit</p>
                        <p>500</p>
                    </div>
                    <hr />
                    <div className="checkout-data">
                        <p className='checkout-p'>Total Payable Amount</p>
                        <p className='checkout-p'>5000</p>
                    </div>
                    <button className="book-btn3" onClick={(e) => setShowThanks(true)}>Make Payment</button>
                </div>
                </div>
            </div>
        </div>

        {
            showThanks && (
                <div className="thanks-container">
                    <div className="thanks-text">
                        <h2>Thank You for Booking!</h2>
                        <p>Your booking has been confirmed !</p>
                    </div>
                    <img src={ ThanksImg } alt="" />
                </div>
            )
        }

    </>
  )
}

export default Booking