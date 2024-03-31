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
        { 
            id: 1, 
            name: '1 King Bed 1 Bedroom Suite With Balcony', 
            price: 2490, 
            description: '1 King Bed', 
            available: true,
            image: '../../photo/1bed1king.png',
            roomType: 'สวีท 1 ห้องนอน 1 เตียงคิงไซส์ มีระเบียง (1 King Bed 1 Bedroom Suite With Balcony)',
            roomSize: '36 ตารางเมตร',
            view: 'เมือง',
            balcony: true
            
        },
        { 
            id: 2, 
            name: '1 King Bed Standard', 
            price: 1890, 
            description: '1 King Bed', 
            available: true,
            image: '../../photo/1king.png',
            roomType: 'ห้องมาตรฐาน 1 เตียงคิงไซส์ (1 King Bed Standard)',
            roomSize: '28 ตารางเมตร',
            view: 'เมือง',
            balcony: true
            
        },
        { 
            id: 3, 
            name: '2 Single Beds Standard City View Balcony', 
            price: 1690, 
            description: '2 Single Bed', 
            available: true,
            image: '../../photo/2single.png',
            roomType: 'ห้องมาตรฐาน 2 เตียงเดี่ยว วิวเมือง มีระเบียง (2 Single Beds Standard City View Balcony)',
            roomSize: '24 ตารางเมตร',
            view: 'เมือง',
            balcony: true
            
        },
        { 
            id: 4, 
            name: 'Standard Room)', 
            price: 1690, 
            description: '1 Standard Bed', 
            available: true,
            image: '../../photo/standard.png',
            roomType: 'ห้องมาตรฐาน (Standard Room)',
            roomSize: '24 ตารางเมตร',
            view: 'เมือง',
            balcony: true
            
        },
    ];

    const roomDetailsContainer = document.getElementById('roomDetails');
    roomDetailsContainer.innerHTML = ''; // Clear previous content

    if (roomsData.length > 0) {
        roomsData.forEach(room => {
            if (room.available) { // เพิ่มเงื่อนไขเช็คว่าห้องพักว่างหรือไม่
                const roomElement = createAccommodationCard(room);
                roomDetailsContainer.appendChild(roomElement);
            }
        });
    } else {
        roomDetailsContainer.textContent = 'No available rooms for the selected dates and guests.';
    }
    

function createAccommodationCard(room) {
    const accommodationDiv = document.createElement('div');
    accommodationDiv.classList.add('accommodation');

    const image = document.createElement('img');
    image.src = room.image;
    image.alt = room.name;
    accommodationDiv.appendChild(image);

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');

    const typeHeading = document.createElement('h3');
    typeHeading.textContent = room.roomType;
    infoDiv.appendChild(typeHeading);

    const sizeParagraph = document.createElement('p');
    sizeParagraph.textContent = `Size: ${room.roomSize}`;
    infoDiv.appendChild(sizeParagraph);

    const viewParagraph = document.createElement('p');
    viewParagraph.textContent = `View: ${room.view}`;
    infoDiv.appendChild(viewParagraph);

    const balconyParagraph = document.createElement('p');
    balconyParagraph.textContent = `Balcony: ${room.balcony ? 'Yes' : 'No'}`;
    infoDiv.appendChild(balconyParagraph);

    const priceParagraph = document.createElement('p');
    priceParagraph.textContent = `Price: ฿${room.price} / night`;
    infoDiv.appendChild(priceParagraph);

    const bookButton = document.createElement('button');
    bookButton.textContent = 'Book Now';
    bookButton.addEventListener('click', function() {
        location.href = 'booking.html';
    });
    infoDiv.appendChild(bookButton);

    accommodationDiv.appendChild(infoDiv);

    return accommodationDiv;
}

}
