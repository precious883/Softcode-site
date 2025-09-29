import React, { useEffect } from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Services from './component/Services';
import Footer from './component/Footer';
import Contact from './component/Contact';
import ChatbotWidget from './component/ChatbotWidget';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BookingForm from './component/BookingForm';
import About from './component/About';


const App =() => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    < div style={{ width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Services />
       <About />
       <BookingForm/>
      <Contact />
      <ChatbotWidget />
      <Footer />
    </div>
  );
}

export default App;