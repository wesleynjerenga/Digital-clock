// Select the clock elements
const hoursElement = document.querySelector('.clock .hours');
const minutesElement = document.querySelector('.clock .minutes');
const secondsElement = document.querySelector('.clock .seconds');

// Function to update the clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Update the text content of the clock elements
    hoursElement.textContent = hours.toString().padStart(2, '0'); // Add leading zero
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();