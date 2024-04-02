document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('openButton');
  
    if (openButton) {
      openButton.addEventListener('click', () => {
        window.open('./booking.html', '_blank');
      });
    }
  });
  