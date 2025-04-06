import React, { useState, useEffect } from "react";
import { Mail, User, MessageCircle } from "lucide-react";

const CallToAction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setSuccessMessage(""); // Reset message when reopening
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate sending message
    setTimeout(() => {
      setSuccessMessage("Your message has been sent successfully!");
      setIsOpen(false); // Close modal after success
    }, 1000);
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000); // 10 seconds
      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [successMessage]);

  return (
    <div className="call-to-action-container">
      {/* Global success message */}
      {successMessage && (
        <div className="global-success-message">
          {successMessage}
        </div>
      )}

      <h2 className="cta-title">Ready to Get Started?</h2>
      <button className="cta-btn" onClick={toggleModal}>
        Send a Request
      </button>

      {/* Modal Form */}
      {isOpen && (
        <div className="modal-overlay">
          <div className="contact-container">
            <div className="contact-form">
              <h2 className="contact-title">Schedule a Proposal</h2>
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
                  <textarea placeholder="What do you need?" required></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
              <button className="close-modal-btn" onClick={toggleModal}>
                ✖
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CallToAction;
