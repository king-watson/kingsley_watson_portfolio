const skillBoxes = document.querySelectorAll('.skills .box-model');

function handleSkillHoverIn(event) {
    event.currentTarget.style.transform = 'scale(1.05)';
    event.currentTarget.style.transition = '0.3s';
}

function handleSkillHoverOut(event) {
    event.currentTarget.style.transform = 'scale(1)';
}

skillBoxes.forEach(box => {
    box.addEventListener('mouseenter', handleSkillHoverIn);
    box.addEventListener('mouseleave', handleSkillHoverOut);
});
