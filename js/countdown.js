const celebrationDate =
new Date("July 19, 2026 13:00:00").getTime();



function updateCountdown(){


const now =
new Date().getTime();



const distance =
celebrationDate - now;



if(distance <=0){

document.getElementById("days").innerHTML="00";

document.getElementById("hours").innerHTML="00";

document.getElementById("minutes").innerHTML="00";

document.getElementById("seconds").innerHTML="00";

return;

}




document.getElementById("days").innerHTML =
Math.floor(distance/(1000*60*60*24));



document.getElementById("hours").innerHTML =
Math.floor(
(distance%(1000*60*60*24))
/(1000*60*60)
);



document.getElementById("minutes").innerHTML =
Math.floor(
(distance%(1000*60*60))
/(1000*60)
);



document.getElementById("seconds").innerHTML =
Math.floor(
(distance%(1000*60))
/1000
);



}


setInterval(updateCountdown,1000);

updateCountdown();