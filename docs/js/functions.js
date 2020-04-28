
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
    element.select();
    document.execCommand('copy');
    element.selectionEnd = element.selectionStart;
    element.blur();

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


function scrollToElement(id) {
    const menuHeight = 58;
    const element = document.getElementById(id);

    window.scrollTo({
        top: element.offsetTop - menuHeight,
        behavior: 'smooth'
    });
}


function filterProjects(filter){
    document.querySelectorAll('.filter-button','.active').forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(filter).classList.add('active');
    document.querySelectorAll('[data-categories]').forEach(project => {
        if(filter !== 'all' && !project.dataset.categories.includes(filter)){
            project.classList.add('hidden');
        } else {
            project.classList.remove('hidden');
        }
    });
}

function displayProjectInfo(button, projectId){
    const activeClass = 'active';
    const project = document.getElementById(projectId);
    if (project.classList.contains(activeClass)){
        button.innerText = getButtonText('expand');
        button.classList.remove(activeClass);
        project.classList.remove(activeClass);
    } else {
        button.innerText = getButtonText('contract');
        button.classList.add(activeClass);
        project.classList.add(activeClass);
    }
    button.blur();
}

function getButtonText(mode){
    const expandMode = 'expand';
    const isEnglish  = window.location.href.includes('/en/');
    if (isEnglish){
        return mode === expandMode ? 'Read more' : 'Read less';
    }
    return mode === expandMode ? 'Leer más' : 'Leer menos';
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
    menu.classList.remove('responsive');
}

function openMenu(menu) {
    menu.classList.add('responsive');
}

function openLanguageMenu() {
    document.getElementById('languageDropdown').classList.toggle('show');
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