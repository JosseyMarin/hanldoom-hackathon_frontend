import React from 'react';
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero" id="home">
      <h1>Preserving the Art of Handloom Weaving</h1>
      <p>Connecting skilled weavers with suppliers to promote traditional craftsmanship and sustainable fashion</p>
      <button className="cta-btn" onClick={() => navigate('/weavers_details')}>
        Explore Weavers
      </button>
    </section>
  );
};

export default Hero;