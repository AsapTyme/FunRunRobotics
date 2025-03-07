document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav');
    const overlay = document.querySelector('.overlay');
    const header = document.querySelector('header');
    
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }
    
    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    
    const navLinks = document.querySelectorAll('.nav li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

   
    const heroSlides = document.querySelectorAll('.hero-slide');
    if (heroSlides.length > 0) {
        console.log('Found ' + heroSlides.length + ' hero slides');
        
        
        heroSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
       
        heroSlides[0].classList.add('active');
        
        let currentSlide = 0;
        
        
        function nextSlide() {
          
            heroSlides[currentSlide].classList.remove('active');
            
            
            currentSlide = (currentSlide + 1) % heroSlides.length;
            
            
            heroSlides[currentSlide].classList.add('active');
        }
        
       
        setInterval(nextSlide, 4500);
    } else {
        console.error('No hero slides found!');
    }
});