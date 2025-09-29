import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTiktok,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => (
  <section className="contact-section">
    <h2>Contact Us</h2>
    <p>Email: softcoded99@gmail.com</p>
    <p>Phone: +234-816-804-3221</p>
    <p>Location: Nigeria, Africa</p>

    <div className="social-links">
      <a href="https://instagram.com/Softcode_99" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} /> Instagram
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTiktok} /> TikTok
      </a>
      <a href="https://youtube.com/@softcode_99?si=UxeeF1B2O4itiyEl" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} /> YouTube
      </a>
    </div>
  </section>
);

export default Contact;