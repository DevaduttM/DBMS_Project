import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Booking.css'
import Img from '../../assets/Car_Image.png'
import ThanksImg from '../../assets/Thanks.png'
import { booking, dashboard, dashboard1 } from '../API/ApiCalls'

const Booking = () => {

    const navigate = useNavigate();

    const [showThanks, setShowThanks] = useState(false);

    const dates = JSON.parse(window.localStorage.getItem('dates'));
    const cars = JSON.parse(window.localStorage.getItem('cars'));
    const user = JSON.parse(window.localStorage.getItem('user'));
    const selectedCar = JSON.parse(window.localStorage.getItem('selectedCar'));
    const TotalFee = parseInt(selectedCar.price) + 2*(parseInt(parseInt(selectedCar.price) * 0.14)) + 2000
    const bookingData = {CustomerID: user.id, VehicleID: selectedCar.VehicleID, RentalStartDate: dates.startDate, RentalEndDate: dates.endDate}
    
    useEffect(() => {
        if (showThanks) {
            document.body.style.overflow = "hidden"
            setTimeout(() => {setShowThanks(false), navigate('/dashboard')}, 3000)
        }
    })

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
    }
    
    // var response2;
    // const booking2data = {TransactionID: response2, PaymentDate: '2024-11-05', Amount: TotalFee, PaymentMethod: "Online", amountReceived: 1};


    const handleBooking = async (e) => {
        try{
            const response = await booking(bookingData);
            const response2 = await dashboard();
            const response3 = await dashboard1();
            window.localStorage.setItem('upcoming', JSON.stringify(response2));
            window.localStorage.setItem('past', JSON.stringify(response3));
            // const response3 = await booking2(booking2data);
            // response2 = await booking3();
            console.log(response);
            // console.log(response2);
        }
        catch(error){
            console.error(error);
        }
    }

    window.scrollTo(0,0);


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
                            <p className='booked-car-name-p'>{selectedCar.Make + ' ' + selectedCar.Model}</p>
                            <div className="summary-date-container">
                                <p>{formatDate(dates.startDate)}</p>
                                <p className='summary-to'>To</p>
                                <p>{formatDate(dates.endDate)}</p>
                            </div>
                            <hr />
                            <p>Pickup Location: {dates.pickup}</p>
                            <p>Dropoff Location: {dates.dropoff}</p>
                            <div className="price-container1">
                                <h2>Price</h2>
                                <p>₹ {selectedCar.price}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="checkout-card">
                <h2 className="summary-title">CHECKOUT</h2>
                <div className="checkout-data-container">
                    <div className="checkout-data">
                        <p>Booking Fee:</p>
                        <p>{selectedCar.price}</p>
                    </div>
                    <div className="checkout-data">
                        <p>CGST (14%)</p>
                        <p>{parseInt(parseInt(selectedCar.price) * 0.14)}</p>
                    </div>
                    <div className="checkout-data">
                        <p>SGST (14%)</p>
                        <p>{parseInt(parseInt(selectedCar.price) * 0.14)}</p>
                    </div>
                    <div className="checkout-data">
                        <p>Refundable Deposit</p>
                        <p>2000</p>
                    </div>
                    <hr />
                    <div className="checkout-data">
                        <p className='checkout-p'>Total Payable Amount</p>
                        <p className='checkout-p'>₹ {parseInt(selectedCar.price) + 2*(parseInt(parseInt(selectedCar.price) * 0.14)) + 2000}</p>
                    </div>
                    <button className="book-btn3" onClick={(e) => {setShowThanks(true), handleBooking(e)} }>Make Payment</button>
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