import React, { useEffect, useRef } from 'react';
import { experiences } from '../data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade in header with parallax fade
            gsap.fromTo('.section-header',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: { trigger: '.section-header', start: "top 85%" }
                }
            );

            // Timeline line drawing animation
            const timelineHeight = document.querySelector('.timeline').scrollHeight;
            gsap.fromTo('.timeline::before',
                { height: 0 },
                {
                    height: "100%",
                    duration: 1.5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: '.timeline',
                        start: "top 80%",
                        end: "bottom 80%",
                        scrub: 1
                    }
                }
            );

            // Stagger timeline items sliding in from sides
            const items = gsap.utils.toArray('.timeline-item');
            items.forEach((item, i) => {
                // Determine direction (alternating if supported by CSS layout, simplify to fade-up-slide for now)
                gsap.fromTo(item,
                    { opacity: 0, x: i % 2 === 0 ? -50 : 50, y: 20 },
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
        gsap.to(currentTarget, { scale: 1.02, duration: 0.3 });
    };

    const onHoverLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1, duration: 0.3 });
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
                    {/* Add visual line in CSS or ensure .timeline::before is styled correctly in global css */}
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
                                        <a href={exp.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '1rem', fontSize: '0.85rem', color: 'var(--accent-blue)', textDecoration: 'underline' }}>
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
