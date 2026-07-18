// =============================
// MOBILE MENU
// =============================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}

// =============================
// SCROLL REVEAL
// =============================

function revealSections(){

    const reveals=document.querySelectorAll(".reveal");

    reveals.forEach(item=>{

        const windowHeight=window.innerHeight;

        const elementTop=item.getBoundingClientRect().top;

        const revealPoint=120;

        if(elementTop < windowHeight - revealPoint){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealSections);

window.addEventListener("load",revealSections);
// =============================
// BACK TO TOP BUTTON
// =============================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
// =============================
// PRELOADER
// =============================

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 1500);

});
// =============================
// KNOWLEDGE BAR
// =============================

const facts = [

"🌍 Allah has appointed mankind as stewards (Khalifah) of the Earth.",

"🌱 'Do not cause corruption on the Earth after it has been set in order.' (Qur'an 7:56)",

"🌳 The Prophet ﷺ said: 'If a Muslim plants a tree... it is charity for him.'",

"♻ Reduce • Reuse • Recycle — Small actions make a big difference.",

"💧 Saving water is an act of responsibility and gratitude.",

"🌍 One mature tree can absorb around 22 kg of carbon dioxide each year.",

"🦋 Every living creature is part of Allah's perfect creation.",

"🌿 Protecting nature today protects future generations."

];

let currentFact = 0;

const knowledgeText = document.getElementById("knowledgeText");

setInterval(() => {

    currentFact++;

    if(currentFact >= facts.length){

        currentFact = 0;

    }

    knowledgeText.style.opacity = 0;

    setTimeout(() => {

        knowledgeText.innerHTML = facts[currentFact];

        knowledgeText.style.opacity = 1;

    },300);

},5000);