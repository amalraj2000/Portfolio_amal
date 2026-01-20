import React, { useState, useEffect } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    const closeMenu = () => setMobileMenuOpen(false);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <a href="#home" className="logo">
                    {/* AR<span>.</span> */}
                    {/* <img src="/logo.png" alt="Logo" /> */}
                </a>

                <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#home" onClick={closeMenu}>Home</a></li>
                        <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
                        <li><a href="#education" onClick={closeMenu}>Education</a></li>
                        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                    </ul>
                </nav>

                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    {!mobileMenuOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    )}
                </button>
            </div>
        </header>
    );
}
