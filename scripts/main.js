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

// Back to top button
const homeButton = document.querySelector('.home-button');
const footer = document.querySelector('footer');

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  
  // Show button after scrolling 300px
  if (currentScroll > 300) {
    homeButton.classList.add('is-visible');
  } else {
    homeButton.classList.remove('is-visible');
  }
  
  // Position button above footer when near bottom
  if (currentScroll + windowHeight >= documentHeight - footer.offsetHeight - 20) {
    homeButton.classList.add('at-footer');
  } else {
    homeButton.classList.remove('at-footer');
  }
});

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
// memo3:⬆︎ちょっと修正

  // Slick Carousel with responsive settings
$(document).ready(function () {
  $('.SlickAutoplay').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
		draggable:false,
    arrows: false,
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

// memo3:⬆︎ちょっと修正

