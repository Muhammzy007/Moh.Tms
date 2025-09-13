// Project data with detailed features
const projects = {
    zenith: {
        title: 'Zenith Coffee Co. Rebrand',
        content: `
            <div class="space-y-6">
                <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=400&fit=crop&crop=center" 
                     alt="Zenith Coffee Co. branding" class="w-full h-64 object-cover rounded-lg">
                
                <div>
                    <h4 class="font-semibold text-lg mb-2">Project Overview</h4>
                    <p class="text-gray-600">
                        Complete brand identity redesign for a premium coffee company specializing in ethically sourced, 
                        single-origin beans. The project encompassed logo design, packaging system, merchandise, 
                        and marketing materials.
                    </p>
                </div>
                
                <div>
                    <h4 class="font-semibold text-lg mb-2">Key Features</h4>
                    <ul class="list-disc list-inside text-gray-600 space-y-1">
                        <li>Modern, minimalist logo that reflects the brand's premium positioning</li>
                        <li>Eco-friendly packaging design with custom illustrations for each coffee origin</li>
                        <li>Comprehensive brand guidelines for consistent application across all touchpoints</li>
                        <li>Merchandise line including mugs, apparel, and brewing equipment</li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-semibold text-lg mb-2">Technologies & Tools</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-pink-100 text-pink-800 text-sm px-3 py-1 rounded-full">Adobe Illustrator</span>
                        <span class="bg-pink-100 text-pink-800 text-sm px-3 py-1 rounded-full">Photoshop</span>
                        <span class="bg-pink-100 text-pink-800 text-sm px-3极1 rounded-full">InDesign</span>
                        <span class="bg-pink-100 text-pink-800 text-sm px-3 py-1 rounded-full">Brand Strategy</span>
                    </div>
                </div>
            </div>
        `
    },
    flexipay: {
        title: 'FlexiPay Mobile Banking App',
        content: `
            <div class="space-y-6">
                <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop&crop=center" 
                     alt="FlexiPay Banking App" class="w-full h-64 object-cover rounded-lg">
                
                <div>
                    <h4 class="font-semibold text-lg mb-2">Project Overview</h4>
                    <p class="text-gray-600">
                        User experience design for a next-generation mobile banking platform focused on accessibility, 
                        security, and intuitive financial management. The app serves over 500,000 users with features 
                        including budgeting tools, investment tracking, and seamless money transfers.
                    </p>
                </div>
                
                <div>
                    <h4 class="font-semibold text-lg mb-2">Key Features</h4>
                    <ul class="list-disc list-inside text-gray-600 space-y-1">
                        <li>Intuitive dashboard with personalized financial insights and spending patterns</li>
                        <li>Biometric authentication and advanced security features</li>
                        <li>Customizable budgeting tools with visual progress tracking</li>
                        <li>Seamless peer-to-peer payment system with instant transfers</li>
                        <li>Investment portfolio tracking with real-time market data</li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-semibold text-lg极2">Technologies & Tools</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Figma</span>
                        <span class="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Adobe XD</span>
                        <span class="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">User Research</span>
                        <span class="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Prototyping</span>
                        <span class="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Usability Testing</span>
                    </div>
                </div>
            </div>
        `
    },
    ecotrack: {
        title: 'EcoTrack Sustainability Platform',
        content: `
            <div class="space-y-6">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center" 
                     alt="EcoTrack Platform" class="w-full h-64 object-cover rounded-lg">
                
                <div>
                    <h4 class="font-semibold text-lg mb-2">Project Overview</h4>
                    <p class="text-gray-600">
                        Enterprise web application for tracking and managing corporate sustainability efforts. 
                        The platform helps organizations monitor their carbon footprint, set reduction targets, 
                        and generate comprehensive reports for stakeholders and regulatory compliance.
                    </p>
                </div>
                
                <div>
                    <h4 class="font-semibold text-lg mb-2">Key Features</h4>
                    <ul class="list-disc list-inside text-gray-600 space-y-1">
                        <li>Real-time carbon emission tracking across multiple business units</li>
                        <li>Customizable sustainability goal setting and progress monitoring</li>
                        <li>Automated regulatory compliance reporting</li>
                        <li>Data visualization dashboard with interactive charts and graphs</li>
                        <li>Integration with existing ERP and accounting systems</li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-semibold text-lg mb-2">Technologies & Tools</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">React</span>
                        <span class="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Node.js</span>
                        <span class="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">MongoDB</span>
                        <span class="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">D3.js</span>
                        <span class="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">AWS</span>
                    </div>
                </div>
            </div>
        `
    },
    crafthub: {
        title: 'CraftHub Artisan Marketplace',
        content: `
            <div class="space-y-6">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45极?w=800&h=400&fit=crop&crop=center" 
                     alt="CraftHub Marketplace" class="w-full h-64 object-cover rounded-lg">
                
                <div>
                    <h4 class="font-semibold text-lg mb-2">Project Overview</h4>
                    <p class="text-gray-600">
                        Full-featured e-commerce platform connecting local artisans with customers worldwide. 
                        The marketplace supports over 2,000 artisans with tools for store management, 
                        inventory tracking, and customer engagement while providing buyers with a curated 
                        shopping experience for handmade goods.
                    </p>
                </div>
                
                <div>
                    <h4 class="font-semibold text-lg mb-2">Key Features</h4>
                    <ul class="list-disc list-inside text-gray-600 space-y-1">
                        <li>Multi-vendor marketplace architecture with individual storefronts</li>
                        <li>Secure payment processing with multiple payment options</li>
                        <li>Advanced search and filtering with AI-powered recommendations</li>
                        <li>Inventory management system with low stock alerts</li>
                        <li>Seller analytics dashboard with sales and customer insights</li>
                        <li>Review and rating system for quality assurance</li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-semibold text-lg mb-2">Technologies & Tools</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">Vue.js</span>
                        <span class="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">Laravel</span>
                        <span class="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">MySQL</span>
                        <span class="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">Stripe API</span>
                        <span class="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">Redis</span>
                    </div>
                </div>
            </div>
        `
    },
    fitsync: {
        title: 'FitSync Fitness Tracking App',
        content: `
            <div class="space-y-6">
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop&crop=center" 
                     alt="FitSync Fitness App" class="w-full h-64 object-cover rounded-lg">
                
                <div>
                    <h4 class="font-semibold text-lg mb-2">Project Overview</h4>
                    <p class="text-gray-600">
                        Comprehensive health and fitness application that helps users track workouts, nutrition, 
                        and overall wellness. The app combines AI-powered recommendations with community features 
                        to create a holistic health management experience.
                    </p>
                </div>
                
                <div>
                    <h4 class="font-semibold text-lg mb-2">Key Features</h4>
                    <ul class="list-disc list-inside text-gray-600 space-y-1">
                        <li>Personalized workout plans with video demonstrations</li>
                        <li>Nutrition tracking with barcode scanner and meal suggestions</li>
                        <li>Integration with wearable devices and health apps</li>
                        <li>Sleep tracking and wellness challenges</li>
                        <li>Community features for motivation and support</li>
                        <li>Progress analytics with visual charts and achievement badges</li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-semibold text-lg mb-2">Technologies & Tools</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">React Native</span>
                        <span class="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">Firebase</span>
                        <span class="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">GraphQL</span>
                        <span class="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">Apple HealthKit</span>
                        <span class="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">Google Fit API</span>
                    </div>
                </div>
            </div>
        `
    },
    marketpulse: {
        title: 'MarketPulse Analytics Platform',
        content: `
            <div class="space-y-6">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&crop=center" 
                     alt="MarketPulse Analytics" class="w-full h-64 object-cover rounded-lg">
                
                <div>
                    <h4 class="font-semibold text-lg mb-2">Project Overview</h4>
                    <p class="text-gray-600">
                        Cloud-based digital marketing analytics platform designed for agencies and marketing teams. 
                        The platform provides comprehensive insights into campaign performance, customer behavior, 
                        and ROI across multiple channels.
                    </p>
                </div>
                
                <div>
                    <h4 class="font-semibold text-lg mb-2">Key Features</h4>
                    <ul class="list-disc list-inside text-gray-600 space-y-1">
                        <li>Multi-channel campaign tracking and attribution modeling</li>
                        <li>Customizable dashboards with real-time analytics</li>
                        <li>AI-powered insights and predictive analytics</li>
                        <li>Automated reporting with white-label capabilities</li>
                        <li>Integration with popular marketing platforms and CRMs</li>
                        <li>Team collaboration tools with role-based permissions</li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-semibold text-lg mb-2">Technologies & Tools</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">Angular</span>
                        <span class="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">NestJS</span>
                        <span class="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">PostgreSQL</span>
                        <span class="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">Python</span>
                        <span class="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">AWS</span>
                    </div>
                </div>
            </div>
        `
    }
};

// Mobile menu functionality
const menuBtn = document.getElementById('menu-btn');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    mobileMenuOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
});

function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileMenuOverlay.classList.remove('open');
    document.body.style.overflow = 'auto';
}

closeMenu.addEventListener('click', closeMobileMenu);
mobileMenuOverlay.addEventListener('click', closeMobileMenu);

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Scroll animation
function checkFade() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight - 50) && (elementBottom > 0);
        if (isVisible) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);

// Project modal functionality
function showProject(projectId) {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    
    if (projects[projectId]) {
        modalTitle.textContent = projects[projectId].title;
        modalContent.innerHTML = projects[projectId].content;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // Adjust for fixed header
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple form validation
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        let isValid = true;
        
        if (!nameInput.value.trim()) {
            isValid = false;
            highlightError(nameInput);
        } else {
            removeErrorHighlight(nameInput);
        }
        
        if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
            isValid = false;
            highlightError(emailInput);
        } else {
            removeErrorHighlight(emailInput);
        }
        
        if (!messageInput.value.trim()) {
            isValid = false;
            highlightError(messageInput);
        } else {
            removeErrorHighlight(messageInput);
        }
        
        if (isValid) {
            // In a real implementation, you would send the form data to a server here
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        }
    });
}

function highlightError(input) {
    input.classList.add('error');
}

function removeErrorHighlight(input) {
    input.classList.remove('error');
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            if (img.classList.contains('lazy')) {
                imageObserver.observe(img);
            }
        });
    }
});// Mobile menu functionality
const menuBtn = document.getElementById('menu-btn');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    mobileMenuOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
});

function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileMenuOverlay.classList.remove('open');
    document.body.style.overflow = 'auto';
}

closeMenu.addEventListener('click', closeMobileMenu);
mobileMenuOverlay.addEventListener('click', closeMobileMenu);

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Scroll animation
function checkFade() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight - 50) && (elementBottom > 0);
        if (isVisible) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);

// Project modal functionality (placeholder)
function showProject(id) {
    alert('Project details for ' + id + ' would be shown here in a complete implementation.');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // Adjust for fixed header
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple form validation
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        let isValid = true;
        
        if (!nameInput.value.trim()) {
            isValid = false;
            highlightError(nameInput);
        } else {
            removeErrorHighlight(nameInput);
        }
        
        if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
            isValid = false;
            highlightError(emailInput);
        } else {
            removeErrorHighlight(emailInput);
        }
        
        if (!messageInput.value.trim()) {
            isValid = false;
            highlightError(messageInput);
        } else {
            removeErrorHighlight(messageInput);
        }
        
        if (isValid) {
            // In a real implementation, you would send the form data to a server here
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        }
    });
}

function highlightError(input) {
    input.classList.add('error');
}

function removeErrorHighlight(input) {
    input.classList.remove('error');
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            if (img.classList.contains('lazy')) {
                imageObserver.observe(img);
            }
        });
    }
});
