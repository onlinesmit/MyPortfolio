/**
 * Smit's Portfolio - Privacy-Friendly Visitor Intelligence & Geolocation Engine
 * Tracks City, Country, Device, Referrer, and logs to Admin storage + optional Email alerts
 */
(function() {
    const STORAGE_KEY = "smit_portfolio_visitor_logs";
    const SESSION_KEY = "smit_portfolio_session_tracked";
    const SETTINGS_KEY = "smit_portfolio_analytics_settings";

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

    // Geolocation and visitor logging
    async function trackVisitor() {
        // Prevent duplicate tracking in the same session
        if (sessionStorage.getItem(SESSION_KEY)) {
            return;
        }

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
            // Fallback to ipapi.co if ipwho fails
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
            } catch (err2) {
                // If offline / adblocked, keep default
            }
        }

        const visitRecord = {
            id: "visit_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
            timestamp: timestamp,
            readableTime: readableTime,
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

        // Mark session as tracked
        sessionStorage.setItem(SESSION_KEY, "true");

        // Send real-time email notification to Smit (rate-limited to 1 per visitor session)
        sendVisitorEmailNotification(visitRecord);
    }

    function sendVisitorEmailNotification(visit) {
        // Check if email alerts are enabled (default: true)
        const settings = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{"emailAlerts": true}');
        if (!settings.emailAlerts) return;

        // Skip sending on local development
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
            return;
        }

        fetch("https://formsubmit.co/ajax/smitkumar09@gmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                _subject: `🌍 Portfolio Visit: ${visit.city}, ${visit.country} (${visit.device} via ${visit.referrer})`,
                _template: "table",
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
        }).catch(() => {
            // Background silent catch
        });
    }

    // Initialize tracking after slight delay so page loads fast
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(trackVisitor, 1200);
    } else {
        window.addEventListener("DOMContentLoaded", () => setTimeout(trackVisitor, 1200));
    }

    // Secret Admin Access via Hotkey: Ctrl + Shift + A
    window.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.shiftKey && (e.key === "A" || e.key === "a")) {
            e.preventDefault();
            window.location.href = "admin.html";
        }
    });
})();
