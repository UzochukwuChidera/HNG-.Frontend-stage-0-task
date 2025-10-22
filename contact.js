document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");
  const errorMsg = document.getElementById("error");
  const successMsg = document.getElementById("success");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    errorMsg.textContent = "";
    successMsg.textContent = "";

    if (!nameInput.value.trim()) {
      errorMsg.textContent = "Please enter your full name.";
      return;
    }

    const emailValue = emailInput.value.trim();
    if (!emailValue || !emailValue.includes("@") || !emailValue.includes(".")) {
      errorMsg.textContent = "Please enter a valid email address.";
      return;
    }

    if (!subjectInput.value.trim()) {
      errorMsg.textContent = "Please enter a subject.";
      return;
    }

    if (messageInput.value.trim().length < 10) {
      errorMsg.textContent = "Message must be at least 10 characters long.";
      return;
    }

    successMsg.textContent = "✅ Message sent successfully!";
    form.reset();

    setTimeout(() => {
      successMsg.textContent = "";
    }, 3000);
  });
});
