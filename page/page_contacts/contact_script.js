document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const message = document.getElementById('message').value;
        const emailAddress = 'tomlimon1508@gmail.com';
        const subject = 'Nouveau message de votre site personnel';

        window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${message}`;
    });
});
