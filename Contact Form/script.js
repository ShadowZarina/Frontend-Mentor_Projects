






// Script for Success State Pop-up

const openPopupBtn = document.getElementById('open-popup-btn'); // Assuming you have a button to open the popup
const closePopupBtn = document.getElementById('close-popup-btn');
const popupOverlay = document.getElementById('popup-overlay');
const popupContainer = document.getElementById('popup-container');

// Function to open the popup
function openPopup() {
  popupOverlay.style.display = 'block';
  popupContainer.style.display = 'block';
}

// Function to close the popup
function closePopup() {
  popupOverlay.style.display = 'none';
  popupContainer.style.display = 'none';
}

// Event listeners to trigger popup actions
if (openPopupBtn) {
  openPopupBtn.addEventListener('click', openPopup);
}
closePopupBtn.addEventListener('click', closePopup);
popupOverlay.addEventListener('click', closePopup); // Close when clicking outside the popup