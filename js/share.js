const shareButton =
document.getElementById("shareButton");



shareButton.onclick=function(){



if(navigator.share){


navigator.share({

title:
"Amaziya First Birthday 🎂",


text:
"Join us for Amaziya's First Birthday Celebration 🎉",


url:
window.location.href



});


}

else{


alert(
"Copy this invitation link and share with friends ❤️"
);


}



};