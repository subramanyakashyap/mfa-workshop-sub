import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
