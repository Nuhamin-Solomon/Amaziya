const galleryImages =
document.querySelectorAll(".gallery-grid img");



galleryImages.forEach(image=>{


image.onclick=function(){


let popup =
document.createElement("div");


popup.className="image-view";



popup.innerHTML =
`
<span>×</span>
<img src="${this.src}">
`;



document.body.appendChild(popup);



popup.onclick=function(){

popup.remove();

};



};


});