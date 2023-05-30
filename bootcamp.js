document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.testimonial-slider .slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let activeSlideIndex = 0;
  
    function showSlide() {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[activeSlideIndex].classList.add('active');
    }
  
    function nextSlide() {
      activeSlideIndex++;
      if (activeSlideIndex === slides.length) {
        activeSlideIndex = 0;
      }
      showSlide();
    }
  
    function prevSlide() {
      activeSlideIndex--;
      if (activeSlideIndex < 0) {
        activeSlideIndex = slides.length - 1;
      }
      showSlide();
    }
  
    showSlide();
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
  });
  