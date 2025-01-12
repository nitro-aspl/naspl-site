let currentIndex = 0;
const slideInterval = 3000;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0; // Loop back to the first slide
    } else if (index < 0) {
        currentIndex = slides.length - 1; // Go to the last slide
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentIndex) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    showSlide(currentIndex + direction);
}

// Initialize the first slide
showSlide(currentIndex);

// Automatically change slides every 'slideInterval' milliseconds
setInterval(() => {
    changeSlide(1); // Change to the next slide
}, slideInterval);
