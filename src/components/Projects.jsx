import React, { useEffect, useRef } from 'react';
import { projects } from '../data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header fade in
            gsap.fromTo('.section-header',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: { trigger: '.section-header', start: "top 85%" }
                }
            );

            // Enhanced Stagger for grid items
            gsap.fromTo('.project-card',
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: {
                        amount: 0.8,
                        grid: [3, 4],
                        from: "start"
                    },
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '.projects-grid',
                        start: "top 80%"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Hover effect handler using GSAP
    const onHoverEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            y: -10,
            scale: 1.02,
            boxShadow: '0 20px 30px rgba(0,0,0,0.2)',
            duration: 0.3
        });
        gsap.to(currentTarget.querySelector('.project-icon'), {
            scale: 1.1,
            rotate: 5,
            duration: 0.3
        });
    };

    const onHoverLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            y: 0,
            scale: 1,
            boxShadow: 'none',
            duration: 0.3
        });
        gsap.to(currentTarget.querySelector('.project-icon'), {
            scale: 1,
            rotate: 0,
            duration: 0.3
        });
    };

    return (
        <section id="projects" className="section projects-section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="section-subtitle">Here are some of the 10+ live projects I've delivered.</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card glass-card"
                            onMouseEnter={onHoverEnter}
                            onMouseLeave={onHoverLeave}
                        >
                            <div className="project-content">
                                <div className="project-header">
                                    <span className="project-category">{project.category}</span>
                                    <div className="project-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                    </div>
                                </div>

                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>

                                <div className="project-tech-wrapper">
                                    {project.tech && project.tech.map((tech, i) => (
                                        <span key={i} className="tech-tag">#{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects-cta">
                    <a href="https://github.com/amalraj-v" target="_blank" rel="noopener noreferrer" className="btn btn-secondary group">
                        View GitHub
                        <svg className="group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '8px' }}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
