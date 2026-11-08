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

    // -------------------------------------------------------------
    // 3. Interactive Ratings & Reviews System (Client Social Proof)
    // -------------------------------------------------------------
    const ratingModalOverlay = document.getElementById("rating-modal-overlay");
    const openRatingModalBtn = document.getElementById("open-rating-modal-btn");
    const openRatingModalBottomBtn = document.getElementById("open-rating-modal-bottom-btn");
    const closeRatingModalBtn = document.getElementById("close-rating-modal-btn");
    const cancelModalBtn = document.getElementById("btn-cancel-modal");
    const ratingForm = document.getElementById("portfolio-rating-form");
    const visitorReviewsTarget = document.getElementById("visitor-reviews-target");
    const starPicker = document.getElementById("star-picker");
    const starPickBtns = document.querySelectorAll(".star-pick-btn");
    const starFeedback = document.getElementById("star-picker-feedback");
    const selectedStarInput = document.getElementById("selected-star-rating");
    const filterAllCountEl = document.getElementById("filter-all-count");
    const filterVisitorCountEl = document.getElementById("filter-visitor-count");
    const reviewsTotalCountEl = document.getElementById("reviews-total-count");
    const reviewToastContainer = document.getElementById("review-toast-container");
    const reviewFilterBtns = document.querySelectorAll(".review-filter-btn");

    const RATING_TEXTS = {
        1: "⭐ Needs Improvement (1/5)",
        2: "⭐⭐ Fair (2/5)",
        3: "⭐⭐⭐ Good (3/5)",
        4: "⭐⭐⭐⭐ Very Good & Professional (4/5)",
        5: "⭐⭐⭐⭐⭐ Outstanding & Highly Recommended (5/5)"
    };

    let currentStarRating = 5;

    // A. Star Picker Interactions
    if (starPicker && starPickBtns.length > 0) {
        function updateStarDisplay(rating, isHover = false) {
            starPickBtns.forEach(btn => {
                const val = parseInt(btn.getAttribute("data-value"), 10);
                if (val <= rating) {
                    if (isHover) {
                        btn.classList.add("hovered");
                    } else {
                        btn.classList.add("active");
                        btn.classList.remove("hovered");
                    }
                } else {
                    btn.classList.remove("active");
                    btn.classList.remove("hovered");
                }
            });

            if (starFeedback) {
                starFeedback.innerHTML = `<span class="rating-verbal-badge">${RATING_TEXTS[rating] || (rating + "/5 Stars")}</span>`;
            }
        }

        starPickBtns.forEach(btn => {
            btn.addEventListener("mouseenter", () => {
                const hoverVal = parseInt(btn.getAttribute("data-value"), 10);
                updateStarDisplay(hoverVal, true);
            });

            btn.addEventListener("click", () => {
                currentStarRating = parseInt(btn.getAttribute("data-value"), 10);
                if (selectedStarInput) selectedStarInput.value = currentStarRating;
                updateStarDisplay(currentStarRating, false);
            });
        });

        starPicker.addEventListener("mouseleave", () => {
            updateStarDisplay(currentStarRating, false);
        });

        // Initialize at 5 stars
        updateStarDisplay(5, false);
    }

    // B. Modal Open & Close Handlers
    function openRatingModal() {
        if (!ratingModalOverlay) return;
        ratingModalOverlay.classList.add("active");
        ratingModalOverlay.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        const firstInput = document.getElementById("review-author");
        if (firstInput) setTimeout(() => firstInput.focus(), 100);
    }

    function closeRatingModal() {
        if (!ratingModalOverlay) return;
        ratingModalOverlay.classList.remove("active");
        ratingModalOverlay.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    if (openRatingModalBtn) openRatingModalBtn.addEventListener("click", openRatingModal);
    if (openRatingModalBottomBtn) openRatingModalBottomBtn.addEventListener("click", openRatingModal);
    if (closeRatingModalBtn) closeRatingModalBtn.addEventListener("click", closeRatingModal);
    if (cancelModalBtn) cancelModalBtn.addEventListener("click", closeRatingModal);

    if (ratingModalOverlay) {
        ratingModalOverlay.addEventListener("click", (e) => {
            if (e.target === ratingModalOverlay) closeRatingModal();
        });
    }

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && ratingModalOverlay && ratingModalOverlay.classList.contains("active")) {
            closeRatingModal();
        }
    });

    // C. Toast Notification
    function showReviewToast(name, rating) {
        if (!reviewToastContainer) return;
        const toast = document.createElement("div");
        toast.className = "review-toast";
        toast.innerHTML = `
            <div style="font-size:2rem;color:#fbbf24;"><i class="fa-solid fa-circle-check"></i></div>
            <div style="flex:1;">
                <strong style="display:block;font-size:1.45rem;color:#ffffff;margin-bottom:2px;">Review Published!</strong>
                <span>Thank you, <strong>${escapeHtml(name)}</strong>! Your ${rating}-star feedback is live on my portfolio.</span>
            </div>
            <button type="button" style="background:none;border:none;color:#94a3b8;cursor:pointer;font-size:1.4rem;" aria-label="Close toast">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;

        const closeBtn = toast.querySelector("button");
        if (closeBtn) {
            closeBtn.addEventListener("click", () => toast.remove());
        }

        reviewToastContainer.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transform = "translateX(50px)";
            setTimeout(() => toast.remove(), 350);
        }, 5500);
    }

    function escapeHtml(str) {
        return String(str || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // D. Visitor Reviews Persistence
    const STORAGE_KEY = "smit_portfolio_user_reviews";

    function getCategoryTag(cat) {
        switch (cat) {
            case "institution": return { name: "Academic & School", icon: "fa-school" };
            case "fintech": return { name: "Fintech & Backend", icon: "fa-chart-line" };
            case "agency": return { name: "Web Development", icon: "fa-wand-magic-sparkles" };
            case "mentee": return { name: "UGC NET Mentee", icon: "fa-graduation-cap" };
            default: return { name: "Visitor Feedback", icon: "fa-users" };
        }
    }

    function createReviewCardHtml(rev) {
        let starsHtml = "";
        for (let i = 1; i <= 5; i++) {
            if (i <= rev.rating) {
                starsHtml += `<i class="fa-solid fa-star"></i>`;
            } else {
                starsHtml += `<i class="fa-regular fa-star" style="color:#64748b;"></i>`;
            }
        }

        const catInfo = getCategoryTag(rev.category);
        const avatarLetter = (rev.author && rev.author.trim()[0]) ? rev.author.trim()[0].toUpperCase() : "U";

        return `
            <div class="review-card visitor-card" data-category="${escapeHtml(rev.category || 'visitor')}" data-is-visitor="true">
                <div class="review-card-header">
                    <div class="review-author-meta">
                        <div class="review-avatar" style="background: linear-gradient(135deg, #10b981, #059669); font-weight:800;">
                            ${escapeHtml(avatarLetter)}
                        </div>
                        <div>
                            <h4 class="review-author-name">${escapeHtml(rev.author)}</h4>
                            <p class="review-author-role">${escapeHtml(rev.role)}</p>
                        </div>
                    </div>
                    <div class="review-badge-visitor">
                        <i class="fa-solid fa-circle-check"></i> Verified Visitor
                    </div>
                </div>
                <div class="review-stars-row">
                    <div class="stars-gold">${starsHtml}</div>
                    <span class="review-score-tag">${rev.rating}.0 / 5.0</span>
                    <span class="review-date">${escapeHtml(rev.date || 'Recently')}</span>
                </div>
                <p class="review-quote">
                    "${escapeHtml(rev.message)}"
                </p>
                <div class="review-footer-tag">
                    <span class="tag-pill" style="border-color:rgba(52,211,153,0.3);color:#34d399;">
                        <i class="fa-solid ${catInfo.icon}"></i> ${escapeHtml(catInfo.name)}
                    </span>
                </div>
            </div>
        `;
    }

    function loadAndRenderVisitorReviews() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            const reviews = raw ? JSON.parse(raw) : [];

            if (filterVisitorCountEl) filterVisitorCountEl.textContent = reviews.length;
            const totalCount = 58 + reviews.length;
            if (filterAllCountEl) filterAllCountEl.textContent = `${totalCount}+`;
            if (reviewsTotalCountEl) reviewsTotalCountEl.textContent = `${totalCount}+`;

            if (visitorReviewsTarget) {
                if (reviews.length > 0) {
                    visitorReviewsTarget.innerHTML = reviews.map(createReviewCardHtml).join("");
                } else {
                    visitorReviewsTarget.innerHTML = "";
                }
            }
        } catch (err) {
            console.error("Error loading visitor reviews:", err);
        }
    }

    // Load initial reviews on DOM ready
    loadAndRenderVisitorReviews();

    // E. Handle Review Form Submission
    if (ratingForm) {
        ratingForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const authorInput = document.getElementById("review-author");
            const roleInput = document.getElementById("review-role");
            const categorySelect = document.getElementById("review-category");
            const messageInput = document.getElementById("review-message");
            const submitBtn = document.getElementById("btn-submit-review");

            const author = authorInput ? authorInput.value.trim() : "";
            const role = roleInput ? roleInput.value.trim() : "";
            const category = categorySelect ? categorySelect.value : "visitor";
            const message = messageInput ? messageInput.value.trim() : "";
            const rating = currentStarRating || 5;

            if (!author || !role || !message) {
                alert("Please fill in your name, role, and review message.");
                return;
            }

            // Disable submit button and show loading spinner
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.classList.add("loading");
                submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Publishing Review...';
            }

            const newRev = {
                id: "rev_" + Date.now(),
                author: author,
                role: role,
                category: category,
                rating: rating,
                message: message,
                date: "Just now",
                isVisitor: true
            };

            // Save to localStorage
            try {
                const raw = localStorage.getItem(STORAGE_KEY);
                const reviews = raw ? JSON.parse(raw) : [];
                reviews.unshift(newRev);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
            } catch (err) {
                console.error("Storage error:", err);
            }

            // Background notification to Smit via FormSubmit
            fetch("https://formsubmit.co/ajax/smitkumar09@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: author,
                    role: role,
                    category: category,
                    rating: `${rating} / 5 Stars ⭐`,
                    message: message,
                    _subject: `⭐ New Portfolio Rating (${rating} Stars) from ${author}!`,
                    _template: "table"
                })
            }).catch(() => {
                // Background email silent catch
            });

            // Re-render reviews
            loadAndRenderVisitorReviews();

            // Reset form
            ratingForm.reset();
            currentStarRating = 5;
            if (starPicker) {
                starPickBtns.forEach(btn => {
                    btn.classList.add("active");
                    btn.classList.remove("hovered");
                });
                if (starFeedback) {
                    starFeedback.innerHTML = `<span class="rating-verbal-badge">${RATING_TEXTS[5]}</span>`;
                }
            }

            // Restore submit button
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.classList.remove("loading");
                submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Publish My Review';
            }

            // Close modal
            closeRatingModal();

            // Show toast notification
            showReviewToast(author, rating);

            // Scroll to reviews section
            const reviewsSection = document.getElementById("reviews");
            if (reviewsSection) {
                reviewsSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    }

    // F. Filter Buttons Interaction
    if (reviewFilterBtns.length > 0) {
        reviewFilterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                reviewFilterBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                const filterVal = btn.getAttribute("data-filter");
                const allCards = document.querySelectorAll(".review-card");

                allCards.forEach(card => {
                    const cardCat = card.getAttribute("data-category");
                    const isVisitor = card.getAttribute("data-is-visitor") === "true";

                    if (filterVal === "all") {
                        card.style.display = "flex";
                    } else if (filterVal === "visitor") {
                        card.style.display = isVisitor ? "flex" : "none";
                    } else {
                        if (cardCat === filterVal) {
                            card.style.display = "flex";
                        } else {
                            card.style.display = "none";
                        }
                    }
                });
            });
        });
    }
});
