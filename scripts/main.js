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

// Home button functionality
const homeButton = document.querySelector('.home-button');
const footer = document.querySelector('footer');
 
const originalParent = homeButton.parentNode;
const placeholder = document.createComment('home-button placeholder');
originalParent.insertBefore(placeholder, homeButton.nextSibling);
 
if (getComputedStyle(footer).position === 'static') {
  footer.style.position = 'relative';
}

// Popup carousel functionality
const popupCarousel = document.querySelector('.popup-carousel');
const carouselOriginalParent = popupCarousel.parentNode;
const carouselPlaceholder = document.createComment('popup-carousel placeholder');
carouselOriginalParent.insertBefore(carouselPlaceholder, popupCarousel);

let isTransitioning = false;

function onScroll() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
 
  const footerTop = footer.getBoundingClientRect().top + currentScroll;
  const scrollBottom = currentScroll + windowHeight;
  const reachedFooter = scrollBottom >= footerTop;
 
  // Home button: Fade out when at top of page
  if (currentScroll <= 150) {
    homeButton.classList.add('hidden');
  } else {
    homeButton.classList.remove('hidden');
  }
 
  // Home button: Move to footer when reached
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

  // Popup carousel: Sticky at bottom when at top, moves to normal position when scrolling
  if (currentScroll <= 150) {
    // At top of page - sticky at bottom with slide-in effect
    if (!popupCarousel.classList.contains('at-bottom') && !isTransitioning) {
      isTransitioning = true;
      
      // Move to body first (without transition)
      document.body.appendChild(popupCarousel);
      popupCarousel.classList.remove('scrolled');
      
      // Force reflow to ensure the hidden state is applied
      void popupCarousel.offsetHeight;
      
      // Trigger slide-in animation
      requestAnimationFrame(() => {
        popupCarousel.classList.add('at-bottom');
        popupCarousel.classList.remove('hidden-carousel');
        
        setTimeout(() => {
          isTransitioning = false;
        }, 500);
      });
    }
  } else {
    // Scrolled down - move to normal position in content
    if (popupCarousel.classList.contains('at-bottom') && !isTransitioning) {
      isTransitioning = true;
      popupCarousel.classList.add('hidden-carousel');
      popupCarousel.classList.remove('at-bottom');
      
      setTimeout(() => {
        carouselOriginalParent.insertBefore(popupCarousel, carouselPlaceholder);
        popupCarousel.classList.remove('hidden-carousel');
        popupCarousel.classList.add('scrolled');
        isTransitioning = false;
      }, 500);
    }
  }
}
 
window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // Initialize on page load

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

// Slick Carousel
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
