document.getElementById('openButton').addEventListener('click', function() {
    // เรียกใช้งานไฟล์ CSS ด้วย JavaScript
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../src/Login.css';
    document.head.appendChild(link);

    // เปลี่ยนหน้าเว็บไปยัง Booking.html
    window.location.href = 'Book.html';
    
});
