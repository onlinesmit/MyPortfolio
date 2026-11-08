const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');
const mobileNavClose = document.querySelector('.mobile-nav-close');

if (hamburger && mobileNav && overlay) {
  function openMobileNav() {
    mobileNav.classList.add('active');
    hamburger.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileNav.classList.remove('active');
    hamburger.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    if (mobileNav.classList.contains('active')) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', closeMobileNav);
  }

  overlay.addEventListener('click', closeMobileNav);

  const mobileLinks = document.querySelectorAll('.mobile-nav a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });
}

// ------------------- Modern Interactive Contact Form -------------------
const modernContactForm = document.getElementById('portfolio-contact-form');
const formSubmitBtn = document.getElementById('form-submit-btn');
const formWaBtn = document.getElementById('form-wa-btn');
const formStatusAlert = document.getElementById('form-status-alert');

function setFormAlert(type, htmlContent) {
  if (!formStatusAlert) return;
  formStatusAlert.className = `form-status-alert alert-${type}`;
  formStatusAlert.innerHTML = htmlContent;
  formStatusAlert.style.display = 'flex';
}

if (modernContactForm && formSubmitBtn) {
  modernContactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('form-name')?.value.trim();
    const email = document.getElementById('form-email')?.value.trim();
    const subject = document.getElementById('form-subject')?.value.trim();
    const message = document.getElementById('form-message')?.value.trim();

    if (!name || !email || !subject || !message) {
      setFormAlert('warning', '<i class="fa-solid fa-triangle-exclamation"></i> <div><strong>Please fill in all fields:</strong> Name, Email, Subject, and Message are required.</div>');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormAlert('warning', '<i class="fa-solid fa-triangle-exclamation"></i> <div><strong>Invalid Email:</strong> Please provide a valid email address so Smit can reply back.</div>');
      return;
    }

    // Set loading state
    formSubmitBtn.disabled = true;
    formSubmitBtn.classList.add('loading');
    const originalBtnHtml = formSubmitBtn.innerHTML;
    formSubmitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> <span>Sending Email...</span>';
    setFormAlert('info', '<i class="fa-solid fa-paper-plane fa-fade"></i> <div>Delivering your message to <strong>smitkumar09@gmail.com</strong>...</div>');

    try {
      const response = await fetch("https://formsubmit.co/ajax/smitkumar09@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: `Portfolio Inquiry: ${subject} (from ${name})`,
          message: message,
          _replyto: email,
          _template: "table"
        })
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok || result.success === "true" || result.success === true) {
        setFormAlert('success', `
          <i class="fa-solid fa-circle-check"></i>
          <div>
            <strong>Message Sent Successfully!</strong><br>
            Thank you, <b>${name}</b>! Your message has been delivered directly to <b>smitkumar09@gmail.com</b>. Smit will respond to <b>${email}</b> shortly.
          </div>
        `);
        modernContactForm.reset();
      } else {
        throw new Error(result.message || 'API delivery failed');
      }
    } catch (err) {
      console.warn("Direct API transmission failed, triggering mail client fallback:", err);
      // Fallback: Open prefilled mail client
      setFormAlert('info', `
        <i class="fa-solid fa-envelope-open-text"></i>
        <div>
          <strong>Opening Your Mail App:</strong> Preparing pre-filled message for <b>smitkumar09@gmail.com</b>...
        </div>
      `);
      const mailtoUrl = `mailto:smitkumar09@gmail.com?subject=${encodeURIComponent("Portfolio Inquiry: " + subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;
      window.location.href = mailtoUrl;
    } finally {
      formSubmitBtn.disabled = false;
      formSubmitBtn.classList.remove('loading');
      formSubmitBtn.innerHTML = originalBtnHtml;
    }
  });
}

// Send via WhatsApp Button
if (formWaBtn) {
  formWaBtn.addEventListener('click', () => {
    const name = document.getElementById('form-name')?.value.trim() || 'Visitor';
    const email = document.getElementById('form-email')?.value.trim() || '';
    const subject = document.getElementById('form-subject')?.value.trim() || 'Portfolio Inquiry';
    const message = document.getElementById('form-message')?.value.trim() || 'Hi Smit, I saw your portfolio and would like to connect!';

    let waText = `Hi Smit, my name is ${name}.`;
    if (email) waText += ` (Email: ${email})`;
    waText += `\n*Subject:* ${subject}\n*Message:* ${message}`;

    const waUrl = `https://wa.me/919875052329?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');
  });
}

// Footer scroll to top
const footerScrollTop = document.getElementById('footer-scroll-top');
if (footerScrollTop) {
  footerScrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


var typeData = new Typed(".role", {
    strings: [
      "Software Development Engineer",
      "2x UGC NET Qualified (Asst. Prof & PhD)",
      "RSS Nagar Sharirik Pramukh",
      "UPSC & CBI Merit Achiever",
      "Vipassana Meditation Practitioner",
      "Computer Lecturer @ VVH&ES",
      "Full Stack Developer (Spring Boot & MERN)",
      "Ex-SDE @ Bluestocks Fintech",
      "Operation Executive @ Turtlemint",
      "Navy SSR & NDA Qualified",
      "30+ Govt. Exams Experienced"
    ],
    loop: true,
    typeSpeed: 65,
    backSpeed: 45,
    backDelay: 1300,
  });

