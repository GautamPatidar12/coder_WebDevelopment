import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showAlert, setShowAlert] = useState(false); // State for showing the alert

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show alert that the inquiry has been sent
    setShowAlert(true);

    // Reset form fields after submission
    setFormData({ name: '', email: '', message: '' });

    // You can also perform any API call here if needed
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-email">Email: gautampatidar2000@gmail.com</p>
      
      {showAlert && <div className="alert-popup">Inquiry Sent!</div>} {/* Popup message */}

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="send-inquiry">Send Inquiry</button>
      </form>
    </section>
  );
};

export default Contact;