function openImage(src){

document.getElementById("image-popup")
.style.display="flex";


document.getElementById("popup-image")
.src=src;

}



function closeImage(){

document.getElementById("image-popup")
.style.display="none";

}