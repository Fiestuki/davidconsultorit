document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu on clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // Navbar Scrolled Effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Form Submission Simulation
    const form = document.getElementById('contact-form');
    const successMsg = document.querySelector('.success-msg');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload
            const btn = form.querySelector('button[type="submit"]');
            
            // Simulating sending
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Enviando... <i class="fas fa-spinner fa-spin"></i>';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
                form.reset();
                if (successMsg) {
                    successMsg.classList.remove('hidden');
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successMsg.classList.add('hidden');
                    }, 5000);
                }
            }, 1500);
        });
    }

    // Simple scroll animation for revealing elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.timeline-item, .cert-card, .education-block li, .about-content, .contact-grid');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // CV Modal Logic
    const cvModal = document.getElementById('cv-modal');
    const openCvBtn = document.getElementById('open-cv-modal');
    const closeModalBtn = document.querySelector('.close-modal');

    if (cvModal && openCvBtn && closeModalBtn) {
        openCvBtn.addEventListener('click', (e) => {
            e.preventDefault();
            cvModal.classList.remove('hidden');
        });

        closeModalBtn.addEventListener('click', () => {
            cvModal.classList.add('hidden');
        });

        // Close on clicking outside the content
        cvModal.addEventListener('click', (e) => {
            if (e.target === cvModal) {
                cvModal.classList.add('hidden');
            }
        });
    }
});
