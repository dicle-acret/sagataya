        const carousel = document.getElementById('carousel');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const stopBtn = document.getElementById('stopBtn');
        const currentSpan = document.getElementById('current');
        
        let autoScrollInterval = null;
        let isPlaying = true;
        let currentSlide = 0;
        const totalSlides = 6;
        const slideWidth = window.innerWidth > 768 ? window.innerWidth - 340 : window.innerWidth;

        function updateCounter() {
            currentSpan.textContent = currentSlide + 1;
        }

        function scrollCarousel(direction) {
            currentSlide += direction;
            if (currentSlide >= totalSlides) currentSlide = 0;
            if (currentSlide < 0) currentSlide = totalSlides - 1;
            
            carousel.scrollBy({
                left: direction * slideWidth,
                behavior: 'smooth'
            });
            updateCounter();
        }

        function autoScroll() {
            scrollCarousel(1);
        }

        function startAutoScroll() {
            if (autoScrollInterval) clearInterval(autoScrollInterval);
            autoScrollInterval = setInterval(autoScroll, 4000);
            isPlaying = true;
            stopBtn.classList.add('playing');
            stopBtn.textContent = '⏸ STOP';
        }

        function pauseAutoScroll() {
            if (autoScrollInterval) {
                clearInterval(autoScrollInterval);
                autoScrollInterval = null;
            }
        }

        function toggleAutoScroll() {
            if (isPlaying) {
                pauseAutoScroll();
                isPlaying = false;
                stopBtn.classList.remove('playing');
                stopBtn.textContent = '▶ PLAY';
            } else {
                startAutoScroll();
            }
        }

        // Start auto-scroll on page load
        startAutoScroll();

        window.addEventListener("scroll", () => {
  const popup = document.querySelector(".carousel-container");
  const box = document.getElementById("carousel-popup");
  const boxTop = box.getBoundingClientRect().top;

  // Hide the popup when #carousel-popup section enters the viewport
  if (boxTop <= window.innerHeight) {
    popup.classList.add("hidden");
  } else {
    popup.classList.remove("hidden");
  }
});
