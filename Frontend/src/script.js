const openButton = document.getElementById('openButton');

if (openButton) {
  openButton.addEventListener('click', () => {
    window.open('./Book.html', '_blank');
  });
}
