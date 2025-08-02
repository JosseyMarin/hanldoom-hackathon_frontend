import React from 'react';

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
      <a href="#weavers" className="cta-btn" onClick={(e) => { e.preventDefault(); scrollToSection('weavers'); }}>Explore Weavers</a>
    </section>
  );
};

export default Hero;