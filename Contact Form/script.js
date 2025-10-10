// ELEMENTS FOR IDS OF EVERY INPUT 

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const query = document.getElementsByName('query');
const textarea = document.getElementById('textarea');

// FOR SUCCESS STATE POPUP

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



// Submit data

function submitInput() {
  const submit = document.getElementById('submit');
  const submitClicked = submit.isClicked;
}


// FOR ERROR MESSAGES IN EACH INPUT


// Check if inputs are correct
function validateInput() {
    const errorMessage = document.getElementsByClassName('errorMessage');
    const fnameErrorMessage = document.getElementById('fnameErrorMessage');
    const lnameErrorMessage = document.getElementById('lnameErrorMessage');
    const validEmailMessage = document.getElementById('validEmailErrorMessage');
    const emailErrorMessage = document.getElementById('emailErrorMessage');
    const radioErrorMessage = document.getElementById('radioErrorMessage');
    const msgErrorMessage = document.getElementById('messageErrorMessage');
    const consentErrorMessage = document.getElementById('consentErrorMessage');
    
    // const inputValue = inputField.value.trim(); // Get and trim the input value

    // Clear previous error message
    // errorMessageElement.textContent = ''; 

    // First Name
    if (fname.value === '') {
      fnameErrorMessage.style.display = block;
    }

    if (lname.value === '') {
      fnameErrorMessage.style.display = block;
    }

    if (email.value == '') {
      fnameErrorMessage.style.display = block;
    }

    if (email.value !== '') {
      emailIsValid();
      if (false) {
        validEmailMessage.style.display = block;
      }
    }

    if (query.value === '') {
      radioErrorMessage.style.display = block;
    }

    if (msg.value === '') {
      msgErrorMessage.style.display = block;
    }

    /*
    if (inputValue === '') {
        errorMessageElement.textContent = 'This field cannot be empty.';
        inputField.classList.add('error-border'); // Add a class for styling the input
    } else if (inputValue.length < 5) {
        errorMessageElement.textContent = 'Input must be at least 5 characters long.';
        inputField.classList.add('error-border');
    } else {
        // Input is valid
        alert('Input is valid!');
        inputField.classList.remove('error-border'); // Remove error styling
    */

    }
}

// Check if consent checkbox is checked
function consentInput() {

    const consent = document.getElementById("consent"); 
    const isChecked = consent.checked; 

    if (isChecked) {
      if (submitClicked) {

      }
    }
}

// Check if email address is valid
function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}