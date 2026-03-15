
const text = "Hania, I know I made mistakes. I never wanted to hurt you. You mean a lot to me and I truly regret everything. Please give me another chance. ❤️";

let i = 0;

function typing(){
if(i < text.length){
document.getElementById("message").innerHTML += text.charAt(i);
i++;
setTimeout(typing,50);
}
}

typing();

function forgive(){
alert("Thank you for giving me another chance ❤️");
}

function createHeart(){
const heart = document.createElement("div");
heart.classList.add("heart");
heart.innerHTML = "❤";

heart.style.left = Math.random()*100 + "vw";
heart.style.animationDuration = Math.random()*3 + 3 + "s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);
}

setInterval(createHeart,300);
