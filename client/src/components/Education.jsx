import React from 'react';
import './Education.css';

const Education = () => {
    const educationData = [
        {
            id: 1,
            degree: "Bachelor of Engineering (CSE)",
            institution: "CMS College of Engineering and Technology",
            university: "Anna University",
            location: "Coimbatore",
            period: "Graduated",
            desc: "Specialized in Computer Science and Engineering."
        },
        {
            id: 2,
            degree: "Plus Two (Higher Secondary)",
            institution: "Markaz HSS",
            board: "State Syllabus",
            location: "Calicut",
            period: "Completed",
            desc: "Focus on Science and Mathematics foundation."
        },
        {
            id: 3,
            degree: "Secondary Schooling",
            institution: "Sri Sri Ravishankar Vidhya Mandhir (SSRVM)",
            board: "CBSE Syllabus",
            location: "Kovoor, Calicut",
            period: "Completed",
            desc: "Early education with a focus on holistic development."
        }
    ];

    return (
        <section id="education" className="section education-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">My <span className="highlight">Education</span></h2>
                    <p className="section-subtitle">Academic background and qualifications.</p>
                </div>

                <div className="education-grid">
                    {educationData.map((edu) => (
                        <div key={edu.id} className="edu-card glass">
                            <span className="edu-period">{edu.period}</span>
                            <h3 className="edu-degree">{edu.degree}</h3>
                            <h4 className="edu-institution">{edu.institution}</h4>
                            <p className="edu-meta">
                                {edu.university && <span>{edu.university} | </span>}
                                {edu.board && <span>{edu.board} | </span>}
                                {edu.location}
                            </p>
                            <p className="edu-desc">{edu.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
