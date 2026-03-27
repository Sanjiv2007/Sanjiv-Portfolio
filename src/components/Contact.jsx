import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xwvwpzov", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form.");
    }
  };

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
                  <p>sanjivkrishna8195@gmail.com</p>
                  <p>sanjivkrishna2007@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">📞</span>
                <div>
                  <h4>Call Me</h4>
                  <p>+91 99944 56688</p>
                  <p>+91 96293 26688</p>
                </div>
              </div>
            </div>
            <div className="social-pill-group">
                <a href="https://www.linkedin.com/in/sanjiv-krishna-4b317531b/" className="social-pill" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://github.com/Sanjiv2007" className="social-pill" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form glass-card">
            <div className="form-row">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Email ID" required />
            </div>
            <input type="tel" name="phone" placeholder="Phone Number" required />
            <textarea name="message" placeholder="Tell me about your project..." rows="6" required></textarea>
            <button type="submit" className="btn primary-btn w-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
