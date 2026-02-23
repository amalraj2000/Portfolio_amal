import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import profileImg from '../assets/amal2.png';

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial Timeline
            const tl = gsap.timeline();

            tl.fromTo('.hero-bg-glow',
                { opacity: 0, scale: 0.5 },
                { opacity: 0.6, scale: 1, duration: 1.5, ease: 'power2.out' }
            )
                .fromTo('.hero-greeting',
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6 },
                    "-=1.0"
                )
                .fromTo('.hero-title',
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    "-=0.4"
                )
                .fromTo('.hero-subtitle',
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    "-=0.6"
                )
                .fromTo('.hero-description',
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    "-=0.6"
                )
                .fromTo('.hero-cta',
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6 },
                    "-=0.4"
                )
                .fromTo('.scroll-indicator',
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, duration: 0.6 },
                    "-=0.2"
                )
                .fromTo('.hero-image-container',
                    { opacity: 0, scale: 0.8, x: 50 },
                    { opacity: 1, scale: 1, x: 0, duration: 1, ease: 'back.out(1.7)' },
                    "-=1.0"
                );

            // Floating animation for background elements
            gsap.to('.hero-bg-glow', {
                y: 100,
                x: -50,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });

            gsap.to('.hero-bg-glow-2', {
                y: -100,
                x: 80,
                duration: 6,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: 1
            });

            // Parallax on Scroll for background glows
            gsap.to('.hero-bg-glow', {
                yPercent: 50,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });

            gsap.to('.hero-bg-glow-2', {
                yPercent: -30,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    // Parallax effect on mouse move (Subtle)
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 15;
        const yPos = (clientY / window.innerHeight - 0.5) * 15;

        gsap.to('.hero-text', {
            x: xPos,
            y: yPos,
            duration: 1.5,
            ease: 'power2.out'
        });

        gsap.to('.hero-img-wrapper', {
            x: -xPos * 0.5,
            y: -yPos * 0.5,
            duration: 1.5,
            ease: 'power2.out'
        });
    };

    return (
        <section
            id="home"
            className="hero section"
            ref={heroRef}
            onMouseMove={handleMouseMove}
        >
            <div className="hero-bg-glow"></div>
            <div className="hero-bg-glow-2"></div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-text reveal-left">
                        <span className="hero-greeting">Welcome to my portfolio</span>
                        <h1 className="hero-title">
                            Hi, I'm <span className="text-gradient">Amal Raj V</span>
                        </h1>
                        <h2 className="hero-subtitle">Software Engineer | PHP & Laravel Specialist</h2>
                        <p className="hero-description">
                            I craft exceptional digital experiences with modern technologies. As a Software Engineer with 2+ years of experience, I specialize in building scalable architecture and delivering high-quality, user-focused solutions.
                        </p>
                        <div className="hero-cta reveal-up">
                            <a href="#projects" className="btn btn-primary group">
                                View My Work
                                <svg className="group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.5rem' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                        </div>
                    </div>
                    <div className="hero-image-container reveal-right">
                        <div className="hero-img-wrapper">
                            <img src={profileImg} alt="Amal Raj V" className="hero-img" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator animate-bounce">
                <span>Scroll Down</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5" /></svg>
            </div>
        </section>
    );
}
