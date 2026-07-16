const celebrationDate =
new Date("July 19, 2026 13:00:00").getTime();



function updateCountdown(){


const now =
new Date().getTime();


const distance =
celebrationDate - now;



if(distance <=0){

days.innerHTML="00";
hours.innerHTML="00";
minutes.innerHTML="00";
seconds.innerHTML="00";

return;

}



days.innerHTML =
Math.floor(distance/(1000*60*60*24));


hours.innerHTML =
Math.floor(
(distance%(1000*60*60*24))
/(1000*60*60)
);


minutes.innerHTML =
Math.floor(
(distance%(1000*60*60))
/(1000*60)
);



seconds.innerHTML =
Math.floor(
(distance%(1000*60))
/1000
);



}


setInterval(updateCountdown,1000);

updateCountdown();