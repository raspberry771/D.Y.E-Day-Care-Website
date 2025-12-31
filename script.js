// ==========================================
// 1. SCROLL TO TOP BUTTON LOGIC
// ==========================================
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

// ==========================================
// 2. MOBILE MENU TOGGLE
// ==========================================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Toggle the menu when hamburger icon is clicked
if (hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ==========================================
// 3. TRANSLATION TOGGLE (SIMULATION)
// ==========================================
const translateBtn = document.getElementById("translate-btn");
let isChinese = false;

if (translateBtn) {
    translateBtn.addEventListener("click", () => {
        isChinese = !isChinese;
        
        // --- TRANSLATION DATA ---
        if (isChinese) {
            // Switch to Chinese Mode
            translateBtn.innerText = "English";
            
            // Note: This mainly targets the Home Page content currently.
            // You may need to add specific checks here if you want to translate the Contact page text too.

            const heroTitle = document.querySelector(".hero h1");
            const heroP = document.querySelector(".hero p");
            const btnPrimary = document.querySelector(".cta-btn.primary");
            const btnSecondary = document.querySelector(".cta-btn.secondary");

            if(heroTitle) heroTitle.innerHTML = "欢迎来到 <span class='highlight'>Rainbow D.Y.E</span> 托儿所";
            if(heroP) heroP.innerText = "每个孩子都是点亮和启发世界的色彩。";
            if(btnPrimary) btnPrimary.innerText = "安排参观";
            if(btnSecondary) btnSecondary.innerText = "索取信息";
            
            // Nav Items
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
            
            const heroTitle = document.querySelector(".hero h1");
            const heroP = document.querySelector(".hero p");
            const btnPrimary = document.querySelector(".cta-btn.primary");
            const btnSecondary = document.querySelector(".cta-btn.secondary");

            if(heroTitle) heroTitle.innerHTML = "Welcome to <span class='highlight'>Rainbow D.Y.E</span> Day Care";
            if(heroP) heroP.innerText = "Where every child becomes a color that brightens and inspires the world.";
            if(btnPrimary) btnPrimary.innerText = "Schedule a Tour";
            if(btnSecondary) btnSecondary.innerText = "Request Info";
            
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
}
// ==========================================
// 4. CONTACT FORM LOGIC
// ==========================================
const contactForm = document.getElementById('contact-form');
const phoneInput = document.getElementById('phone');

// --- A. PHONE NUMBER FORMATTING (Interactive Mask) ---
if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
        // 1. Strip everything that isn't a number
        const x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        
        // 2. Rebuild the string adding () and - as they type
        e.target.value = !x[2] ? x[1] 
            : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
            
        // 3. Clean up if they delete everything (prevents a loose '(' from staying)
        if (e.target.value === '(') {
            e.target.value = '';
        }
    });
}

// --- B. EMAIL JS SUBMISSION HANDLER ---
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const btn = document.querySelector('.submit-btn');
        const statusMsg = document.getElementById('form-status');
        const messageInput = document.getElementById('message');
        const originalBtnText = btn.innerHTML;

        // --- Handle Empty Optional Comment ---
        // If the message is blank, fill it with a placeholder so email looks clean
        if (!messageInput.value.trim()) {
            messageInput.value = "No specific questions or comments provided.";
        }

        // --- Change Button State (Loading) ---
        btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
        btn.disabled = true;

        // --- EmailJS Configuration ---
        // REPLACE THESE WITH YOUR ACTUAL KEYS FROM EMAILJS DASHBOARD
        const serviceID = 'DYE';  
        const templateID = 'DYEtemplate';

        // --- Send Data ---
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                // SUCCESS
                btn.innerHTML = 'Sent! <i class="fas fa-check"></i>';
                btn.style.backgroundColor = "#27ae60"; // Green color
                
                statusMsg.textContent = "Thank you! We have received your message and will contact you shortly.";
                statusMsg.className = "success-message";
                
                // Clear the form inputs
                contactForm.reset();
                
                // Reset Button after 3 seconds
                setTimeout(() => {
                    btn.innerHTML = originalBtnText;
                    btn.style.backgroundColor = ""; // Reset color
                    btn.disabled = false;
                }, 3000);

            }, (err) => {
                // ERROR
                btn.innerHTML = 'Try Again';
                btn.style.backgroundColor = "#e74c3c"; // Red color
                btn.disabled = false;
                
                statusMsg.textContent = "Oops! Something went wrong. Please call us directly.";
                statusMsg.className = "error-message";
                
                console.log(JSON.stringify(err));
            });
    });
}