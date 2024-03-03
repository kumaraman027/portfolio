var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});




document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});


    document.addEventListener('DOMContentLoaded', function() {
        
    
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
    
            inputs.forEach(input => {
                if (!input.checkValidity()) {
                    isValid = false;
                    input.classList.add('invalid');
                } else {
                    input.classList.remove('invalid');
                }
            });
    
            if (isValid) {
                
                alert('Form submitted successfully!');
                form.reset(); 
            }
        });
    });
    
document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.querySelector('a[href="#about"]');
    const aboutSection = document.getElementById('about');
    
    if (aboutLink && aboutSection) {
        aboutLink.addEventListener('click', function(e) {
            e.preventDefault();
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
