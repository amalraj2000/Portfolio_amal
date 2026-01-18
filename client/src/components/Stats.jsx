import React from 'react';
import './Stats.css';

const Stats = () => {
    const stats = [
        { label: "Experience", value: "2 Years" },
        { label: "Live Projects", value: "10+" },
        { label: "Framework", value: "Laravel" },
        { label: "Cloud", value: "AWS S3" }
    ];

    const skills = [
        "PHP / Laravel 12", "MySQL", "MongoDB", "DynamoDB",
        "Javascript", "AI Tools (Cursor, Antigravity)"
    ];

    return (
        <section className="section stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card glass">
                            <h3 className="stat-value">{stat.value}</h3>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="skills-ticker glass">
                    <p><strong>Tech & Tools:</strong> {skills.join(' • ')}</p>
                </div>
            </div>
        </section>
    );
};

export default Stats;
