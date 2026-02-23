import React, { useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import Stats from './Stats';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
    useEffect(() => {
        // Scroll Progress Bar
        gsap.to('.scroll-progress', {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0.3
            }
        });

        // Background Color Transitions
        const sections = [
            { id: 'home', color: 'var(--bg-hero)' },
            { id: 'stats', color: 'var(--bg-stats)' },
            { id: 'experience', color: 'var(--bg-experience)' },
            { id: 'education', color: 'var(--bg-education)' },
            { id: 'projects', color: 'var(--bg-projects)' },
            { id: 'contact', color: 'var(--bg-contact)' }
        ];

        sections.forEach((section) => {
            const element = document.getElementById(section.id) || document.querySelector(`.${section.id}-section`);
            if (element) {
                ScrollTrigger.create({
                    trigger: element,
                    start: 'top 50%',
                    end: 'bottom 50%',
                    onEnter: () => gsap.to('body', { backgroundColor: section.color, duration: 0.8 }),
                    onEnterBack: () => gsap.to('body', { backgroundColor: section.color, duration: 0.8 })
                });
            }
        });

        // Global Reveal Animations
        const revealElements = gsap.utils.toArray('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
        revealElements.forEach((el) => {
            gsap.to(el, {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div className="antialiased bg-primary text-primary selection:bg-accent-blue selection:text-white">
            <div className="scroll-progress"></div>
            <Header />
            <main>
                <Hero />
                <Stats />
                <Experience />
                <Education />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}
