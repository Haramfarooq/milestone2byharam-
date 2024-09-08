document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsSection = document.getElementById('skills') as HTMLElement;

    toggleButton.addEventListener('click', () => {
        if (skillsSection.classList.contains('hidden')) {
            skillsSection.classList.remove('hidden');
            toggleButton.textContent = 'Hide Skills';
        } else {
            skillsSection.classList.add('hidden');
            toggleButton.textContent = 'Show Skills';
        }
    });
});