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
  const footerTop = footer.offsetTop;
  
  // Show button after scrolling 300px
  if (currentScroll > 300) {
    homeButton.classList.add('is-visible');
  } else {
    homeButton.classList.remove('is-visible');
  }
  
 if (currentScroll + windowHeight >= documentHeight - footer.offsetHeight - 20) {
    homeButton.classList.add('at-footer');
  } else {
    homeButton.classList.remove('at-footer');
  }
});

// Magnific Popup
$(document).ready(function() {
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
});


  $(document).ready(function(){
    $('.autoplay').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  });
