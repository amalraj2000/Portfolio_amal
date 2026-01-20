import React, { useEffect, useRef } from 'react';
import { stats, skills } from '../data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
    const statsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Enhanced stagger for cards
            gsap.fromTo('.stat-card',
                { opacity: 0, y: 30, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: statsRef.current,
                        start: "top 80%"
                    }
                }
            );

            // Counter animation for numbers
            const statValues = gsap.utils.toArray('.stat-value');
            statValues.forEach(value => {
                const rawText = value.innerText;
                const numberMatch = rawText.match(/\d+/);
                const hasPlus = rawText.includes('+');

                if (numberMatch) {
                    const finalNum = parseInt(numberMatch[0]);
                    gsap.fromTo(value,
                        { innerText: 0 },
                        {
                            innerText: finalNum,
                            duration: 2,
                            ease: "power2.out",
                            snap: { innerText: 1 },
                            scrollTrigger: {
                                trigger: value,
                                start: "top 85%"
                            },
                            onUpdate: function () {
                                value.innerText = Math.ceil(this.targets()[0].innerText) + (hasPlus ? '+' : '');
                            }
                        }
                    );
                }
            });

            // Skills ticker
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

            // Infinite marquee effect for skills (optional enhancement)
            // If the text is long enough, we could clone it and animate x percent.
            // Keeping simple fade up for now as data.js has a short list.

        }, statsRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="stats-section" ref={statsRef}>
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="glass-card stat-card hover:scale-105 transition-transform duration-300">
                            <h3 className="stat-value text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-purple">
                                {stat.value}
                            </h3>
                            <p className="stat-label mt-2 text-text-muted">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="skills-ticker mt-12 text-center p-4 glass-card inline-block w-full">
                    <p className="text-lg"><strong>Tech & Tools:</strong> <span className="text-text-muted">{skills.join(' • ')}</span></p>
                </div>
            </div>
        </section>
    );
}
