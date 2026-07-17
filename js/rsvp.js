document
.getElementById("comingBtn")
.onclick=function(){


saveGuest("Coming");


};





document
.getElementById("notComingBtn")
.onclick=function(){


saveGuest("Not Coming");


};






function saveGuest(status){



let guest={


name:
document.getElementById("guestName").value,


number:
document.getElementById("guestNumber").value,


status:status,


time:
new Date().toString()



};




localStorage.setItem(

"amaziyaGuest",

JSON.stringify(guest)

);




document.getElementById("rsvpMessage")
.innerHTML=

"Thank you! Your RSVP has been saved ❤️";



}