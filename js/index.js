const footerLink = document.querySelectorAll('.js-footer-link');
const privacyBtn = document.querySelector('.jsPrivacyBtn');

const handleScrollToTop = e => {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: "smooth"});
}

privacyBtn.addEventListener('click', handleScrollToTop);

const scrollToSection = sectionId => {
  document.querySelector(sectionId).scrollIntoView({behavior: 'smooth'});
}

function handleLinkClick(e) {
  e.preventDefault();
  const sectionId = this.getAttribute('href');
  scrollToSection(sectionId);
}

footerLink.forEach(function (link) {
  link.addEventListener('click', handleLinkClick);
});
