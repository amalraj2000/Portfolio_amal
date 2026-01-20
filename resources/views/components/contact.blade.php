<section id="contact" class="section contact-section">
    <div class="contact-bg-1"></div>

    <div class="container">
        <div class="section-header fade-in-up">
            <h2 class="section-title">Get In <span class="text-gradient">Touch</span></h2>
            <p class="section-subtitle">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
        </div>

        <div class="contact-grid">
            <!-- Contact Info -->
            <div class="contact-info-wrapper fade-in-left">
                
                <div class="glass-card contact-card">
                    <div class="contact-icon icon-blue">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <div class="contact-details">
                        <h3 class="contact-label">Email</h3>
                        <a href="mailto:amalrajvelliyenchery1@gmail.com" class="contact-link">amalrajvelliyenchery1@gmail.com</a>
                    </div>
                </div>

                <div class="glass-card contact-card">
                    <div class="contact-icon icon-purple">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div class="contact-details">
                        <h3 class="contact-label">Phone</h3>
                        <a href="tel:+919544437950" class="contact-link">+91 95444 37950</a>
                    </div>
                </div>

                <div class="glass-card contact-card">
                    <div class="contact-icon icon-cyan">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <div class="contact-details">
                        <h3 class="contact-label">Location</h3>
                        <p class="contact-text">Calicut, Kerala, India</p>
                    </div>
                </div>

            </div>

            <!-- Contact Form -->
            <div class="contact-form-wrapper glass-card fade-in-right">
                <form 
                    class="contact-form" 
                    x-data="{ name: '', message: '' }"
                    @submit.prevent="
                        const phoneNumber = '919544437950';
                        const text = `Hi, my name is ${name}. ${message}`;
                        const encodedText = encodeURIComponent(text);
                        window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
                    "
                >
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            x-model="name"
                            required
                        />
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea
                            id="message"
                            placeholder="Tell me about your project"
                            rows="5"
                            x-model="message"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary form-submit">
                        Send via WhatsApp
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left:8px"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                </form>
            </div>
        </div>
        
         <div class="contact-footer">
             <div class="social-links">
                 <a href="https://www.linkedin.com/in/amal-raj-v-434737267" target="_blank" class="social-link">LinkedIn</a>
                 <a href="https://github.com/amalraj-v" target="_blank" class="social-link">GitHub</a>
                 <a href="mailto:amalrajvelliyenchery1@gmail.com" class="social-link">Email</a>
             </div>
             <p class="copyright">&copy; {{ date('Y') }} Amal Raj V. All rights reserved.</p>
        </div>
    </div>
</section>
