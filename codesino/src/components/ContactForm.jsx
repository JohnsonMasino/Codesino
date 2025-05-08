import React, { useState } from 'react';
import { Mail, User, MessageCircle } from 'lucide-react';

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('https://codesino.onrender.com/api/contacts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage(true);
        e.target.reset();
        setTimeout(() => setSuccessMessage(false), 3000);
      } else {
        setErrorMessage(true);
        setTimeout(() => setErrorMessage(false), 3000);
      }
    } catch (error) {
      setErrorMessage(true);
      setTimeout(() => setErrorMessage(false), 3000);
    }
  };

  return (
    <>
      {successMessage && (
        <div className="global-success-message">
          Message sent successfully!
        </div>
      )}
      {errorMessage && (
        <div className="global-error-message">
          Oops! Something went wrong. Please try again.
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
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="input-group">
              <Mail className="input-icon" size={24} />
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="input-group textarea-group">
              <MessageCircle className="input-icon" size={24} />
              <textarea name="message" placeholder="Your Message" required></textarea>
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
              Or email us at <a href="mailto:contact@codesinodev.com">contact@codesinodev.com</a>
            </p>
            <p className="email-alt-text">
              For help, email <a href="mailto:support@codesinodev.com">support@codesinodev.com</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
