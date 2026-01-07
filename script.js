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
// 3. TRANSLATION TOGGLE (GLOBAL + 3 PAGES)
// ==========================================
const translateBtn = document.getElementById("translate-btn");
let isChinese = false;

if (translateBtn) {
    translateBtn.addEventListener("click", () => {
        isChinese = !isChinese;
        
        if (isChinese) {
            // === SWITCH TO CHINESE ===
            translateBtn.innerText = "English";

            // --- 1. GLOBAL NAVIGATION (All Pages) ---
            if(document.getElementById("nav-home")) document.getElementById("nav-home").innerText = "首頁";
            if(document.getElementById("nav-about")) document.getElementById("nav-about").innerText = "關於我們";
            if(document.getElementById("nav-parent")) document.getElementById("nav-parent").innerText = "家長資源";
            if(document.getElementById("nav-contact")) document.getElementById("nav-contact").innerText = "聯絡我們";

            // --- 2. GLOBAL FOOTER (All Pages) ---
            if(document.getElementById("footer-copy")) document.getElementById("footer-copy").innerHTML = "© 2025 Rainbow D.Y.E 托兒所。<br>保留所有權利。";
            if(document.getElementById("footer-contact-title")) document.getElementById("footer-contact-title").innerText = "聯絡資訊";
            if(document.getElementById("footer-hours-label")) document.getElementById("footer-hours-label").innerText = "營業時間:";
            if(document.getElementById("footer-links-title")) document.getElementById("footer-links-title").innerText = "快速連結";
            if(document.getElementById("foot-link-home")) document.getElementById("foot-link-home").innerText = "首頁";
            if(document.getElementById("foot-link-about")) document.getElementById("foot-link-about").innerText = "關於我們";
            if(document.getElementById("foot-link-parent")) document.getElementById("foot-link-parent").innerText = "家長資源";
            if(document.getElementById("foot-link-contact")) document.getElementById("foot-link-contact").innerText = "聯絡我們";

            // --- 3. INDEX PAGE SPECIFIC ---
            if(document.getElementById("hero-title")) {
                document.getElementById("hero-title").innerHTML = "<span class='accent-text'>歡迎來到</span> <br><span class='highlight'>Rainbow D.Y.E</span> <br><span class='accent-text'>托兒所</span>";
                document.getElementById("hero-desc").innerText = "在這裡，每個孩子都是點亮和啟發世界的色彩。";
                document.getElementById("hero-btn").innerText = "聯絡我們";
            }
            if(document.getElementById("school-title")) {
                document.getElementById("school-title").innerText = "我們的學校";
                document.getElementById("label-ages").innerText = "年齡:";
                document.getElementById("content-ages").innerText = "新生兒 至 6 歲";
                document.getElementById("label-hours").innerText = "時間:";
                document.getElementById("label-location").innerText = "地點:";
                document.getElementById("link-pin").innerText = "查看地圖位置";
                document.getElementById("label-phone").innerText = "電話:";
                document.getElementById("label-email").innerText = "電子郵件:";
                document.getElementById("label-socials").innerText = "社群:";
                document.getElementById("link-fb").innerText = "訪問我們的 Facebook";
                document.getElementById("label-meals").innerText = "餐點:";
                document.getElementById("content-meals").innerHTML = "兩次點心和午餐。<br>配合過敏需求。<br><a href='#' class='grid-link' id='link-meal'>查看每月菜單</a>";
            }
            if(document.getElementById("phil-quote")) {
                document.getElementById("phil-quote").innerText = "\"在我們溫馨、家庭般的環境中，您的孩子將感到安全、被愛並受到啟發。在 Rainbow D.Y.E，每個孩子都將成為點亮和啟發這個世界的色彩。\"";
                document.getElementById("phil-ratio").innerText = "師生比例 1:3";
            }
            if(document.getElementById("values-title")) {
                document.getElementById("values-title").innerText = "核心價值";
                document.getElementById("val-1-title").innerText = "雙語沉浸";
                document.getElementById("val-1-desc").innerText = "透過有趣的語言探索，我們幫助孩子自然發展雙語能力，開啟通往文化連結的大門。";
                document.getElementById("val-2-title").innerText = "音樂啟蒙";
                document.getElementById("val-2-desc").innerText = "我們利用音樂這種通用語言來培養創造力和自我表達，培養對節奏、旋律和律動的熱愛。";
                document.getElementById("val-3-title").innerText = "社交情感學習";
                document.getElementById("val-3-desc").innerText = "我們引導孩子發展同理心、溝通技巧和自我意識，以建立有意義的人際關係。";
                document.getElementById("val-4-title").innerText = "彩虹樂趣";
                document.getElementById("val-4-desc").innerText = "每一天都充滿多彩的活動。從手工藝到戶外遊戲，我們讓學習充滿創意和純粹的快樂。";
            }

            // --- 4. ABOUT PAGE SPECIFIC ---
            if(document.getElementById("about-header-title")) {
                document.getElementById("about-header-title").innerText = "我們的故事與理念";
                document.getElementById("about-header-desc").innerText = "了解 Rainbow D.Y.E 的核心精神、靈魂與安全承諾。";
                
                document.getElementById("about-phil-title").innerText = "我們的教育理念";
                document.getElementById("about-phil-text").innerHTML = 
                    "在 Rainbow D.Y.E.，我們的使命是創造一個充滿活力的教育聖地，讓孩子們在愛、學習和歡笑中茁壯成長。我們不僅僅是一個小型家庭托育中心；我們提供獨特的雙語沉浸式課程，通過有趣的探索自然地發展中文和英文能力，開啟通往文化連結和溝通的大門。<br><br>" +
                    "我們的整體課程結合了音樂啟蒙和社交情感學習 (SEL)，以培養每個孩子的創造力、同理心和自信。在我們溫馨、家庭般的環境中，我們引導孩子成為點亮並啟發世界的獨特色彩。";
                
                document.getElementById("about-yuri-name").innerText = "Yuri 老師";
                document.getElementById("about-yuri-role").innerText = "園長 & 主班老師";

                document.getElementById("about-curr-title").innerHTML = "<i class='fas fa-book-open'></i> 我們的課程";
                document.getElementById("about-curr-desc").innerText = "看看我們的每日作息表。";
                document.getElementById("about-curr-btn").innerHTML = "<i class='fas fa-download'></i> 下載課程表";

                document.getElementById("about-safety-title").innerText = "安全與環境";
                document.getElementById("about-safety-subtitle").innerText = "我們透過嚴格的安全協議和安全的環境，將每個孩子的福祉放在首位。";

                document.getElementById("safe-1-title").innerText = "安全接送";
                document.getElementById("safe-1-desc").innerText = "孩子僅交由經過身份驗證的父母或授權人員接回。";
                document.getElementById("safe-2-title").innerText = "健康協議";
                document.getElementById("safe-2-desc").innerText = "我們為等待接回的身體不適兒童提供有人看管的安靜空間。";
                document.getElementById("safe-3-title").innerText = "用藥安全";
                document.getElementById("safe-3-desc").innerText = "我們要求醫生處方、原始包裝和簽署的表格，以確保絕對安全。";
                document.getElementById("safe-4-title").innerText = "過敏意識";
                document.getElementById("safe-4-desc").innerText = "入學時建立詳細的過敏應急計劃，以確保用餐安全。";

                document.getElementById("nutri-title").innerHTML = "<i class='fas fa-utensils'></i> 健康營養";
                document.getElementById("nutri-intro").innerText = "我們相信健康的身體能激發健康的心靈。我們每天提供三頓營養餐點，融合了亞洲和西方家庭式烹飪的均衡搭配。";

                document.getElementById("nutri-li-1").innerHTML = "<strong><i class='fas fa-apple-alt'></i> 多樣化菜單:</strong> 最受歡迎的包括洋蔥雞肉炒飯、豬肉水餃、滷肉飯、義大利麵和迷你漢堡。";
                document.getElementById("nutri-li-2").innerHTML = "<strong><i class='fas fa-baby'></i> 嬰兒護理:</strong> 為兩歲以下兒童提供特製餐點，如南瓜粥、雞肉粥或蔬菜粥。";
                document.getElementById("nutri-li-3").innerHTML = "<strong><i class='fas fa-leaf'></i> 新鮮健康:</strong> 點心包括時令水果、牛奶、麵包和優格。";
                document.getElementById("nutri-li-4").innerHTML = "<strong><i class='fas fa-carrot'></i> 特別活動:</strong> 每週二的「素食日」以及偶爾為孩子舉辦的烹飪課！";
            }

            // --- 5. CONTACT PAGE SPECIFIC ---
            if(document.getElementById("contact-header-title")) {
                document.getElementById("contact-header-title").innerText = "聯絡我們";
                document.getElementById("contact-header-desc").innerText = "我們很希望能見到您！請填寫以下表格以了解更多課程資訊或預約參觀。";
                
                document.getElementById("form-title").innerText = "發送訊息給我們";
                document.getElementById("label-parent").innerText = "家長姓名";
                document.getElementById("parentName").placeholder = "名字，姓氏";
                
                document.getElementById("label-phone").innerText = "電話號碼";
                document.getElementById("phone").placeholder = "電話號碼";
                
                document.getElementById("label-email").innerText = "電子郵件地址";
                document.getElementById("email").placeholder = "電子郵件地址";

                document.getElementById("label-child").innerText = "孩子姓名";
                document.getElementById("childName").placeholder = "孩子姓名";
                
                document.getElementById("label-dob").innerText = "出生日期";
                
                document.getElementById("label-time").innerText = "最佳聯絡時間";
                document.getElementById("opt-any").innerText = "隨時";
                document.getElementById("opt-morn").innerText = "早上";
                document.getElementById("opt-aft").innerText = "下午";
                document.getElementById("opt-eve").innerText = "晚上";

                document.getElementById("label-msg").innerText = "問題或評論 (選填)";
                document.getElementById("message").placeholder = "我們能如何幫助您？";

                document.getElementById("btn-submit-text").innerText = "提交申請";

                document.getElementById("info-title").innerText = "一般資訊";
                document.getElementById("info-label-phone").innerText = "電話";
                document.getElementById("info-label-email").innerText = "電子郵件";
                document.getElementById("info-label-hours").innerText = "營業時間";
                document.getElementById("info-days").innerText = "週一 - 週五: 8:00 AM - 5:00 PM";
                document.getElementById("info-closed").innerText = "週六 - 週日: 休息";
            }

        } else {
            // === SWITCH BACK TO ENGLISH ===
            translateBtn.innerText = "中文";

            // --- 1. GLOBAL NAVIGATION ---
            if(document.getElementById("nav-home")) document.getElementById("nav-home").innerText = "Home";
            if(document.getElementById("nav-about")) document.getElementById("nav-about").innerText = "About Us";
            if(document.getElementById("nav-parent")) document.getElementById("nav-parent").innerText = "Parent Resources";
            if(document.getElementById("nav-contact")) document.getElementById("nav-contact").innerText = "Contact Us";

            // --- 2. GLOBAL FOOTER ---
            if(document.getElementById("footer-copy")) document.getElementById("footer-copy").innerHTML = "© 2025 Rainbow D.Y.E Day Care.<br>All Rights Reserved.";
            if(document.getElementById("footer-contact-title")) document.getElementById("footer-contact-title").innerText = "Contact Info";
            if(document.getElementById("footer-hours-label")) document.getElementById("footer-hours-label").innerText = "Hours:";
            if(document.getElementById("footer-links-title")) document.getElementById("footer-links-title").innerText = "Quick Links";
            if(document.getElementById("foot-link-home")) document.getElementById("foot-link-home").innerText = "Home";
            if(document.getElementById("foot-link-about")) document.getElementById("foot-link-about").innerText = "About Us";
            if(document.getElementById("foot-link-parent")) document.getElementById("foot-link-parent").innerText = "Parent Resources";
            if(document.getElementById("foot-link-contact")) document.getElementById("foot-link-contact").innerText = "Contact Us";

            // --- 3. INDEX PAGE SPECIFIC ---
            if(document.getElementById("hero-title")) {
                document.getElementById("hero-title").innerHTML = "<span class='accent-text'>Welcome to</span> <br><span class='highlight'>Rainbow D.Y.E</span> <br><span class='accent-text'>Day Care</span>";
                document.getElementById("hero-desc").innerText = "Where every child becomes a color that brightens and inspires the world.";
                document.getElementById("hero-btn").innerText = "Contact Us";
            }
            if(document.getElementById("school-title")) {
                document.getElementById("school-title").innerText = "Our School";
                document.getElementById("label-ages").innerText = "Ages:";
                document.getElementById("content-ages").innerText = "Newborn - 6 years old";
                document.getElementById("label-hours").innerText = "Hours:";
                document.getElementById("label-location").innerText = "Location:";
                document.getElementById("link-pin").innerText = "View Pin Location";
                document.getElementById("label-phone").innerText = "Phone:";
                document.getElementById("label-email").innerText = "Email:";
                document.getElementById("label-socials").innerText = "Socials:";
                document.getElementById("link-fb").innerText = "Visit our Facebook";
                document.getElementById("label-meals").innerText = "Meals:";
                document.getElementById("content-meals").innerHTML = "2 Snack Breaks and Lunch.<br>Allergies Accommodated.<br><a href='#' class='grid-link' id='link-meal'>View Monthly Meal Plan</a>";
            }
            if(document.getElementById("phil-quote")) {
                document.getElementById("phil-quote").innerText = "\"In our warm, family-oriented environment, your child will feel safe, loved, and inspired to grow. At Rainbow D.Y.E, every child will become a color that brightens and inspires this world.\"";
                document.getElementById("phil-ratio").innerText = "Teacher Ratio 1:3";
            }
            if(document.getElementById("values-title")) {
                document.getElementById("values-title").innerText = "Core Values";
                document.getElementById("val-1-title").innerText = "Bilingual Immersion";
                document.getElementById("val-1-desc").innerText = "Through playful language exploration we help children develop bilingual skills naturally, opening doors to a world of cultural connection.";
                document.getElementById("val-2-title").innerText = "Music Enlightenment";
                document.getElementById("val-2-desc").innerText = "We use the universal language of music to nurture creativity and self-expression, fostering a love for rhythm, melody, and movement.";
                document.getElementById("val-3-title").innerText = "Social-Emotional Learning";
                document.getElementById("val-3-desc").innerText = "We guide children in developing empathy, communication skills, and self-awareness to build meaningful relationships.";
                document.getElementById("val-4-title").innerText = "Rainbow Fun";
                document.getElementById("val-4-desc").innerText = "Every day is filled with colorful activities. From crafts to outdoor play, we make learning creative and pure joy.";
            }

            // --- 4. ABOUT PAGE SPECIFIC ---
            if(document.getElementById("about-header-title")) {
                document.getElementById("about-header-title").innerText = "Our Story & Philosophy";
                document.getElementById("about-header-desc").innerText = "Get to know the heart, soul, and safety behind Rainbow D.Y.E.";
                
                document.getElementById("about-phil-title").innerText = "Our Philosophy";
                document.getElementById("about-phil-text").innerHTML = 
                    "At Rainbow D.Y.E., our mission is to create a vibrant educational sanctuary where children flourish through love, learning, and laughter. We are more than just a small family care home; we offer a unique bilingual immersion program that naturally develops Mandarin and English skills through playful exploration, opening doors to a world of cultural connection and communication. <br><br>" +
                    "Our holistic curriculum weaves together Music Enlightenment and Social-Emotional Learning (SEL) to nurture creativity, empathy, and confidence in every child. In our warm, family-oriented environment we guide children to become the unique colors that will brighten and inspire the world.";
                
                document.getElementById("about-yuri-name").innerText = "Ms. Yuri";
                document.getElementById("about-yuri-role").innerText = "Director & Lead Teacher";

                document.getElementById("about-curr-title").innerHTML = "<i class='fas fa-book-open'></i> Our Curriculum";
                document.getElementById("about-curr-desc").innerText = "Take a peek into our daily schedule.";
                document.getElementById("about-curr-btn").innerHTML = "<i class='fas fa-download'></i> Download Schedule";

                document.getElementById("about-safety-title").innerText = "Safety & Environment";
                document.getElementById("about-safety-subtitle").innerText = "We prioritize the well-being of every child through strict safety protocols and a secure environment.";

                document.getElementById("safe-1-title").innerText = "Secure Pick-Up";
                document.getElementById("safe-1-desc").innerText = "Children are only released to verified parents or authorized individuals with ID checks.";
                document.getElementById("safe-2-title").innerText = "Health Protocols";
                document.getElementById("safe-2-desc").innerText = "We provide a supervised quiet space for children who feel unwell while waiting for pickup.";
                document.getElementById("safe-3-title").innerText = "Medication Safety";
                document.getElementById("safe-3-desc").innerText = "We require doctor’s prescriptions, original packaging, and signed forms for absolute safety.";
                document.getElementById("safe-4-title").innerText = "Allergy Awareness";
                document.getElementById("safe-4-desc").innerText = "Detailed allergy contingency plans are established upon enrollment for safe dining.";

                document.getElementById("nutri-title").innerHTML = "<i class='fas fa-utensils'></i> Wholesome Nutrition";
                document.getElementById("nutri-intro").innerText = "We believe that a healthy body fuels a healthy mind. We provide three nutritious meals daily featuring a balanced mix of Asian and Western home-style cooking.";

                document.getElementById("nutri-li-1").innerHTML = "<strong><i class='fas fa-apple-alt'></i> Diverse Menu:</strong> Favorites include chicken & onion stir-fry, pork dumplings, braised meat, pasta, and mini-burgers.";
                document.getElementById("nutri-li-2").innerHTML = "<strong><i class='fas fa-baby'></i> Infant Care:</strong> Specialized meals like pumpkin, chicken, or vegetable porridge for those under two.";
                document.getElementById("nutri-li-3").innerHTML = "<strong><i class='fas fa-leaf'></i> Fresh & Wholesome:</strong> Snacks include seasonal fruits, milk, bread, and yogurt.";
                document.getElementById("nutri-li-4").innerHTML = "<strong><i class='fas fa-carrot'></i> Special Events:</strong> \"Vege Day\" every Tuesday and occasional cooking classes for the kids!";
            }

            // --- 5. CONTACT PAGE SPECIFIC ---
            if(document.getElementById("contact-header-title")) {
                document.getElementById("contact-header-title").innerText = "Contact Us";
                document.getElementById("contact-header-desc").innerText = "We'd love to meet you! Fill out the form below to learn more about our programs or schedule a visit.";
                
                document.getElementById("form-title").innerText = "Send us a Message";
                document.getElementById("label-parent").innerText = "Parent's Name";
                document.getElementById("parentName").placeholder = "First Name, Last Name";
                
                document.getElementById("label-phone").innerText = "Phone Number";
                document.getElementById("phone").placeholder = "Phone Number";
                
                document.getElementById("label-email").innerText = "Email Address";
                document.getElementById("email").placeholder = "Email Address";

                document.getElementById("label-child").innerText = "Child's Name";
                document.getElementById("childName").placeholder = "Child's Name";
                
                document.getElementById("label-dob").innerText = "Date of Birth";
                
                document.getElementById("label-time").innerText = "Best Time to Contact";
                document.getElementById("opt-any").innerText = "Anytime";
                document.getElementById("opt-morn").innerText = "Morning";
                document.getElementById("opt-aft").innerText = "Afternoon";
                document.getElementById("opt-eve").innerText = "Evening";

                document.getElementById("label-msg").innerText = "Questions or Comments (Optional)";
                document.getElementById("message").placeholder = "How can we help you?";

                document.getElementById("btn-submit-text").innerText = "Submit Request";

                document.getElementById("info-title").innerText = "General Information";
                document.getElementById("info-label-phone").innerText = "Phone";
                document.getElementById("info-label-email").innerText = "Email";
                document.getElementById("info-label-hours").innerText = "Operating Hours";
                document.getElementById("info-days").innerText = "Mon - Fri: 8:00 AM - 5:00 PM";
                document.getElementById("info-closed").innerText = "Sat - Sun: Closed";
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