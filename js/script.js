const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');
const contactForm = document.querySelector('.contact-form');

if (hamburger && mobileNav && overlay) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  function closeMobileNav(){
    mobileNav.classList.remove('active');
    hamburger.classList.remove('active');
    overlay.classList.remove('active');
  }

  overlay.addEventListener("click", closeMobileNav);

  const mobileLinks = document.querySelectorAll('.mobile-nav a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert("Thank you! Your response has been successfully submitted. Smit will get back to you shortly.");
    contactForm.reset();
  });
}


var typeData = new Typed(".role", {
    strings: [
      "Full Stack Software Developer",
      "Computer Lecturer @ VVH&ES",
      "Computer Expert",
      "MERN Stack Engineer",
      "Java & React Coder",
      "Tech Lead",
    ],
    loop: true,
    typeSpeed: 85,
    backSpeed: 65,
    backDelay: 1200,
  });

