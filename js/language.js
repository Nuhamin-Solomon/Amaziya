function changeLanguage(language){


document.getElementById("logo").innerHTML =
translations[language].logo;


document.getElementById("title").innerHTML =
translations[language].title;


document.getElementById("amharic-title").innerHTML =
translations[language].amharicTitle;


document.getElementById("subtitle").innerHTML =
translations[language].subtitle;


document.getElementById("message").innerHTML =
translations[language].message;


document.getElementById("born").innerHTML =
translations[language].born;


document.getElementById("birthday").innerHTML =
translations[language].birthday;


document.getElementById("celebration").innerHTML =
translations[language].celebration;


document.getElementById("date").innerHTML =
translations[language].date;


document.getElementById("button").innerHTML =
translations[language].button;


document.getElementById("footer").innerHTML =
translations[language].footer;


}





document
.getElementById("english-btn")
.addEventListener(
"click",
()=>changeLanguage("en")
);



document
.getElementById("amharic-btn")
.addEventListener(
"click",
()=>changeLanguage("am")
);