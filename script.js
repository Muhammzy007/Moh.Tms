// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize form handling
    initForm();
    
    // Initialize smooth scrolling for navigation links
    initSmoothScrolling();
});

// Animation initialization
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.createElement('div');
    const overlay = document.createElement('div');
    
    // Create mobile menu
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
        <div class="p-6">
            <div class="flex justify-between items-center mb-8">
                <div class="text-2xl font-bold text-gray-800">Moh.Tms</div>
                <button id="close-menu" class="text-gray-500">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <nav class="space-y-4">
                <a href="#home" class="block py-2 text-gray-600 hover:text-blue-600 transition-colors">Home</a>
                <a href="#about" class="block py-2 text-gray-600 hover:text-blue-600 transition-colors">About</a>
                <a href="#projects" class="block py-2 text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
                <a href="#skills" class="block py-2 text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
                <a href="#contact" class="block py-2 text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
        </div>
    `;
    
    // Create overlay
    overlay.className = 'mobile-menu-overlay';
    
    // Add to body
    document.body.appendChild(mobileMenu);
    document.body.appendChild(overlay);
    
    // Toggle menu
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
    
    // Close menu
    document.getElementById('close-menu').addEventListener('click', closeMobileMenu);
    overlay.addEventListener('click', closeMobileMenu);
    
    // Close menu when clicking on links
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

function closeMobileMenu() {
    document.querySelector('.mobile-menu').classList.remove('open');
    document.querySelector('.mobile-menu-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

// Form handling
function initForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Here you would normally send the form data to a server
        // For this example, we'll just show a success message
        alert('Thank you for your message! I\'ll get back to you soon.');
        form.reset();
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Adjust for header height
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Project modal functionality
function showProject(projectId) {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    
    // Project data - in a real application, this would come from a database or API
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
                            <span class="bg-pink-100 text-pink-800 text-sm px-3 py-1 rounded-full">InDesign</span>
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
                        <h4 class="font-semibold text-lg mb-2">Technologies & Tools</h4>
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
                    <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop&crop=center" 
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
        projectflow: {
            title: 'ProjectFlow Management Suite',
            content: `
                <div class="space-y-6">
                    <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop&crop=center" 
                         alt="ProjectFlow Suite" class="w-full h-64 object-cover rounded-lg">
                    
                    <div>
                        <h4 class="font-semibold text-lg mb-2">Project Overview</h4>
                        <p class="text-gray-600">
                            Cloud-based project management platform designed for remote teams and agencies. 
                            The suite includes task management, time tracking, resource allocation, and 
                            advanced reporting features to help teams collaborate effectively and deliver 
                            projects on time and within budget.
                        </p>
                    </div>
                    
                    <div>
                        <h4 class="font-semibold text-lg mb-2">Key Features</h4>
                        <ul class="list-disc list-inside text-gray-600 space-y-1">
                            <li>Kanban boards and Gantt charts for visual project planning</li>
                            <li>Time tracking with automated timesheets and billing integration</li>
                            <li>Team collaboration tools including comments, file sharing, and @mentions</li>
                            <li>Resource allocation and workload management</li>
                            <li>Customizable reporting dashboard with export capabilities</li>
                            <li>Integration with popular tools like Slack, Google Drive, and GitHub</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="font-semibold text-lg mb-2">Technologies & Tools</h4>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">Angular</span>
                            <span class="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">NestJS</span>
                            <span class="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">PostgreSQL</span>
                            <span class="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">Socket.io</span>
                            <span class="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">Docker</span>
                        </div>
                    </div>
                </div>
            `
        },
        vitatrack: {
            title: 'VitaTrack Health & Wellness App',
            content: `
                <div class="space-y-6">
                    <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop&crop=center" 
                         alt="VitaTrack Wellness App" class="w-full h-64 object-cover rounded-lg">
                    
                    <div>
                        <h4 class="font-semibold text-lg mb-2">Project Overview</h4>
                        <p class="text-gray-600">
                            Comprehensive health and wellness application that helps users track their fitness goals, 
                            nutrition intake, and overall well-being. The app combines AI-powered recommendations 
                            with community features to create a holistic health management experience.
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
        }
    };
    
    if (projects[projectId]) {
        modalTitle.textContent = projects[projectId].title;
        modalContent.innerHTML = projects[projectId].content;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}
