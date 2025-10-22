// Starter Section Auto-hide Effect
$(document).ready(function() {
    // Ensure starter section exists before setting up timer
    if ($('#starter').length > 0) {
        console.log('Starter section found, setting up 10-second timer');
        
        // Make sure body is visible when starter section is present
        $('body').css('opacity', '1');
        
        // Hide starter section after 10 seconds
        setTimeout(function() {
            console.log('10 seconds elapsed, fading out starter section');
            $('#starter').fadeOut(500, function() {
                console.log('Starter section removed');
                $(this).remove();
                // Now add loaded class to body for smooth transition
                $('body').addClass('loaded');
            });
        }, 500);
        
        // Add click to skip starter section
        $('#starter').on('click', function() {
            console.log('Starter section clicked, fading out immediately');
            $(this).fadeOut(500, function() {
                $(this).remove();
                // Now add loaded class to body for smooth transition
                $('body').addClass('loaded');
            });
        });
    } else {
        console.log('Starter section not found');
        // If no starter section, immediately show body
        $('body').addClass('loaded');
    }
});

// Mobile Navigation Toggle
$('.hamburger').on('click', function() {
    $(this).toggleClass('active');
    $('.nav-menu').toggleClass('active');
});

// Close mobile menu when clicking on a link
$('.nav-link').on('click', function() {
    $('.hamburger').removeClass('active');
    $('.nav-menu').removeClass('active');
});

// Smooth scrolling for navigation links
$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = $($(this).attr('href'));
    if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 800);
    }
});

// Navbar background change on scroll
$(window).on('scroll', function() {
    const navbar = $('.navbar');
    if ($(window).scrollTop() > 50) {
        navbar.addClass('scrolled');
    } else {
        navbar.removeClass('scrolled');
    }
});

// Active navigation link highlighting
$(window).on('scroll', function() {
    let current = '';
    $('section').each(function() {
        const sectionTop = $(this).offset().top;
        const sectionHeight = $(this).outerHeight();
        if ($(window).scrollTop() >= (sectionTop - 200)) {
            current = $(this).attr('id');
        }
    });

    $('.nav-link').removeClass('active');
    $(`.nav-link[href="#${current}"]`).addClass('active');
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            $(entry.target).addClass('animated');
            
            // Add staggered animation for multiple elements
            const siblings = $(entry.target).parent().find('.animate-on-scroll');
            siblings.each(function(index) {
                if ($(this)[0] === entry.target) {
                    setTimeout(() => {
                        $(this).addClass('animated');
                    }, index * 200);
                }
            });
        }
    });
}, observerOptions);

// Observe elements for animation
$(document).ready(function() {
    $('.animate-on-scroll').each(function() {
        observer.observe(this);
    });
});

// Contact form handling
$('#contactForm').on('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = $('#name').val();
    const email = $('#email').val();
    const subject = $('#subject').val();
    const message = $('#message').val();
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
    this.reset();
});

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    $('.notification').remove();
    
    // Create notification element
    const notification = $(`
        <div class="notification notification-${type}">
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        </div>
    `);
    
    // Add styles
    notification.css({
        'position': 'fixed',
        'top': '20px',
        'right': '20px',
        'background': type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6',
        'color': 'white',
        'padding': '1rem 1.5rem',
        'border-radius': '10px',
        'box-shadow': '0 10px 25px rgba(0, 0, 0, 0.2)',
        'z-index': '10000',
        'max-width': '400px',
        'animation': 'slideInRight 0.3s ease-out'
    });
    
    // Add to document
    $('body').append(notification);
    
    // Close button functionality
    notification.find('.notification-close').on('click', function() {
        notification.css('animation', 'slideOutRight 0.3s ease-out');
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.length) {
            notification.css('animation', 'slideOutRight 0.3s ease-out');
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add CSS animations for notifications
$('<style>')
    .prop('type', 'text/css')
    .html(`
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            line-height: 1;
        }
        
        .notification-close:hover {
            opacity: 0.8;
        }
    `)
    .appendTo('head');

// CV Download functionality
function downloadCV() {
    // Create a simple CV content (you can replace this with actual CV file)
    const cvContent = `
HOR CHANPHENG - ANDROID DEVELOPER

CONTACT INFORMATION
Email: hor.chanpheng@email.com
Phone: +855 XX XXX XXX
Location: Phnom Penh, Cambodia
LinkedIn: linkedin.com/in/horchanpheng
GitHub: github.com/horchanpheng

PROFESSIONAL SUMMARY
Passionate Android developer with 3+ years of experience in mobile application development. 
Specialized in Kotlin, Java, and modern Android development practices. Proven track record 
of delivering high-quality mobile applications that enhance user experience and business value.

TECHNICAL SKILLS
• Programming Languages: Kotlin, Java, Dart
• Mobile Development: Android SDK, Flutter
• Databases: SQLite, Room, Firebase Firestore
• Backend Integration: REST APIs, Firebase
• Tools: Android Studio, Git, Gradle
• Design: Material Design, UI/UX

EXPERIENCE
Android Developer | 2021 - Present
• Developed and maintained multiple Android applications
• Implemented modern Android architecture patterns (MVVM, Repository)
• Collaborated with cross-functional teams to deliver projects on time
• Optimized app performance and user experience

EDUCATION
Bachelor's Degree in Computer Science
University Name | 2018 - 2022

PROJECTS
• E-Commerce App: Kotlin-based shopping application with Firebase integration
• Weather App: Location-based weather forecasting application
• Task Manager: Productivity app with team collaboration features

CERTIFICATIONS
• Google Android Developer Certification
• Firebase Certified Developer
    `;
    
    // Create and download file using jQuery
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = $('<a>').attr({
        'href': url,
        'download': 'Hor_Chanpheng_CV.txt'
    });
    $('body').append(link);
    link[0].click();
    link.remove();
    window.URL.revokeObjectURL(url);
    
    showNotification('CV download started!', 'success');
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
$(document).ready(function() {
    const heroTitle = $('.hero-title');
    if (heroTitle.length) {
        setTimeout(() => {
            typeWriterKotlin(heroTitle, '', 100);
        }, 1000);
    }
});

// Kotlin-style typing animation
function typeWriterKotlin(element, text, speed = 100) {
    // Define the Kotlin code parts
    const codeParts = [
        { text: 'val', class: 'kotlin-keyword' },
        { text: ' ', class: '' },
        { text: 'developer', class: 'kotlin-variable' },
        { text: ' = ', class: '' },
        { text: '"Hor Chanpheng"', class: 'kotlin-string' }
    ];
    
    let currentPart = 0;
    let currentChar = 0;
    element.html('');
    
    function type() {
        if (currentPart < codeParts.length) {
            const part = codeParts[currentPart];
            
            if (currentChar < part.text.length) {
                const char = part.text.charAt(currentChar);
                if (part.class) {
                    element.append(`<span class="${part.class}">${char}</span>`);
                } else {
                    element.append(char);
                }
                currentChar++;
                setTimeout(type, speed);
            } else {
                currentPart++;
                currentChar = 0;
                setTimeout(type, speed);
            }
        }
    }
    
    type();
}

// Parallax effect for hero section (disabled to prevent overlap issues)
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const hero = document.querySelector('.hero');
//     if (hero) {
//         hero.style.transform = `translateY(${scrolled * 0.5}px)`;
//     }
// });

// Skill items animation on hover
$(document).ready(function() {
    $('.skill-item').hover(
        function() {
            $(this).css('transform', 'scale(1.05) translateY(-2px)');
        },
        function() {
            $(this).css('transform', 'scale(1) translateY(0)');
        }
    );
});

// Project cards tilt effect
$(document).ready(function() {
    $('.project-card').on('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        $(this).css('transform', `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`);
    });
    
    $('.project-card').on('mouseleave', function() {
        $(this).css('transform', 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)');
    });
});

// Counter animation for stats
function animateCounters() {
    $('.stat h4').each(function() {
        const $counter = $(this);
        const target = parseInt($counter.text());
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                $counter.text(Math.ceil(current) + '+');
                requestAnimationFrame(updateCounter);
            } else {
                $counter.text(target + '+');
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

$(document).ready(function() {
    const statsSection = $('.stats');
    if (statsSection.length) {
        statsObserver.observe(statsSection[0]);
    }
});

// Add loading animation (modified for starter section)
$(window).on('load', function() {
    // Only add loaded class if starter section doesn't exist
    if ($('#starter').length === 0) {
        $('body').addClass('loaded');
    }
});

// Add CSS for loading animation (modified for starter section)
$('<style>')
    .prop('type', 'text/css')
    .html(`
        body {
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }
        
        body.loaded {
            opacity: 1;
        }
        
        /* Ensure starter section is always visible */
        #starter {
            opacity: 1 !important;
            visibility: visible !important;
        }
    `)
    .appendTo('head');
