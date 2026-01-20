import React, { useEffect, useRef } from 'react';
import { educationData } from '../data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.fromTo('.edu-header-anim',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
                }
            );

            // Enhanced Stagger for grid items
            gsap.fromTo('.education-card',
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
                        grid: "auto",
                        from: "start"
                    },
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '.education-grid',
                        start: "top 80%"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Hover effect
    const onHoverEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            y: -10,
            scale: 1.02,
            boxShadow: '0 20px 30px rgba(0,0,0,0.2)',
            duration: 0.3
        });
        gsap.to(currentTarget.querySelector('.edu-icon'), {
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
        gsap.to(currentTarget.querySelector('.edu-icon'), {
            scale: 1,
            rotate: 0,
            duration: 0.3
        });
    };

    return (
        <section id="education" className="section education-section" ref={sectionRef}>
            <div className="container">
                <div className="section-header edu-header-anim">
                    <h2 className="section-title">My <span className="text-gradient">Education</span></h2>
                    <p className="section-subtitle">Academic background and qualifications.</p>
                </div>

                <div className="education-grid">
                    {educationData.map((edu) => (
                        <div
                            key={edu.id}
                            className="education-card glass-card"
                            onMouseEnter={onHoverEnter}
                            onMouseLeave={onHoverLeave}
                        >
                            <div className="edu-header">
                                <div className="edu-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 0 6 0 9 5 0-5 3-5 9-5v-5" /></svg>
                                </div>
                                <span className="edu-period">{edu.period}</span>
                            </div>

                            <h3 className="edu-degree">{edu.degree}</h3>
                            <h4 className="edu-institution">{edu.institution}</h4>

                            <div className="edu-meta">
                                {edu.university && (
                                    <span className="edu-meta-item">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                        {edu.university}
                                    </span>
                                )}
                                <span className="edu-meta-item">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    {edu.location}
                                </span>
                            </div>

                            <p className="edu-desc">{edu.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
