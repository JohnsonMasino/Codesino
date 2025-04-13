import React, { useState } from 'react';
import { Mail, User, MessageCircle } from 'lucide-react';

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success message
    setSuccessMessage(true);

    // Hide success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage(false);
    }, 3000);

    // Optionally reset form fields here
    e.target.reset();
  };

  return (
    <>
      {successMessage && (
        <div className="global-success-message">
          Message sent successfully!
        </div>
      )}
      <div className='heading-container'>
        <h1 className='heading'>We're Ready To Engage</h1>
        <p className='description'>Have a project in mind, a proposal,
          or a partnership idea? Reach out to us to discuss how Codesino
          can bring your vision to life through innovative tech solutions.</p>
      </div>
      <div className="contact-container w-full max-w-md mx-auto px-4">
        <div className="contact-form">
          <h2 className="contact-title">Contact Us</h2>
          <form className="contact-form-body" onSubmit={handleSubmit}>
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
            <button type="submit" className="submit-btn">Send Message</button>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/2349036206457?text=Hi... I texted you from your website and I will like to discuss your service of ..."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              Text Us On WhatsApp
            </a>

            {/* Email alternative */}
            <p className="email-alt-text">
              Or email us at <a href="mailto:info@codesinodev.com">info@codesinodev.com</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
