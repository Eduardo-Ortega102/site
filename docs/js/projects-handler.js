
const projectsHandler = (function () {
    const activeClass = 'active';
    const stackClass = 'stack';
    const descriptionClass = 'description';
    const isEnglish = window.location.href.includes('/en/');

    function filterProjects(filter) {
        const hidden = 'hidden';
        document.querySelectorAll('.filter-button', '.' + activeClass)
            .forEach(button => {
                button.classList.remove(activeClass);
            });
        document.getElementById(filter).classList.add(activeClass);
        document.querySelectorAll('[data-categories]').forEach(project => {
            const projectIncludesFilter = project.dataset.categories.includes(filter);
            if (filter !== 'all' && !projectIncludesFilter) {
                project.classList.add(hidden);
            } else {
                project.classList.remove(hidden);
            }
        });
    }

    function toogleDescription(projectId) {
        const project = document.getElementById(projectId);
        const projectIsActive = project.classList.contains(activeClass);
        const stackIsActive = project.classList.contains(stackClass);
        if (projectIsActive) {
            if (stackIsActive) {
                hideProjectDetails(project, stackClass);
                displayProjectDetails(project, descriptionClass);
            } else {
                hideProjectDetails(project, descriptionClass);
            }
        } else {
            displayProjectDetails(project, descriptionClass);
        }
    }

    function toogleStack(projectId) {
        const project = document.getElementById(projectId);
        const projectIsActive = project.classList.contains(activeClass);
        const descriptionIsActive = project.classList.contains(descriptionClass);
        if (projectIsActive) {
            if (descriptionIsActive) {
                hideProjectDetails(project, descriptionClass);
                displayProjectDetails(project, stackClass);
            } else {
                hideProjectDetails(project, stackClass);
            }
        } else {
            displayProjectDetails(project, stackClass);
        }
    }

    function displayProjectDetails(project, class_) {
        project.classList.add(activeClass, class_);
        const button = project.parentElement.querySelector('button.' + class_);
        button.innerText = getActiveText(class_);
        button.classList.add(activeClass);
        button.blur();
    }

    function hideProjectDetails(project, class_) {
        project.classList.remove(activeClass, class_);
        const button = project.parentElement.querySelector('button.' + class_);
        button.innerText = getInactiveText(class_);
        button.classList.remove(activeClass);
        button.blur();
    }

    function getActiveText(class_) {
        if (class_ === stackClass) {
            return isEnglish ? 'Hide Stack' : 'Ocultar Tecnologías';
        }
        return isEnglish ? 'Hide Description' : 'Ocultar Descripción';
    }

    function getInactiveText(class_) {
        if (class_ === stackClass) {
            return isEnglish ? 'Show Stack' : 'Mostrar Tecnologías';
        }
        return isEnglish ? 'Show Description' : 'Mostrar Descripción';
    }

    return {
        filter: filterProjects,
        toogleStack: toogleStack,
        toogleDescription: toogleDescription
    };
})();




