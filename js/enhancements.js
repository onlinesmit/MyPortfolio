/**
 * Smit's Portfolio - UI & Micro-interaction Enhancements
 * Scroll progress, Header elevation, Animated Stats & Back to Top
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Scroll Progress Bar
    const progressBar = document.getElementById("scroll-progress");
    const header = document.querySelector("header");
    const backToTopBtn = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }

        // Header elevation
        if (header) {
            if (scrollTop > 40) {
                header.classList.add("header-scrolled");
            } else {
                header.classList.remove("header-scrolled");
            }
        }

        // Back to top button visibility
        if (backToTopBtn) {
            if (scrollTop > 400) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // 2. Animated Counter for Stats
    const statsSection = document.querySelector(".hero-stats-bar");
    let counted = false;

    if (statsSection && "IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !counted) {
                    counted = true;
                    animateCounters();
                }
            });
        }, { threshold: 0.3 });

        observer.observe(statsSection);
    }

    function animateCounters() {
        const counters = document.querySelectorAll(".stat-number[data-target]");
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute("data-target"), 10);
            const prefix = counter.getAttribute("data-prefix") || "";
            const suffix = counter.getAttribute("data-suffix") || "";
            const duration = 1500;
            const start = 0;
            const stepTime = 25;
            const steps = duration / stepTime;
            const increment = target / steps;
            let current = start;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = `${prefix}${Math.floor(current)}${suffix}`;
            }, stepTime);
        });
    }
});
