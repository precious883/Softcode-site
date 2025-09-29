import React, { useRef, useState } from 'react';
import './BookingForm.css';
import emailjs from 'emailjs-com';

const BookingForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_3rxq2hb',     // Replace with your actual ID
      'template_4zid62h',    // Replace with your actual ID
      form.current,
      'eqcS9yTvlzH8VdYOd'    // Replace with your actual key
    )
    .then(() => {
      setStatus('✅ Booking submitted successfully!');
      form.current.reset();
    })
    .catch(() => {
      setStatus('❌ Something went wrong. Please try again.');
    });
  };

  return (
    <section className="booking" id="booking" data-aos="fade-up">
      <h2>Book a Consultation</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <input type="number" name="phone" placeholder="Phone Number" required />
        <input type="number" name="whatsApp" placeholder="WhatsApp Number" required />
        <select name="service" required>
          <option value="">Choose Service</option>
          <option>AI Development</option>
          <option>Web & Mobile Apps</option>
          <option>Web Optimisation</option>
          <option>Digital Consulting</option>
          <option>Digital Marketing</option>
          <option>Brand Advert & Promotion</option>
        </select>
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
      {status && <p className="form-status">{status}</p>}
    </section>
  );
};

export default BookingForm;
