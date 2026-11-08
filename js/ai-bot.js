/**
 * Smit's Portfolio - Interactive AI Assistant (SmitBot)
 * Smart conversational knowledge-base & WhatsApp assistant
 */

(function () {
    const WHATSAPP_NUMBER = "919875052329";
    const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Smit%2C%20I%20am%20chatting%20from%20your%20portfolio%20AI%20bot%20and%20would%20like%20to%20connect%21`;
    const LINKEDIN_URL = "https://www.linkedin.com/in/smitkumar1/";

    // Bot Knowledge Base
    const KNOWLEDGE_BASE = [
        {
            keywords: ["hi", "hello", "hey", "namaste", "hlo", "kem cho", "kya haal", "hola", "start"],
            reply: `👋 **Hello!** I am Smit's AI Assistant. How can I help you today?<br><br>You can ask me about his **Government Exam Clearances** (CBI, 2x UGC NET, UPSC, Navy SSR, NDA, 30+ exams), **Values & Social Leadership** (RSS Nagar Sharirik Pramukh, Vipassana Sadhana, Gita Olympiad, Navodaya), **tech stack** (Spring Boot, React, Java, MERN), or connect directly on **WhatsApp**!`,
            actions: [
                { text: "🏛️ 30+ Govt Exams", chip: "govt exams" },
                { text: "🚩 Values & RSS", chip: "values" },
                { text: "🎓 2x UGC NET", chip: "net" },
                { text: "💼 Experience", chip: "experience" },
                { text: "💬 WhatsApp (+91 9875052329)", url: WHATSAPP_LINK, isWa: true }
            ]
        },
        {
            keywords: ["who is smit", "about", "bio", "background", "kaun hai", "smit kumar", "smit kumar gupta", "introduce"],
            reply: `👨‍💻 **About Smit Kumar Gupta**:<br>
            • **2x UGC NET Qualified (Assistant Professor & Ph.D. Admission)** in Computer Science & Applications.<br>
            • **National Competitive Exam Track Record**: Cleared **CBI (Tier 1 & 2, Interview Stage)**, **UPSC (2x Prelims, 1x Mains)**, **Navy SSR (post-12th)**, **NDA Exam 1**, and appeared in **30+ Government Examinations**.<br>
            • **Values & Social Leadership**: Serving as **Nagar Sharirik Pramukh (RSS)**, completed *Sangh Shiksha Varga*, *Prathmik Varga*, and *Prarambhik Varga*; active Shikshak & social worker.<br>
            • **Spiritual Sadhana**: Completed 10-day residential **Vipassana Meditation** in Jalgaon, Maharashtra; represented at **International Gita Olympiad** in Kurukshetra.<br>
            • **Early Foundation**: Cleared **Navodaya Vidyalaya** & **Ekikrit Examination** post-8th grade, stepping out independently for city education.<br>
            • **Software Development Engineer & Tech Lead**: Ex-SDE @ Bluestocks Fintech, Operation Executive @ Turtlemint, Computer Lecturer @ VVH&ES.<br>
            • **Education**: MCA from GL Bajaj (CGPA: 7.1/10) & B.Sc (Maths & CS, 85.6% Distinction) from University of Allahabad.`,
            actions: [
                { text: "🏛️ View Govt Exams", chip: "govt exams" },
                { text: "🚩 Values & Leadership", chip: "values" },
                { text: "🔗 LinkedIn Profile", url: LINKEDIN_URL },
                { text: "📄 Download Resume", url: "assets/smit_resume.pdf" }
            ]
        },
        {
            keywords: ["values", "rss", "nagar sharirik pramukh", "sangh", "shiksha varga", "prarambhik", "prathmik", "shikshak", "social work", "vipassana", "meditation", "geeta", "gita", "olympiad", "kurukshetra", "navodaya", "ekikrit", "spiritual"],
            reply: `🚩 **Leadership, Spiritual Sadhana & Life Milestones**:<br><br>
            1. 🚩 **RSS — Nagar Sharirik Pramukh & Social Service**:<br>
            • Completed intensive residential cadre training away from home: **Prarambhik Varga**, **Prathmik Varga**, and **Sangh Shiksha Varga**.<br>
            • Serving as **Nagar Sharirik Pramukh** (City Drill & Discipline Head), building physical fitness, martial discipline, and moral character in youth.<br>
            • Active as a **Shikshak** (Instructor) and dedicated volunteer in community welfare and social service.<br><br>
            2. 🧘 **Vipassana Meditation Sadhana (Jalgaon, Maharashtra)**:<br>
            • Underwent the transformative 10-day residential silent meditation retreat in Jalgaon.<br>
            • Maintained complete **Noble Silence (Arya Mauna)** and 10+ daily hours of mindfulness, mastering emotional equanimity, razor-sharp focus, and internal peace.<br><br>
            3. 🕉️ **International Gita Olympiad (Kurukshetra, Haryana)**:<br>
            • Participated and resided on the sacred historic soil of Kurukshetra, Haryana.<br>
            • Deeply immersed in the teachings of the *Bhagavad Gita* — internalizing **Nishkama Karma** (duty without anxiety for fruits) and principled leadership.<br><br>
            4. 🎒 **Navodaya & Ekikrit Scholar (From 8th Grade)**:<br>
            • Qualified both **Jawahar Navodaya Vidyalaya** and **Ekikrit Merit Exams** right after class 8.<br>
            • Left village hometown at a young age to pursue city schooling from class 9 onwards, building lifelong self-reliance and academic grit.`,
            actions: [
                { text: "🏛️ 30+ Govt Exams", chip: "govt exams" },
                { text: "📄 View Resume", url: "assets/smit_resume.pdf" },
                { text: "💬 Chat on WhatsApp", url: WHATSAPP_LINK, isWa: true }
            ]
        },
        {
            keywords: ["govt exams", "govt exam", "government exams", "upsc", "cbi", "navy", "nda", "sarkari", "competitive exams", "exams cleared", "exam clear", "30+"],
            reply: `🏛️ **Smit's 30+ Government & National Exam Track Record**:<br><br>
            • **Total Exams**: Competed in **30+ prestigious Government & National Examinations**!<br><br>
            1. ⚖️ **CBI Examination (Central Bureau of Investigation)**:<br>
            • **Exam 1 (Tier 1) Cleared** & **Exam 2 (Tier 2) Cleared**.<br>
            • Shortlisted & Qualified for the final **Personality Interview stage**!<br><br>
            2. 🎓 **UGC NET (2 Times Qualified)**:<br>
            • Officially qualified for **Assistant Professorship** nationwide.<br>
            • Awarded direct eligibility & **admission to Ph.D.** in Computer Science & Applications.<br>
            • Received Assistant Professor offers from **Teerthanker Mahaveer University (TMU)** and **Bhagwan Mahavir University (BMU)**.<br><br>
            3. 🏛️ **UPSC Civil Services Examination**:<br>
            • **2 Times UPSC Prelims Cleared** (General Studies & CSAT merit).<br>
            • **1 Time UPSC Mains Qualified & Written**.<br><br>
            4. 📡 **Recent Examinations Appeared**:<br>
            • **IMD Scientist** (Ministry of Earth Sciences) & **EPFO Officer** (UPSC).<br><br>
            5. ⚓ **Indian Navy (SSR - Senior Secondary Recruit)**:<br>
            • **Cleared right after 12th standard** with top merit in science and mathematics.<br><br>
            6. 🎖️ **NDA (National Defence Academy) Examination**:<br>
            • **Exam 1 Cleared** (Conducted by UPSC).<br><br>
            7. 🎒 **Navodaya Vidyalaya & Ekikrit Examination**:<br>
            • Both cleared right after 8th class, moving independently to the city for higher studies.`,
            actions: [
                { text: "📡 Recent Exams (IMD/EPFO)", chip: "imd" },
                { text: "🚩 Values & Leadership", chip: "values" },
                { text: "🎓 2x UGC NET Details", chip: "net" },
                { text: "📄 Download Resume", url: "assets/smit_resume.pdf" },
                { text: "💬 Chat on WhatsApp", url: WHATSAPP_LINK, isWa: true }
            ]
        },
        {
            keywords: ["imd", "scientist", "imd scientist", "epfo", "epfo officer", "recent exam", "recent exams"],
            reply: `📡 **Recent Competitive Examinations Appeared**:<br><br>
            • 🛰️ **IMD Scientist (India Meteorological Department)**:<br>
            Recently appeared in this prestigious national technical exam under the Ministry of Earth Sciences, demonstrating advanced computing, physics, and atmospheric data modeling capabilities.<br><br>
            • 💼 **EPFO Officer Examination (UPSC)**:<br>
            Recently appeared for the Enforcement Officer / Accounts Officer exam conducted by the Union Public Service Commission (UPSC), testing national administration, social security, economics, and Indian governance.<br><br>
            Smit actively tests and sharpens his analytical edge, standing among top national contenders across 30+ competitive exams!`,
            actions: [
                { text: "🏛️ 30+ Govt Exams", chip: "govt exams" },
                { text: "🎓 2x UGC NET", chip: "net" },
                { text: "💬 Chat on WhatsApp", url: WHATSAPP_LINK, isWa: true }
            ]
        },
        {
            keywords: ["teerthanker", "bhagwan mahaveer", "bhagwan mahavir", "tmu", "bmu", "assistant professor offer", "professor offer", "university offer", "why not join professor"],
            reply: `🎓 **Assistant Professor Appointment Offers (TMU & BMU)**:<br><br>
            • With his **2x UGC NET qualification** (certifying national Assistant Professorship eligibility and Ph.D. admission), Smit was offered Assistant Professor faculty positions by prestigious institutions including **Teerthanker Mahaveer University (TMU)** and **Bhagwan Mahavir University (BMU)**.<br><br>
            • **Why deferred?**<br>
            Smit consciously chose not to take up university lecturing at that point in order to focus wholeheartedly on building production-grade fintech software architectures (Ex-SDE @ Bluestocks Fintech, Turtlemint) and competing in India's top administrative and scientific cadres (UPSC, CBI, IMD Scientist, EPFO).`,
            actions: [
                { text: "🎓 UGC NET Details", chip: "net" },
                { text: "💼 Tech Experience", chip: "experience" },
                { text: "🔗 LinkedIn Profile", url: LINKEDIN_URL }
            ]
        },
        {
            keywords: ["net", "ugc net", "ugc", "assistant professor", "phd", "exam", "qualification"],
            reply: `🎓 **UGC NET (2 Times Qualified)**:<br>
            • **Conducting Body**: National Testing Agency (NTA) on behalf of UGC.<br>
            • **Subject**: Computer Science and Applications.<br>
            • **Achievements**:<br>
              1. **Qualified for Assistant Professor** across Indian Universities nationwide.<br>
              2. **Qualified for Admission to Ph.D.** doctoral programs.<br>
              3. **2 Times Qualified**, demonstrating deep mastery in Data Structures, Algorithms, DBMS, Operating Systems, Computer Architecture, and Theory of Computation.<br>
              4. **Offers Received**: Offered Assistant Professor roles by reputed universities (Teerthanker Mahaveer University & Bhagwan Mahavir University), which he deferred to focus on scalable fintech engineering and central competitive cadres.`,
            actions: [
                { text: "🏛️ 30+ Govt Exams", chip: "govt exams" },
                { text: "🏫 Professor Offers", chip: "tmu" },
                { text: "📄 Download Resume", url: "assets/smit_resume.pdf" },
                { text: "🔗 LinkedIn Profile", url: LINKEDIN_URL }
            ]
        },
        {
            keywords: ["experience", "internship", "bluestocks", "turtlemint", "fintech", "sde", "vvh&es", "vidya vikas", "teacher", "lecturer", "work", "job", "career"],
            reply: `💼 **Professional Experience (3+ Years)**:<br><br>
            1. 🏢 **Operation Executive — Turtlemint**, Vapi (Mar 2025 – Present)<br>
            - Managing operational workflows, process automation, and fintech operations.<br><br>
            2. 💻 **Software Development Engineer (SDE) — Bluestocks Fintech** (Jul 2024 – Feb 2025)<br>
            - Engineered scalable web applications using React.js and modern JavaScript.<br>
            - Built and consumed RESTful APIs, optimized database queries, and participated in agile sprints.<br><br>
            3. 🏫 **Computer Lecturer & Tech Lead — VVH&ES**, Vapi (Nov 2024 – Present)<br>
            - Head of computer science instruction and laboratory infrastructure.<br>
            - Built the official school web portal (<a href="https://vidyavikasschoolvapi.netlify.app/" target="_blank" style="color:#e84949;">vidyavikasschoolvapi.netlify.app</a>) with online admissions 2026-27.<br><br>
            4. 🏆 **Team Lead — COAT IV Aptitude Test** (Leadership)<br>
            - Led a team of 20 to 50 volunteers for intercollegiate tech event, securing 3rd rank!`,
            actions: [
                { text: "🔗 View on LinkedIn", url: LINKEDIN_URL },
                { text: "📄 Resume PDF", url: "assets/smit_resume.pdf" },
                { text: "🏫 School Website", url: "https://vidyavikasschoolvapi.netlify.app/" }
            ]
        },
        {
            keywords: ["education", "college", "degree", "mca", "bsc", "gl bajaj", "allahabad university", "aktu", "studies"],
            reply: `🎓 **Academic Qualifications**:<br><br>
            1. 🎓 **UGC NET Qualified (Dec 2024)**<br>
            • Computer Science & Applications (National Testing Agency).<br><br>
            2. 🎓 **Master of Computer Applications (MCA)** (2022 – 2024)<br>
            • **GL Bajaj Institute of Technology & Management**, Greater Noida (AKTU)<br>
            • **CGPA: 7.1 / 10**<br>
            • Advanced computer science, OOPs (Java), DBMS, full-stack software development.<br><br>
            3. 🎓 **Bachelor of Science (Mathematics & Computer Science)** (2019 – 2022)<br>
            • **University of Allahabad**, Prayagraj<br>
            • **Percentage: 85.6% (Distinction)** with deep grounding in computational math and algorithms.`,
            actions: [
                { text: "🔗 Connect on LinkedIn", url: LINKEDIN_URL },
                { text: "📄 View Resume", url: "assets/smit_resume.pdf" }
            ]
        },
        {
            keywords: ["certifications", "certificate", "microsoft", "sap", "google", "cloud", "edunet"],
            reply: `📜 **Official Certifications**:<br><br>
            • ☁️ **Applied Cloud Computing For Software Development**: Edunet Foundation with Microsoft & SAP India (09/2023 – 03/2024).<br>
            • 🤖 **Certification on Generative AI**: Google.<br>
            • 💻 **Computer Skills Certification**: ISPG College.<br>
            • 🎓 **UGC NET Dec 2024**: University Grants Commission / NTA.`,
            actions: [
                { text: "📄 View in Resume", url: "assets/smit_resume.pdf" },
                { text: "🔗 LinkedIn Certifications", url: LINKEDIN_URL }
            ]
        },
        {
            keywords: ["project", "projects", "work", "portfolio", "websites", "code sync", "crud", "spring boot", "kya banaya", "apps"],
            reply: `🚀 **Smit's Top Projects**:<br><br>
            1. 💻 **Code Sync (2024)**: Real-time code collaboration platform allowing multiple programmers to code together in live synchronization. Built with React.js, Node.js, Express.js, and WebSockets.<br><br>
            2. 🍃 **Full Stack CRUD Application (2023)**: Enterprise full-stack web application with Spring Boot (Java) RESTful backend and React.js frontend, backed by MySQL relational database.<br><br>
            3. 🏫 **Vidya Vikas School Web Portal**: Official live responsive site for Vidya Vikas Hindi & English School, Vapi (<a href="https://vidyavikasschoolvapi.netlify.app/" target="_blank" style="color:#e84949;">vidyavikasschoolvapi.netlify.app</a>) with Admissions 2026-27 notice popup.<br><br>
            4. 🛒 **Online Shopping System**: E-commerce website with store opening/closing automation built using HTML5, CSS3, JavaScript, PHP, and MySQL.`,
            actions: [
                { text: "🏫 Visit School Website", url: "https://vidyavikasschoolvapi.netlify.app/" },
                { text: "💻 GitHub Projects", url: "https://github.com/onlinesmit" },
                { text: "🛒 Online Shopping", url: "https://smitshoppingsystem.000webhostapp.com/" }
            ]
        },
        {
            keywords: ["vidya vikas", "school", "school website", "vapi"],
            reply: `🏫 **Vidya Vikas Hindi & English School Web Portal**:<br>
            • Live URL: <a href="https://vidyavikasschoolvapi.netlify.app/" target="_blank" style="color:#e84949;text-decoration:underline;">vidyavikasschoolvapi.netlify.app</a><br>
            • Features: Interactive Admissions Open 2026-27 modal, curriculum guides, school history (Est. 1986), campus photos, and responsive navigation.<br>
            • Tech: HTML5, CSS3, JavaScript.`,
            actions: [
                { text: "🌐 Open School Website", url: "https://vidyavikasschoolvapi.netlify.app/" }
            ]
        },
        {
            keywords: ["skill", "skills", "tech stack", "technologies", "languages", "tools", "spring boot", "react", "mern", "javascript", "node", "mongo", "c++", "java", "sql", "mysql", "oops", "dbms"],
            reply: `⚡ **Smit's Technical Skills & Stack**:<br><br>
            • **Languages**: Java, JavaScript (ES6+), C, C++, SQL<br>
            • **Concepts**: OOPs (Object-Oriented Programming), DBMS, Data Structures & Algorithms<br>
            • **Backend & Frameworks**: Spring Boot, Node.js, Express.js, RESTful APIs, MERN Stack<br>
            • **Frontend**: React.js, HTML5, CSS3, Tailwind CSS, Bootstrap<br>
            • **Databases**: MySQL, MongoDB<br>
            • **Cloud & AI**: Microsoft & SAP Cloud, Google Generative AI<br>
            • **Tools**: Git, GitHub, VS Code, Netlify, Vercel<br>
            • **Qualities**: Leadership, Adaptability, Team Work, Student Mentorship`,
            actions: [
                { text: "💼 Hire Smit", chip: "hire" },
                { text: "💬 WhatsApp Me", url: WHATSAPP_LINK, isWa: true },
                { text: "🔗 LinkedIn", url: LINKEDIN_URL }
            ]
        },
        {
            keywords: ["linkedin", "profile", "social", "connect"],
            reply: `🔗 **LinkedIn Profile**:<br>
            Connect with Smit Kumar Gupta on LinkedIn to see recommendations, network, and discuss career opportunities:<br>
            👉 <a href="${LINKEDIN_URL}" target="_blank" style="color:#0077b5;font-weight:700;">linkedin.com/in/smitkumar1/</a>`,
            actions: [
                { text: "🌐 Open LinkedIn Profile", url: LINKEDIN_URL },
                { text: "💬 Chat on WhatsApp", url: WHATSAPP_LINK, isWa: true }
            ]
        },
        {
            keywords: ["whatsapp", "phone", "number", "mobile", "contact", "call", "email", "reach", "baat", "message"],
            reply: `📞 **Contact Smit Kumar Gupta Directly**:<br><br>
            • 📱 **WhatsApp**: <a href="${WHATSAPP_LINK}" target="_blank" style="color:#25D366;font-weight:700;">+91 9875052329</a><br>
            • 📞 **Direct Call**: <a href="tel:+919554839476" style="color:#2563eb;font-weight:700;">+91 9554839476</a><br>
            • ✉️ **Email**: <a href="mailto:smitkumar09@gmail.com" style="color:#6366f1;">smitkumar09@gmail.com</a><br>
            • 🔗 **LinkedIn**: <a href="${LINKEDIN_URL}" target="_blank" style="color:#0077b5;">linkedin.com/in/smitkumar1/</a><br>
            • 📍 **Location**: Vapi, Gujarat, India<br><br>
            Feel free to ping on WhatsApp or call anytime!`,
            actions: [
                { text: "💬 Open WhatsApp Chat", url: WHATSAPP_LINK, isWa: true },
                { text: "📞 Call +91 9554839476", url: "tel:+919554839476" },
                { text: "✉️ Send Email", url: "mailto:smitkumar09@gmail.com" }
            ]
        },
        {
            keywords: ["hire", "freelance", "job", "work", "available", "opportunity", "collaborate", "salary", "rate", "cost"],
            reply: `💼 **Available for Full-Time Roles & Opportunities!**<br><br>
            Smit is actively open to Software Engineering, SDE, Full Stack Developer, and Technical Lecturer roles.<br><br>
            ⭐ **UGC NET Qualified (Dec 2024)** in Computer Science<br>
            ⭐ Hands-on experience at **Bluestocks Fintech (SDE)** & **Turtlemint**<br>
            ⭐ Full-stack expertise in **Spring Boot, Java, React.js, Node.js, and MySQL**<br>
            ⭐ Proven leadership (Led 20-50 volunteers; 3rd rank in COAT IV)<br><br>
            Let's connect directly on WhatsApp: **+91 9875052329** or Phone: **+91 9554839476**!`,
            actions: [
                { text: "🚀 Chat on WhatsApp (+91 9875052329)", url: WHATSAPP_LINK, isWa: true },
                { text: "📄 View Resume", url: "assets/smit_resume.pdf" }
            ]
        },
        {
            keywords: ["resume", "cv", "pdf", "download resume", "bio data"],
            reply: `📄 **Smit's Official Resume** has been updated with his latest credentials (UGC NET Dec 2024, Turtlemint, Bluestocks Fintech, Code Sync, Spring Boot). Click below to view or download:`,
            actions: [
                { text: "📥 Download Official Resume PDF", url: "assets/smit_resume.pdf" },
                { text: "💬 WhatsApp Smit", url: WHATSAPP_LINK, isWa: true }
            ]
        }
    ];
    ];

    // Sound chime via Web Audio API
    function playBotChime() {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            const ctx = new AudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = "sine";
            osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
            osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12); // A5
            gain.gain.setValueAtTime(0.08, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
            osc.start();
            osc.stop(ctx.currentTime + 0.15);
        } catch (e) {
            // Audio context blocked or not supported
        }
    }

    // Initialize UI
    function initAIBot() {
        const container = document.getElementById("ai-bot-container");
        if (!container) return;

        const launcher = container.querySelector(".ai-bot-launcher");
        const windowEl = container.querySelector(".ai-chat-window");
        const closeBtn = container.querySelector("#ai-close-btn");
        const clearBtn = container.querySelector("#ai-clear-btn");
        const chatBody = container.querySelector(".ai-chat-body");
        const inputField = container.querySelector(".ai-chat-input");
        const sendBtn = container.querySelector(".ai-send-btn");
        const chipsContainer = container.querySelector(".ai-quick-chips");

        let isOpen = false;

        function toggleChat() {
            isOpen = !isOpen;
            if (isOpen) {
                windowEl.classList.add("open");
                launcher.style.transform = "scale(0.85)";
                inputField.focus();
                // If body is empty, add welcome message
                if (chatBody.children.length === 0) {
                    sendBotWelcome();
                }
            } else {
                windowEl.classList.remove("open");
                launcher.style.transform = "";
            }
        }

        launcher.addEventListener("click", toggleChat);
        closeBtn.addEventListener("click", toggleChat);

        clearBtn.addEventListener("click", () => {
            chatBody.innerHTML = "";
            sendBotWelcome();
        });

        // Welcome message
        function sendBotWelcome() {
            appendBotMessage(
                `👋 <strong>Hi! I'm Smit's AI Assistant.</strong><br>Ask me anything about Smit's projects, tech stack, experience, or hire him directly on WhatsApp!`,
                [
                    { text: "🚀 Projects", chip: "projects" },
                    { text: "⚡ Tech Stack", chip: "skills" },
                    { text: "💬 WhatsApp (9875052329)", url: WHATSAPP_LINK, isWa: true }
                ]
            );
        }

        // Time formatter
        function getTimeString() {
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            const ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            return `${hours}:${minutes} ${ampm}`;
        }

        // Append User Message
        function appendUserMessage(text) {
            const msgEl = document.createElement("div");
            msgEl.className = "ai-message ai-msg-user";
            msgEl.innerHTML = `
                <div class="ai-msg-bubble">${escapeHTML(text)}</div>
                <div class="ai-msg-time">${getTimeString()}</div>
            `;
            chatBody.appendChild(msgEl);
            chatBody.scrollTop = chatBody.scrollHeight;
        }

        // Append Bot Message
        function appendBotMessage(htmlContent, actions = []) {
            const msgEl = document.createElement("div");
            msgEl.className = "ai-message ai-msg-bot";

            let actionsHtml = "";
            if (actions && actions.length > 0) {
                actionsHtml = `<div style="display:flex; flex-wrap:wrap; gap:0.6rem; margin-top:0.8rem;">`;
                actions.forEach(act => {
                    if (act.url) {
                        const btnClass = act.isWa ? "ai-card-btn" : "ai-card-btn ai-card-btn-purple";
                        actionsHtml += `<a href="${act.url}" target="_blank" class="${btnClass}">${act.text} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:1rem;"></i></a>`;
                    } else if (act.chip) {
                        actionsHtml += `<button class="ai-chip" data-query="${act.chip}" style="margin:0;">${act.text}</button>`;
                    }
                });
                actionsHtml += `</div>`;
            }

            msgEl.innerHTML = `
                <div class="ai-msg-bubble">
                    ${htmlContent}
                    ${actionsHtml}
                </div>
                <div class="ai-msg-time">${getTimeString()}</div>
            `;

            // Bind click to newly generated chips inside message
            msgEl.querySelectorAll("button.ai-chip").forEach(btn => {
                btn.addEventListener("click", () => {
                    handleUserQuery(btn.getAttribute("data-query"));
                });
            });

            chatBody.appendChild(msgEl);
            chatBody.scrollTop = chatBody.scrollHeight;
            playBotChime();
        }

        // Show typing indicator
        function showTypingIndicator() {
            const typingEl = document.createElement("div");
            typingEl.className = "ai-message ai-msg-bot ai-typing-wrapper";
            typingEl.innerHTML = `
                <div class="ai-typing-indicator">
                    <span class="ai-typing-dot"></span>
                    <span class="ai-typing-dot"></span>
                    <span class="ai-typing-dot"></span>
                </div>
            `;
            chatBody.appendChild(typingEl);
            chatBody.scrollTop = chatBody.scrollHeight;
            return typingEl;
        }

        // Match Query
        function findReply(query) {
            const normalized = query.toLowerCase().trim();

            for (const item of KNOWLEDGE_BASE) {
                for (const keyword of item.keywords) {
                    if (normalized.includes(keyword)) {
                        return item;
                    }
                }
            }

            // Default fallback
            return {
                reply: `Thanks for your question! I can provide info about Smit's **projects**, **skills**, **resume**, or you can directly connect with him on WhatsApp at **+91 9875052329**.`,
                actions: [
                    { text: "💬 Chat on WhatsApp", url: WHATSAPP_LINK, isWa: true },
                    { text: "🚀 See Projects", chip: "projects" },
                    { text: "📄 Resume", url: "assets/smit_resume.pdf" }
                ]
            };
        }

        function handleUserQuery(queryText) {
            if (!queryText || !queryText.trim()) return;
            const text = queryText.trim();
            appendUserMessage(text);
            inputField.value = "";

            const typingEl = showTypingIndicator();

            setTimeout(() => {
                if (typingEl && typingEl.parentNode) {
                    typingEl.parentNode.removeChild(typingEl);
                }
                const match = findReply(text);
                appendBotMessage(match.reply, match.actions);
            }, 450);
        }

        // Submit listener
        sendBtn.addEventListener("click", () => {
            handleUserQuery(inputField.value);
        });

        inputField.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                handleUserQuery(inputField.value);
            }
        });

        // Chips listener
        if (chipsContainer) {
            chipsContainer.querySelectorAll(".ai-chip").forEach(chip => {
                chip.addEventListener("click", () => {
                    const query = chip.getAttribute("data-query");
                    if (query) {
                        handleUserQuery(query);
                    }
                });
            });
        }

        // Escape HTML helper
        function escapeHTML(str) {
            return str.replace(/[&<>'"]/g, 
                tag => ({
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    "'": '&#39;',
                    '"': '&quot;'
                }[tag] || tag)
            );
        }

        // Auto trigger welcome if user scrolls down after 5 seconds
        setTimeout(() => {
            const badge = launcher.querySelector(".ai-badge");
            if (badge) {
                badge.style.animation = "waPulse 1.5s infinite";
            }
        }, 3000);
    }

    // Initialize when DOM ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initAIBot);
    } else {
        initAIBot();
    }
})();
