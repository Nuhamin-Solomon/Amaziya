function changeLanguage(language){


for(let key in translations[language]){


let element =
document.getElementById(key);



if(element){


element.innerHTML =
translations[language][key];


}


}



}



document
.getElementById("english-btn")
.onclick=function(){

changeLanguage("en");

};



document
.getElementById("amharic-btn")
.onclick=function(){

changeLanguage("am");

};