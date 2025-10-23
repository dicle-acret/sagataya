// Sticky header
const header = document.querySelector('.header-wrapper-sticky');
const toggleClass = 'is-sticky';

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});

const homeButton = document.querySelector('.home-button');
const footer = document.querySelector('footer');
 
const originalParent = homeButton.parentNode;
const placeholder = document.createComment('home-button placeholder');
originalParent.insertBefore(placeholder, homeButton.nextSibling);
 
if (getComputedStyle(footer).position === 'static') {
  footer.style.position = 'relative';
}
 
function onScroll() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
 
  const footerTop = footer.getBoundingClientRect().top + currentScroll;
 
  const scrollBottom = currentScroll + windowHeight;
 
  const reachedFooter = scrollBottom >= footerTop;
 
  if (reachedFooter) {
    if (!homeButton.classList.contains('at-footer')) {
      footer.appendChild(homeButton);
      homeButton.classList.add('at-footer');
    }
  } else {
    if (homeButton.classList.contains('at-footer')) {
      originalParent.insertBefore(homeButton, placeholder);
      homeButton.classList.remove('at-footer');
    }
  }
}
 
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
// Magnific Popup
$(document).ready(function () {
  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function (item) {
        return item.el.find('img').attr('alt');
      }
    }
  });
});

$(document).ready(function () {
  $('.SlickAutoplay').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: false,
    arrows: true,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false
        }
      }
    ]
  });
});
