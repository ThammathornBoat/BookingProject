import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import '../src/script';

function Accommodation(props) {
  const { _id, name, img, bedType, size, view, balcony, price } = props.room;
  const { onClickDeleteRoom, onBookNow } = props;
  const imagePath = `./photo/${img.toLowerCase().replace(/\s/g, '')}.png`;

  return (
    <div className="accommodation">
      <img src={imagePath} alt={name} />
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
        <button id="openButton" onClick={() => window.open('./Book.html', '_blank')}>จองเลย</button>

      </div>
    </div>
  );
}

function App() {
  const [rooms, setRooms] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [buttonPopup, setButtonPopup] = useState(false);

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

  }, []);

  const onBookNow = (id) => {
    setSelectedRoomId(id);  // Set selected room ID
    setButtonPopup(true);  // Open the popup
  }


  const onClickDeleteRoom = (id) => {
    axios.delete('http://127.0.0.1:5000/rooms/' + id)
    .then(response => {
        console.log('Room deleted:', response.data);
        setRooms(response.data);
    })
    .catch(error => {
        console.error('Error deleting room:', error);
    });
}

  return (
    <div>
      <header>
        <h1>Hotel Booking</h1>
      </header>

      <main>
        <div className="search-container">
          
        </div>

        <section className="accommodations">
        {Array.isArray(rooms) && rooms.length > 0 ? (
          rooms.map((room, index) => (
            <Accommodation key={index} room={room} onBookNow={onBookNow} onClickDeleteRoom={onClickDeleteRoom} />
          ))
        ) : (
          <p>No rooms available</p>
        )}

        </section>
      </main>
    </div>
  );
}

export default App;
