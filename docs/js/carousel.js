
const carousel = (function () {
    const DELAY_IN_MILLISECONDS = 500;
    var currentSlide = 0;
    var previousSlide = 0;

    function updatePrevious() {
        previousSlide = currentSlide;
    }

    function showPreviousSlide() {
        updatePrevious();
        currentSlide--;
        showSlide();
    }

    function showNextSlide() {
        updatePrevious();
        currentSlide++;
        showSlide();
    }

    function setCurrentSlide(index) {
        updatePrevious();
        currentSlide = index;
        showSlide();
    }

    function showSlide() {
        var slides = document.querySelectorAll('.slide');
        var dots = document.querySelectorAll('.carousel-dot');
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        if (slides[previousSlide].classList.contains('fadeIn')) {
            slides[previousSlide].classList.replace('fadeIn', 'fadeOut');
        } else {
            slides[previousSlide].classList.add('fadeOut');
        }
        dots.forEach(dot => dot.classList.remove('active'))
        setTimeout(() => {
            slides[previousSlide].classList.remove('active', 'fadeOut');
            slides[currentSlide].classList.add('active', 'fadeIn');
            dots[currentSlide].classList.add('active');
            updatePrevious();
        }, DELAY_IN_MILLISECONDS);
    }

    return {
        showNextSlide,
        setCurrentSlide,
        showPreviousSlide
    };
})();