import React, { useEffect, useRef } from 'react';
import { stats, skills } from '../data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
    const statsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.stat-card',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: statsRef.current,
                        start: "top 80%"
                    }
                }
            );

            gsap.fromTo('.skills-ticker',
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.5,
                    scrollTrigger: {
                        trigger: statsRef.current,
                        start: "top 80%"
                    }
                }
            );
        }, statsRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="stats-section" ref={statsRef}>
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="glass-card stat-card">
                            <h3 className="stat-value">{stat.value}</h3>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="skills-ticker">
                    <p><strong>Tech & Tools:</strong> {skills.join(' • ')}</p>
                </div>
            </div>
        </section>
    );
}
