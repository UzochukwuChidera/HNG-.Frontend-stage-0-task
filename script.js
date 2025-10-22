function updateTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  const now = new Date();

  // Get hours, minutes, seconds, and milliseconds
  let hours = String(now.getHours()).padStart(2, '0');
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');
  let milliseconds = String(now.getMilliseconds()).padStart(3, '0');

  // Combine them together
  const timeString = `${hours}:${minutes}:${seconds}.${milliseconds}`;

  // Show it on the card
  timeElement.textContent = timeString;
}

// Update every 100 milliseconds
setInterval(updateTime, 100);

// Run once at the start
updateTime();


// --- PROFILE PAGE CLOCK ---
const timeElement = document.querySelector('[data-testid="test-user-time"]');
if (timeElement) {
  function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const millis = now.getMilliseconds().toString().padStart(3, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}:${millis}`;
  }
  setInterval(updateTime, 100);
  updateTime();
}

 