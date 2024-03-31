import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function Accommodation(props) {
  const { name, bedType, size, view, balcony, price } = props.room;

  return (
    <div className="accommodation">
      <img src={`../../photo/${name.toLowerCase().replace(/\s/g, '')}.png`} alt={name} />
      <div className="info">
        <h3>{name}</h3>
        <p>{bedType}</p><br />
        <p>ขนาดห้อง: {size} ตารางเมตร</p><br />
        <p>วิว: {view}</p><br />
        <p>{balcony ? 'ระเบียง/ชานเรือน' : ''}</p><br />
        <h4>Price: ฿{price} / night</h4>
      </div>

      <div className="button-container">
        <h3>Booking (จองที่พัก)</h3>
        <p>เลือกห้องที่ถูกใจคุณ แล้วจองเลย!</p>
        <button onClick={() => { window.location.href = './public/booking.html'; }} className="search-button">จองเลย</button>
      </div>
    </div>
  );
}

function App() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/rooms');
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();

    const interval = setInterval(() => {
      fetchRooms();
    }, 400000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <header>
        <h1>Hotel Booking</h1>
      </header>

      <main>
        <div className="search-container">
          <div className="input-box">
            <label htmlFor="checkin">Check-in Date:</label>
            <input type="date" id="checkin" name="checkin" required />
          </div>
          <div className="input-box">
            <label htmlFor="checkout">Check-out Date:</label>
            <input type="date" id="checkout" name="checkout" required />
          </div>
          <div className="input-box">
            <label htmlFor="numPeople">จำนวนผู้เข้าพัก:</label>
            <input type="number" id="numPeople" name="numPeople" required />
          </div>
          <button id="searchBtn" onClick={() =>{}}>Search</button>
        </div>

        <section className="accommodations">
          {rooms.map((room, index) => (
            <Accommodation key={index} room={room} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;