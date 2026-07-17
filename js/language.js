let currentLanguage = "english";

const languageButton = document.getElementById("language-btn");

function applyLanguage(lang) {
  currentLanguage = lang;
  const text = translations[currentLanguage];

  document.documentElement.lang = currentLanguage === "amharic" ? "am" : "en";

  document.getElementById("logo").innerHTML = text.logo;

  document.getElementById("eyebrow").innerHTML = text.eyebrow;
  document.getElementById("title").innerHTML = text.title;
  document.getElementById("amharic-title").innerHTML = text.amharicTitle;
  document.getElementById("subtitle").innerHTML = text.subtitle;
  document.getElementById("message").innerHTML = text.message;

  document.getElementById("nav-home").innerHTML = text.navHome;
  document.getElementById("nav-details").innerHTML = text.navDetails;
  document.getElementById("nav-gallery").innerHTML = text.navGallery;
  document.getElementById("nav-rsvp").innerHTML = text.navRsvp;

  document.getElementById("countdown-title").innerHTML = text.countdownTitle;
  document.getElementById("days-text").innerHTML = text.days;
  document.getElementById("hours-text").innerHTML = text.hours;
  document.getElementById("minutes-text").innerHTML = text.minutes;
  document.getElementById("seconds-text").innerHTML = text.seconds;

  if (typeof updateCountdown === "function") {
    updateCountdown();
  }

  document.getElementById("born").innerHTML = text.born;
  document.getElementById("birthday").innerHTML = text.birthday;
  document.getElementById("celebration").innerHTML = text.celebration;
  document.getElementById("date").innerHTML = text.date;

  document.getElementById("story-title").innerHTML = text.storyTitle;
  document.getElementById("story-text").innerHTML = text.storyText;

  document.getElementById("gallery-title").innerHTML = text.galleryTitle;

  document.getElementById("rsvp-title").innerHTML = text.rsvpTitle;
  document.getElementById("rsvp-subtitle").innerHTML = text.rsvpSubtitle;
  document.getElementById("name-label").innerHTML = text.nameLabel;
  document.getElementById("guests-label").innerHTML = text.guestsLabel;
  document.getElementById("rsvp-button").innerHTML = text.rsvpButton;
  document.getElementById("button").innerHTML = text.button;

  const shareBtn = document.getElementById("share-btn");
  if (shareBtn) {
    shareBtn.innerHTML = text.shareBtn;
  }

  document.getElementById("footer").innerHTML = text.footer;

  languageButton.innerHTML = currentLanguage === "english" ? "🌐 አማርኛ" : "🌐 English";
}

function changeLanguage() {
  applyLanguage(currentLanguage === "english" ? "amharic" : "english");
}

languageButton.addEventListener("click", changeLanguage);
applyLanguage("english");
