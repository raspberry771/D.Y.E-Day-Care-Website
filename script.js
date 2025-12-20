// --- 1. Scroll To Top Button Logic ---
const scrollBtn = document.getElementById("scrollUpBtn");

// When the user scrolls down 300px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top smoothly
scrollBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// --- 2. Mobile Menu Toggle ---
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Toggle the menu when hamburger icon is clicked
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// --- 3. Translation Toggle (Simulation) ---
const translateBtn = document.getElementById("translate-btn");
let isChinese = false;

translateBtn.addEventListener("click", () => {
    isChinese = !isChinese;
    
    if (isChinese) {
        // Switch to Chinese Mode
        translateBtn.innerText = "English";
        
        // Hero Section
        document.querySelector(".hero h1").innerHTML = "欢迎来到 <span class='highlight'>Rainbow D.Y.E</span> 托儿所";
        document.querySelector(".hero p").innerText = "每个孩子都是点亮和启发世界的色彩。";
        document.querySelector(".cta-btn.primary").innerText = "安排参观";
        document.querySelector(".cta-btn.secondary").innerText = "索取信息";
        
        // Nav Items (Simple example)
        const links = document.querySelectorAll(".nav-links a");
        if(links.length >= 4) {
            links[0].innerText = "首页";
            links[1].innerText = "关于我们";
            links[2].innerText = "家长资源";
            links[3].innerText = "联系我们";
        }
        
    } else {
        // Switch back to English Mode
        translateBtn.innerText = "中文";
        
        // Hero Section
        document.querySelector(".hero h1").innerHTML = "Welcome to <span class='highlight'>Rainbow D.Y.E</span> Day Care";
        document.querySelector(".hero p").innerText = "Where every child becomes a color that brightens and inspires the world.";
        document.querySelector(".cta-btn.primary").innerText = "Schedule a Tour";
        document.querySelector(".cta-btn.secondary").innerText = "Request Info";
        
        // Nav Items
        const links = document.querySelectorAll(".nav-links a");
        if(links.length >= 4) {
            links[0].innerText = "Home";
            links[1].innerText = "About Us";
            links[2].innerText = "Parent Resources";
            links[3].innerText = "Contact Us";
        }
    }
});