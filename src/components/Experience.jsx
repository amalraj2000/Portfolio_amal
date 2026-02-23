import React, { useEffect, useRef } from 'react';
import { experiences } from '../data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade in header
            gsap.fromTo('.section-header',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: { trigger: sectionRef.current.querySelector('.section-header'), start: "top 85%" }
                }
            );

            // Parallax on Scroll for background glows
            gsap.to('.exp-bg-1', {
                yPercent: 40,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });

            gsap.to('.exp-bg-2', {
                yPercent: -40,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });

            // Timeline line drawing animation
            gsap.fromTo('.timeline',
                { "--line-height": "0%" },
                {
                    "--line-height": "100%",
                    duration: 1.5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: '.timeline',
                        start: "top 80%",
                        end: "bottom 30%",
                        scrub: 1
                    }
                }
            );

            // Stagger timeline items
            const items = gsap.utils.toArray('.timeline-item');
            items.forEach((item, i) => {
                gsap.fromTo(item,
                    { opacity: 0, x: i % 2 === 0 ? -30 : 30, y: 20 },
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%"
                        }
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const onHoverEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1.02, duration: 0.3, borderColor: 'var(--accent-blue)' });
    };

    const onHoverLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1, duration: 0.3, borderColor: 'var(--glass-border)' });
    };

    return (
        <section id="experience" className="section experience-section" ref={sectionRef}>
            <div className="exp-bg-1"></div>
            <div className="exp-bg-2"></div>

            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Work <span className="text-gradient">Experience</span></h2>
                    <p className="section-subtitle">My professional journey in the tech industry.</p>
                </div>

                <div className="timeline relative">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="timeline-item">
                            <div className="timeline-dot"></div>

                            <div className="timeline-content-wrapper">
                                <div
                                    className="glass-card exp-card"
                                    onMouseEnter={onHoverEnter}
                                    onMouseLeave={onHoverLeave}
                                >
                                    <h4 className="exp-role">{exp.role}</h4>
                                    <h3 className="exp-company">{exp.company}</h3>
                                    <p className="exp-desc">{exp.description}</p>

                                    {exp.skills && (
                                        <div className="exp-tags">
                                            {exp.skills.map((skill, i) => (
                                                <span key={i} className="exp-tag">{skill}</span>
                                            ))}
                                        </div>
                                    )}

                                    {exp.link && (
                                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="visit-link">
                                            Visit Website
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="timeline-date-wrapper">
                                <span className="exp-date">{exp.period}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
