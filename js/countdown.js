// Amaziya Birthday Countdown


const celebrationDate = new Date(
"July 19, 2026 13:00:00"
).getTime();




function updateCountdown(){


const now = new Date().getTime();


const difference = celebrationDate - now;



if(difference <= 0){


document.getElementById("days").innerHTML="00";

document.getElementById("hours").innerHTML="00";

document.getElementById("minutes").innerHTML="00";

document.getElementById("seconds").innerHTML="00";


return;

}



const days =
Math.floor(
difference /
(1000 * 60 * 60 * 24)
);



const hours =
Math.floor(
(difference %
(1000*60*60*24))
/
(1000*60*60)
);



const minutes =
Math.floor(
(difference %
(1000*60*60))
/
(1000*60)
);



const seconds =
Math.floor(
(difference %
(1000*60))
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



}



setInterval(updateCountdown,1000);


updateCountdown();