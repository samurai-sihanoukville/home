document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.menu-dropdown').classList.toggle('active');
});


// GALLERY

let slideIndex = 0;
const slides = document.querySelectorAll('.images img');
const dotsContainer = document.querySelector('.dots');
const totalSlides = slides.length;

// Generate dots
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => currentSlide(i));
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function showSlides(n) {
    if (n >= totalSlides) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = totalSlides - 1;
    }
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
        dots[index].className = dots[index].className.replace(' active', '');
    });
    dots[slideIndex].className += ' active';
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Display the first slide when the page loads
showSlides(slideIndex);