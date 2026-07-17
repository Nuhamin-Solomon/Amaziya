function createConfetti(){


const colors=[

"#D4AF37",

"#FFB6C1",

"#4A90E2",

"#FFFFFF"

];



for(let i=0;i<80;i++){



let confetti =
document.createElement("div");



confetti.className="confetti";



confetti.style.left =
Math.random()*100+"vw";



confetti.style.background =
colors[
Math.floor(Math.random()*colors.length)
];



confetti.style.animationDuration =
(2+Math.random()*3)+"s";



document
.getElementById("confetti-container")
.appendChild(confetti);



}



}



window.onload=createConfetti;