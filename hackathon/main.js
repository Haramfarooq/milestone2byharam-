document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById('toggle-skills');
    var skillsSection = document.getElementById('skills');
    toggleButton.addEventListener('click', function () {
        if (skillsSection.classList.contains('hidden')) {
            skillsSection.classList.remove('hidden');
            toggleButton.textContent = 'Hide Skills';
        }
        else {
            skillsSection.classList.add('hidden');
            toggleButton.textContent = 'Show Skills';
        }
    });
});
