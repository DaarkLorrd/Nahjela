const message = `

Some people spend a lifetime searching for someone who makes their heart feel at home.

I was lucky enough to find you.

Thank you for loving me...

Thank you for believing in me...

Thank you for making every ordinary day feel extraordinary.

No matter what tomorrow brings...

I promise to keep choosing you.

Supporting you.

Protecting you.

And loving you with everything I have.

Happy Girlfriend's Day my love.

I love you more than words could ever express.

❤️
`;

const intro = document.getElementById("intro");
const video = document.getElementById("introVideo");

const letter = document.getElementById("letter");

const surprise = document.getElementById("surprise");

const text = document.getElementById("typewriter");

const button = document.getElementById("surpriseBtn");

window.addEventListener("load", () => {

video.load();

const playPromise = video.play();

if(playPromise !== undefined){

playPromise.catch(() => {

console.log("Autoplay blocked.");

});

}

});

video.addEventListener("ended", () => {

intro.style.display = "none";

letter.classList.remove("hidden");

startTyping();

setInterval(createHeart,250);

});

let index = 0;

function startTyping(){

if(index < message.length){

text.textContent += message.charAt(index);

index++;

setTimeout(startTyping,35);

}

}

button.addEventListener("click",()=>{

letter.style.display="none";

surprise.classList.remove("hidden");

});

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["❤️","💕","💖","💘","💞"][Math.floor(Math.random()*5)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*22)+"px";

heart.style.animationDuration=(5+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}
