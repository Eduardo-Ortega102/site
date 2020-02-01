
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