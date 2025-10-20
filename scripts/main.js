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

// Wait for DOM and all scripts to load
$(document).ready(function() {
  console.log('Document ready'); // Debug log
  
  // Check if Slick is available
  if (typeof $.fn.slick === 'undefined') {
    console.error('Slick carousel not loaded!');
    return;
  }
  
  // Check if carousel element exists
  if ($('.autoplay').length === 0) {
    console.error('Carousel element not found!');
    return;
  }
  
  console.log('Initializing carousel...'); // Debug log
  
  // Magnific Popup
  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.find('img').attr('alt');
      }
    }
  });

  // Initialize Slick Carousel
  try {
    $('.autoplay').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      dots: false,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        }
      ]
    });
    console.log('Carousel initialized successfully!'); // Debug log
  } catch (error) {
    console.error('Error initializing carousel:', error);
  }
});
