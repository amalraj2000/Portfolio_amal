import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-content">
                <div className="hero-text">
                    <span className="greeting">Hello, I'm</span>
                    <h1 className="name">Amal Raj V</h1>
                    <h2 className="role">
                        <span className="highlight">PHP Laravel</span> Developer
                    </h2>
                    <p className="description">
                        Building robust web applications through 2 years of experience and 10+ successful project deliveries. My development motive centers on code quality: I prioritize refactoring and structured logic to ensure every application is simple to maintain and highly readable.
                    </p>
                    <div className="cta-buttons">
                        <a href="#projects" className="btn primary">View My Work</a>
                        <a href="#contact" className="btn secondary">Contact Me</a>
                    </div>
                </div>
                <div className="hero-visual">
                    {/* Abstract CSS Shape or Image Placeholder */}
                    <div className="abstract-shape">
                        <div className="circle c1"></div>
                        <div className="circle c2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
