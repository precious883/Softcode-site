import React from 'react';
import './Services.css';

const Services = () => (
  <section className="services" id="services">
    <h2>Our Services</h2>
    <div className="cards">
      <div className="card">
        <h3>AI Development</h3>
        <p>Custom AI solutions for all your business needs.</p>
        <a href="#booking" className="book-btn">Book Now</a>
      </div>
      <div className="card">
        <h3>Web & Mobile Apps</h3>
        <p>Scalable applications for modern businesses.</p>
        <a href="#booking" className="book-btn">Book Now</a>
      </div>
      <div className="card">
        <h3>Digital Consulting</h3>
        <p>Strategy and support for digital transformation.</p>
        <a href="#booking" className="book-btn">Book Now</a>
      </div>
      <div className="card">
        <h3>Web Optimisation</h3>
        <p>Improve speed, SEO, and user experience across your site.</p>
        <a href="#booking" className="book-btn">Book Now</a>
      </div>
      <div className="card">
        <h3>Digital Marketing</h3>
        <p>Targeted campaigns to grow your brand and reach new customers.</p>
        <a href="#booking" className="book-btn">Book Now</a>
      </div>
      <div className="card">
        <h3>Brand Advert & Promotion</h3>
        <p>Creative branding and promotional strategies that convert.</p>
        <a href="#booking" className="book-btn">Book Now</a>
      </div>
    </div>
  </section>
);

export default Services;
