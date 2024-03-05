const privacyBtn = document.querySelector('.js-privacy-btn');
const footerLink = document.querySelectorAll('.footer-link');

const handleScrollToTop = e => {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: "smooth"});
}

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

privacyBtn.addEventListener('click', handleScrollToTop)
