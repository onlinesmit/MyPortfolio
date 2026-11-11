/**
 * Smit's Portfolio - Privacy-Friendly Visitor Intelligence & Geolocation Engine
 * Tracks City, Country, Device, Referrer, and Visitor Identity / Name
 * Logs to Admin storage + optional Real-Time Email alerts
 */
(function() {
    const STORAGE_KEY = "smit_portfolio_visitor_logs";
    const SESSION_KEY = "smit_portfolio_session_tracked";
    const SETTINGS_KEY = "smit_portfolio_analytics_settings";
    const IDENTITY_KEY = "smit_visitor_identity";
    const CURRENT_VISIT_ID_KEY = "smit_current_visit_id";

    // Detect Device Type
    function getDeviceType() {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return "Tablet";
        if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated/i.test(ua)) return "Mobile";
        return "Desktop";
    }

    // Detect OS
    function getOS() {
        const ua = navigator.userAgent;
        if (/Windows NT 10.0/i.test(ua)) return "Windows 10/11";
        if (/Windows NT 6.3/i.test(ua)) return "Windows 8.1";
        if (/Windows NT 6.1/i.test(ua)) return "Windows 7";
        if (/Windows/i.test(ua)) return "Windows";
        if (/Android/i.test(ua)) return "Android";
        if (/iPhone|iPad|iPod/i.test(ua)) return "iOS";
        if (/Mac OS X/i.test(ua)) return "macOS";
        if (/Linux/i.test(ua)) return "Linux";
        return "Other OS";
    }

    // Detect Browser
    function getBrowser() {
        const ua = navigator.userAgent;
        if (/Edg\//i.test(ua)) return "Edge";
        if (/Chrome\//i.test(ua)) return "Chrome";
        if (/Safari\//i.test(ua) && !/Chrome/i.test(ua)) return "Safari";
        if (/Firefox\//i.test(ua)) return "Firefox";
        if (/OPR\//i.test(ua)) return "Opera";
        return "Browser";
    }

    // Detect Traffic Source
    function getReferrerSource() {
        const ref = document.referrer ? document.referrer.toLowerCase() : "";
        if (!ref) return "Direct / Bookmark";
        if (ref.includes("linkedin")) return "LinkedIn";
        if (ref.includes("whatsapp")) return "WhatsApp";
        if (ref.includes("t.me") || ref.includes("telegram")) return "Telegram";
        if (ref.includes("facebook") || ref.includes("fb.com")) return "Facebook";
        if (ref.includes("instagram")) return "Instagram";
        if (ref.includes("google")) return "Google Search";
        if (ref.includes("github")) return "GitHub";
        if (ref.includes("twitter") || ref.includes("x.com")) return "X (Twitter)";
        try {
            return new URL(ref).hostname;
        } catch (e) {
            return "Referral Web";
        }
    }

    // -------------------------------------------------------------
    // VISITOR IDENTITY ENGINE
    // -------------------------------------------------------------
    function getVisitorIdentity() {
        // 1. Check URL parameters (?name=Rahul or ?v=Priya or ?for=Google_Recruiter)
        try {
            const params = new URLSearchParams(window.location.search);
            const urlName = params.get("name") || params.get("v") || params.get("visitor") || params.get("for") || params.get("client") || params.get("ref");
            if (urlName && urlName.trim()) {
                const cleanName = decodeURIComponent(urlName.trim().replace(/[_+]/g, ' '));
                let sourceDesc = "Shared Portfolio Link";
                if (params.get("for")) sourceDesc = `Custom Link (For: ${cleanName})`;
                else if (params.get("client")) sourceDesc = `Client Link (${cleanName})`;
                else if (params.get("ref")) sourceDesc = `Referral Link (${cleanName})`;

                const identity = {
                    name: cleanName,
                    source: sourceDesc,
                    timestamp: Date.now()
                };
                localStorage.setItem(IDENTITY_KEY, JSON.stringify(identity));
                return identity;
            }
        } catch (e) {}

        // 2. Check localStorage for previously recognized visitor
        try {
            const saved = localStorage.getItem(IDENTITY_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed && parsed.name) {
                    return parsed;
                }
            }
        } catch (e) {}

        return null;
    }

    // Global Identity Registration API
    window.identifyVisitor = function(name, source) {
        if (!name || typeof name !== "string" || !name.trim()) return;
        const cleanName = name.trim();
        const cleanSource = source || "Direct Input";

        const identity = {
            name: cleanName,
            source: cleanSource,
            timestamp: Date.now()
        };

        try {
            localStorage.setItem(IDENTITY_KEY, JSON.stringify(identity));

            // Backfill current session visit and all local logs
            const rawLogs = localStorage.getItem(STORAGE_KEY);
            if (rawLogs) {
                const logs = JSON.parse(rawLogs);
                const currentId = sessionStorage.getItem(CURRENT_VISIT_ID_KEY);
                let updated = false;

                logs.forEach(l => {
                    if (currentId && l.id === currentId) {
                        l.visitorName = cleanName;
                        l.nameSource = cleanSource;
                        l.identified = true;
                        updated = true;
                    }
                });

                // If currentId wasn't found, update the most recent log
                if (!updated && logs.length > 0) {
                    logs[0].visitorName = cleanName;
                    logs[0].nameSource = cleanSource;
                    logs[0].identified = true;
                }

                localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
            }
        } catch (e) {
            console.error("Identity update error:", e);
        }

        // Broadcast DOM event
        window.dispatchEvent(new CustomEvent("smit:visitor-identified", { detail: identity }));

        // Update UI greetings on the page
        updateVisitorUI(cleanName);

        // Send instant alert email to Smit for this identified visitor
        sendIdentifiedVisitorAlert(identity);
    };

    window.getVisitorIdentity = getVisitorIdentity;

    // Send instant alert email when visitor identifies themselves
    function sendIdentifiedVisitorAlert(identity) {
        const alertSentKey = "smit_alert_sent_" + identity.name.toLowerCase().replace(/[^a-z0-9]/g, '_');
        if (sessionStorage.getItem(alertSentKey)) return;

        // Skip sending on local development
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
            return;
        }

        const settings = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{"emailAlerts": true}');
        if (!settings.emailAlerts) return;

        let latestLog = {};
        try {
            const logs = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
            if (logs.length > 0) latestLog = logs[0];
        } catch (e) {}

        fetch("https://formsubmit.co/ajax/smitkumar217@gmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                _subject: `👤 Identified Visitor: ${identity.name} (${identity.source}) is on your Portfolio!`,
                _template: "table",
                Visitor_Name: identity.name,
                Identification_Source: identity.source,
                Location: latestLog.city ? `${latestLog.flag || ''} ${latestLog.city}, ${latestLog.region || ''}, ${latestLog.country || ''}` : "Detected on site",
                Device: latestLog.device || "Desktop",
                Operating_System: latestLog.os || "Unknown",
                Browser: latestLog.browser || "Unknown",
                Traffic_Source: latestLog.referrer || "Direct",
                Identified_At: new Date().toLocaleString("en-IN")
            })
        }).then(() => {
            sessionStorage.setItem(alertSentKey, "true");
        }).catch(() => {});
    }

    // Geolocation and visitor logging
    async function trackVisitor() {
        const device = getDeviceType();
        const os = getOS();
        const browser = getBrowser();
        const referrer = getReferrerSource();
        const screenRes = `${window.screen.width}x${window.screen.height}`;
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown";
        const timestamp = new Date().toISOString();
        const readableTime = new Date().toLocaleString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });

        const activeIdentity = getVisitorIdentity();
        const visitorName = activeIdentity ? activeIdentity.name : "Guest Visitor";
        const nameSource = activeIdentity ? activeIdentity.source : "";
        const identified = !!activeIdentity;

        let geoData = {
            ip: "Private / Hidden",
            city: "Unknown City",
            region: "Unknown Region",
            country: "India",
            country_code: "IN",
            flag: "🇮🇳",
            isp: "Network Provider"
        };

        // Fetch Geolocation with fallback
        try {
            const res = await fetch("https://ipwho.is/", { cache: "no-store" });
            const data = await res.json();
            if (data && data.success) {
                geoData = {
                    ip: data.ip || "Hidden",
                    city: data.city || "Unknown",
                    region: data.region || "Unknown",
                    country: data.country || "Unknown",
                    country_code: data.country_code || "IN",
                    flag: data.flag?.emoji || "🌍",
                    isp: data.connection?.isp || data.connection?.org || "Network"
                };
            }
        } catch (err) {
            try {
                const res2 = await fetch("https://ipapi.co/json/", { cache: "no-store" });
                const data2 = await res2.json();
                if (data2 && data2.ip) {
                    geoData = {
                        ip: data2.ip,
                        city: data2.city || "Unknown",
                        region: data2.region || "Unknown",
                        country: data2.country_name || "Unknown",
                        country_code: data2.country_code || "IN",
                        flag: "🌍",
                        isp: data2.org || "Network"
                    };
                }
            } catch (err2) {}
        }

        const visitId = "visit_" + Date.now() + "_" + Math.floor(Math.random() * 1000);
        sessionStorage.setItem(CURRENT_VISIT_ID_KEY, visitId);

        const visitRecord = {
            id: visitId,
            timestamp: timestamp,
            readableTime: readableTime,
            visitorName: visitorName,
            nameSource: nameSource,
            identified: identified,
            ip: geoData.ip,
            city: geoData.city,
            region: geoData.region,
            country: geoData.country,
            flag: geoData.flag,
            isp: geoData.isp,
            device: device,
            os: os,
            browser: browser,
            screen: screenRes,
            referrer: referrer,
            timezone: timezone,
            page: window.location.pathname || "/"
        };

        // Save to local logs (limited to latest 200 visits)
        try {
            const rawLogs = localStorage.getItem(STORAGE_KEY);
            const logs = rawLogs ? JSON.parse(rawLogs) : [];
            logs.unshift(visitRecord);
            if (logs.length > 200) logs.pop();
            localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
        } catch (e) {
            console.error("Storage error:", e);
        }

        // Prevent duplicate tracking in the same session
        if (!sessionStorage.getItem(SESSION_KEY)) {
            sessionStorage.setItem(SESSION_KEY, "true");
            sendVisitorEmailNotification(visitRecord);
        }

        // Update UI greetings if visitor already has a known name
        if (activeIdentity) {
            updateVisitorUI(activeIdentity.name);
        }
    }

    function sendVisitorEmailNotification(visit) {
        const settings = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{"emailAlerts": true}');
        if (!settings.emailAlerts) return;

        // Skip sending on local development
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
            return;
        }

        const subjectTitle = visit.identified 
            ? `👤 ${visit.visitorName} visited your Portfolio (${visit.city}, ${visit.country})`
            : `🌍 Portfolio Visit: ${visit.city}, ${visit.country} (${visit.device} via ${visit.referrer})`;

        fetch("https://formsubmit.co/ajax/smitkumar217@gmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                _subject: subjectTitle,
                _template: "table",
                Visitor_Name: visit.identified ? `${visit.visitorName} (${visit.nameSource || 'Verified'})` : "Guest Visitor (Unidentified)",
                Location: `${visit.flag} ${visit.city}, ${visit.region}, ${visit.country}`,
                IP_Address: visit.ip,
                ISP_Network: visit.isp,
                Device_Type: visit.device,
                Operating_System: visit.os,
                Browser: visit.browser,
                Screen_Resolution: visit.screen,
                Traffic_Source: visit.referrer,
                Timestamp: visit.readableTime,
                Page: visit.page
            })
        }).catch(() => {});
    }

    // Update Visitor UI on page
    function updateVisitorUI(name) {
        if (!name) return;
        const passBtn = document.getElementById("btn-hero-visitor-pass");
        const passText = document.getElementById("hero-pass-text");
        if (passBtn && passText) {
            passBtn.classList.add("is-identified");
            passText.innerHTML = `👋 Welcome, <strong>${escapeHTML(name)}</strong>!`;
            passBtn.title = `You are checked in as ${name}. Click to update your name or title.`;
        }
    }

    function escapeHTML(str) {
        return String(str).replace(/[&<>'"]/g, tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag));
    }

    // -------------------------------------------------------------
    // ATTACH AUTO-DETECTION LISTENERS
    // -------------------------------------------------------------
    function attachIdentityListeners() {
        // 1. Contact Form - Name input blur
        const contactNameInput = document.getElementById("form-name");
        if (contactNameInput) {
            contactNameInput.addEventListener("blur", () => {
                const val = contactNameInput.value.trim();
                if (val.length >= 2) {
                    window.identifyVisitor(val, "Contact Form");
                }
            });
        }

        // 2. Rating Modal - Name input blur
        const reviewAuthorInput = document.getElementById("review-author");
        if (reviewAuthorInput) {
            reviewAuthorInput.addEventListener("blur", () => {
                const val = reviewAuthorInput.value.trim();
                if (val.length >= 2) {
                    window.identifyVisitor(val, "Rating & Review");
                }
            });
        }

        // 3. Visitor Pass Modal Handlers
        const passBtn = document.getElementById("btn-hero-visitor-pass");
        const passModal = document.getElementById("visitor-pass-modal-overlay");
        const passClose = document.getElementById("close-visitor-pass-btn");
        const passCancel = document.getElementById("btn-vp-cancel");
        const passForm = document.getElementById("visitor-pass-form");
        const passInput = document.getElementById("vp-name-input");

        if (passBtn && passModal) {
            passBtn.addEventListener("click", () => {
                const activeId = getVisitorIdentity();
                if (activeId && passInput) {
                    passInput.value = activeId.name;
                }
                passModal.style.display = "flex";
                setTimeout(() => passModal.classList.add("active"), 10);
                if (passInput) passInput.focus();
            });

            const closeModal = () => {
                passModal.classList.remove("active");
                setTimeout(() => passModal.style.display = "none", 250);
            };

            if (passClose) passClose.addEventListener("click", closeModal);
            if (passCancel) passCancel.addEventListener("click", closeModal);
            passModal.addEventListener("click", (e) => {
                if (e.target === passModal) closeModal();
            });

            if (passForm && passInput) {
                passForm.addEventListener("submit", (e) => {
                    e.preventDefault();
                    const nameVal = passInput.value.trim();
                    if (nameVal) {
                        window.identifyVisitor(nameVal, "Visitor Pass");
                        closeModal();
                    }
                });
            }
        }

        // Update UI if already recognized
        const activeId = getVisitorIdentity();
        if (activeId) {
            updateVisitorUI(activeId.name);
        }
    }

    // Initialize tracking after slight delay so page loads fast
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(trackVisitor, 1200);
        setTimeout(attachIdentityListeners, 500);
    } else {
        window.addEventListener("DOMContentLoaded", () => {
            setTimeout(trackVisitor, 1200);
            setTimeout(attachIdentityListeners, 500);
        });
    }

    // Secret Admin Access via Hotkey: Ctrl + Shift + A
    window.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.shiftKey && (e.key === "A" || e.key === "a")) {
            e.preventDefault();
            window.location.href = "admin.html";
        }
    });
})();
