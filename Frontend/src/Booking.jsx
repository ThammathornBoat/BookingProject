import React, { useState } from 'react';
import axios from 'axios';


function Booking() {
  // เข้าถึงค่าที่ต้องการจาก URL หรือ props แล้วนำมาใช้งาน
  return (
    <div>
      {/* เนื้อหาหน้า Booking */}
    </div>
  );
}



function BookingForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        nightsStay: 0,
        guestsCount: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://script.google.com/u/2/home/projects/1gpEyarcYiX8aWXpJMSUBR2KGzO6HFQ7h94FAU8KO-R7yPkmLScc71lcg/edit', formData)
            .then(response => {
                console.log(response.data);
                alert('Booking submitted successfully!');
                // Clear form data after submission if needed
                setFormData({
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    email: '',
                    nightsStay: 0,
                    guestsCount: 0
                });
            })
            .catch(error => {
                console.error('Error submitting booking:', error);
                alert('Error submitting booking. Please try again later.');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

            <label>Last Name:</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

            <label>Phone Number:</label>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Nights Stay:</label>
            <input type="number" name="nightsStay" value={formData.nightsStay} onChange={handleChange} required />

            <label>Guests Count:</label>
            <input type="number" name="guestsCount" value={formData.guestsCount} onChange={handleChange} required />

            <button type="submit">Confirm Booking</button>
        </form>
    );
}

export default BookingForm;
