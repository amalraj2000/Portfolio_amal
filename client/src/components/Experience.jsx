import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            company: "Limenzy Technologies Pvt Ltd",
            role: "PHP Laravel Developer",
            period: "Present",
            link: "https://limenzy.com",
            description: "Currently working as a core developer, managing enterprise-level applications and delivering robust backend solutions."
        },
        {
            id: 2,
            company: "Baabtra",
            role: "Internship",
            period: "6 Months",
            location: "Calicut",
            link: "https://baabtra.com/",
            description: "Completed intensive training and internship, gaining hands-on experience in full-stack web development technologies."
        }
    ];

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Work <span className="highlight">Experience</span></h2>
                    <p className="section-subtitle">My professional journey in the tech industry.</p>
                </div>

                <div className="experience-timeline">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="timeline-item glass">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="exp-period">{exp.period}</span>
                                <h3 className="exp-company">{exp.company}</h3>
                                <h4 className="exp-role">{exp.role} {exp.location && <span>| {exp.location}</span>}</h4>
                                <p className="exp-desc">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
