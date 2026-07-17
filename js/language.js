let currentLanguage = "english";


const languageButton = document.getElementById("language-btn");



function changeLanguage(){


currentLanguage =
currentLanguage === "english"
? "amharic"
: "english";



const text = translations[currentLanguage];





// Page language

if(currentLanguage === "amharic"){


document.documentElement.lang="am";


}


else{


document.documentElement.lang="en";


}






// Header

document.getElementById("logo").innerHTML =
text.logo;







// Hero

document.getElementById("eyebrow").innerHTML =
text.eyebrow;


document.getElementById("title").innerHTML =
text.title;


document.getElementById("amharic-title").innerHTML =
text.amharicTitle;


document.getElementById("subtitle").innerHTML =
text.subtitle;


document.getElementById("message").innerHTML =
text.message;









// Countdown


document.getElementById("countdown-title").innerHTML =
text.countdownTitle;


document.getElementById("days-text").innerHTML =
text.days;


document.getElementById("hours-text").innerHTML =
text.hours;


document.getElementById("minutes-text").innerHTML =
text.minutes;


document.getElementById("seconds-text").innerHTML =
text.seconds;





// Refresh countdown message

if(typeof updateCountdown === "function"){

updateCountdown();

}









// Details


document.getElementById("born").innerHTML =
text.born;


document.getElementById("birthday").innerHTML =
text.birthday;


document.getElementById("celebration").innerHTML =
text.celebration;


document.getElementById("date").innerHTML =
text.date;







// Story


document.getElementById("story-title").innerHTML =
text.storyTitle;


document.getElementById("story-text").innerHTML =
text.storyText;







// Gallery


document.getElementById("gallery-title").innerHTML =
text.galleryTitle;







// RSVP


document.getElementById("rsvp-title").innerHTML =
text.rsvpTitle;


document.getElementById("rsvp-button").innerHTML =
text.rsvpButton;


document.getElementById("button").innerHTML =
text.button;








// Footer


document.getElementById("footer").innerHTML =
text.footer;









// Button text


if(currentLanguage === "english"){


languageButton.innerHTML =
"🌐 አማርኛ";


}

else{


languageButton.innerHTML =
"🌐 English";


}



}







languageButton.addEventListener(

"click",

changeLanguage

);