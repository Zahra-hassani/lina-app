const closeBtn = document.getElementById("close");
const mobileNav = document.getElementById("navList");
const menuBtn = document.getElementById("menu");

menuBtn.addEventListener("click",()=>{
    mobileNav.classList.replace("hidden","flex");
});

closeBtn.addEventListener("click", ()=>{
    mobileNav.classList.replace("flex","hidden");
});