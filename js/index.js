const footerLink = document.querySelectorAll('.js-footer-link');
const privacyBtn = document.querySelectorAll('.jsPrivacyBtn');

const handleScrollToTop = e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const header = document.querySelector('header');

  burger.addEventListener("click", () => {
    header.classList.toggle('open');
  });
});

const scrollToSection = sectionId => {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function handleLinkClick(e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href');
    scrollToSection(sectionId);
}

footerLink.forEach(function (link) {
    link.addEventListener('click', handleLinkClick);
});

privacyBtn.forEach(function (link) {
  link.addEventListener('click', handleScrollToTop);
})
