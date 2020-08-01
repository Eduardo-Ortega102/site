
var slideIndex = 0;


function previousSlide() {
    slideIndex--;
    showSlides();
}

function nextSlide() {
    slideIndex++;
    showSlides();
}


function currentSlide(index) {
    slideIndex = index;
    showSlides();
}


function showSlides() {
    var slides = document.querySelectorAll('.slide');
    var dots = document.querySelectorAll('.carousel-dot');
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'))
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
} 