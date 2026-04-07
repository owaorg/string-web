// Enhanced Glitch Effect
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const headerNav = document.getElementById('headerNav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            headerNav.classList.toggle('active');
        });

        // Close menu when link is clicked
        const navLinks = headerNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                headerNav.classList.remove('active');
            });
        });

        // Close menu on resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 640) {
                menuToggle.classList.remove('active');
                headerNav.classList.remove('active');
            }
        });
    }

    const glitchElement = document.querySelector('.glitch');
    const glitchContainer = document.querySelector('.glitch-container');
    
    // Create noise overlay for glitch
    const noiseOverlay = document.createElement('div');
    noiseOverlay.className = 'noise-overlay';
    noiseOverlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        opacity: 0;
        z-index: 10;
    `;
    if (glitchContainer) {
        glitchContainer.appendChild(noiseOverlay);
    }

    // Intense glitch burst
    function intenseGlitch() {
        if (!glitchElement) return;
        
        const intensity = Math.random();
        
        if (intensity > 0.7) {
            glitchElement.style.textShadow = `
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 rgba(255, 0, 255, 0.8),
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 rgba(0, 255, 255, 0.8),
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 rgba(255, 255, 255, 0.5)
            `;
            
            glitchElement.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px) skew(${Math.random() * 2 - 1}deg)`;
            
            setTimeout(() => {
                glitchElement.style.textShadow = '';
                glitchElement.style.transform = '';
            }, 50 + Math.random() * 100);
        }
        
        if (intensity > 0.8) {
            noiseOverlay.style.opacity = '0.1';
            setTimeout(() => {
                noiseOverlay.style.opacity = '0';
            }, 100);
        }
    }

    // Random glitch bursts (only on pages with glitch)
    if (glitchElement) {
        setInterval(intenseGlitch, 150);

        // Heavy glitch every few seconds
        setInterval(() => {
            glitchElement.style.animation = 'none';
            glitchElement.offsetHeight;
            
            setTimeout(() => {
                glitchElement.style.animation = '';
            }, 100);
        }, 3000 + Math.random() * 2000);
    }

    // Smooth scroll indicator
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const scrollIndicator = document.createElement('div');
        scrollIndicator.className = 'scroll-indicator';
        scrollIndicator.innerHTML = '↓';
        scrollIndicator.style.cssText = `
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 2rem;
            color: #444;
            animation: bounce 2s infinite;
            cursor: pointer;
            transition: all 0.3s;
        `;
        hero.appendChild(scrollIndicator);

        const style = document.createElement('style');
        style.textContent = `
            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% {
                    transform: translateX(-50%) translateY(0);
                }
                40% {
                    transform: translateX(-50%) translateY(-10px);
                }
                60% {
                    transform: translateX(-50%) translateY(-5px);
                }
            }
        `;
        document.head.appendChild(style);

        scrollIndicator.addEventListener('click', () => {
            const infoSection = document.querySelector('.info-section');
            if (infoSection) {
                infoSection.scrollIntoView({ behavior: 'smooth' });
            }
        });

        window.addEventListener('scroll', () => {
            scrollIndicator.style.opacity = window.scrollY > 100 ? '0' : '1';
        });
    }

    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const bgBlur = document.querySelector('.bg-blur');
        if (bgBlur) {
            bgBlur.style.backdropFilter = `blur(${8 + scrolled * 0.01}px)`;
        }
    });
});
