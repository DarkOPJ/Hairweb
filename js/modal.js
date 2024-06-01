const popupContainer = document.querySelector('.outer-6');
const closeBtn = document.querySelector('.close-btn');
const body = document.querySelector('body');

// Function to show the popup and disable scrolling
const showPopup = () => {
    popupContainer.classList.add('popup-active');
    body.style.overflow = 'hidden'; // Disable scrolling
};

// Function to hide the popup and enable scrolling
const hidePopup = () => {
    popupContainer.classList.remove('popup-active');
    body.style.overflow = 'auto'; // Enable scrolling
};

// Event delegation for dynamically created buttons
document.addEventListener('click', event => {
    if (event.target.classList.contains('show-popup')) {
        showPopup();
    }
});

// Close button event listener
closeBtn.onclick = () => {
    hidePopup();
};

// Close popup when clicking outside the modal
window.onclick = event => {
    if (event.target === popupContainer) {
        hidePopup();
    }
};

