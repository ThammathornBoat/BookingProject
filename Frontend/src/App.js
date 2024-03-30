// script.js
document.getElementById('searchBtn').addEventListener('click', function() {
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const numGuests = document.getElementById('numGuests').value;

    // Assuming you have a function fetchRoomDetailsFromDatabase(checkin, checkout, numGuests) to fetch room details
    fetchRoomDetailsFromDatabase(checkin, checkout, numGuests);
});

function fetchRoomDetailsFromDatabase(checkin, checkout, numGuests) {
    // Fetch room details from database based on checkin, checkout, and numGuests
    // Example code for fetching data from a hypothetical database
    const roomsData = [
        { id: 1, name: 'Standard Room', price: 1699, description: '1 King Bed', available: true },
        { id: 2, name: 'Suite', price: 2499, description: '1 King Bed, Balcony', available: true },
        { id: 3, name: 'Single Room', price: 1899, description: '2 Single Beds', available: true },
        { id: 4, name: 'Single Room', price: 1899, description: '2 Single Beds', available: true }
        // Add more room data as needed
    ];
    
    // Filter available rooms
    const availableRooms = roomsData.filter(room => room.available);
    
    // Display room details
    const roomDetailsContainer = document.getElementById('roomDetails');
    roomDetailsContainer.innerHTML = ''; // Clear previous content
    
    if (availableRooms.length > 0) {
        availableRooms.forEach(room => {
            const roomElement = document.createElement('div');
            roomElement.classList.add('room-card');
            if (room.available) {
                roomElement.classList.add('available');
            } else {
                roomElement.classList.add('not-available');
            }
            roomElement.innerHTML = `
                <h2>${room.name}</h2>
                <p>${room.description}</p>
                <p>Price: ฿${room.price} / night</p>
                <button onclick="location.href='booking.html';">Book Now</button>
            `;
            roomDetailsContainer.appendChild(roomElement);
        });
    } else {
        roomDetailsContainer.textContent = 'No available rooms for the selected dates and guests.';
    }
}    