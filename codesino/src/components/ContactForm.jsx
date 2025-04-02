import React from 'react';
import { Mail, User, MessageCircle } from 'lucide-react';


const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2 className="contact-title">Contact Us</h2>
        <form className="contact-form-body">
          <div className="input-group">
            <User className="input-icon" size={24} />
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <Mail className="input-icon" size={24} />
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="input-group textarea-group">
            <MessageCircle className="input-icon" size={24} />
            <textarea placeholder="Your Message" required></textarea>
          </div>
          <button className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
