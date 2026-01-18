import React from 'react';
import './Projects.css';

const Projects = () => {
    // Data provided by user
    const projects = [
        {
            id: 1,
            title: "Emcor Group (UK)",
            category: "Enterprise / Laravel",
            description: "Managed 5+ projects for this major UK business in mechanical & construction fields. Successfully migrated 4 legacy projects to the latest Laravel 12 version."
        },
        {
            id: 2,
            title: "Landlord",
            category: "Real Estate Web App",
            description: "A comprehensive platform for real estate management, facilitating interactions between landlords and tenants."
        },
        {
            id: 3,
            title: "CBT",
            category: "Healthcare / Mental Health",
            description: "A mental health web application focused on Cognitive Behavioral Therapy resources and tracking."
        },
        {
            id: 4,
            title: "Parkteufel",
            category: "Booking System",
            description: "German parking space booking platform allowing users to reserve and manage parking spots efficiently."
        },
        {
            id: 5,
            title: "Pratham",
            category: "Education / Solar",
            description: "Web platform for solar training classes, managing course content and student progress."
        },
        {
            id: 6,
            title: "Trailer Rebel",
            category: "Entertainment",
            description: "Movies trailer web app for browsing and viewing the latest film previews."
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">My <span className="highlight">Projects</span></h2>
                    <p className="section-subtitle">Here are some of the 10+ live projects I've delivered.</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card glass">
                            <div className="project-content">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                {/* <a href="#" className="project-link">View Details &rarr;</a> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
