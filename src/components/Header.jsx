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
                    AR<span>.</span>
                </a>

                <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li>
                            <a href="#home" onClick={closeMenu} className="nav-link">
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#experience" onClick={closeMenu} className="nav-link">
                                <span>Experience</span>
                            </a>
                        </li>
                        <li>
                            <a href="#education" onClick={closeMenu} className="nav-link">
                                <span>Education</span>
                            </a>
                        </li>
                        <li>
                            <a href="#projects" onClick={closeMenu} className="nav-link">
                                <span>Projects</span>
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={closeMenu} className="nav-link">
                                <span>Contact</span>
                            </a>
                        </li>
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
