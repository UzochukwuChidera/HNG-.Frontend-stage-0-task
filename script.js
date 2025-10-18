// Select the time element
const timeElement = document.querySelector('[data-testid="test-user-time"]');

// Function to format the time nicely
function updateTime() {
  const now = new Date();

  // Get hours, minutes, and seconds
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  // Show time as HH:MM:SS
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Run it once immediately
updateTime();

// Update every second
setInterval(updateTime, 1000);
