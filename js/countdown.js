/* ======================================
   Amaziya Birthday Countdown
   🧸👑
====================================== */


const birthdayDate = new Date(
"July 19, 2026 13:00:00"
).getTime();





function updateCountdown(){


const now = new Date().getTime();


const distance = birthdayDate - now;





const currentText =
translations[currentLanguage];





if(distance > 0){



const days = Math.floor(
distance / (1000 * 60 * 60 * 24)
);



const hours = Math.floor(
(distance % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);



const minutes = Math.floor(
(distance % (1000 * 60 * 60))
/
(1000 * 60)
);



const seconds = Math.floor(
(distance % (1000 * 60))
/
1000
);





document.getElementById("days").innerHTML =
days;



document.getElementById("hours").innerHTML =
hours;



document.getElementById("minutes").innerHTML =
minutes;



document.getElementById("seconds").innerHTML =
seconds;





document.getElementById("birthday-message").innerHTML =
currentText.counting;



}








else if(
distance <= 0 &&
distance > -86400000
){



document.getElementById("countdown").style.display =
"none";



document.getElementById("birthday-message").innerHTML =
currentText.today;



}








else{



document.getElementById("countdown").style.display =
"none";



document.getElementById("birthday-message").innerHTML =
currentText.thankyou;



}


}







// Start countdown

updateCountdown();



// Update every second

setInterval(

updateCountdown,

1000

);