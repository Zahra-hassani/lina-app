const hero = document.getElementById("hero");
let index = 0;
const imgs = [
    "url('./imgs/hero1.jpg')",
    "url('./imgs/hero2.jpg')",
];

setInterval(()=>{
    hero.style.backgroundImage = imgs[index];
    index = (index+1) % imgs.length;
},2000);