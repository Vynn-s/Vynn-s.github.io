const projects = document.querySelectorAll(".project");
        let currentIndex = 0;
        
        function updateCarousel() {
            projects.forEach((project, index) => {
                project.style.display = index === currentIndex ? "block" : "none";
            });
        }
        
        document.querySelector(".prev").addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + projects.length) % projects.length;
            updateCarousel();
        });
        
        document.querySelector(".next").addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % projects.length;
            updateCarousel();
        });
        
        updateCarousel(); // Initialize carousel

// Add scroll animation effect
window.addEventListener('scroll', () => {
    document.querySelectorAll('.section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
            section.classList.add('visible');
        }
    });
});

// Navbar dynamic background effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Interactive hover effect on navbar items
const navLinks = document.querySelectorAll('.navbar ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
        link.style.transition = '0.3s ease-in-out';
    });
    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('.navbar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Adjust the offset to match your navbar height
            behavior: 'smooth'
        });
    });
});

// Hover zoom effect for project images
const projectImages = document.querySelectorAll('.project img');
projectImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
        image.style.transition = '0.3s ease';
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

// Scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.height = '5px';
progressBar.style.backgroundColor = '#d986ff';
progressBar.style.zIndex = '9999';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / scrollHeight) * 100;
    progressBar.style.width = progress + '%';
});
