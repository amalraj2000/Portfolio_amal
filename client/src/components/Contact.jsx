import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleWhatsAppMessage = (e) => {
        e.preventDefault();
        // Updated with user provided number
        const phoneNumber = "919544437950";
        const text = `Hi, my name is ${formData.name}. ${formData.message}`;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="contact-wrapper glass">
                    <div className="contact-info">

                        <div className="info-item">
                            <h3>Email</h3>
                            <p><a href="mailto:amalrajvelliyenchery1@gmail.com">amalrajvelliyenchery1@gmail.com</a></p>
                        </div>
                        <div className="info-item">
                            <h3>Phone</h3>
                            <p><a href="tel:+919544437950">+91 95444 37950</a></p>
                        </div>
                        <div className="info-item">
                            <h3>LinkedIn</h3>
                            <p><a href="https://www.linkedin.com/in/amal-raj-v-434737267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">linkedin.com/in/amal-raj-v</a></p>
                        </div>
                        <div className="info-item">
                            <h3>Location</h3>
                            <p>Calicut, Kerala, India</p>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleWhatsAppMessage}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="message"
                                placeholder="Tell me about your project"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn primary">Send Message via WhatsApp</button>
                    </form>
                </div>
            </div>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Amal Raj V.</p>
            </footer>
        </section>
    );
};

export default Contact;
