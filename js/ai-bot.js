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
            reply: `👋 **Hello!** I am Smit's AI Assistant. How can I help you today?<br><br>You can ask me about his **experience** (Turtlemint, Bluestocks Fintech, VVH&ES), **UGC NET Dec 2024 qualification**, **education**, **tech stack** (Spring Boot, React, Java, MERN), **projects** (Code Sync, CRUD App, School Portal), or connect directly on **WhatsApp** or **Calling**!`,
            actions: [
                { text: "🎓 UGC NET Dec 2024", chip: "net" },
                { text: "💼 Experience", chip: "experience" },
                { text: "⚡ Tech Stack", chip: "skills" },
                { text: "🚀 Projects", chip: "projects" },
                { text: "💬 WhatsApp (+91 9875052329)", url: WHATSAPP_LINK, isWa: true }
            ]
        },
        {
            keywords: ["who is smit", "about", "bio", "background", "kaun hai", "smit kumar", "smit kumar gupta", "introduce"],
            reply: `👨‍💻 **About Smit Kumar Gupta**:<br>
            • **UGC NET Qualified (Dec 2024)** in Computer Science & Applications.<br>
            • **Software Development Engineer & Computer Expert** with 3+ years of experience across fintech engineering and academic mentorship.<br>
            • **Current Roles**: **Operation Executive at Turtlemint** (Mar 2025 – Present) & **Computer Lecturer / Tech Lead at VVH&ES** (Nov 2024 – Present).<br>
            • **Previous Role**: **Software Development Engineer (SDE) at Bluestocks Fintech** (Jul 2024 – Feb 2025).<br>
            • **Education**: MCA from GL Bajaj (AKTU, CGPA: 7.1/10) & B.Sc (Maths & CS, 85.6% Distinction) from University of Allahabad.<br>
            • **Certifications**: Applied Cloud Computing (Microsoft & SAP India), Google Generative AI.<br>
            • **Location**: Vapi, Gujarat, India.`,
            actions: [
                { text: "🔗 LinkedIn Profile", url: LINKEDIN_URL },
                { text: "📄 Download Resume", url: "assets/smit_resume.pdf" },
                { text: "📱 WhatsApp: 9875052329", url: WHATSAPP_LINK, isWa: true }
            ]
        },
        {
            keywords: ["net", "ugc net", "ugc", "assistant professor", "exam", "qualification"],
            reply: `🎓 **UGC NET Qualified (December 2024)**:<br>
            • **Exam**: National Eligibility Test (UGC NET Dec 2024) conducted by National Testing Agency (NTA).<br>
            • **Subject**: Computer Science and Applications.<br>
            • **Significance**: National certification establishing eligibility for Assistant Professorship and deep domain mastery in Algorithms, Data Structures, Operating Systems, DBMS, Software Engineering, and Computer Networks.`,
            actions: [
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
