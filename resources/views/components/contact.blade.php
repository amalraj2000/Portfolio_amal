<section id="contact" class="section contact-section">
    <div class="container">
        <div class="contact-wrapper glass">
            <div class="contact-info">
                <div class="info-item">
                    <h3>Email</h3>
                    <p><a href="mailto:amalrajvelliyenchery1@gmail.com">amalrajvelliyenchery1@gmail.com</a></p>
                </div>
                <div class="info-item">
                    <h3>Phone</h3>
                    <p><a href="tel:+919544437950">+91 95444 37950</a></p>
                </div>
                <div class="info-item">
                    <h3>LinkedIn</h3>
                    <p><a href="https://www.linkedin.com/in/amal-raj-v-434737267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">linkedin.com/in/amal-raj-v</a></p>
                </div>
                <div class="info-item">
                    <h3>Location</h3>
                    <p>Calicut, Kerala, India</p>
                </div>
            </div>

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
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        x-model="name"
                        required
                    />
                </div>
                <div class="form-group">
                    <label>Message</label>
                    <textarea
                        name="message"
                        placeholder="Tell me about your project"
                        rows="5"
                        x-model="message"
                        required
                    ></textarea>
                </div>
                <button type="submit" class="btn primary">Send Message via WhatsApp</button>
            </form>
        </div>
    </div>

    <footer class="footer">
        <p>&copy; {{ date('Y') }} Amal Raj V.</p>
    </footer>
</section>
