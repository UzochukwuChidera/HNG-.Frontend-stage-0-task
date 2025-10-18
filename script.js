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
