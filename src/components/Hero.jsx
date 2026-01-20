import React from 'react';

export default function Hero() {
    return (
        <section id="home" className="hero section">
            <div className="hero-bg-glow"></div>
            <div className="hero-bg-glow-2"></div>

            <div className="container">
                <div className="hero-content">
                    <span className="hero-greeting">Welcome to my portfolio</span>
                    <h1 className="hero-title">
                        Hi, I'm <span className="name">Amal Raj V</span>
                    </h1>
                    <h2 className="hero-subtitle">Full Stack Developer & Cloud Enthusiast</h2>
                    <p className="hero-description">
                        I craft exceptional digital experiences with modern technologies.
                        Specializing in Laravel, React, AWS, and scalable cloud solutions.
                        Passionate about clean code and user-centric design.
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">
                            View My Work
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.5rem' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </a>
                        <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <span>Scroll Down</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5" /></svg>
            </div>
        </section>
    );
}
