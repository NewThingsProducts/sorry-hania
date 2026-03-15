const message = "I know things weren't perfect between us. But you are someone truly special to me. Every moment without you feels incomplete.";

let i = 0;

function typeText(){
if(i < message.length){
document.getElementById("text").innerHTML += message.charAt(i);
i++;
setTimeout(typeText,40);
}
}

typeText();

document.getElementById("next").onclick = () =>{
document.querySelector(".intro").classList.add("hidden");
document.querySelector(".final").classList.remove("hidden");
}

function forgive(){

alert("Thank you Hania ❤️");

for(let i=0;i<50;i++){

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤";

heart.style.left = Math.random()*100 + "vw";

document.body.appendChild(heart);

}

}

// stars background

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for(let i=0;i<200;i++){

stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2
})

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";

stars.forEach(s=>{

ctx.beginPath();

ctx.arc(s.x,s.y,s.r,0,Math.PI*2);

ctx.fill();

});

requestAnimationFrame(draw);

}

draw();
