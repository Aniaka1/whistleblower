const navBar = document.querySelector("nav");
const menuBtn = document.querySelector("#mobile-menu");
const navMenu = document.querySelector(".navbar-menu");
const closeBtn = document.querySelector(".close-btn");
const navLinks = document.querySelectorAll(".navbar-menu-item")

window.addEventListener("scroll",()=>{
    navBar.classList.toggle("sticky",window.scrollY > 0);
})

menuBtn.addEventListener("click",()=>{
    navMenu.classList.add("active");
})

closeBtn.onclick = ()=>{navMenu.classList.remove("active")};

navLinks.forEach(link =>{
    link.addEventListener("click",()=>{
        navMenu.classList.remove("active");
    })
})


//scroll reveal
const sr = ScrollReveal({
    origin:"bottom",
    distance:"40px",
    duration:1000,
    delay:400,
    easing:"ease-in-out",
});

sr.reveal(".hero-headlines",{origin:"left"});
sr.reveal(".hero-page img",{origin:"right"});
sr.reveal(".about");
sr.reveal(".about h1",{delay:"500"});
sr.reveal(".about p",{delay:"700"});
sr.reveal(".about-info",{delay:"1000"});
sr.reveal(".collection h1");
sr.reveal(".collection-container",{delay:900});
sr.reveal(".review h1");
sr.reveal(".review-container",{delay:"900"});
sr.reveal(".review h1");
sr.reveal(".review-container",{delay:800});
sr.reveal(".callout");
sr.reveal(".contact");