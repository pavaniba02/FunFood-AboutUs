<script>
    // Mobile Navigation Toggle
    document.addEventListener('DOMContentLoaded', function() {
        // For mobile navigation (you'll need to add a hamburger menu icon in your HTML)
        const mobileMenuButton = document.createElement('button');
        mobileMenuButton.className = 'mobile-menu-btn';
        mobileMenuButton.innerHTML = '☰';
        mobileMenuButton.style.display = 'none'; // Hidden by default
        mobileMenuButton.style.background = 'transparent';
        mobileMenuButton.style.border = 'none';
        mobileMenuButton.style.color = 'white';
        mobileMenuButton.style.fontSize = '1.5rem';
        mobileMenuButton.style.cursor = 'pointer';
        
        const nav = document.querySelector('nav');
        nav.appendChild(mobileMenuButton);
        
        const navLinks = document.querySelector('.nav-links');
        
        // Toggle mobile menu
        mobileMenuButton.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
        
        // Check screen size and adjust navigation
        function handleResponsive() {
            if (window.innerWidth <= 768px) {
                mobileMenuButton.style.display = 'block';
                navLinks.style.display = 'none';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'linear-gradient(135deg, #4a1558, #165b31)';
                navLinks.style.padding = '1rem 0';
                navLinks.style.gap = '1rem';
            } else {
                mobileMenuButton.style.display = 'none';
                navLinks.style.display = 'flex';
                navLinks.style.position = 'static';
                navLinks.style.flexDirection = 'row';
                navLinks.style.background = 'transparent';
                navLinks.style.padding = '0';
            }
        }
        
        // Initial check
        handleResponsive();
        
        // Check on resize
        window.addEventListener('resize', handleResponsive);
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Search functionality
        const searchInput = document.querySelector('.search-bar input');
        const searchButton = document.querySelector('.search-bar .btn');
        
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                alert(Search functionality would show results for: "${searchTerm}"\nIn a real implementation, this would redirect to a search page with results.);
                // In a real site: window.location.href = /search?q=${encodeURIComponent(searchTerm)};
            }
        });
        
        // Allow search on Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
        
        // Animation for team members on scroll
        const teamMembers = document.querySelectorAll('.team-member');
        
        function animateOnScroll() {
            teamMembers.forEach((member, index) => {
                const memberPosition = member.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (memberPosition < screenPosition) {
                    member.style.animation = fadeInUp 0.5s ease forwards ${index * 0.1}s;
                }
            });
        }
        
        // Initial check
        animateOnScroll();
        
        // Check on scroll
        window.addEventListener('scroll', animateOnScroll);
    });
</script>
