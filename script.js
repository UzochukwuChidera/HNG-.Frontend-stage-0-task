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

// --- CONTACT PAGE VALIDATION ---
window.addEventListener("DOMContentLoaded", function () {
  console.log("✅ Script loaded correctly"); // helps confirm it’s running

  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");
  const errorMessage = document.getElementById("error");
  const successMessage = document.getElementById("success");

  // check if form exists (avoid running on other pages)
  if (!form) {
    console.log("Form not found on this page.");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // clear old messages
    errorMessage.textContent = "";
    successMessage.textContent = "";

    // get input values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    // email pattern
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    // validation checks
    if (!name || !email || !subject || !message) {
      errorMessage.textContent = "❌ Please fill in all fields.";
      return;
    }

    if (!emailPattern.test(email)) {
      errorMessage.textContent = "❌ Invalid email address.";
      return;
    }

    if (message.length < 10) {
      errorMessage.textContent = "❌ Message must be at least 10 characters.";
      return;
    }

    // success message
    successMessage.textContent = "✅ Message sent successfully!";
    form.reset();

    // clear success after 5 seconds
    setTimeout(() => {
      successMessage.textContent = "";
    }, 5000);
  });
});
