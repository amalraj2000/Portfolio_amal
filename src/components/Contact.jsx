import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', message: '' });
    const sectionRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = '919544437950';
        const text = `Hi, my name is ${formData.name}. ${formData.message}`;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.contact-info-wrapper',
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    scrollTrigger: { trigger: '.contact-grid', start: "top 70%" }
                }
            );

            gsap.fromTo('.contact-form-wrapper',
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    scrollTrigger: { trigger: '.contact-grid', start: "top 70%" }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" className="section contact-section" ref={sectionRef}>
            <div className="contact-bg-1"></div>

            <div className="container">
                <div className="section-header fade-in-up">
                    <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
                    <p className="section-subtitle">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
                </div>

                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info-wrapper">

                        <div className="glass-card contact-card">
                            <div className="contact-icon icon-blue">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div className="contact-details">
                                <h3 className="contact-label">Email</h3>
                                <a href="mailto:amalrajvelliyenchery1@gmail.com" className="contact-link">amalrajvelliyenchery1@gmail.com</a>
                            </div>
                        </div>

                        <div className="glass-card contact-card">
                            <div className="contact-icon icon-purple">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div className="contact-details">
                                <h3 className="contact-label">Phone</h3>
                                <a href="tel:+919544437950" className="contact-link">+91 95444 37950</a>
                            </div>
                        </div>

                        <div className="glass-card contact-card">
                            <div className="contact-icon icon-cyan">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <div className="contact-details">
                                <h3 className="contact-label">Location</h3>
                                <p className="contact-text">Calicut, Kerala, India</p>
                            </div>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper glass-card">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    placeholder="Tell me about your project"
                                    rows="5"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary form-submit">
                                Send via WhatsApp
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="contact-footer">
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/amal-raj-v-434737267" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                        <a href="https://github.com/amalraj-v" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                        <a href="mailto:amalrajvelliyenchery1@gmail.com" className="social-link">Email</a>
                    </div>
                    <p className="copyright">&copy; {new Date().getFullYear()} Amal Raj V. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}
