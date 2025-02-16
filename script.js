window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const sidebar = document.getElementById('sidebar');
const menuToggle = document.querySelector('.menu-toggle');
const closeBtn = document.querySelector('.close-btn');

menuToggle.addEventListener('click', function () {
    sidebar.classList.add('active');
});
closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('active');
});
document.addEventListener('click', function (event) {
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});
document.querySelectorAll('.sidebar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function () {
        sidebar.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a, .sidebar a, .footer a');

    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    window.addEventListener('load', updateActiveNav);
});

ScrollReveal().reveal('.section-title, .project-card, .skill-item', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    interval: 100,
    reset: true
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 30px rgba(94, 99, 255, 0.2)';
    });
    
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    });
});

const imgBox = document.querySelector('.img-box');
document.addEventListener('mousemove', (e) => {
    if (imgBox) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        imgBox.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
});

ScrollReveal().reveal('.about-content, .projects-grid, .skills-grid, .contact-content', {
    delay: 400,
    origin: 'bottom',
    distance: '50px',
    interval: 200,
    reset: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar ul li a, .sidebar ul li a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 300 && window.scrollY < sectionTop + sectionHeight - 300) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.textContent;
        bar.style.width = width;
    });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let message = document.querySelector('textarea[name="message"]').value;

    let phoneNumber = "6285523534595"; 

    let whatsappUrl = `https://wa.me/${phoneNumber}?text=Nama:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0APesan:%20${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;
});
