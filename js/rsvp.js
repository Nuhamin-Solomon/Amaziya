function saveRSVP(status){


let data={

name:
document.getElementById("guestName").value,


guests:
document.getElementById("guestNumber").value,


status:status,


date:
new Date()

};



localStorage.setItem(
"amaziyaRSVP",
JSON.stringify(data)
);



document.getElementById("rsvpMessage")
.innerHTML =
"Thank you! Your RSVP has been saved ❤️";


}




document
.getElementById("comingBtn")
.onclick=function(){

saveRSVP("Coming");

};




document
.getElementById("notComingBtn")
.onclick=function(){

saveRSVP("Not Coming");

};