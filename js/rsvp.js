const rsvpForm = document.getElementById("rsvp-form");
const rsvpMessage = document.getElementById("rsvp-message");
const guestNameInput = document.getElementById("guest-name");
const guestNumberInput = document.getElementById("guest-number");

rsvpForm.addEventListener("submit", e => {
  e.preventDefault();

  const name = guestNameInput.value.trim();
  const guests = parseInt(guestNumberInput.value, 10);
  const text = translations[currentLanguage];

  guestNameInput.classList.remove("error");

  if (!name) {
    guestNameInput.classList.add("error");
    guestNameInput.focus();
    return;
  }

  const guest = {
    name,
    guests: guests || 1,
    time: new Date().toISOString()
  };

  localStorage.setItem("amaziyaGuest", JSON.stringify(guest));

  rsvpMessage.innerHTML = text.rsvpSuccess;
  rsvpForm.reset();
  guestNumberInput.value = "1";
});
