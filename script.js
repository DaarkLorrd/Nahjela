const msg=`Some people spend a lifetime searching for someone who makes their heart feel at home. I was lucky enough to find you.

Thank you for loving me, believing in me, and making every ordinary day feel extraordinary.

No matter what tomorrow brings, I promise to keep choosing you, supporting you, and loving you with all my heart.

Happy Girlfriend's Day, my love.

I love you more than words can ever express. ❤️`;

const v=document.getElementById("introVideo");
v.onended=()=>{
document.getElementById("intro").style.display="none";
document.getElementById("letter").classList.remove("hidden");
type();
setInterval(hearts,250);
};

let i=0;
function type(){
if(i<msg.length){
document.getElementById("typewriter").textContent+=msg.charAt(i++);
setTimeout(type,35);
}
}

function hearts(){
const h=document.createElement("div");
h.className="heart";
h.textContent=["❤️","💕","💖","💘"][Math.floor(Math.random()*4)];
h.style.left=Math.random()*100+"vw";
document.body.appendChild(h);
setTimeout(()=>h.remove(),8000);
}

document.getElementById("surpriseBtn").onclick=()=>{
document.getElementById("letter").style.display="none";
document.getElementById("surprise").classList.remove("hidden");
};
