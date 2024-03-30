document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
        project.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });

        project.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
