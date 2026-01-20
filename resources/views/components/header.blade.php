<header 
    x-data="{ scrolled: false, mobileMenuOpen: false }"
    x-init="window.addEventListener('scroll', () => { scrolled = window.scrollY > 20 })"
    :class="scrolled ? 'header scrolled' : 'header'"
>
    <div class="container header-content">
        <a href="#home" class="logo">
            AR<span>.</span>
        </a>
        
        <nav class="nav" :class="{ 'active': mobileMenuOpen }">
            <ul>
                <li><a href="#home" @click="mobileMenuOpen = false">Home</a></li>
                <li><a href="#experience" @click="mobileMenuOpen = false">Experience</a></li>
                <li><a href="#education" @click="mobileMenuOpen = false">Education</a></li>
                <li><a href="#projects" @click="mobileMenuOpen = false">Projects</a></li>
                <li><a href="#contact" @click="mobileMenuOpen = false">Contact</a></li>
            </ul>
        </nav>
        
        <button class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen">
            <svg x-show="!mobileMenuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            <svg x-show="mobileMenuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
    </div>
</header>
