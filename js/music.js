const music =
document.getElementById("birthdayMusic");


const button =
document.getElementById("musicButton");



button.onclick=function(){


if(music.paused){


music.play();


button.innerHTML=
"🔇 Stop Music";


}

else{


music.pause();


button.innerHTML=
"🎵 Play Birthday Music";


}



};