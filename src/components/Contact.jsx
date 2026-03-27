import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid reveal">
          <div className="contact-text">
            <div className="section-title">
              <h2>Let's Connect!</h2>
              <div className="underline"></div>
            </div>
            <p className="lead">
              Have a project in mind? Let's talk about how I can help you build something amazing.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="icon">📧</span>
                <div>
                  <h4>Email Me</h4>
                  <p>sanjiv.krishna@example.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">📞</span>
                <div>
                  <h4>Call Me</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
            </div>
            <div className="social-pill-group">
                <a href="#" className="social-pill" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="social-pill" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="#" className="social-pill" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.2-18 11.6 7.2.7 14.2-4.5 14.2-11.7 0-.9-.1-1.7-.4-2.5 1.7-1.5 4-4.4 3.9-6.9 0 0-2.3 2-4.4 2.8C13.5 1.1 8 5.4 8 10.5c0 .9.1 1.7.4 2.5-7.1-.4-13.6-3.8-13.6-3.8 0 0-2 4.1.8 8.5L.2 18s4.3 1.5 8.1-1.1c.4 0 1.2 0 1.9-.1"></path></svg>
                </a>
            </div>
          </div>

          <form className="contact-form glass-card">
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Tell me about your project..." rows="6" required></textarea>
            <button type="submit" className="btn primary-btn w-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
