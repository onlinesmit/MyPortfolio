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
            reply: `👋 **Hello!** I am Smit's AI Assistant. How can I help you today?<br><br>You can ask me about his **experience**, **education**, **tech stack**, **projects**, or connect directly on **WhatsApp** or **LinkedIn**!`,
            actions: [
                { text: "💼 Experience & Edu", chip: "experience" },
                { text: "⚡ Tech Stack", chip: "skills" },
                { text: "🚀 Projects", chip: "projects" },
                { text: "💬 WhatsApp (+91 9875052329)", url: WHATSAPP_LINK, isWa: true }
            ]
        },
        {
            keywords: ["who is smit", "about", "bio", "background", "kaun hai", "smit kumar", "introduce"],
            reply: `👨‍💻 **About Smit Kumar**:<br>
            • **Full Stack Software Developer & Computer Expert** with 3+ years of experience in tech, educational leadership, and modern web architectures.<br>
            • **Current Role**: **Computer Lecturer at VVH&ES** and building high-performance web applications using React, Java, and MERN stack.<br>
            • **Previous Role**: Software Developer & Team Lead at **Open Waiver** (led team of 5, boosted company profit ~30%).<br>
            • **Education**: MCA from GL Bajaj (AKTU, 2022-24) & B.Sc (Maths & CS, 85% Distinction) from University of Allahabad.<br>
            • **Languages**: English, Hindi, and Gujarati.`,
            actions: [
                { text: "🔗 LinkedIn Profile", url: LINKEDIN_URL },
                { text: "📄 Download Resume", url: "assets/smit_resume.pdf" },
                { text: "📱 WhatsApp: 9875052329", url: WHATSAPP_LINK, isWa: true }
            ]
        },
        {
            keywords: ["experience", "internship", "open waiver", "vvh&es", "vidya vikas", "teacher", "lecturer", "work", "job", "career"],
            reply: `💼 **Professional Experience (3+ Years)**:<br><br>
            1. 🏫 **Computer Lecturer & Tech Lead** — **VVH&ES** (Vapi, Gujarat | 12/11/2024 – Present)<br>
            - Head of computer education, student lectures, digital curriculum & campus tech infrastructure.<br>
            - Architected & launched official school web portal (<a href="https://vidyavikasschoolvapi.netlify.app/" target="_blank" style="color:#e84949;">vidyavikasschoolvapi.netlify.app</a>) with online admissions & notifications.<br>
            - Training and mentoring students in programming fundamentals, modern web development, and digital literacy.<br><br>
            2. 💻 **Software Developer & Team Lead** — **Open Waiver** (Remote | 12/10/2022 – 12/10/2023)<br>
            - Led a team of 5 developers building high-performance frontend interfaces using HTML5, CSS3, JS, and Tailwind CSS.<br>
            - Increased company profitability by approximately 30%.<br><br>
            3. 🏆 **Team Lead — COAT IV Aptitude Test** (2020)<br>
            - Led 20 volunteers for intercollegiate tech aptitude event and secured 3rd rank!`,
            actions: [
                { text: "🔗 View on LinkedIn", url: LINKEDIN_URL },
                { text: "📄 Resume PDF", url: "assets/smit_resume.pdf" },
                { text: "🏫 School Website", url: "https://vidyavikasschoolvapi.netlify.app/" }
            ]
        },
        {
            keywords: ["education", "college", "degree", "mca", "bsc", "gl bajaj", "allahabad university", "aktu", "studies"],
            reply: `🎓 **Academic Qualifications**:<br><br>
            1. 🎓 **Master of Computer Application (MCA)** (2022 – 2024)<br>
            • **GL Bajaj Institute of Technology & Management**, Greater Noida (AKTU)<br>
            • Advanced computing, web technologies, software architecture & database systems.<br><br>
            2. 🎓 **Bachelor of Science (Mathematics & Computer Science)** (2019 – 2022)<br>
            • **University of Allahabad**, Prayagraj<br>
            • **Percentage: 85% (Distinction)** with strong foundation in discrete math and algorithmic logic.`,
            actions: [
                { text: "🔗 Connect on LinkedIn", url: LINKEDIN_URL },
                { text: "📄 View Resume", url: "assets/smit_resume.pdf" }
            ]
        },
        {
            keywords: ["project", "projects", "work", "portfolio", "websites", "kya banaya", "apps"],
            reply: `🚀 **Smit's Top Projects**:<br><br>
            1. 🏫 **Vidya Vikas School**: Official responsive web portal for Vidya Vikas Hindi & English School, Vapi with online admissions & notice board.<br>
            2. 🛒 **Online Shopping**: Custom e-commerce platform with store hours functionality using HTML, CSS, JS, PHP, MySQL.<br>
            3. ⚛️ **React Portfolio**: Sleek, modern portfolio built with ReactJS showcasing skills & projects.<br>
            4. 🎮 **Tic Tac Toe**: Interactive game built with vanilla JS and responsive UI.`,
            actions: [
                { text: "🏫 Visit School Website", url: "https://vidyavikasschoolvapi.netlify.app/" },
                { text: "🛒 Visit Shopping Store", url: "https://smitshoppingsystem.000webhostapp.com/" },
                { text: "⚛️ React Portfolio", url: "https://smitreactportfolio.netlify.app/" }
            ]
        },
        {
            keywords: ["vidya vikas", "school", "school website", "vapi"],
            reply: `🏫 **Vidya Vikas Hindi & English School Website**:<br>
            • Live URL: <a href="https://vidyavikasschoolvapi.netlify.app/" target="_blank" style="color:#e84949;text-decoration:underline;">vidyavikasschoolvapi.netlify.app</a><br>
            • Features: Admissions open 2026-27 popup, responsive layout, course offerings, campus information, and mobile navigation.<br>
            • Tech: HTML5, CSS3, JavaScript.`,
            actions: [
                { text: "🌐 Open School Website", url: "https://vidyavikasschoolvapi.netlify.app/" }
            ]
        },
        {
            keywords: ["skill", "skills", "tech stack", "technologies", "languages", "tools", "react", "mern", "javascript", "node", "mongo", "c++", "java", "dsa"],
            reply: `⚡ **Smit's Technical Skills & Stack**:<br><br>
            • **Programming Languages**: C, C++, Java, JavaScript (ES6+)<br>
            • **Frontend**: React.js, HTML5, CSS3, Tailwind CSS, Bootstrap, Redux<br>
            • **Backend & APIs**: Node.js, Express.js, RESTful APIs, MERN Stack<br>
            • **Databases**: MongoDB, MySQL<br>
            • **Tools & Platforms**: Git, GitHub, VS Code, Netlify, Vercel, PWA, SEO<br>
            • **DSA & Problem Solving**: Actively solves challenges on LeetCode, CodeStudio, and GeeksforGeeks (GFG).`,
            actions: [
                { text: "💼 Hire Smit", chip: "hire" },
                { text: "💬 WhatsApp Me", url: WHATSAPP_LINK, isWa: true },
                { text: "🔗 LinkedIn", url: LINKEDIN_URL }
            ]
        },
        {
            keywords: ["linkedin", "profile", "social", "connect"],
            reply: `🔗 **LinkedIn Profile**:<br>
            Connect with Smit Kumar on LinkedIn to see recommendations, network, and discuss career opportunities:<br>
            👉 <a href="${LINKEDIN_URL}" target="_blank" style="color:#0077b5;font-weight:700;">linkedin.com/in/smitkumar1/</a>`,
            actions: [
                { text: "🌐 Open LinkedIn Profile", url: LINKEDIN_URL },
                { text: "💬 Chat on WhatsApp", url: WHATSAPP_LINK, isWa: true }
            ]
        },
        {
            keywords: ["whatsapp", "phone", "number", "mobile", "contact", "call", "email", "reach", "baat", "message"],
            reply: `📞 **Contact Smit Kumar Directly**:<br><br>
            • 📱 **WhatsApp & Call**: <a href="${WHATSAPP_LINK}" target="_blank" style="color:#25D366;font-weight:700;">+91 9875052329</a><br>
            • ✉️ **Email**: <a href="mailto:smitkumar09@gmail.com" style="color:#6366f1;">smitkumar09@gmail.com</a> / <a href="mailto:onlinesmitg@gmail.com" style="color:#6366f1;">onlinesmitg@gmail.com</a><br>
            • 🔗 **LinkedIn**: <a href="${LINKEDIN_URL}" target="_blank" style="color:#0077b5;">linkedin.com/in/smitkumar1/</a><br>
            • 📍 **Location**: Prayagraj / Vapi, India<br><br>
            Feel free to ping on WhatsApp anytime!`,
            actions: [
                { text: "💬 Open WhatsApp Chat", url: WHATSAPP_LINK, isWa: true },
                { text: "✉️ Send Email", url: "mailto:smitkumar09@gmail.com" }
            ]
        },
        {
            keywords: ["hire", "freelance", "job", "work", "available", "opportunity", "collaborate", "salary", "rate", "cost"],
            reply: `💼 **Available for Hire & Projects!**<br><br>
            Smit is actively seeking full-time roles, internships, and freelance projects (Full Stack / Frontend Web Development).<br><br>
            ⭐ MCA Post-Graduate with distinction background in Computer Science<br>
            ⭐ Hands-on MERN stack development & API integrations<br>
            ⭐ Clean, scalable code with 100% responsiveness<br><br>
            Let's discuss your requirements on WhatsApp: **+91 9875052329**!`,
            actions: [
                { text: "🚀 Chat on WhatsApp (+91 9875052329)", url: WHATSAPP_LINK, isWa: true },
                { text: "📄 View Resume", url: "assets/smit_resume.pdf" }
            ]
        },
        {
            keywords: ["resume", "cv", "pdf", "download resume", "bio data"],
            reply: `📄 **Smit's Resume** is available for download. Click below to view or download the complete PDF copy:`,
            actions: [
                { text: "📥 Download Resume PDF", url: "assets/smit_resume.pdf" },
                { text: "💬 WhatsApp Smit", url: WHATSAPP_LINK, isWa: true }
            ]
        }
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
