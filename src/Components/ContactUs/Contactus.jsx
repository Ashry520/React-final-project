import React, { useState } from 'react';

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
  };

  return (
    <div className="contact-us-container bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="contact-us-form p-4 shadow">
              <h2 className="contact-us-heading mb-4">Get in Touch</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us-footer bg-dark text-white py-3 fixed-bottom">
        <div className="container text-center">
          <p className="footer-text mb-0">Contact us at: contact@example.com</p>
          <p className="footer-text mb-0">Follow us on social media: @example_social</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
