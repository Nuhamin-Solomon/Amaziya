const celebrationDate = new Date(
"July 19, 2026 13:00:00"
).getTime();



function updateCountdown(){


const now = new Date().getTime();


const difference = celebrationDate - now;



if(difference <= 0){

days.innerHTML="00";
hours.innerHTML="00";
minutes.innerHTML="00";
seconds.innerHTML="00";

return;

}



const daysValue =
Math.floor(
difference/(1000*60*60*24)
);



const hoursValue =
Math.floor(
(difference%(1000*60*60*24))
/
(1000*60*60)
);



const minutesValue =
Math.floor(
(difference%(1000*60*60))
/
(1000*60)
);



const secondsValue =
Math.floor(
(difference%(1000*60))
/
1000
);



document.getElementById("days").innerHTML=daysValue;

document.getElementById("hours").innerHTML=hoursValue;

document.getElementById("minutes").innerHTML=minutesValue;

document.getElementById("seconds").innerHTML=secondsValue;



}



setInterval(updateCountdown,1000);

updateCountdown();