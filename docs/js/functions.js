
function hideElement(element) {
    element.style.display = 'none';
}


function openModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = 'flex';
    window.onclick = function (event) {
        if (event.target == modal) {
            hideElement(modal);
        }
    }
}


function closeModal(id) {
    hideElement(document.getElementById(id));
}


function mouseDown(id, event) {
    const MIDDLE_MOUSE_BUTTON = 1;
    if (event.button == MIDDLE_MOUSE_BUTTON) {
        openModal(id);
    }
}


function copyToClipBoard(elementId, reporterId) {
    var element = document.getElementById(elementId);
    var textArea = document.createElement('textarea');
    textArea.value = element.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();

    var reporterElement = document.getElementById(reporterId);
    reporterElement.style.opacity = 1;
    reporterElement.style.visibility = 'visible';
    setTimeout(() => {
        reporterElement.style.opacity = 0;
        reporterElement.style.visibility = 'hidden';
    }, 1500);
}


function changeLanguage(newLanguage) {
    var url = window.location.href;
    const language = url.includes('/es/') ? '/es/' : '/en/';
    window.location.href = url.replace(language, '/' + newLanguage + '/');
}


// polyfilled smooth scrolling for IE, Edge & Safari
function smoothScrollTo(to) {
    const duration = 600;
    const element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date();

    // t = current time
    // b = start value
    // c = change in value
    // d = duration
    const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animateScroll = _ => {
        const currentDate = +new Date();
        const currentTime = currentDate - startDate;
        element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
        if (currentTime < duration) {
            window.requestAnimationFrame(animateScroll);
        }
        else {
            element.scrollTop = to;
        }
    };
    animateScroll();
}


function isSmoothScrollSupported() {
    return 'scrollBehavior' in document.documentElement.style;
}


function scrollToElement(id) {
    const menuHeight = 58;
    const element = document.getElementById(id);

    if (isSmoothScrollSupported()) {
        window.scrollTo({
            top: element.offsetTop - menuHeight,
            behavior: 'smooth'
        });
    } else {
        smoothScrollTo(element.offsetTop - menuHeight);
    }
}

function toggleMenu() {
    var menu = document.getElementById('navigation-bar');
    if (menu.classList.contains('responsive')) {
        closeMenu(menu);
    } else {
        openMenu(menu);
    }
}

function closeMenu(menu) {
    var content = document.querySelector('#navigation-bar .navigation-content');
    content.classList.add('fadeOutUp');
    setTimeout(() => {
        menu.classList.remove('responsive');
        content.classList.remove('fadeOutUp', 'animation-finished');
    }, 500);
}

function openMenu(menu) {
    menu.classList.add('responsive');
    var content = document.querySelector('#navigation-bar .navigation-content');
    content.classList.add('fadeInDown');
    setTimeout(() => {
        content.classList.replace('fadeInDown', 'animation-finished');
    }, 750);
}

function openLanguageMenu() {
    var menu = document.querySelector('#languageDropdown');
    if (menu.classList.contains('fadeInDown')) {
        menu.classList.replace('fadeInDown', 'fadeOutUp');
        setTimeout(() => {
            menu.classList.remove('fadeOutUp', 'show');
        }, 500);
    } else {
        menu.classList.add('fadeInDown', 'show');
        setTimeout(() => {
            menu.classList.add('animation-finished');
        }, 750);
    }
}

window.onclick = function (event) {
    var clickedElement = event.target;
    if (!clickedElement.matches('.dropdown')) {
        var languageDropdown = document.getElementById('languageDropdown');
        if (languageDropdown.classList.contains('show')) {
            languageDropdown.classList.remove('show');
        }
        var menuSwitch = document.getElementById('menu-switch');
        if (clickedElement !== languageDropdown &&
            clickedElement !== menuSwitch && !menuSwitch.contains(clickedElement)) {
            var menu = document.getElementById('navigation-bar');
            if (menu.classList.contains('responsive')) {
                closeMenu(menu);
            }
        }
    }
};